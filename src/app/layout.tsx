import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ashish-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "Ashish Kumar | Frontend & Full-Stack Developer",
  description:
    "Explore Ashish Kumar’s text-first developer portfolio: full-stack projects, technical skills, internship experience, public GitHub work and contact details.",
  keywords: ["Ashish Kumar", "Full-stack developer", "Frontend developer", "React", "Next.js", "Node.js", "Python", "Django", "Portfolio"],
  authors: [{ name: "Ashish Kumar", url: "https://github.com/ashishfogawat3208-oss" }],
  creator: "Ashish Kumar",
  category: "technology",
  applicationName: "Ashish Kumar Portfolio",
  openGraph: {
    title: "Ashish Kumar | Frontend & Full-Stack Developer",
    description: "Explore Ashish Kumar’s projects, skills, experience and developer profile.",
    type: "website",
    images: ["/ashish-kumar.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Kumar | Frontend & Full-Stack Developer",
    description: "Projects, skills and experience of Ashish Kumar.",
    images: ["/ashish-kumar.jpg"],
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashish Kumar",
    jobTitle: "Frontend & Full-Stack Developer",
    email: "mailto:ashishfogawat3208@gmail.com",
    url: siteUrl,
    image: `${siteUrl}/ashish-kumar.jpg`,
    sameAs: ["https://github.com/ashishfogawat3208-oss"],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Rajalakshmi Institute of Technology" },
    knowsAbout: ["Frontend development", "React", "JavaScript", "Node.js", "Python", "Django", "REST APIs", "Databases"],
  };

  return (
    <html lang="en">
      <body>
        <Script id="reset-home-scroll" strategy="beforeInteractive">
          {`(() => {
            if (typeof window === "undefined") return;
            if (window.location.pathname === "/") {
              window.history.scrollRestoration = "manual";
              if (window.location.hash) {
                window.history.replaceState(null, "", window.location.pathname + window.location.search);
              }
              const goHome = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              goHome();
              document.addEventListener("DOMContentLoaded", goHome, { once: true });
              window.addEventListener("load", () => requestAnimationFrame(goHome), { once: true });
              window.addEventListener("pageshow", (event) => {
                if (event.persisted) requestAnimationFrame(goHome);
              });
            }
          })();`}
        </Script>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
