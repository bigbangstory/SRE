/*
  Central site configuration for Suri Real Estate.
  Details sourced from the company profile.
*/

export type NavLink = { label: string; href: string };
export type Contact = { name: string; phone: string };

export const site = {
  name: "Suri Real Estate",
  short: "SRE",
  tagline: "Where premium meets personal.",
  description:
    "Suri Real Estate is a private practice based in Vasant Vihar, New Delhi, advising UHNIs, corporates and embassies across South Delhi, Lutyens' Delhi and the wider NCR.",

  email: "contact@surirealestate.com",

  location: {
    area: "Vasant Vihar",
    city: "New Delhi",
    region: "NCR, India",
  },

  contacts: [
    { name: "Lokesh Suri", phone: "+91 98718 63399" },
    { name: "Preeti Suri", phone: "+91 98106 78184" },
  ] satisfies Contact[],

  nav: [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
} as const;

export type Site = typeof site;
