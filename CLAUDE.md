@AGENTS.md

# Suri Real Estate site - working notes

- Brand: Suri Real Estate (SRE), Vasant Vihar, New Delhi. Tagline "Where premium meets personal."
- Theme tokens live in `src/app/globals.css` (`:root`). Brand red is `#A82E2E`.
- Copy is centralized in `src/content/content.ts`; site details in `src/lib/site.ts`.
- Brand imagery is in `public/brand/` (logo mark + profile photography/renders).
- No property listings yet by design. Add them via `src/data/properties.ts` only
  (static array, or swap the async getters for a Supabase/CMS query) - the UI and
  the `/properties/[slug]` route consume the async getters, so nothing else changes.
- Style: no em dashes anywhere in user-facing copy. Headings use Cinzel (caps) /
  Cormorant (serif + italic); body uses Inter. Keep motion subtle.
