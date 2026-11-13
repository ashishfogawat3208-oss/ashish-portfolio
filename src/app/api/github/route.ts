import { NextResponse } from "next/server";

export const revalidate = 600;

const API = "https://api.github.com";
const USER = "ashishfogawat3208-oss";

export async function GET() {
  try {
    const response = await fetch(`${API}/users/${USER}/repos?sort=updated&per_page=100&type=public`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "Ashish-Kumar-Portfolio",
      },
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "GitHub public repository data is temporarily unavailable." },
        { status: response.status, headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } },
      );
    }

    const repositories = await response.json();
    const eventsResponse = await fetch(`${API}/users/${USER}/events/public?per_page=8`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "Ashish-Kumar-Portfolio",
      },
      next: { revalidate: 600 },
    });
    const eventData = eventsResponse.ok ? await eventsResponse.json() : [];

    const featuredNames = new Set([
      "vibespace",
      "green-business-simulator-backend",
      "cinebook",
      "Backend",
    ]);

    const repos = Array.isArray(repositories)
      ? repositories
          .filter((repo) => featuredNames.has(repo.name))
          .map((repo) => ({
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            updated_at: repo.updated_at,
          }))
      : [];

    return NextResponse.json(
      { repos, events: Array.isArray(eventData) ? eventData.slice(0, 5) : [], source: "github", fetchedAt: new Date().toISOString() },
      { headers: { "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1800" } },
    );
  } catch {
    return NextResponse.json({ error: "Unable to reach GitHub right now." }, { status: 502 });
  }
}
