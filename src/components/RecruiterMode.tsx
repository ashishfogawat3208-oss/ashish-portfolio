const highlights = [
  { label: "FEATURED WORK", value: "3 projects", detail: "Social, sustainability and booking applications" },
  { label: "INTERNSHIPS", value: "3 experiences", detail: "Frontend, web design and HR operations" },
  { label: "EDUCATION", value: "B.Tech · 2022–26", detail: "Computer Science and Business Systems" },
];

export default function RecruiterMode() {
  return (
    <section className="recruiter-section" id="recruiter">
      <div className="section-wrap">
        <div className="section-heading recruiter-heading">
          <div><p className="overline">FOR RECRUITERS & HIRING TEAMS</p><h2>The quick <span>overview.</span></h2></div>
          <a className="button button-primary" href="/resume">View full resume ↗</a>
        </div>
        <div className="recruiter-intro">
          <div><p className="recruiter-role">ASHISH KUMAR · FULL-STACK / FRONTEND DEVELOPER</p><h3>Developer focused on useful products, thoughtful interfaces and practical problem-solving.</h3><p>Hands-on experience across frontend development, web design and full-stack personal projects. Comfortable working across UI, APIs, databases and third-party integrations.</p></div>
          <div className="recruiter-stats">{highlights.map((item) => <div className="recruiter-stat" key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.detail}</small></div>)}</div>
        </div>
        <div className="recruiter-bottom-grid">
          <article className="recruiter-mini-card"><span>01 / STRONGEST BACKEND STORY</span><h4>CineBook</h4><p>Django booking workflows, Razorpay payments, automated refunds and QR-enabled PDF ticket delivery.</p><a href="https://github.com/ashishfogawat3208-oss/cinebook" target="_blank" rel="noreferrer">Review repository ↗</a></article>
          <article className="recruiter-mini-card"><span>02 / FRONTEND & PRODUCT</span><h4>VibeSpace</h4><p>A mood-based social experience with post creation, feeds and profiles using React, Node.js and Supabase.</p><a href="https://github.com/ashishfogawat3208-oss/vibespace" target="_blank" rel="noreferrer">Review repository ↗</a></article>
          <article className="recruiter-mini-card"><span>03 / CROSS-FUNCTIONAL EXPERIENCE</span><h4>Internships</h4><p>Frontend development at HMV Technologies, web design at IDS Infotech and recruiting at CEI Design Consultancy Services.</p><a href="#experience">See experience timeline ↓</a></article>
        </div>
        <div className="recruiter-actions"><a className="text-link" href="/resume">Open resume center ↗</a><a className="text-link" href="mailto:ashishfogawat3208@gmail.com">Email Ashish ↗</a><a className="text-link" href="https://github.com/ashishfogawat3208-oss" target="_blank" rel="noreferrer">GitHub profile ↗</a></div>
      </div>
    </section>
  );
}
