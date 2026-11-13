"use client";

import { useMemo, useState } from "react";

const tracks = [
  {
    id: "frontend",
    label: "Frontend engineering",
    headline: "Interfaces, usability and responsive implementation",
    summary: "Ashish Kumar brings internship experience in frontend development and web design, alongside React-based project work.",
    evidence: [
      { title: "HMV Technologies", detail: "Frontend Developer Intern — interactive frontend features, HTML, CSS, AngularJS, responsiveness and performance work." },
      { title: "IDS Infotech", detail: "Web Design Intern — website layouts, UI components, HTML, CSS and JavaScript." },
      { title: "VibeSpace", detail: "React interface for mood-led posts, updates, feeds and profiles." },
    ],
    skills: ["React.js", "AngularJS", "JavaScript", "HTML", "CSS"],
    links: [
      ["VibeSpace repository", "https://github.com/ashishfogawat3208-oss/vibespace"],
      ["Experience timeline", "#experience"],
    ],
  },
  {
    id: "fullstack",
    label: "Full-stack development",
    headline: "Connecting user flows, APIs, data and integrations",
    summary: "His project work spans React and Node.js applications, Django workflows, database-backed features and third-party integrations.",
    evidence: [
      { title: "CineBook", detail: "Django booking workflows, Razorpay payments, automated refunds and QR-enabled PDF ticket delivery." },
      { title: "VibeSpace", detail: "React, Node.js and Supabase across posts, feeds and profiles." },
      { title: "Green Business Simulator", detail: "Node.js and MongoDB backend repository; described product includes recommendations, reports and an AI assistant." },
    ],
    skills: ["React.js", "Node.js", "Express.js", "Django", "REST APIs", "MongoDB", "Supabase"],
    links: [
      ["CineBook repository", "https://github.com/ashishfogawat3208-oss/cinebook"],
      ["VibeSpace repository", "https://github.com/ashishfogawat3208-oss/vibespace"],
      ["Green Business Simulator backend", "https://github.com/ashishfogawat3208-oss/green-business-simulator-backend"],
    ],
  },
  {
    id: "backend",
    label: "Backend & integrations",
    headline: "Application logic, APIs and transaction-oriented workflows",
    summary: "The strongest documented backend story is CineBook, supported by Django, Node.js, REST API and database experience in the listed toolkit.",
    evidence: [
      { title: "CineBook", detail: "Movie and showtime management, seat selection, Razorpay payment/refund flows and QR/PDF ticket delivery." },
      { title: "Green Business Simulator", detail: "A public backend repository using Node.js and MongoDB; its linked frontend repository is not currently available." },
      { title: "Technical toolkit", detail: "Django, Node.js, Express.js, REST APIs, MongoDB, MySQL and Supabase are listed skills." },
    ],
    skills: ["Python", "Django", "Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
    links: [
      ["CineBook repository", "https://github.com/ashishfogawat3208-oss/cinebook"],
      ["Green Business Simulator backend", "https://github.com/ashishfogawat3208-oss/green-business-simulator-backend"],
    ],
  },
  {
    id: "product",
    label: "Product-minded / cross-functional",
    headline: "Understanding users, workflows and practical outcomes",
    summary: "A combination of web project work and HR recruitment exposure gives Ashish experience looking at both product workflows and people-facing processes.",
    evidence: [
      { title: "Green Business Simulator", detail: "A planning concept for business owners to compare energy-related recommendations and estimated ROI." },
      { title: "VibeSpace", detail: "A social product concept organized around mood-led expression, feeds and profiles." },
      { title: "CEI Design Consultancy Services", detail: "HR Recruiter Intern — candidate sourcing, screening, onboarding support and applicant database coordination." },
    ],
    skills: ["Product thinking", "Responsive UI", "HR Analytics", "Power BI", "Figma"],
    links: [
      ["Project case studies", "#case-studies"],
      ["Experience timeline", "#experience"],
    ],
  },
];

export default function RecruiterFitExplorer() {
  const [active, setActive] = useState("fullstack");
  const [copied, setCopied] = useState(false);
  const track = useMemo(() => tracks.find((item) => item.id === active) ?? tracks[1], [active]);

  async function copyBrief() {
    const brief = [
      `Ashish Kumar — ${track.label}`,
      track.summary,
      "",
      "Relevant evidence:",
      ...track.evidence.map((item) => `• ${item.title}: ${item.detail}`),
      "",
      `Relevant skills: ${track.skills.join(", ")}`,
      "Portfolio: " + (typeof window !== "undefined" ? window.location.origin : ""),
      "GitHub: https://github.com/ashishfogawat3208-oss",
      "Contact: ashishfogawat3208@gmail.com",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="fit-explorer">
      <div className="fit-intro-row">
        <div>
          <p className="fit-eyebrow">INTERACTIVE CANDIDATE BRIEF</p>
          <h3>What role are you hiring for?</h3>
          <p>Choose a focus to see the most relevant documented experience and project evidence.</p>
        </div>
        <span className="fit-no-score">EVIDENCE-BASED · NO MATCH SCORE</span>
      </div>
      <div className="fit-tabs" role="tablist" aria-label="Explore candidate evidence by role">
        {tracks.map((item) => (
          <button
            type="button"
            role="tab"
            id={`fit-tab-${item.id}`}
            aria-selected={active === item.id}
            aria-controls="fit-panel"
            key={item.id}
            className={active === item.id ? "active" : ""}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <section className="fit-panel" id="fit-panel" role="tabpanel" aria-labelledby={`fit-tab-${track.id}`}>
        <div className="fit-panel-heading">
          <div><span>RELEVANT PROFILE</span><h4>{track.headline}</h4><p>{track.summary}</p></div>
          <button type="button" className="fit-copy-button" onClick={copyBrief}>{copied ? "Brief copied ✓" : "Copy candidate brief ↗"}</button>
        </div>
        <div className="fit-evidence-grid">
          {track.evidence.map((item, index) => (
            <article className="fit-evidence-card" key={item.title}>
              <span>0{index + 1} / EVIDENCE</span>
              <h5>{item.title}</h5>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="fit-skills-row">
          <span>RELATED SKILLS</span>
          <div>{track.skills.map((skill) => <b key={skill}>{skill}</b>)}</div>
        </div>
        <div className="fit-links-row">
          {track.links.map(([label, href]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label} ↗</a>)}
        </div>
      </section>
      <p className="fit-footnote">This guide organizes the experience and project details shown on this portfolio. It is not an automated hiring recommendation or a claim of role proficiency.</p>
    </div>
  );
}
