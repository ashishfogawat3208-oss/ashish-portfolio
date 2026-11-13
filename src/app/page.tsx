import PortfolioExtras from "@/components/PortfolioExtras";
import RecruiterAssistant from "@/components/RecruiterAssistant";
import RecruiterMode from "@/components/RecruiterMode";
import ContactForm from "@/components/ContactForm";
import PortfolioNav from "@/components/PortfolioNav";
import SkillsExplorer from "@/components/SkillsExplorer";
import ShareProfile from "@/components/ShareProfile";
import RecruiterFitExplorer from "@/components/RecruiterFitExplorer";

const projects = [
  {
    number: "01",
    name: "VibeSpace",
    type: "MOOD-BASED SOCIAL PLATFORM",
    description:
      "A social experience built around how people feel. Users can share photo-and-caption posts or text-only vibe updates, with feeds and profiles designed around mood-led expression.",
    stack: ["React", "Node.js", "Supabase", "CSS"],
    mark: "VS",
    className: "vibe",
    repo: "https://github.com/ashishfogawat3208-oss/vibespace",
    repoLabel: "Explore source code",
    note: "",
    challenge: "Create a social feed where the emotional context of a post is part of the experience, rather than an afterthought.",
    approach: "Built a responsive React experience for mood-tagged posts, photo-and-caption updates, text-only updates, feeds and profiles. Supabase was used for authentication and database structure.",
    proof: ["Mood-based post creation", "Photo and text updates", "Feeds and profile experience"],
  },
  {
    number: "02",
    name: "Green Business Simulator",
    type: "SUSTAINABILITY · BUSINESS PLANNING",
    description:
      "A planning tool that recommends LED lighting, AC and solar configurations based on business type and space, with estimated ROI, energy-use reports and an AI assistant.",
    stack: ["React", "Node.js", "MongoDB", "AI integration"],
    mark: "GB",
    className: "green",
    repo: "https://github.com/ashishfogawat3208-oss/green-business-simulator-backend",
    repoLabel: "Explore backend repository",
    challenge: "Help early-stage business owners think through energy-efficient equipment choices before committing capital.",
    approach: "The application uses business type and space inputs to shape recommendations for lighting, air conditioning and solar. It presents estimated energy usage and ROI, with an AI assistant to support planning.",
    proof: ["Equipment recommendations", "Estimated ROI and energy reports", "AI-assisted planning"],
    note: "The linked public repository is the backend. The original frontend repository or live demo has not yet been located.",
  },
  {
    number: "03",
    name: "CineBook",
    type: "MOVIE TICKET BOOKING PLATFORM",
    description:
      "A movie booking platform with movie management, showtime scheduling and interactive seat selection, integrated payments, automated refunds and QR-enabled PDF e-tickets.",
    stack: ["Python", "Django", "Razorpay", "QR / PDF"],
    mark: "CB",
    className: "cine",
    repo: "https://github.com/ashishfogawat3208-oss/cinebook",
    repoLabel: "Explore source code",
    note: "",
    challenge: "Build an end-to-end movie booking flow that connects show discovery, seat selection, payment and ticket delivery.",
    approach: "Implemented movie and showtime management with interactive seat selection. Integrated Razorpay for payments and refunds, and automated PDF e-ticket generation with QR codes and email delivery.",
    proof: ["Movie and showtime management", "Interactive seat selection", "Payment, QR ticket and email workflow"],
  },
];

const experience = [
  {
    role: "Frontend Developer Intern",
    company: "HMV Technologies",
    place: "Mohali, Punjab",
    date: "MAY 2025 — JUL 2025",
    details: [
      "Developed interactive frontend features using HTML, CSS and AngularJS for real-world client projects.",
      "Participated in code reviews and worked on web performance, load times and responsiveness.",
    ],
  },
  {
    role: "Web Design Intern",
    company: "IDS Infotech",
    place: "Mohali, Punjab",
    date: "JAN 2025 — MAR 2025",
    details: [
      "Designed and maintained website layouts and UI components for client-facing web pages.",
      "Used HTML, CSS and JavaScript to improve responsiveness across devices.",
    ],
  },
  {
    role: "HR Recruiter Intern",
    company: "CEI Design Consultancy Services",
    place: "Remote",
    date: "AUG 2024 — NOV 2025",
    details: [
      "Sourced, screened and onboarded candidates across multiple recruitment drives.",
      "Managed applicant databases and supported end-to-end virtual HR coordination.",
    ],
  },
];

