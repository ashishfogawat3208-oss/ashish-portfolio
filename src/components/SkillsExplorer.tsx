"use client";

import { useMemo, useState } from "react";

const groups = [
  { category: "Programming", skills: ["Python", "Java", "JavaScript"] },
  { category: "Frontend", skills: ["React.js", "AngularJS", "HTML", "CSS", "Responsive UI"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "Django", "REST APIs"] },
  { category: "Databases", skills: ["MongoDB", "MySQL", "Supabase"] },
  { category: "Tools & Integrations", skills: ["Git", "GitHub", "VS Code", "Figma", "Razorpay"] },
  { category: "Data & Analytics", skills: ["Power BI", "HR Analytics"] },
];

const filters = ["All", ...groups.map((group) => group.category)];

export default function SkillsExplorer() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => groups.filter((group) => active === "All" || group.category === active), [active]);
  const count = visible.reduce((total, group) => total + group.skills.length, 0);

  return (
    <div className="skills-explorer">
      <div className="skills-filter-bar" role="group" aria-label="Filter skills by category">
        {filters.map((filter) => (
          <button key={filter} type="button" className={active === filter ? "active" : ""} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>
        ))}
      </div>
      <div className="skills-results-line"><span><i /> TOOLKIT INDEX</span><span>{count.toString().padStart(2, "0")} SKILLS SHOWN</span></div>
      <div className="skills-grid">
        {visible.map((group, index) => (
          <article className="skill-group" key={group.category}>
            <div className="skill-group-head"><span className="skill-index">0{groups.findIndex((item) => item.category === group.category) + 1}</span><span className="skill-count">{group.skills.length.toString().padStart(2, "0")} ITEMS</span></div>
            <h3>{group.category}</h3>
            <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
      <p className="skills-note">A practical toolkit built through internships, projects and hands-on learning — not a proficiency ranking.</p>
    </div>
  );
}
