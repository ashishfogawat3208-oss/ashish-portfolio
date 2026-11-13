# Ashish Kumar — Professional Developer Portfolio

A responsive Next.js portfolio with a dimensional CSS 3D hero, project case studies, conceptual architecture diagrams, live public GitHub repository cards, an interactive terminal, and a recruiter Q&A assistant.

## Requirements

- Node.js 20.9+ (recommended for Next.js 16)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Recruiter assistant modes

The assistant works without an API key using a curated local Q&A knowledge base. The downloaded project already includes a `.env.local` template in its root.

To enable conversational AI locally:

1. Open the included `.env.local` file in VS Code.
2. Replace the placeholder with your OpenAI API key:

```bash
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4.1-mini
```

3. Save the file and restart the development server (`Ctrl + C`, then `npm run dev`).

Keep the key private: do not prefix it with `NEXT_PUBLIC_`, do not commit `.env.local`, and add it as an environment variable in Vercel for production. The API route uses the OpenAI Responses API, passes recent chat history for follow-up questions, grounds answers in the portfolio facts, and falls back to local answers if the API is unavailable or no key is configured. The API key stays server-side. The `.env.local` file is included for convenience but is ignored by Git; `.env.example` is the safe template for repositories. API usage may incur charges with the provider.

## Included experiences

- CSS-based 3D dimensional hero (no heavy 3D runtime dependency)
- Recruiter AI with conversation context, curated Q&A fallback, graceful error handling and server-side OpenAI Responses API integration
- Interactive terminal commands: help, about, skills, projects, experience, contact, clear
- Live public GitHub repository panel
- Project case studies and conceptual architecture diagrams
- Resume, profile image, experience, education, certifications and contact details

## Before applying

- Add your LinkedIn URL when ready.
- Add real screenshots and verified live demo URLs when available.
- Confirm the mobile number is intended for public display.
- Green Business Simulator currently links to its backend repository; its original frontend repository/live demo has not been located.
- Architecture diagrams are conceptual high-level flows, not verified infrastructure diagrams.
- Do not claim a project is live until it has been deployed and tested.

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Deploy with the default Next.js settings.
4. Optionally add `OPENAI_API_KEY` and `OPENAI_MODEL` under Project Settings → Environment Variables, then redeploy.


## Visual theme
The portfolio uses a midnight-indigo base with electric violet and ice-blue accents. The private `.env.local` file is included with a placeholder key; replace it with your own OpenAI API key and keep it out of GitHub.


## Ashish 3.0 updates
- Added a recruiter-focused overview with a resume shortcut, project highlights and experience summary.
- Expanded the interactive terminal commands: `whoami`, `resume` and `github` (alongside the existing commands).
- Added a validated contact form with a server-side Resend integration.
- Added SEO metadata, Open Graph and Twitter social preview metadata.

### Enable contact form email delivery
The form is included and validates submissions. To deliver messages directly to your inbox, configure a Resend account and verify a sender domain/address, then set these server-side environment variables in `.env.local` for local development and in your hosting provider for deployment:

```env
RESEND_API_KEY=re_your_resend_api_key_here
CONTACT_FROM_EMAIL=Portfolio Contact <hello@your-verified-domain.com>
CONTACT_TO_EMAIL=ashishfogawat3208@gmail.com
```

For a first test, Resend may allow its `onboarding@resend.dev` sender only to your own account email; set `CONTACT_FROM_EMAIL=onboarding@resend.dev` and keep `CONTACT_TO_EMAIL` as your own verified Resend account email. For sending to other recipients, verify a domain and use an address on that domain. If these values are not configured, the form explains that email delivery is not set up and provides a direct email fallback. Do not expose these secrets with `NEXT_PUBLIC_` variables or commit `.env.local`.

### Social preview URL
Update `metadataBase` in `src/app/layout.tsx` to the final deployed portfolio URL before publishing, so social preview metadata uses the correct canonical origin.


## Ashish 4.0 update

- Futuristic midnight-indigo styling with subtle cyan/violet accents.
- Text-first project cards and case studies. No fabricated project screenshots, demo previews, or videos.
- Filterable skills explorer.
- Responsive mobile navigation and reading progress indicator.
- GitHub section with public repository metadata, detected languages, and recent public events when GitHub's API is available.
- Expanded interactive terminal commands for profile, skills, projects, experience, education, resume, GitHub, and contact.
- Refined focus states, reduced-motion handling, and responsive layouts.

### Environment variables

Copy `.env.example` to `.env.local` and enter your own server-side keys. Never commit `.env.local`. On Vercel, update the same variables under Project Settings → Environment Variables and redeploy.


## Ashish 5.0 — Signature Edition

- Added a dedicated `/resume` recruiter center with print / Save as PDF and a download link to the original resume PDF.
- Added one-click profile-link copying.
- Added sitemap and robots metadata, canonical URL support, and Person structured data.
- Added baseline security response headers.
- Improved contact form feedback with a message character counter and request-size validation.
- Kept all project presentation text-first. No fabricated screenshots, videos, preview images, live demos or metrics are included.

### Final deployment configuration

Set these environment variables in Vercel (Production and Preview as appropriate):

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4.1-mini
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=Portfolio Contact <hello@your-verified-domain.com>
CONTACT_TO_EMAIL=ashishfogawat3208@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-exact-vercel-domain.vercel.app
```

Replace `NEXT_PUBLIC_SITE_URL` with the exact deployed URL. If using a custom domain, use that canonical domain. Redeploy after changing environment variables. Keep `.env.local` private and never commit it.
