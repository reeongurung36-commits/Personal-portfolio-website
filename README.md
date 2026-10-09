# AI Marketing Consultant Portfolio

A responsive portfolio and lead-generation website built with Next.js-compatible Vinext, TypeScript, and CSS. It includes five main pages, a searchable blog, article routes, accessible navigation, SEO metadata, and a server-side contact handler.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server. For a production check:

```bash
npm run build
```

## Update identity, booking, and social details

Edit `lib/site-config.ts`. Every intentionally missing personal detail is kept there:

- `name` and `brandName`
- `location`, `email`, and optional `phone`
- `bookingUrl`
- `linkedin` and `socialLinks`
- `profilePhoto` (use a file in `public/`, such as `/profile.jpg`, or a permitted HTTPS URL)
- brand color reference values and `siteUrl`

Placeholder values are deliberately visible in brackets so they cannot be mistaken for real credentials. When `bookingUrl` is still a placeholder, every consultation button safely routes to `/contact?intent=consultation`.

Visual colors are implemented as CSS variables near the top of `app/globals.css`. Update those variables to apply a new palette consistently.

## Update services

Edit the `services` array in `lib/content.ts`. Each service includes a title, summary, challenge, intended benefit, suitable audience, and editable inclusion list. Service links and the contact-form options update from the same data.

## Add or edit blog articles

Articles live in the `articles` array in `lib/content.ts`. To publish a new article:

1. Duplicate an article object.
2. Add a unique lowercase `slug` using hyphens.
3. Update the title, summary, category, ISO publication date, reading time, and kicker.
4. Build the article from `blocks`. Supported block types are `p`, `h2`, `h3`, `ul`, `ol`, and `callout`.
5. Run `npm run build` to verify the new route.

The article automatically appears in search, category filters, related content, static route generation, and the sitemap.

## Configure contact email delivery

The form submits to `app/api/contact/route.ts`, which performs server-side schema validation, honeypot filtering, timing checks, and basic per-address throttling before requesting delivery through Resend. A success state appears only after Resend accepts the request.

Copy `.env.example` to `.env.local` for local development, then set:

```text
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=Website <enquiries@your-verified-domain.com>
```

`CONTACT_FROM_EMAIL` must use a sender/domain accepted by your Resend account. Keep the API key secret. If any value is missing, the server returns a clear configuration error; it never pretends the enquiry was sent. Add a real public `email` in `lib/site-config.ts` to provide visitors with a direct-email fallback.

For the hosted Site, add the same three values as runtime environment variables, mark `RESEND_API_KEY` as secret, and redeploy.

## Deployment checklist

Before going public:

1. Replace every bracketed placeholder in `lib/site-config.ts`.
2. Add the profile photo and confirm its alt text is accurate.
3. Update `siteUrl` if the production domain changes.
4. Configure and test the three email environment variables.
5. Run `npm run build` and test the form with a real recipient.
6. Review the privacy notice and operational privacy practices for your location.

The project contains no analytics, tracking scripts, invented testimonials, client logos, guaranteed results, or exposed secrets.
