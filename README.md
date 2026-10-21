# digital-card

Abdalla Alhaj's digital business card: a single static page with who I am, what I work with, how I work, selected work, and one-tap contact buttons (WhatsApp, call, email, LinkedIn, GitHub, website, save-to-contacts vCard).

No build step, no framework, no tracking. Three files do the work:

| File | Purpose |
|---|---|
| `profile.js` | **All content lives here.** Name, headline, contact details, skills, principles, projects. Edit this and nothing else. |
| `index.html` | Page skeleton. |
| `assets/` | `style.css`, `app.js` (renders `profile.js` into the page), `favicon.svg`, and `photo.jpg` once you add one. |

## Edit the content

Open `profile.js`. Any contact field left as `""` hides its button. The "Save contact" button appears as soon as a phone or email is set and generates a `.vcf` in the browser.

Add a square photo as `assets/photo.jpg` (a 512×512 JPEG is plenty). Until it exists the page shows a monogram.

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Deploy on Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick `Afronutella/digital-card`.
2. Build settings: framework preset **None**, build command **empty**, build output directory **`/`**.
3. Save and deploy. Every push to `main` redeploys.
4. Custom domain: Pages project → Custom domains → add it; Cloudflare writes the DNS record if the zone is on Cloudflare.

`_headers` sets basic security headers on every response; Cloudflare Pages applies it automatically.
