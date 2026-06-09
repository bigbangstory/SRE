# Suri Real Estate

Marketing website for **Suri Real Estate (SRE)**, a private real estate practice
in Vasant Vihar, New Delhi. _"Where premium meets personal."_

Minimal, Apple-esque design with restrained motion, built around the brand's
own colour theme (brick red `#A82E2E`, warm charcoal, off-white) and imagery
taken from the company profile.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (theme tokens in `src/app/globals.css`)
- **Framer Motion** (scroll reveals, hero) + **Lenis** (smooth scroll)
- Fonts via `next/font`: **Cinzel** (headings/wordmark), **Cormorant Garamond**
  (editorial serif + italics), **Inter** (body)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project structure

```
src/
  app/                 # routes: / about, services, properties, properties/[slug], contact
  components/
    layout/            # Navbar, Footer, SmoothScroll
    sections/          # PortfolioCategories, CoreValues, Mission, PartnerCTA
    property/          # PropertyCard, PropertyGrid (incl. empty state)
    ui/                # Container, Button, Eyebrow, SectionHeading, PageHero, ImagePlaceholder
    motion/            # Reveal (scroll-in)
    home/              # Hero
    contact/           # ContactForm
  content/content.ts   # all editorial copy (mission, values, portfolio, expertise, partner)
  lib/site.ts          # name, tagline, contacts, location, nav
  data/properties.ts   # property data layer (see below)
public/brand/          # logo mark + photography/renders from the profile
```

## Editing common things

- **Brand colours / theme:** `src/app/globals.css` (the `:root` token block).
- **Copy:** `src/content/content.ts`. **Contacts / nav / location:** `src/lib/site.ts`.
- **Images:** drop files in `public/brand/` and reference them.

## Adding properties later

The site ships with **no listings** by design; the Properties page shows an
elegant "by appointment" state. Everything routes through `src/data/properties.ts`,
which is the only file you touch to go live:

1. **Static:** add `Property` objects to the `properties` array, set
   `featured: true` to surface them on the home page.
2. **Dynamic:** replace the bodies of `getProperties` / `getFeaturedProperties` /
   `getPropertyBySlug` with a Supabase (or CMS) query. Signatures stay the same,
   so every page and the `/properties/[slug]` detail route keep working untouched.

## Contact form

`ContactForm` currently opens the visitor's mail client (pre-filled to
`contact@surirealestate.com`). To capture submissions server-side, wire the
`onSubmit` handler to an email service or Supabase. (TODO is marked in the file.)
