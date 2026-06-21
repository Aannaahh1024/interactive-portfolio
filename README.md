# Ana Flor Delfin — Interactive AI Portfolio

A dark, chat-first portfolio powered by Groq Llama 3.1 (or OpenAI GPT-4o-mini), Next.js 14, and Framer Motion.
Inspired by toukoum.fr — built specifically for Ana Flor's AI automation work.

## Features

- Animated SVG avatar with idle breathing, blinking, thinking dots, and smile states
- Streaming chat responses via Vercel AI SDK
- Mouse-following rainbow gradient + liquid splash on click
- Inline project cards rendered inside the chat when asked about work
- Light / dark mode toggle
- Suggestion chips on load
- Fully responsive, `min-h-[100dvh]` stable on mobile

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Then open `.env.local` and add your API key.

**Option A — Groq (recommended, fast + has free tier)**
Get a key at [console.groq.com](https://console.groq.com)

```
GROQ_API_KEY=gsk_your_key_here
```

**Option B — OpenAI (fallback)**
Get a key at [platform.openai.com](https://platform.openai.com)

```
OPENAI_API_KEY=sk_your_key_here
```

The app auto-detects: Groq is used if `GROQ_API_KEY` is present, otherwise falls back to OpenAI.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
app/
  page.tsx              Main chat + avatar UI
  layout.tsx            Root layout (fonts, theme provider)
  globals.css           CSS variables, markdown styles, animations
  api/
    chat/
      route.ts          Edge streaming handler (Groq / OpenAI)
components/
  Avatar.tsx            Animated SVG cartoon avatar
  ChatMessage.tsx       Message bubbles + markdown + project cards
  ProjectCard.tsx       Inline project cards with SVG previews
  SuggestionChips.tsx   Floating chip buttons on load
  MouseEffect.tsx       Rainbow cursor gradient + liquid splash
  ThemeToggle.tsx       Light/dark mode button
lib/
  prompt.ts             Full AI system prompt (Ana Flor's knowledge base)
```

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Then set the env vars in your Vercel dashboard:
- **Settings → Environment Variables → Add**
- Add `GROQ_API_KEY` (or `OPENAI_API_KEY`)

Alternatively click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## Deploy to Render (alternative)

1. Push repo to GitHub
2. New Web Service → connect repo
3. Build Command: `npm install && npm run build`
4. Start Command: `npm start`
5. Add environment variables in Render dashboard

---

## Customization

### Update project screenshots
Replace the SVG preview components in `components/ProjectCard.tsx` (`LeadAutomationPreview`, `ChatbotPreview`, `NotionHubPreview`) with your actual screenshots:

```tsx
function MyProjectPreview() {
  return <img src="/projects/screenshot-1.png" className="w-full h-full object-cover" />;
}
```

Then add your images to the `/public/projects/` folder.

### Update contact links
In `lib/prompt.ts`, replace the Calendly/email placeholders with real links.

### Change the avatar
Replace the SVG in `components/Avatar.tsx` with a Lottie animation, a React Three Fiber 3D model, or an animated video element.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| AI Streaming | Vercel AI SDK v3 |
| AI Model | Groq Llama-3.1-70B (default) / OpenAI GPT-4o-mini |
| Icons | lucide-react |
| Theme | next-themes |
| Markdown | react-markdown + remark-gfm |
| Fonts | Geist (Vercel) |
