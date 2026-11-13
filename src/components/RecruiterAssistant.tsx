"use client";

import { FormEvent, useRef, useState } from "react";

type Message = { role: "assistant" | "user"; content: string };

const starters = [
  "Which project best shows Ashish's backend skills?",
  "Summarise his internship experience",
  "What makes CineBook technically interesting?",
];

const knowledge = [
  { keys: ["cinebook", "django", "razorpay", "movie", "ticket", "qr", "backend"], answer: "CineBook is a movie ticket booking platform built with Django. Its documented feature set includes movie and showtime management, interactive seat selection, Razorpay payments, automated refunds, and QR-enabled PDF e-tickets with email delivery. Repository: github.com/ashishfogawat3208-oss/cinebook." },
  { keys: ["vibespace", "vibe", "social", "supabase", "mood"], answer: "VibeSpace is a mood-based social platform. Its described features include mood-led posts, photo-and-caption updates, text-only updates, feeds and profiles. The listed stack includes React, Node.js and Supabase. Repository: github.com/ashishfogawat3208-oss/vibespace." },
  { keys: ["green", "business simulator", "sustainability", "solar", "energy", "roi"], answer: "Green Business Simulator is a sustainability and business-planning tool. It is described as recommending LED lighting, AC and solar configurations based on business type and space, with estimated energy use, ROI reports and an AI assistant. Only its backend repository is currently linked: github.com/ashishfogawat3208-oss/green-business-simulator-backend." },
  { keys: ["intern", "experience", "hmv", "ids", "cei", "work history"], answer: "Ashish's portfolio lists three internships: Frontend Developer Intern at HMV Technologies (May–July 2025), Web Design Intern at IDS Infotech (January–March 2025), and HR Recruiter Intern at CEI Design Consultancy Services (August 2024–November 2025)." },
  { keys: ["skill", "technology", "tech stack", "programming", "language"], answer: "His listed toolkit includes Python, Java, JavaScript, React.js, AngularJS, HTML, CSS, Node.js, Express.js, Django, REST APIs, MongoDB, MySQL, Supabase, Git, GitHub, VS Code, Figma, Razorpay, Power BI and HR Analytics." },
  { keys: ["education", "college", "degree", "study"], answer: "Ashish Kumar's education is B.Tech in Computer Science and Business Systems at Rajalakshmi Institute of Technology (2022–2026)." },
  { keys: ["contact", "email", "phone", "hire", "reach"], answer: "You can contact Ashish at ashishfogawat3208@gmail.com or +91 7639203486. GitHub: github.com/ashishfogawat3208-oss." },
  { keys: ["resume", "cv"], answer: "Use the Resume link in the navigation or the Download resume link in the hero section to open Ashish's resume." },
];

function localAnswer(question: string) {
  const q = question.toLowerCase();
  const found = knowledge.find((item) => item.keys.some((key) => q.includes(key)));
  return found?.answer ?? "I can help with Ashish's documented projects, skills, internships, education, certifications and contact details. Try asking about CineBook, VibeSpace, Green Business Simulator or his work experience. I won't guess beyond the information in this portfolio.";
}

export default function RecruiterAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! I'm Ashish's portfolio AI. Ask me about his projects, technical decisions, skills, internships or education. I can keep track of the conversation, too." },
  ]);
  const [question, setQuestion] = useState("");
  const [busy, setBusy] = useState(false);
  const [aiEnabled, setAiEnabled] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  async function sendQuestion(value: string) {
    const trimmed = value.trim();
    if (!trimmed || busy) return;
    const priorMessages = messages.slice(-8);
    setQuestion("");
    setError("");
    setMessages((old) => [...old, { role: "user", content: trimmed }]);
    setBusy(true);
    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed, history: priorMessages }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Couldn't send that question. Please try again.");
      const isAI = data.mode === "ai" && typeof data.answer === "string";
      setAiEnabled(isAI);
      setMessages((old) => [...old, {
        role: "assistant",
        content: isAI ? data.answer : localAnswer(trimmed),
      }]);
    } catch (err) {
      setAiEnabled(false);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setMessages((old) => [...old, { role: "assistant", content: localAnswer(trimmed) }]);
    } finally {
      setBusy(false);
      requestAnimationFrame(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }));
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendQuestion(question);
  }

  function resetChat() {
    setMessages([{ role: "assistant", content: "Chat cleared. What would you like to know about Ashish?" }]);
    setError("");
  }

  return (
    <div className="assistant-panel">
      <div className="assistant-panel-head">
        <div className="assistant-avatar">AK<span>·</span></div>
        <div>
          <strong>Ashish's portfolio AI</strong>
          <small><i /> {aiEnabled === true ? "AI CONNECTED" : aiEnabled === false ? "KNOWLEDGE MODE" : "READY TO CHAT"}</small>
        </div>
        <button className="assistant-reset" type="button" onClick={resetChat} disabled={busy} aria-label="Clear conversation" title="Clear conversation">↺</button>
        <span className="assistant-spark">✳</span>
      </div>
      <div className="assistant-messages" aria-live="polite" aria-relevant="additions text">
        {messages.map((message, index) => (
          <div className={`assistant-message ${message.role}`} key={`${message.role}-${index}`}>{message.content}</div>
        ))}
        {busy && <div className="assistant-message assistant typing"><span className="assistant-dots">Thinking<span>.</span><span>.</span><span>.</span></span></div>}
        <div ref={messagesEndRef} />
      </div>
      {error && <p className="assistant-error" role="alert">{error} Showing the saved portfolio answer instead.</p>}
      <div className="assistant-prompts">
        {starters.map((starter) => <button type="button" key={starter} onClick={() => void sendQuestion(starter)} disabled={busy}>{starter}</button>)}
      </div>
      <form className="assistant-form" onSubmit={submit}>
        <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask a follow-up question…" aria-label="Ask the portfolio assistant" maxLength={700} />
        <button type="submit" disabled={busy || !question.trim()} aria-label="Send question">↑</button>
      </form>
      <p className="assistant-disclaimer">{aiEnabled === false ? "Using saved portfolio Q&A. Add your OpenAI key in .env.local to enable conversational AI." : "AI answers are grounded in the information published on this portfolio. No unsupported achievements or metrics are invented."}</p>
    </div>
  );
}
