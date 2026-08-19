# Lumera Leisure Carts — Coming Soon

A one-page "coming soon" site for **Lumera Leisure Carts** (www.lumeraleisurecarts.com).

Built with Next.js 14 (App Router) and exported as a static site, deployed on Netlify.

**Live preview:** https://lumera-leisure-carts.netlify.app

## Editing the content

Almost everything you'll want to change lives in one file: **`app/site.config.js`**

| Field | What it controls |
| --- | --- |
| `email` | The email link in the contact row |
| `phone` | The phone link. Leave it `""` and the phone link is hidden. |
| `headlineTop` / `headlineAccent` | The two lines of the big headline |
| `lede` | The paragraph under the headline |
| `tagline` | The "Coming Soon" pill |

Colors and spacing live in `app/globals.css` (the `:root` block at the top holds every color).

## Waitlist signups

The email form uses **Netlify Forms** — no backend, no third-party service.

- Submissions appear in your Netlify dashboard under **Project → Forms → waitlist**.
- Turn on email notifications: **Project configuration → Notifications → Form submission notifications**.
- `public/__forms.html` is what registers the form with Netlify at deploy time. Don't delete it.
- A honeypot field (`bot-field`) filters out most spam bots.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
```

## Deployment

Netlify builds this automatically on every push to `main`:

- **Build command:** `npm run build`
- **Publish directory:** `out`

Both are already set in `netlify.toml`, so there's nothing to configure in the Netlify UI.

## Custom domain

In Netlify: **Domain management → Add a domain → `lumeraleisurecarts.com`**, then point your
registrar's nameservers at Netlify (or add the CNAME/A records Netlify shows you). Set
`www.lumeraleisurecarts.com` as the primary domain so the apex redirects to it. HTTPS is
provisioned automatically.
