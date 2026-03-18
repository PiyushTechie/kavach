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

# Kavach — Multimodal Guardian Against Social Engineering 🚀

Protect everyday people from modern scams: phishing links, fake SMS/screenshots, malicious QR codes, and voice deepfakes — without accounts, jargon, or friction.

---

**Team:** Team The Exceptions  
**Hackathon:** Hack2Skill GDG Solution Challenge  
**Domain:** Cybersecurity · AI Scam Protection · Social Engineering Detection

---

## 🚀 Project Overview

- The social engineering epidemic: attackers increasingly use contextual manipulation, local languages, personalized social cues, deepfakes, and voice cloning to bypass technical defenses.
- Why it matters: non-technical and digitally vulnerable users (elderly, low-literacy communities) face real financial, emotional, and privacy harms from these attacks.
- What Kavach is: a friendly, account-less multimodal guardian that analyzes URLs, text messages, screenshots, QR codes, and audio in real time using deterministic blocklists and probabilistic AI reasoning to provide clear, actionable safety guidance in users’ native languages.

---

## 🎯 Key Features

- Multimodal Scanning:
	- URL and domain safety (Google Safe Browsing + heuristics)
	- Natural-language text analysis for scam cues (SMS/chat)
	- Image analysis for manipulated screenshots, fake bills, doctored logos, and QR codes
	- Audio analysis for voice phishing / vishing detection and deepfake indicators
- Global Language Engine:
	- Instant translation and cultural-context processing for Indian and global languages
	- Localized safety messaging (simple, non-technical)
- Community Threat Ledger:
	- Real-time anonymous feed of flagged threats contributed by users
	- Lightweight reputation scoring (no PII)
- Privacy-first UX:
	- No account required — ephemeral, zero-retention analysis
	- Native Dark Mode with accessible large-text UI for low-vision users
- Edge Rate Limiting:
	- Upstash Redis for serverless edge rate-limiting to prevent abuse
- Account-less, accessible entrypoints:
	- Web scanner, image upload, camera scanner, audio uploader, paste input
- Explainable results:
	- Deterministic evidence + readable AI reasoning that tells why something is flagged

---

## 🧠 System Architecture (High-level)

1. User submits input (URL / paste / image / audio / camera / QR).
2. Client performs local preprocessing (QR extraction, image normalization, audio trimming).
3. Request passes through Upstash Redis rate limiter at the edge.
4. Deterministic checks: Google Safe Browsing + heuristic rules (e.g., punycode, homograph).
5. Probabilistic AI analysis: Google Generative AI (Gemini 2.5 Flash) for multimodal reasoning (text + image + audio context).
6. Aggregate verdict (Allow / Suspicious / Malicious) + human-readable explainers.
7. Anonymous report logged to Firebase Firestore for Community Threat Ledger (ephemeral metadata only).
8. UX displays verdict, remediation steps, translation, and reporting options.

Conceptual flow:

- Ingestion → Edge rate limit (Upstash) → Deterministic checks (Safe Browsing, heuristics) → Multimodal AI reasoning → Verdict → Firebase ledger + UI

---

## Dual-layer Analysis: Deterministic + Probabilistic

- Deterministic blocklists: quick, auditable checks (Google Safe Browsing, regex/punycode detection)
- Probabilistic AI reasoning: multimodal context that captures social-engineering signals (tone, urgency, logo mismatch, metadata inconsistencies)
- Combined policy: deterministic failures immediately flagged; AI provides context, confidence and plain-language explanations when deterministic checks are inconclusive.

---

## 🛠 Tech Stack

- Frontend
	- Next.js (App Router)
	- Tailwind CSS v4
	- Client-side camera/QR capture, file inputs, accessible UI
- Backend / API
	- Next.js API routes / Server Actions
	- Upstash Redis (edge rate-limiting)
	- Google Safe Browsing API
	- Google Generative AI (Gemini 2.5 Flash)
- AI / ML
	- Gemini 2.5 Flash — multimodal prompt engineering (text, images, audio)
	- Client-side preprocessing (QR decode, OCR, basic audio features)
- Database / Logging
	- Firebase Firestore — anonymous Community Threat Ledger
- DevOps / Tools
	- Node.js/npm, GitHub Actions (recommended), environment secrets manager
- Security
	- Zero-retention media processing, edge rate-limiting, CSP, HTTPS

---

## ⚙️ Installation & Setup (Local)

Prerequisites:

- Node.js 18+ and npm
- Google Cloud project with Generative AI API access (Gemini 2.5 Flash)
- Google Safe Browsing API key
- Upstash Redis account
- Firebase project (Firestore enabled)

1. Clone the repo:

```bash
git clone <repo-url>
cd phishing-detector
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` in project root with the following variables (example):

```env
# Google Generative AI (server-side only)
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

# Google Safe Browsing
SAFE_BROWSING_API_KEY=YOUR_SAFE_BROWSING_KEY

# Upstash Redis (for edge rate-limiting)
UPSTASH_REDIS_URL=rediss://:password@global-###.upstash.io:port
UPSTASH_REDIS_TOKEN=your_upstash_token

# Firebase (client & server)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
FIREBASE_SERVICE_ACCOUNT_JSON='{"type":...}'  # or path to service account file

# Rate limiter defaults
RATE_LIMIT_MAX=30
RATE_LIMIT_WINDOW_SECONDS=60

NODE_ENV=development
```

4. Start the dev server:

