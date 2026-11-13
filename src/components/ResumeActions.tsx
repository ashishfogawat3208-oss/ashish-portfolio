"use client";

export default function ResumeActions() {
  return (
    <div className="resume-action-buttons">
      <button type="button" className="button button-quiet" onClick={() => window.print()}>Print / Save as PDF</button>
      <a className="button button-primary" href="/Ashish_Kumar_Resume_Updated.pdf" download>Download original resume ↗</a>
    </div>
  );
}
