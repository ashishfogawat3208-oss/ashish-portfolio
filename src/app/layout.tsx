import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Kumar | Full-Stack Developer",
  description:
    "Explore Ashish Kumar’s text-first developer portfolio: full-stack projects, technical skills, internship experience, public GitHub work and contact details.",
  keywords: ["Ashish Kumar", "Full-stack developer", "Frontend developer", "React", "Next.js", "Node.js", "Python", "Django", "Portfolio"],
  authors: [{ name: "Ashish Kumar", url: "https://github.com/ashishfogawat3208-oss" }],
  creator: "Ashish Kumar",
  category: "technology",
  openGraph: {
    title: "Ashish Kumar | Full-Stack Developer",
    description: "Explore Ashish Kumar’s projects, skills, experience and developer profile.",
    type: "website",
    images: ["/ashish-kumar.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Kumar | Full-Stack Developer",
    description: "Projects, skills and experience of Ashish Kumar.",
    images: ["/ashish-kumar.jpg"],
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
