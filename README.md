# Duke O'FArts — Portfolio Redesign

A colorful, responsive creative portfolio for **Lauren Duke** (voiceover artist, comedian, audiobook narrator, and Duke O'FArts podcast host).

## Stack

- Next.js App Router, React, and TypeScript
- Custom responsive CSS, Lucide icons
- Static export (simple Netlify deployment)
- **No standalone HTML files** — pages are developed as React components

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Production verification:

```bash
npm run typecheck
npm run build
```

## Features

- Branded responsive homepage with in-page navigation and mobile menu
- Filterable voiceover and audiobook demo collection
- YouTube demo modal with keyboard Escape handling and a direct-video fallback
- Artist biography and selected comedy credits
- Home studio equipment section
- Podcast section with links to three actual episodes
- SEO/Open Graph metadata, focus-visible styles, reduced-motion support
- Netlify static-export configuration

## Content and attribution

The content and demo IDs were researched from the currently published [dukeofarts.com](https://www.dukeofarts.com) pages and [Duke O'FArts Podbean](https://dukeofarts.podbean.com/). Video media remains hosted by its original YouTube account; the project links to and embeds those videos. No fictitious reviews, images, awards, or client metrics have been added.

**Before launch:**

1. Review and approve the wording, demo selections and branding with Lauren.
2. Confirm the correct booking email. Add it as `NEXT_PUBLIC_BOOKING_EMAIL` in Netlify before building; until then, the contact button opens Lauren's publicly linked LinkedIn profile rather than inventing an address.
3. Replace or supplement the abstract hero art with an approved portrait and original brand assets if desired.
4. Preview on iPhone and desktop and verify video playback with real devices. External video playback depends on YouTube availability and embed permissions.
5. Deploy the new site to its own Netlify preview URL first. `dukeofarts.com` currently uses Google Sites; **deploying this repository will not automatically replace the live domain**. Update domain/DNS only after approval.

## Deploying to Netlify

1. Connect this GitHub repo as a new Netlify site.
2. Netlify uses `netlify.toml`: build command `npm run build`, publish directory `out`.
3. Set `NEXT_PUBLIC_BOOKING_EMAIL` if the booking address has been verified and approved.
4. Preview the Netlify subdomain; then choose whether to switch the custom domain from Google Sites.

## Original source pages

- https://www.dukeofarts.com/
- https://www.dukeofarts.com/voiceover
- https://www.dukeofarts.com/about-me
- https://www.dukeofarts.com/comedy
- https://www.dukeofarts.com/audiobook-narration
- https://www.dukeofarts.com/duke-ofarts-podcast
- https://dukeofarts.podbean.com/
