# Meera & Arjun — Wedding Invitation

A single-page wedding invite built with Next.js, Tailwind CSS v4, and Framer Motion.

## Edit your content
Everything — names, date, venues, schedule, story text, RSVP deadline, contact info — lives in one file:

    src/lib/events.ts

Edit that file and every section updates automatically. No need to touch component code.

## Run locally

    npm install
    npm run dev

Open http://localhost:3000

## Deploy to Vercel

**Option A — via GitHub (recommended):**
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Leave all settings as default (Vercel auto-detects Next.js) → Deploy.
4. You'll get a live URL like `your-project.vercel.app` in about a minute.

**Option B — via CLI (no GitHub needed):**

    npm install -g vercel
    vercel

Follow the prompts. Run `vercel --prod` to push to your production URL.

## About the location links
Each venue card embeds a no-API-key Google Maps preview and a "Get Directions"
button that opens `https://www.google.com/maps/search/?api=1&query=<lat>,<lng>`
— this opens the native Google Maps / Apple Maps app on mobile, and Google Maps
web on desktop. To get accurate lat/lng for your real venues, right-click the
spot on Google Maps → the coordinates are the first thing in the context menu.

## About the RSVP form
The RSVP form is currently front-end only — submitting it shows a thank-you
animation but does not save anywhere. To start collecting real responses,
the fastest options are:
- **Formspree** (formspree.io): free tier, point the form's `action` at your
  Formspree endpoint, no code changes needed beyond that.
- **Google Sheets**: via a Google Apps Script deployed as a web app — a bit
  more setup, but responses land directly in a spreadsheet.
- **Vercel API route**: add `src/app/api/rsvp/route.ts` and POST to it from
  `RSVP.tsx`, then forward to email/Sheets/a database from there.

## Tech stack
- Next.js 16 (App Router, static export-friendly)
- Tailwind CSS v4
- Framer Motion (scroll reveals, the growing vine, countdown, RSVP transitions)
- Self-hosted fonts via @fontsource (Cormorant Garamond + Jost) — no runtime
  dependency on Google Fonts
