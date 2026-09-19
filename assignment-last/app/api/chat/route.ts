import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_INPUT_CHARS = Number(process.env.MAX_INPUT_CHARS ?? 800);
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwarded?.split(",")[0]?.trim() || realIp || "anonymous";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}

function makeStream(text: string) {
  const encoder = new TextEncoder();
  const chunks = text.split(/(?<=\s)/).filter(Boolean);

  return new ReadableStream({
    start(controller) {
      let index = 0;

      const pushNext = () => {
        if (index >= chunks.length) {
          controller.close();
          return;
        }

        const chunk = chunks[index];
        index += 1;
        controller.enqueue(encoder.encode(chunk));
        setTimeout(pushNext, 12);
      };

      pushNext();
    },
  });
}

function buildFallbackReply(message: string) {
  const prompt = message.trim();

  return [
    `You asked: "${prompt.slice(0, 120)}${prompt.length > 120 ? "…" : ""}"`,
    "",
    "This is the production-safe demo mode. In a real deployment, set OPENAI_API_KEY to enable the live AI response.",
    "",
    "Suggested next step:",
    "- outline one weekly goal",
    "- pick one deadline or application target",
    "- schedule a 30-minute review block",
    "- use FlyRank to track progress and follow-ups.",
  ].join("\n");
}

async function callOpenAI(message: string) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return buildFallbackReply(message);
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content:
            "You are FlyRank AI Coach. Be concise, practical, and action-oriented. Help students with applications, study plans, and career momentum.",
        },
        { role: "user", content: message },
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI error: ${response.status} ${detail}`);
  }

  const data = await response.json();
  return (
    data?.choices?.[0]?.message?.content ||
    "I could not generate a useful answer right now. Please try a shorter prompt."
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({
        error: "Too many requests. Please wait a minute before sending another prompt.",
      }),
      {
        status: 429,
        headers: { "content-type": "application/json; charset=utf-8" },
      }
    );
  }

  let body: { message?: string };

  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Request body must be valid JSON." }),
      {
        status: 400,
        headers: { "content-type": "application/json; charset=utf-8" },
      }
    );
  }

  const message = String(body.message ?? "").trim();

  if (!message) {
    return new Response(
      JSON.stringify({ error: "Please enter a message to get a plan or answer." }),
      {
        status: 400,
        headers: { "content-type": "application/json; charset=utf-8" },
      }
    );
  }

  if (message.length > MAX_INPUT_CHARS) {
    return new Response(
      JSON.stringify({
        error: `Message must be ${MAX_INPUT_CHARS} characters or fewer.`,
      }),
      {
        status: 413,
        headers: { "content-type": "application/json; charset=utf-8" },
      }
    );
  }

  try {
    const reply = await callOpenAI(message);
    return new Response(makeStream(reply), {
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    const fallback = buildFallbackReply(message);
    return new Response(makeStream(fallback), {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  }
}
