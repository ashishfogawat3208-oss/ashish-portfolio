"use client";

import { useEffect, useState } from "react";

const links = [
  ["Home", "#top"], ["Work", "#work"], ["Case studies", "#case-studies"], ["About", "#about"],
  ["Skills", "#skills"], ["Experience", "#experience"], ["GitHub", "#github"],
  ["Recruiters", "#recruiter"], ["Ask me", "#assistant"], ["Contact", "#contact"],
];

export default function PortfolioNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="reading-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand brand-lockup" href="#top" aria-label="Ashish Kumar home"><span className="brand-mark" aria-hidden="true">✦</span><span className="brand-name">ASHISH KUMAR<span className="brand-dot">.</span></span></a>
        <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? "CLOSE" : "MENU"}</span><i className={menuOpen ? "menu-icon open" : "menu-icon"} />
        </button>
        <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="primary-navigation">
          {links.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
        <a className="nav-cta" href="/resume">Resume <span aria-hidden="true">↗</span></a>
      </nav>
    </>
  );
}