const certifications = [
  "Chatbot using IBM Watson — Coursera",
  "Google: Basics of Cybersecurity — Coursera",
  "Master of Power BI — Udemy",
  "HR Analytics in Decision Making — Udemy",
  "MongoDB Atlas Certification — MongoDB University",
];



function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function Architecture({ kind }: { kind: string }) {
  const flows: Record<string, string[]> = {
    vibe: ["React interface", "Supabase auth + data", "Mood-led posts, feed + profiles"],
    green: ["Business inputs", "Node.js backend + MongoDB", "Recommendations + reports + AI assistant"],
    cine: ["Booking interface", "Django booking logic", "Razorpay payment", "PDF + QR ticket and email"],
  };
  return (
    <div className="architecture-flow" aria-label={`${kind} system flow`}>
      {flows[kind].map((step, index) => (
        <div className="architecture-step-wrap" key={step}>
          <div className="architecture-step">
            <span>0{index + 1}</span>
            <strong>{step}</strong>
          </div>
          {index < flows[kind].length - 1 && <span className="architecture-arrow">↓</span>}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <PortfolioNav />

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
          <p className="overline">HELLO, I’M ASHISH KUMAR</p>
          <h1>Thoughtful code.<br /><span>Useful products.</span><br />Real-world thinking.</h1>
          <p className="hero-description">
            Frontend-focused developer with hands-on experience building responsive web
            interfaces, full-stack applications and practical product workflows.
            I enjoy connecting clean user experiences with dependable application logic.
          </p>
          <div className="hero-specialties" aria-label="Professional focus">
            <span>FRONTEND ENGINEERING</span><i /> <span>FULL-STACK DEVELOPMENT</span><i /> <span>PRODUCT THINKING</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
            <a className="button button-quiet" href="#contact">Let’s connect <span>↓</span></a>
            <a className="hero-resume-link" href="/resume">Recruiter resume center ↗</a>
            <ShareProfile />
          </div>
          <div className="hero-meta">
            <span>BASED IN CHENNAI, INDIA</span><span className="meta-line" />
            <span>REACT · NODE · PYTHON · DJANGO</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Ashish Kumar profile">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="hero-scene">
            <div className="scene-ring scene-ring-a" />
            <div className="scene-ring scene-ring-b" />
            <div className="scene-ring scene-ring-c" />
            <div className="scene-glow" />
            <div className="hero-core">
              <img className="profile-photo" src="/ashish-kumar.jpg" alt="Ashish Kumar" />
              <span className="photo-label">ASHISH KUMAR · DEVELOPER</span>
            </div>
            <span className="scene-chip chip-one">REACT / NEXT.JS</span>
            <span className="scene-chip chip-two">PYTHON / DJANGO</span>
            <span className="scene-chip chip-three">BUILD · LEARN · SHIP</span>
          </div>
          <div className="floating-card card-top"><span className="mini-icon">✳</span> Building for the web</div>
          <div className="floating-card card-bottom"><span className="code-mark">&lt;/&gt;</span> Full-stack mindset</div>
          <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
        </div>
      </section>

      <div className="ticker"><div className="ticker-track">
        {["FRONTEND DEVELOPMENT", "FULL-STACK THINKING", "RESPONSIVE DESIGN", "BACKEND SYSTEMS", "PRODUCT BUILDING", "FRONTEND DEVELOPMENT", "FULL-STACK THINKING"].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✳</b></span>)}
      </div></div>

      <section className="snapshot-section">
        <div className="section-wrap snapshot-grid">
          <div className="snapshot-intro">
            <p className="overline">AT A GLANCE</p>
            <h2>Built, shipped<br /><span>and learned.</span></h2>
          </div>
          <div className="snapshot-item"><strong>03</strong><span>Featured projects</span></div>
          <div className="snapshot-item"><strong>03</strong><span>Internship experiences</span></div>
          <div className="snapshot-item"><strong>2022–26</strong><span>B.Tech · CS & Business Systems</span></div>
        </div>
      </section>

      <section className="section-wrap work-section" id="work">
        <div className="section-heading">
          <div><p className="overline">SELECTED PROJECTS</p><h2>Things I’ve <span>built.</span></h2></div>
          <p className="section-note">Explore the problem, the approach and the engineering behind each project.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <div className="project-info">
                <div className="project-card-kicker"><span>PROJECT / {project.number}</span><span>TEXT-BASED CASE STUDY</span></div>
                <p className="project-type">{project.type}</p><h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">{project.repoLabel} <Arrow /></a>
                {project.note && <p className="project-note">{project.note}</p>}
              </div>
              <div className="project-number">{project.number}</div>
            </article>
          ))}
        </div>
        <p className="project-footnote">These are text-first project summaries — no demo screenshots or videos are presented. Repository links open the available public source code.</p>
      </section>

      <section className="case-section" id="case-studies">
        <div className="section-wrap">
          <div className="section-heading">
            <div><p className="overline">BEHIND THE BUILD</p><h2>More than a <span>project card.</span></h2></div>
            <p className="section-note">A quick case-study view of the problem, approach and implemented features.</p>
          </div>
          <div className="case-grid">
            {projects.map((project) => (
              <article className="case-card" key={project.number}>
                <div className="case-top"><span>CASE STUDY / {project.number}</span><span>{project.mark}</span></div>
                <h3>{project.name}</h3>
                <p className="case-label">THE CHALLENGE</p><p>{project.challenge}</p>
                <p className="case-label">THE APPROACH</p><p>{project.approach}</p>
                <p className="case-label">FEATURES BUILT</p>
                <ul>{project.proof.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href={project.repo} target="_blank" rel="noreferrer" className="text-link">Review repository <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="architecture-section" id="architecture">
        <div className="section-wrap">
          <div className="section-heading">
            <div><p className="overline">HOW THE PIECES CONNECT</p><h2>Think in <span>systems.</span></h2></div>
            <p className="section-note">Simplified, high-level flows based on the features documented for each project.</p>
          </div>
          <div className="architecture-grid">
            <article className="architecture-card"><p className="project-type">01 / SOCIAL PLATFORM</p><h3>VibeSpace</h3><Architecture kind="vibe" /></article>
            <article className="architecture-card"><p className="project-type">02 / SUSTAINABILITY TOOL</p><h3>Green Business Simulator</h3><Architecture kind="green" /></article>
            <article className="architecture-card"><p className="project-type">03 / BOOKING PLATFORM</p><h3>CineBook</h3><Architecture kind="cine" /></article>
          </div>
          <p className="project-footnote">These are conceptual flow diagrams, not deployment diagrams or claims about infrastructure configuration.</p>
        </div>
      </section>

      <section className="github-section" id="github">
        <div className="section-wrap">
          <div className="section-heading">
            <div><p className="overline">CODE, NOT JUST CLAIMS</p><h2>Find me on <span>GitHub.</span></h2></div>
            <a className="text-link" href="https://github.com/ashishfogawat3208-oss" target="_blank" rel="noreferrer">Open GitHub profile <Arrow /></a>
          </div>
          <PortfolioExtras github />
        </div>
      </section>

      <RecruiterMode />

      <section className="fit-section" id="fit-explorer">
        <div className="section-wrap">
          <div className="section-heading">
            <div><p className="overline">A FASTER WAY TO REVIEW MY FIT</p><h2>Explore my <span>relevant evidence.</span></h2></div>
            <p className="section-note">Select the kind of role you are hiring for. I’ll bring the most relevant projects, internships and skills together in one brief.</p>
          </div>
          <RecruiterFitExplorer />
        </div>
      </section>

      <section className="assistant-section" id="assistant">
        <div className="section-wrap assistant-layout">
          <div className="assistant-intro">
            <p className="overline">ASK ABOUT MY WORK</p>
            <h2>Meet my <span>portfolio assistant.</span></h2>
            <p className="section-note">Ask about my projects, technical skills or internship experience. Answers are grounded in the information on this portfolio.</p>
            <div className="assistant-trust"><span className="status-dot" /> RESUME-BASED · NO MADE-UP CLAIMS</div>
          </div>
          <RecruiterAssistant />
        </div>
      </section>

      <section className="terminal-section" id="terminal">
        <div className="section-wrap terminal-layout">
          <div><p className="overline">A LITTLE DEVELOPER EASTER EGG</p><h2>Explore my profile<br /><span>from the terminal.</span></h2><p className="section-note">Try a command. No installation required.</p></div>
          <PortfolioExtras terminal />
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-grid">
          <div><p className="overline">A LITTLE ABOUT ME</p><h2>Curious by nature.<br /><span>Builder by choice.</span></h2></div>
          <div className="about-copy">
            <p className="about-lead">I’m Ashish Kumar — a developer with a Computer Science and Business Systems background and a practical, build-first approach to technology.</p>
            <p>My experience spans frontend development, web design, full-stack personal projects and HR operations. I’ve worked on responsive interfaces, backend APIs, database-driven applications and integrations including payments, automated refunds, QR/PDF ticket generation and email workflows.</p>
            <p>I’m interested in opportunities where I can contribute to useful products, keep strengthening my engineering fundamentals and work with people who care about thoughtful execution.</p>
            <a className="text-link" href="/resume">Explore my recruiter resume <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills">
        <div className="section-heading"><div><p className="overline">MY TOOLKIT / FILTERABLE INDEX</p><h2>Skills & <span>technologies.</span></h2></div><p className="section-note">Explore the tools I’ve used across projects, internships and hands-on learning. Filter by discipline.</p></div>
        <SkillsExplorer />
      </section>

      <section className="experience-section" id="experience">
        <div className="section-wrap">
          <div className="section-heading"><div><p className="overline">THE JOURNEY</p><h2>Experience & <span>education.</span></h2></div></div>
          <div className="timeline">{experience.map((item, i) => <article className="timeline-item" key={item.company}><div className="timeline-marker">0{i + 1}</div><div className="timeline-main"><p className="timeline-date">{item.date}</p><h3>{item.role}</h3><p className="timeline-company">{item.company} <span>· {item.place}</span></p><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div>
          <div className="education-card"><div><p className="overline">EDUCATION</p><h3>B.Tech — Computer Science and Business Systems</h3><p>Rajalakshmi Institute of Technology</p></div><span>2022 — 2026</span></div>
          <div className="certifications"><p className="overline">CERTIFICATIONS</p><div className="cert-list">{certifications.map((cert) => <span key={cert}>{cert}</span>)}</div></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <p className="overline">HAVE A ROLE OR PROJECT IN MIND?</p><h2>Let’s make something<br /><span>meaningful.</span></h2>
          <p className="contact-copy">I’m interested in opportunities where I can contribute, learn and build useful products with a great team.</p>
          <ContactForm />
          <div className="contact-bottom"><a href="mailto:ashishfogawat3208@gmail.com">ashishfogawat3208@gmail.com</a><span>CHENNAI, INDIA</span><a href="tel:+917639203486">+91 7639203486</a></div>
          <p className="github-profile"><a href="https://github.com/ashishfogawat3208-oss" target="_blank" rel="noreferrer">GitHub profile <Arrow /></a></p>
        </div>
      </section>

      <footer className="footer"><a className="brand footer-brand" href="#top" aria-label="Ashish Kumar home">✦ ASHISH KUMAR<span>.</span></a><p>Designed & built by <strong>Ashish Kumar</strong></p><div className="footer-links"><a href="https://github.com/ashishfogawat3208-oss" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="mailto:ashishfogawat3208@gmail.com">EMAIL ↗</a><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
