# Kavach — The AI Firewall for Everyday People

![Kavach Banner](./public/Phishing_URL_Logo.png)

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)&nbsp;![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase)&nbsp;![Gemini](https://img.shields.io/badge/Gemini-4285F4?logo=google)&nbsp;![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel)&nbsp;![License](https://img.shields.io/badge/License-MIT-brightgreen)

Tagline: *Kavach — The AI Firewall for Everyday People*  
Built by **Team The Exceptions** for the Hack2Skill GDG AI Solution Challenge.

**Kavach** is a multimodal cybersecurity web application that protects vulnerable users from social engineering, phishing, and deepfakes.

**Table of contents**
- **The Problem & Solution**
- **Key Features**
- **Enterprise Security Architecture**
- **Tech Stack**
- **Local Setup**
- **Environment Variables**
- **Team**

**The Problem & Solution**

Everyday people are targeted by increasingly sophisticated scams: contextual phishing, voice deepfakes (vishing), malicious QR payloads, and social-media-driven disinformation. These threats bypass simple URL filters and rely on psychological manipulation.

Kavach acts as a shield: it combines real-time URL, SMS, image, and audio analysis with generative AI for zero-day detection and a community-powered, append-only threat ledger, giving users an approachable frontend and a hardened, enterprise-grade backend.

**Key Features**

- 🔎 **Multimodal Threat Scanner** — Scan URLs, SMS text, images, and audio from one simple UI. Images are scanned for QR/hidden payloads using `jsQR`. Audio analysis detects vishing and deepfake signatures using a combination of ML heuristics and generative model prompts.
- 🛡️ **Zero-Day URL Analysis** — Dual-layer defense: Google Safe Browsing API first; if it returns clean, fallback to a Gemini 2.5 Flash structural analysis to detect zero-day phishing patterns and social-engineering indicators.
- 📡 **Real-Time Community Threat Ledger** — An anonymous, append-only feed of detected threats powered by Firebase Firestore for live community awareness and reproducible threat telemetry.
- 🎛️ **Adaptive UI** — Minimalist, friendly design by default; switches to a dark, terminal-style "vibecoded" view when high-risk content is detected to emphasize severity and encourage caution.

**Enterprise Security Architecture**

These are major selling points — designed for resilience and judge-level scrutiny.

- ⚡ **Application-Level Rate Limiting**: Upstash Redis (Vercel KV-compatible) enforces strict per-IP and per-api-key rate limits to prevent abuse and protect Gemini quota. Rate limiting is applied at serverless API edges and validated server-side before expensive model calls.
- 🔐 **Strict Database Security**: Firebase Firestore is an append-only ledger. All writes are validated server-side by trusted functions and Firestore rules; no public edits or deletes are allowed. Threat entries are anonymized and tamper-resistant.
- 🛡️ **HTTP Security Headers**: Next.js sets strict security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) to block clickjacking, content sniffing, camera/microphone abuse, and reduce attack surface.

These layered controls minimize both opportunistic abuse and targeted exploitation while keeping user experience fast and responsive.

**Tech Stack**

- Frontend: Next.js (App Router), Tailwind CSS, Google Sans font
- Backend & Hosting: Vercel
- AI & Detection: Google Generative AI (Gemini 2.5 Flash) for structural and semantic URL/image/audio analysis
- Threat Feeds & Lookup: Google Safe Browsing API
- Rate Limiting / KV: Upstash Redis (Vercel KV compatible)
- Data / Real-time: Firebase Firestore
- Utilities: `jsQR` (QR extraction), Web Audio APIs (audio capture)

**Local Setup**

1. Clone the repo:

```bash
git clone https://github.com/PiyushTechie/Kavach.git
cd kavach
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
# or
pnpm dev
```

Open http://localhost:3000 in your browser.

**Environment Variables**

Create a `.env.local` in the project root with the following keys.

```markdown
| Key                                 | Purpose
|-------------------------------------|---------------------------------------------------------
| NEXT_PUBLIC_FIREBASE_API_KEY        | Firebase client API key
| NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN    | Firebase auth domain
| NEXT_PUBLIC_FIREBASE_PROJECT_ID     | Firebase project id
| NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET | Firebase storage bucket
| NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID | Firebase messaging sender id
| NEXT_PUBLIC_FIREBASE_APP_ID         | Firebase app id
| GEMINI_API_KEY                      | API key for Google Generative AI (Gemini 2.5 Flash)
| GOOGLE_SAFE_BROWSING_API_KEY        | Google Safe Browsing API key
| KV_REST_API_URL                     | Upstash KV REST endpoint URL
| KV_REST_API_TOKEN                   | Upstash KV REST token (secret)
```

Notes:
- Keep model calls server-side. Never expose `GEMINI_API_KEY` to the browser.
- `NEXT_PUBLIC_*` vars are safe for client-side use (Firebase config-only), but secret model/kv keys must remain server-side.

**Security & Privacy**

- All sensitive analysis (model calls, KV checks, Firestore writes) are performed server-side.
- The community ledger stores anonymized indicators and timestamps only — no PII is persisted.

**Team**

Team The Exceptions — Hack2Skill GDG AI Solution Challenge

— The Kavach team

Want to try a live demo or review the architecture diagram? Open an issue or contact the maintainers.

License: MIT

