# digital-card

Abdalla Alhaj's digital business card: a single static page with who I am, what I work with, how I work, selected work, and one-tap contact buttons (WhatsApp, call, email, LinkedIn, GitHub, website, save-to-contacts vCard).

No build step, no framework, no tracking. Everything the browser sees lives in `public/`:

| File | Purpose |
|---|---|
| `public/profile.js` | **All content lives here.** Name, headline, contact details, skills, principles, projects. Edit this and nothing else. |
| `public/index.html` | Page skeleton. |
| `public/assets/` | `style.css`, `app.js` (renders `profile.js` into the page), `favicon.svg`, and `photo.jpg` once you add one. |

## Edit the content

Open `public/profile.js`. Any contact field left as `""` hides its button. The "Save contact" button appears as soon as a phone or email is set and generates a `.vcf` in the browser.

Add a square photo as `public/assets/photo.jpg` (a 512×512 JPEG is plenty). Until it exists the page shows a monogram.

## Run locally

```bash
python3 -m http.server 8080 -d public
```

Then open http://localhost:8080.

## Deploy on Cloudflare (Workers, static assets)

`wrangler.jsonc` tells Wrangler to serve `public/` as static assets with no Worker code.

Dashboard → Workers & Pages → Create → Import a repository → `Afronutella/digital-card`:

| Field | Value |
|---|---|
| Build command | leave empty |
| Deploy command | `npx wrangler deploy` |
| Preview command | leave the default |

Every push to `main` redeploys. Custom domain: the Worker's Settings → Domains & Routes → Add → Custom domain.

From a laptop: `npx wrangler deploy` (after `npx wrangler login`).

`public/_headers` sets basic security headers on every response.
