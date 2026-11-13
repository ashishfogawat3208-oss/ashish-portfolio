"use client";

import { useEffect, useMemo, useState } from "react";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

export default function PortfolioExtras({ github = false, terminal = false }: {
  github?: boolean;
  terminal?: boolean;
}) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [repoState, setRepoState] = useState<"loading" | "ready" | "error">("loading");
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "ASHISH.DEV — interactive profile terminal",
    "Type help to see available commands.",
  ]);

  useEffect(() => {
    if (!github) return;
    const controller = new AbortController();
    fetch("https://api.github.com/users/ashishfogawat3208-oss/repos?sort=updated&per_page=100", {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
      cache: "no-store",
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub API request failed");
        return response.json();
      })
      .then((data: Repo[]) => {
        const featured = ["vibespace", "green-business-simulator-backend", "cinebook", "Backend"];
        setRepos(data.filter((repo) => featured.includes(repo.name)));
        setRepoState("ready");
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === "AbortError") return;
        setRepoState("error");
      });
    return () => controller.abort();
  }, [github]);

  const commands = useMemo<Record<string, string[]>>(() => ({
    help: ["Available commands:", "about  — quick introduction", "skills — technical toolkit", "projects — featured work", "experience — internships", "contact — get in touch", "resume — view resume", "github — open GitHub", "clear — clear terminal"],
    about: ["Ashish Kumar", "Computer Science and Business Systems graduate (2022–2026).", "Interested in frontend and full-stack development."],
    skills: ["Python · Java · JavaScript", "React.js · AngularJS · HTML · CSS", "Node.js · Express.js · Django · REST APIs", "MongoDB · MySQL · Supabase · Power BI"],
    projects: ["VibeSpace — mood-based social platform", "Green Business Simulator — sustainable business planning tool", "CineBook — movie ticket booking platform", "Use the project cards above to explore case studies and source repositories."],
    experience: ["Frontend Developer Intern — HMV Technologies (May–Jul 2025)", "Web Design Intern — IDS Infotech (Jan–Mar 2025)", "HR Recruiter Intern — CEI Design Consultancy Services (Aug 2024–Nov 2025)"],
    contact: ["Email: ashishfogawat3208@gmail.com", "Phone: +91 7639203486", "Location: Chennai, India"],
    resume: ["Resume: /Ashish_Kumar_Resume_Updated.pdf", "Use the Resume link in the navigation to open it."],
    github: ["GitHub: github.com/ashishfogawat3208-oss", "Open the GitHub section to browse public repositories."],
    whoami: ["Ashish Kumar — Computer Science and Business Systems", "Frontend and full-stack web development interests."],
  }), []);

  if (github) {
    const featuredOrder = ["vibespace", "green-business-simulator-backend", "cinebook", "Backend"];
    const ordered = [...repos].sort((a, b) => featuredOrder.indexOf(a.name) - featuredOrder.indexOf(b.name));
    return (
      <div className="github-widget">
        <div className="github-widget-head">
          <div><span className="github-live-dot" /> PUBLIC REPOSITORIES · LIVE FROM GITHUB</div>
          <a href="https://github.com/ashishfogawat3208-oss" target="_blank" rel="noreferrer">ashishfogawat3208-oss ↗</a>
        </div>
        {repoState === "loading" && <p className="github-state">Loading public repositories…</p>}
        {repoState === "error" && <p className="github-state">Live repository details are temporarily unavailable. You can still browse the public profile.</p>}
        {repoState === "ready" && ordered.length === 0 && <p className="github-state">No featured public repositories were returned. Open the profile to browse all repositories.</p>}
        <div className="repo-grid">
          {ordered.map((repo) => (
            <a className="repo-card" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.name}>
              <span className="repo-kicker">PUBLIC REPOSITORY</span>
              <strong>{repo.name}</strong>
              <p>{repo.description || "Public project repository by Ashish Kumar."}</p>
              <div className="repo-meta"><span>{repo.language || "Code"}</span><span>★ {repo.stargazers_count}</span><span>⑂ {repo.forks_count}</span></div>
            </a>
          ))}
        </div>
        <p className="project-footnote">Repository details come from GitHub’s public API and may be unavailable if its rate limit is reached.</p>
      </div>
    );
  }

  if (terminal) {
    const runCommand = (raw: string) => {
      const normalized = raw.trim().toLowerCase();
      if (!normalized) return;
      if (normalized === "clear") {
        setHistory([]);
        setCommand("");
        return;
      }
      if (normalized === "resume") window.open("/Ashish_Kumar_Resume_Updated.pdf", "_blank", "noopener,noreferrer");
      if (normalized === "github") window.open("https://github.com/ashishfogawat3208-oss", "_blank", "noopener,noreferrer");
      if (normalized === "contact") document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      const output = commands[normalized] || [`Command not found: ${normalized}`, "Type help to see available commands."];
      setHistory((old) => [...old, `ashish@portfolio:~$ ${raw}`, ...output]);
      setCommand("");
    };
    return (
      <div className="terminal-window">
        <div className="terminal-bar"><div className="terminal-dots"><i /><i /><i /></div><span>ashish@portfolio — zsh</span><span>INTERACTIVE</span></div>
        <div className="terminal-screen" aria-live="polite">
          {history.map((line, index) => <p className={line.startsWith("ashish@") ? "terminal-command" : "terminal-output"} key={`${index}-${line}`}>{line}</p>)}
          <form className="terminal-input-row" onSubmit={(event) => { event.preventDefault(); runCommand(command); }}>
            <label htmlFor="terminal-command">ashish@portfolio:~$</label>
            <input id="terminal-command" value={command} onChange={(event) => setCommand(event.target.value)} placeholder="type help..." autoComplete="off" spellCheck={false} />
            <button type="submit" aria-label="Run terminal command">↵</button>
          </form>
        </div>
        <div className="terminal-shortcuts">{["help", "about", "skills", "projects", "experience", "contact", "resume", "github", "whoami", "clear"].map((item) => <button type="button" key={item} onClick={() => runCommand(item)}>{item}</button>)}</div>
      </div>
    );
  }
  return null;
}
