import { TextDecoder } from 'util';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  let body = '';
  for await (const chunk of req) body += chunk;
  let payload = {};
  try { payload = JSON.parse(body || '{}'); } catch (e) {}
  const messages = payload.messages || [];
  if (!process.env.CLAUDE_API_KEY) return res.status(500).json({ error: 'Missing CLAUDE_API_KEY' });

  res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });

  const prompt = messages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join('\n') + '\nASSISTANT:';
  const controller = new AbortController();
  req.on('close', () => controller.abort());

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/stream', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.CLAUDE_API_KEY },
      body: JSON.stringify({ model: 'claude-2', prompt, max_tokens_to_sample: 1000, temperature: 0.7, stream: true }), signal: controller.signal,
    });
    if (!upstream.body) { res.write(`data: ${JSON.stringify({ error: 'no upstream' })}\n\n`); res.end(); return; }
    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const { value, done } = await reader.read(); if (done) break; buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split(/\n\n/); buffer = parts.pop();
      for (const part of parts) {
        const m = part.trim().match(/^data: (.*)$/s); const payloadText = m ? m[1] : part.trim();
        if (payloadText === '[DONE]') { res.write(`event: done\ndata: ${JSON.stringify({})}\n\n`); res.end(); return; }
        let token = payloadText;
        try { const parsed = JSON.parse(payloadText); token = parsed?.completion || parsed?.delta?.content || parsed?.text || parsed?.content || parsed; } catch (e) {}
        res.write(`data: ${JSON.stringify({ token })}\n\n`);
      }
    }
    if (buffer && buffer.trim()) res.write(`data: ${JSON.stringify({ raw: buffer.trim() })}\n\n`);
    res.write(`event: done\ndata: ${JSON.stringify({})}\n\n`); res.end();
  } catch (err) { if (err.name === 'AbortError') { res.end(); return; } res.write(`data: ${JSON.stringify({ error: String(err) })}\n\n`); res.end(); }
}
