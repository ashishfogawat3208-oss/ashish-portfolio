import type { Metadata } from "next";
import ResumeActions from "@/components/ResumeActions";

export const metadata: Metadata = {
  title: "Recruiter Resume | Ashish Kumar",
  description: "Professional summary, education, internships, projects and resume download for Ashish Kumar.",
  robots: { index: true, follow: true },
};

const experience = [
  { role: "Frontend Developer Intern", company: "HMV Technologies", location: "Mohali, Punjab", period: "May 2025 – July 2025", points: ["Developed interactive frontend features using HTML, CSS and AngularJS for client projects.", "Participated in code reviews and worked on web performance, load times and responsiveness."] },
  { role: "Web Design Intern", company: "IDS Infotech", location: "Mohali, Punjab", period: "January 2025 – March 2025", points: ["Designed and maintained website layouts and UI components for client-facing web pages.", "Used HTML, CSS and JavaScript to improve responsiveness across devices."] },
  { role: "HR Recruiter Intern", company: "CEI Design Consultancy Services", location: "Remote", period: "August 2024 – November 2025", points: ["Sourced, screened and onboarded candidates across recruitment drives.", "Managed applicant databases and supported end-to-end virtual HR coordination."] },
];

const projects = [
  { name: "CineBook", summary: "Movie ticket booking platform built with Django, featuring movie and showtime management, interactive seat selection, Razorpay payments, automated refunds, QR-enabled PDF e-tickets and email delivery.", stack: "Python · Django · Razorpay · QR / PDF", url: "https://github.com/ashishfogawat3208-oss/cinebook" },
  { name: "VibeSpace", summary: "Mood-based social platform with mood-led posts, photo-and-caption updates, text-only updates, feeds and profiles.", stack: "React · Node.js · Supabase", url: "https://github.com/ashishfogawat3208-oss/vibespace" },
  { name: "Green Business Simulator", summary: "Sustainability and business-planning tool describing LED lighting, AC and solar recommendations, estimated energy use, ROI reports and an AI assistant. The linked public repository is the backend.", stack: "React · Node.js · MongoDB · AI integration", url: "https://github.com/ashishfogawat3208-oss/green-business-simulator-backend" },
];

const skillGroups = [
  ["Programming", "Python", "Java", "JavaScript"],
  ["Frontend", "React.js", "AngularJS", "HTML", "CSS"],
  ["Backend", "Node.js", "Express.js", "Django", "REST APIs"],
  ["Databases", "MongoDB", "MySQL", "Supabase"],
  ["Tools & Integrations", "Git", "GitHub", "VS Code", "Figma", "Razorpay"],
  ["Data & Analytics", "Power BI", "HR Analytics"],
];

const certifications = [
  "Chatbot using IBM Watson — Coursera",
  "Google: Basics of Cybersecurity — Coursera",
  "Master of Power BI — Udemy",
  "HR Analytics in Decision Making — Udemy",
  "MongoDB Atlas Certification — MongoDB University",
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar no-print">
        <a className="resume-back" href="/">← Back to portfolio</a>
        <ResumeActions />
      </div>
      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">DEVELOPER · CHENNAI, INDIA</p>
            <h1>Ashish Kumar</h1>
            <p className="resume-role">Frontend & Full-Stack Developer</p>
          </div>
          <div className="resume-contact">
            <a href="mailto:ashishfogawat3208@gmail.com">ashishfogawat3208@gmail.com</a>
            <a href="tel:+917639203486">+91 7639203486</a>
            <a href="https://github.com/ashishfogawat3208-oss" target="_blank" rel="noreferrer">github.com/ashishfogawat3208-oss</a>
            <a href="/">Portfolio website</a>
          </div>
        </header>
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>Computer Science and Business Systems background with internship experience in frontend development, web design and HR operations. Hands-on project experience across responsive interfaces, full-stack applications, REST APIs, databases and integrations including payment workflows and automated ticket delivery.</p>
        </section>
        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="resume-skills">{skillGroups.map(([group, ...skills]) => <p key={group}><strong>{group}:</strong> {skills.join(" · ")}</p>)}</div>
        </section>
        <section className="resume-section">
          <h2>Experience</h2>
          {experience.map((item) => <div className="resume-entry" key={item.company}>
            <div className="resume-entry-head"><div><h3>{item.role}</h3><p>{item.company} · {item.location}</p></div><time>{item.period}</time></div>
            <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>)}
        </section>
        <section className="resume-section">
          <h2>Selected Projects</h2>
          {projects.map((project) => <div className="resume-entry" key={project.name}>
            <div className="resume-entry-head"><h3>{project.name}</h3><a href={project.url} target="_blank" rel="noreferrer">Source code ↗</a></div>
            <p>{project.summary}</p><p className="resume-stack">{project.stack}</p>
          </div>)}
        </section>
        <section className="resume-section resume-bottom-grid">
          <div><h2>Education</h2><h3>B.Tech — Computer Science and Business Systems</h3><p>Rajalakshmi Institute of Technology</p><p className="resume-stack">2022 – 2026</p></div>
          <div><h2>Certifications</h2><ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
        <footer className="resume-footer">ASHISH KUMAR · PROFESSIONAL PROFILE</footer>
      </article>
      <div className="resume-bottom-actions no-print">
        <a className="button button-primary" href="/Ashish_Kumar_Resume_Updated.pdf" download>Download original PDF resume ↗</a>
        <p>This is a print-friendly profile summary. The original PDF is available separately.</p>
      </div>
    </main>
  );
}