```bash
npm run dev
```

5. Open `http://localhost:3000`

Notes:

- Keep `GEMINI_API_KEY` and other secrets server-side — never expose them in client bundles.
- For Firestore server writes, use a secure server-side credential (service account) or server endpoints that validate requests.

---

## 📊 How It Works (Detailed Flow)

User journey (from first click to verdict):

1. User visits Kavach (no signup required) and chooses input type: URL paste, text paste, image upload / camera, QR scan, or audio upload.
2. Client-side preprocessing:
	 - QR decoding: decoded payload is displayed locally and only sent to server if the user confirms analysis.
	 - OCR runs in-browser to extract text from screenshots; highlights shown for user verification.
	 - Audio trimmed/normalized and optional lightweight features (e.g., MFCC) are extracted client-side.
3. Request flows to server via an edge layer that enforces Upstash-backed rate limits.
4. Server runs deterministic checks (Safe Browsing, punycode, domain heuristics) and only then invokes the multimodal AI for contextual reasoning when needed.
5. System aggregates deterministic evidence and AI reasoning into a complete verdict, confidence, and an actionable, localized explanation.
6. User sees a clear verdict badge, a short explanation, suggested next steps, and an option to anonymously add the item to the Community Threat Ledger.

Core design principle: perform low-cost deterministic checks first to short-circuit obvious threats, then apply AI reasoning for contextual and explainable decisions.

---

## 🤖 AI / ML Implementation (Details)

Gemini 2.5 Flash usage:

- Multimodal prompts are constructed using verified structure: input type, extracted text/OCR, visible logos, decoded QR payload, language, and user-facing constraints (keep explanation <2 lines).
- Model outputs: classification label (Safe|Suspicious|Malicious), confidence score, 2–4 bullet evidence points, and a single plain-language remediation in the user's language.

Vision intelligence:

- OCR + visual-template matching used to detect doctored bills, mismatched branding, and logo tampering.
- Visual embeddings compared against trusted logo templates to flag inconsistency.

Audio processing:

- Client-side preprocessing performs VAD and normalization.
- Server-side prompts include speech-to-text transcripts and audio metadata (prosody, pitch, unnatural pauses) so Gemini can judge urgency, impersonation risk, and deepfake likelihood.

Explainability:

- Every verdict pairs deterministic evidence (Safe Browsing hit, punycode) with AI rationale so users have clear, actionable reasons.

---

## 📸 Screenshots / Demo Explanation

Replace these placeholders with screenshots from the app UI when available:

- Dashboard: quick-scan box, recent scans, and top community flags.
- Threat Ledger: live anonymized feed with severity tags and aggregated counts.
- Dark Mode: visually accessible dark theme with contrast and large-type option.
- Multimodal Inputs: URL paste, Image upload (with OCR highlight), Audio upload (waveform + transcript), Camera QR scanning.

Each screen should show: verdict, one-line reason, suggested actions, and a localized “What to do next” card.

---

## 🔐 Security, Privacy & Scalability

Privacy-first approach:

- Zero-retention policy: media is processed ephemerally unless a user explicitly chooses to share for community reporting. Raw media is not stored by default.
- Community Ledger only stores anonymized metadata (no phone numbers, no PII).

Rate limiting & abuse prevention:

- Upstash Redis used for token-bucket rate limiting at the edge to avoid model-cost abuse.
- Deterministic caching (TTL) for Safe Browsing domain checks and repeated queries.

Scalability:

- Offload heavy batch multimodal work to dedicated worker queues or managed inference endpoints.
- Shard Firestore collections regionally to avoid hotspots.

Security best practices:

- Keep API keys server-side, enforce CSP, HTTPS, secure cookies, and sanitize inputs.

---

## 🌍 Real-World Impact

- Who benefits: elderly users, low-literacy communities, small-business owners, educators, grassroots organizations.
- How it helps: provides clear, low-friction, localized safety guidance and a community-curated threat feed to improve local awareness.
- Why this matters for GDG Solution Challenge: Kavach is practical, privacy-respecting, and focused on protecting vulnerable users using modern multimodal AI responsibly.

---

## 🚀 Future Enhancements

- WhatsApp / SMS Bot for one-tap scanning in messaging apps.
- Browser extension for hover/link safety checks and in-page screenshot scanning.
- On-device lightweight classifiers for instant offline checks.
- Federated learning for local model personalization without sending user media to central servers.

---

## 👨‍💻 Contributors

Built by Team The Exceptions.

Add contributor names and roles here.

---

## 📦 Useful Commands

- Dev

```bash
npm install
npm run dev
```

- Build

```bash
npm run build
npm start
```

---

## ⚠️ Environment Variables (Reference)

Create `.env.local` with values like:

```env
# Google Generative AI (server-side only)
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

# Google Safe Browsing
SAFE_BROWSING_API_KEY=YOUR_SAFE_BROWSING_KEY

# Upstash Redis
UPSTASH_REDIS_URL=rediss://:password@global-###.upstash.io:port
UPSTASH_REDIS_TOKEN=your_upstash_token

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
FIREBASE_SERVICE_ACCOUNT_JSON='{"type":...}'

# Rate limiter
RATE_LIMIT_MAX=30
RATE_LIMIT_WINDOW_SECONDS=60

NODE_ENV=development
```

---

## 🧾 Acknowledgements & Ethics

- Privacy and accessibility-first design.
- Respectful AI usage and explainability prioritized.

---

