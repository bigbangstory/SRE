/*
  PROPERTY DATA LAYER
  ───────────────────
  No listings exist yet (by design). This module is the single seam through
  which properties enter the site. When the client is ready, you have two
  painless options without touching any page/component:

    1. STATIC  - push objects into the `properties` array below.
    2. DYNAMIC - replace the bodies of the async functions with a fetch from
                 Supabase / a CMS (the Supabase MCP server is already wired up
                 to this environment). The function signatures stay the same,
                 so the UI keeps working untouched.

  All pages consume the async getters - never the raw array - so the swap to a
  real backend later is invisible to the rest of the app.
*/

export type PropertyStatus = "for-sale" | "for-rent" | "sold" | "coming-soon";

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  /** Pre-formatted price string, e.g. "£4,950,000" or "Price on application". */
  price: string;
  status: PropertyStatus;
  beds?: number;
  baths?: number;
  /** Living area, pre-formatted, e.g. "420 m²". */
  area?: string;
  description: string;
  features: string[];
  /** Path under /public (e.g. "/brand/villa.jpg") or a remote URL. */
  heroImage?: string;
  gallery?: string[];
  featured?: boolean;
}

/**
 * The portfolio. Empty for now - add Property objects here, or swap the
 * getters below for a Supabase query.
 */
export const properties: Property[] = [];

export async function getProperties(): Promise<Property[]> {
  return properties;
}

export async function getFeaturedProperties(limit = 3): Promise<Property[]> {
  return properties.filter((p) => p.featured).slice(0, limit);
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  return properties.find((p) => p.slug === slug) ?? null;
}

export const STATUS_LABEL: Record<PropertyStatus, string> = {
  "for-sale": "For Sale",
  "for-rent": "For Rent",
  sold: "Sold",
  "coming-soon": "Coming Soon",
};
