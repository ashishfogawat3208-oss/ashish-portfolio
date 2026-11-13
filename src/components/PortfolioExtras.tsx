"use client";

import { useEffect, useMemo, useState } from "react";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

type PublicEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
};

const GITHUB = "https://github.com/ashishfogawat3208-oss";

const FALLBACK_REPOS: Repo[] = [
  { name: "vibespace", html_url: "https://github.com/ashishfogawat3208-oss/vibespace", description: "Mood-based social platform with posts, feeds and profiles.", language: "JavaScript", stargazers_count: 0, forks_count: 0, updated_at: "" },
  { name: "green-business-simulator-backend", html_url: "https://github.com/ashishfogawat3208-oss/green-business-simulator-backend", description: "Backend repository for a sustainability and business-planning tool.", language: "JavaScript", stargazers_count: 0, forks_count: 0, updated_at: "" },
  { name: "cinebook", html_url: "https://github.com/ashishfogawat3208-oss/cinebook", description: "Django movie-booking platform with payment and ticket workflows.", language: "Python", stargazers_count: 0, forks_count: 0, updated_at: "" },
];

function eventLabel(type: string) {
  const labels: Record<string, string> = {
    PushEvent: "Pushed code to",
    CreateEvent: "Created a branch or repository in",
    PullRequestEvent: "Opened or updated a pull request in",
    IssuesEvent: "Worked with an issue in",
    WatchEvent: "Starred",
    ForkEvent: "Forked",
    ReleaseEvent: "Published a release in",
  };
  return labels[type] || "Activity in";
}

