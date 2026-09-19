"use client";

import { FormEvent, useState } from "react";

const examples = [
  "I need a 3-week internship search plan with a realistic target list.",
  "Help me turn my coursework into a polished portfolio story for recruiting.",
  "Give me a focused daily plan for interview prep and networking.",
];

export default function Home() {
  const [prompt, setPrompt] = useState(examples[0]);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: "Unable to reach the AI route." }));
        throw new Error(data.error || "Request failed");
      }

      const text = await response.text();
      setAnswer(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to generate a reply.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-shell">
      <section className="hero-card">
        <nav className="topbar">
          <div className="brand" aria-label="FlyRank brand">
            <span className="brand-mark">F</span>
            <span>FlyRank</span>
          </div>
          <div className="status-pill">AI recruiting coach</div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Track work. Ship confidence.</p>
            <h1>Build a stronger career story with one AI-powered planner.</h1>
            <p className="lede">
              FlyRank turns project work, coursework, and job goals into a weekly action plan
              that feels realistic, structured, and recruiter-ready.
            </p>

            <div className="stat-row">
              <div className="stat-box">
                <strong>12</strong>
                <span>active goals</span>
              </div>
              <div className="stat-box">
                <strong>4</strong>
                <span>applications this week</span>
              </div>
              <div className="stat-box">
                <strong>3x</strong>
                <span>faster planning</span>
              </div>
            </div>
          </div>

          <div className="demo-panel">
            <div className="panel-header">
              <span className="dot green" />
              <span className="dot yellow" />
              <span className="dot red" />
            </div>
            <div className="mock-window">
              <div className="mini-card">
                <span>Portfolio signal</span>
                <strong>+28%</strong>
              </div>
              <div className="mini-card muted">
                <span>Follow-up tasks</span>
                <strong>7 left</strong>
              </div>
              <div className="mini-card callout">
                <span>AI suggestion</span>
                <strong>Publish README</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-grid">
        <div className="chat-card">
          <div className="section-title-row">
            <h2>AI coach</h2>
            <span className="badge">Protected route</span>
          </div>

          <form onSubmit={handleSubmit} className="prompt-form">
            <label htmlFor="prompt" className="sr-only">
              Describe your next career step
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              rows={5}
              maxLength={800}
              placeholder="Ask for an internship plan, portfolio strategy, or a daily focus schedule..."
            />

            <div className="action-row">
              <div className="helper-copy">Up to 800 characters per request.</div>
              <button type="submit" disabled={loading}>
                {loading ? "Planning..." : "Generate plan"}
              </button>
            </div>
          </form>

          <div className="example-list">
            {examples.map((example) => (
              <button
                key={example}
                type="button"
                className="example-chip"
                onClick={() => setPrompt(example)}
              >
                {example}
              </button>
            ))}
          </div>

          <div className="output-box" aria-live="polite">
            {error ? <p className="error">{error}</p> : null}
            {answer ? <pre>{answer}</pre> : <p>AI-generated guidance appears here.</p>}
          </div>
        </div>

        <aside className="feature-card">
          <div className="section-title-row">
            <h2>Why teams like it</h2>
          </div>
          <ul className="feature-list">
            <li>Short, realistic action plans for job-search weeks.</li>
            <li>Portfolio and README coaching for project storytelling.</li>
            <li>Built-in rate limiting and input caps to avoid API abuse.</li>
            <li>Responsive UI for desktop, tablet, and mobile Safari.</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
