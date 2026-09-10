# Jaxxy — Landing Page

The official landing page for **Jaxxy**, Algeria's first AI creative platform. Jaxxy brings together top AI image and video generation models (Seedance, Kling, Nano Banana, GPT Image, MiniMax, Flux) into a single unified interface with local payment options (CIB, Edahabia).

## Tech stack

- React + TypeScript
- Tailwind CSS
- Lucide icons
- Vite

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the real values
npm run dev
```

## Admin test console

A generation console for internal testing lives at **`/#/admin`**. It is not linked from the site.

- Unlocked with `VITE_ADMIN_PASSCODE` (defaults to `jaxxy-admin`). This is a client-side gate meant for local testing — it is **not** real access control. Anything deployed publicly needs server-side auth.
- Models wired up: **Seedance 2.5** (video, submit + poll) and **GPT Image 2.5** (image, sync execute), both through the Picsart workflows gateway.
- The Picsart API key comes from `VITE_PICSART_API_KEY` or can be pasted into the console (stored in `localStorage`). Never commit a live key — `.env.local` is git-ignored.
- In dev, requests are proxied through Vite (`/picsart` → `https://api.picsart.com`) to avoid CORS. For production, route the calls through your own backend so the key never reaches the browser.

### Adding a model

Append an entry to `ADMIN_MODELS` in `src/admin/models.ts` with its gateway id, kind, whether it needs async submit/poll, and its parameter fields. The form and result cards render themselves from that definition.
