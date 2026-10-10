# REEON GURUNG — AI Marketing Portfolio

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

## Typography and color direction

The site uses licensed open web fonts in clearly named roles so the design remains reliable in every browser:

- `Bodoni Moda` for the Grandeur-style editorial headings
- `Allura` for the BLUSH-style handwritten accents
- `Cinzel` for the Elegant-style REEON GURUNG wordmark
- `Cormorant Garamond` for the Balance Paladio-style subtitle and descriptive copy
- `Source Serif 4` for the Safira March / Source Serif-style navigation and interface text

The exact commercial or ambiguously named font files were not bundled because no licensed files were supplied. To use exact versions later, add licensed `.woff2` files and update the font variables in `app/layout.tsx` and `app/globals.css`.

The requested Pantone colors are represented as screen-ready sRGB approximations in both `lib/site-config.ts` and the CSS variables at the top of `app/globals.css`. Printed Pantone swatches and screen colors can differ by display and color profile.

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

The form submits to `app/api/contact/route.ts`, which performs server-side schema validation, honeypot filtering, timing checks, and basic per-address throttling before requesting delivery through FormSubmit. A success state appears only after FormSubmit returns an accepted response.

The recipient defaults to the public `email` value in `lib/site-config.ts`. You can optionally override it for a particular environment:

```text
FORM_SUBMIT_EMAIL=reeongurung36@gmail.com
```

FormSubmit requires one-time recipient confirmation. The first submission triggers an activation email to the recipient address; open that message and confirm the form before relying on live delivery. FormSubmit does not require an API key for this setup. The configured public email also appears as the direct-email fallback when a submission fails.

## Deployment checklist

Before going public:

1. Replace every bracketed placeholder in `lib/site-config.ts`.
2. Add the profile photo and confirm its alt text is accurate.
3. Update `siteUrl` if the production domain changes.
4. Submit the form once and confirm the FormSubmit activation email.
5. Run `npm run build` and test the form with a real recipient.
6. Review the privacy notice and operational privacy practices for your location.

The project contains no analytics, tracking scripts, invented testimonials, client logos, guaranteed results, or exposed secrets.