export default function PortfolioExtras({ github = false, terminal = false }: {
  github?: boolean;
  terminal?: boolean;
}) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [events, setEvents] = useState<PublicEvent[]>([]);
  const [repoState, setRepoState] = useState<"loading" | "ready" | "error">("loading");
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "ASHISH KUMAR — INTERACTIVE PROFILE TERMINAL",
    "Session initialized. Type help to explore the portfolio.",
  ]);

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!github) return;
    const controller = new AbortController();
    fetch("/api/github", { signal: controller.signal, cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("GitHub data unavailable");
        const data = await response.json() as { repos?: Repo[]; events?: PublicEvent[] };
        setRepos(Array.isArray(data.repos) ? data.repos : []);
        setEvents(Array.isArray(data.events) ? data.events.slice(0, 5) : []);
        setRepoState("ready");
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === "AbortError") return;
        setRepoState("error");
      });
    return () => controller.abort();
  }, [github, refreshKey]);

  const commands = useMemo<Record<string, string[]>>(() => ({
    help: ["Available commands:", "whoami      — developer profile", "about       — quick introduction", "skills      — technical toolkit", "projects    — featured work", "experience  — internship history", "education   — academic background", "resume      — open recruiter resume center", "github      — open GitHub profile", "contact     — jump to contact section", "email       — open email composer", "clear       — clear terminal"],
    whoami: ["ashish@portfolio", "Name: Ashish Kumar", "Focus: Frontend and full-stack web development", "Location: Chennai, India"],
    about: ["Ashish Kumar", "B.Tech — Computer Science and Business Systems (2022–2026).", "Interested in building responsive interfaces and practical full-stack applications."],
    skills: ["Programming: Python · Java · JavaScript", "Frontend: React.js · AngularJS · HTML · CSS", "Backend: Node.js · Express.js · Django · REST APIs", "Data: MongoDB · MySQL · Supabase · Power BI"],
    projects: ["01  VibeSpace — mood-based social platform", "02  Green Business Simulator — sustainability planning tool", "03  CineBook — movie ticket booking platform", "Open the Work section for text-based case studies and repository links."],
    experience: ["Frontend Developer Intern — HMV Technologies (May–Jul 2025)", "Web Design Intern — IDS Infotech (Jan–Mar 2025)", "HR Recruiter Intern — CEI Design Consultancy Services (Aug 2024–Nov 2025)"],
    education: ["B.Tech — Computer Science and Business Systems", "Rajalakshmi Institute of Technology", "2022–2026"],
    contact: ["Email: ashishfogawat3208@gmail.com", "Phone: +91 7639203486", "Location: Chennai, India"],
    email: ["Opening your default email app…"],
    resume: ["Opening Ashish Kumar's recruiter resume center…"],
    github: ["Opening github.com/ashishfogawat3208-oss…"],
  }), []);

  if (github) {
    const featuredOrder = ["vibespace", "green-business-simulator-backend", "cinebook", "Backend"];
    const sourceRepos = repoState === "error" ? FALLBACK_REPOS : repos;
    const ordered = [...sourceRepos].sort((a, b) => featuredOrder.indexOf(a.name) - featuredOrder.indexOf(b.name));
    const languageCounts = ordered.reduce<Record<string, number>>((counts, repo) => {
      if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
      return counts;
    }, {});
    const languages = Object.entries(languageCounts).sort((a, b) => b[1] - a[1]);
    return (
      <div className="github-widget">
        <div className="github-widget-head">
          <div><span className="github-live-dot" /> PUBLIC REPOSITORIES · GITHUB SOURCE</div>
          <a href={GITHUB} target="_blank" rel="noreferrer">ashishfogawat3208-oss ↗</a>
        </div>
        {repoState === "loading" && <p className="github-state">Connecting to GitHub’s public API…</p>}
        {repoState === "error" && <div className="github-state github-fallback-note"><span>Live GitHub data is temporarily unavailable. Showing featured repository links so recruiters can still inspect your code.</span><button type="button" onClick={() => { setRepoState("loading"); setRefreshKey((value) => value + 1); }}>Retry live data ↻</button></div>}
        {repoState === "ready" && ordered.length === 0 && <p className="github-state">No featured public repositories were returned. Open the profile to browse all repositories.</p>}
        {repoState !== "loading" && ordered.length > 0 && <>
          {repoState === "ready" && <div className="github-summary"><div><strong>{ordered.length.toString().padStart(2, "0")}</strong><span>FEATURED PUBLIC REPOS</span></div><div><strong>{languages.length.toString().padStart(2, "0")}</strong><span>LANGUAGES DETECTED</span></div><div><strong>{events.length.toString().padStart(2, "0")}</strong><span>RECENT PUBLIC EVENTS</span></div></div>}
          {languages.length > 0 && repoState === "ready" && <div className="github-language-row"><span>LANGUAGES IN FEATURED REPOS</span><div>{languages.map(([language, count]) => <span key={language}>{language} <b>{count}</b></span>)}</div></div>}
        </>}
        <div className="repo-grid">
          {ordered.map((repo) => (
            <a className="repo-card" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.name}>
              <span className="repo-kicker">PUBLIC REPOSITORY</span>
              <strong>{repo.name}</strong>
              <p>{repo.description || "Public project repository by Ashish Kumar."}</p>
              <div className="repo-meta"><span>{repo.language || "Code"}</span>{repoState === "ready" && <><span>★ {repo.stargazers_count}</span><span>⑂ {repo.forks_count}</span></>}</div>
              {repoState === "ready" && repo.updated_at && <small className="repo-updated">Updated {new Date(repo.updated_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</small>}
            </a>
          ))}
        </div>
        {repoState === "ready" && <div className="github-activity"><div className="github-activity-head"><span>RECENT PUBLIC ACTIVITY</span><a href={`${GITHUB}?tab=activity`} target="_blank" rel="noreferrer">Full activity ↗</a></div>
          {events.length ? events.map((event) => <div className="activity-item" key={event.id}><i /><p>{eventLabel(event.type)} <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer">{event.repo.name}</a></p><time dateTime={event.created_at}>{new Date(event.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</time></div>) : <p className="github-state">No recent public events are available. Private activity is not shown by GitHub’s public API.</p>}
        </div>}
        <p className="project-footnote">Live public data from GitHub. Activity and repository details may be limited by GitHub API availability; private contributions are not displayed.</p>
      </div>
    );
  }

  if (terminal) {
    const runCommand = (raw: string) => {
      const normalized = raw.trim().toLowerCase();
      if (!normalized) return;
      if (normalized === "clear") {
        setHistory(["Terminal cleared.", "Type help to see available commands."]);
        setCommand("");
        return;
      }
      if (normalized === "resume") window.open("/resume", "_blank", "noopener,noreferrer");
      if (normalized === "github") window.open(GITHUB, "_blank", "noopener,noreferrer");
      if (normalized === "email") window.location.href = "mailto:ashishfogawat3208@gmail.com";
      if (normalized === "contact") document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      const output = commands[normalized] || [`Command not found: ${normalized}`, "Type help to see available commands."];
      setHistory((old) => [...old, `ashish@portfolio:~$ ${raw}`, ...output].slice(-28));
      setCommand("");
    };
    return (
      <div className="terminal-window">
        <div className="terminal-bar"><div className="terminal-dots"><i /><i /><i /></div><span>ashish@portfolio — zsh</span><span>SESSION / ONLINE</span></div>
        <div className="terminal-screen" aria-live="polite">
          {history.map((line, index) => <p className={line.startsWith("ashish@") ? "terminal-command" : "terminal-output"} key={`${index}-${line}`}>{line}</p>)}
          <form className="terminal-input-row" onSubmit={(event) => { event.preventDefault(); runCommand(command); }}>
            <label htmlFor="terminal-command">ashish@portfolio:~$</label>
            <input id="terminal-command" value={command} onChange={(event) => setCommand(event.target.value)} placeholder="type help..." autoComplete="off" spellCheck={false} />
            <button type="submit" aria-label="Run terminal command">↵</button>
          </form>
        </div>
        <div className="terminal-shortcuts">{["help", "whoami", "skills", "projects", "experience", "education", "resume", "github", "contact", "clear"].map((item) => <button type="button" key={item} onClick={() => runCommand(item)}>{item}</button>)}</div>
      </div>
    );
  }
  return null;
}
