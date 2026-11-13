"use client";

import { useState } from "react";

export default function ShareProfile() {
  const [label, setLabel] = useState("Copy profile link");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLabel("Link copied ✓");
      window.setTimeout(() => setLabel("Copy profile link"), 1800);
    } catch {
      setLabel("Copy unavailable");
      window.setTimeout(() => setLabel("Copy profile link"), 1800);
    }
  }

  return <button type="button" className="share-profile-button" onClick={copyLink}>{label}</button>;
}
