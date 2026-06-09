/*
  Editorial content for Suri Real Estate, taken from the company profile.
*/

export const about = {
  eyebrow: "About us",
  lead: "A defining presence in real estate.",
  body: "At Suri Real Estate, we move quietly and think strategically. From Lutyens' timeless avenues to prime commercial and farmhouse estates, we represent the rare and the remarkable across the NCR.",
};

export type Pillar = { n: string; title: string; body: string };

export const mission: Pillar[] = [
  {
    n: "01",
    title: "Truly Bespoke",
    body: 'We do not follow a "one size fits all" strategy. Your specific lifestyle and investment goals form our blueprint, allowing us to offer solutions tailored to the unique needs of UHNIs, corporate entities, and Embassies.',
  },
  {
    n: "02",
    title: "Round the Clock",
    body: "High-stakes decisions do not always happen during business hours. Our team remains accessible 24/7, ensuring that whether you are a local leader or an NRI in a distant time zone, we are here when you need us.",
  },
  {
    n: "03",
    title: "Beyond the Signature",
    body: "Our relationship does not end at the signature. We take pride in providing comprehensive support through documentation, transition, and long-term asset management to ensure your peace of mind remains intact.",
  },
];

export const values = [
  {
    title: "Integrity",
    body: "We lead every interaction with uncompromising ethics and honest practices.",
  },
  {
    title: "Reliability",
    body: "Trusted by Diplomats and UHNIs for consistent results and market analysis you can bank on.",
  },
  {
    title: "Transparency",
    body: "We maintain absolute clarity in documentation and pricing for your complete peace of mind.",
  },
];

export type Category = {
  n: string;
  title: string;
  body: string;
  image: string;
};

export const portfolio: Category[] = [
  {
    n: "01",
    title: "Elite Residential",
    body: "Specializing in the sale, purchase, and leasing of Delhi's most prestigious residential addresses.",
    image: "/brand/portfolio-residential.jpg",
  },
  {
    n: "02",
    title: "Commercial & Retail",
    body: "Strategic acquisition and rental advisory for high-impact retail spaces and office complexes.",
    image: "/brand/portfolio-commercial.jpg",
  },
  {
    n: "03",
    title: "Hospitality & Land",
    body: "Facilitating high-value transactions for hotels and prime land parcels for development.",
    image: "/brand/portfolio-hospitality.jpg",
  },
];

export const expertise = {
  heading: "Strategic Property Advisory",
  intro:
    "Suri Real Estate has evolved into a holistic partner for the modern investor. Based in Vasant Vihar, we offer specialized guidance across a diverse and elite portfolio.",
  areas: [
    {
      title: "Residential",
      body: "Mastery of South Delhi, Lutyens' Delhi, and exclusive Farmhouse belts.",
    },
    {
      title: "Commercial & Strategic",
      body: "Expert advisory for High Street Retail, Corporate Offices, Hotels, and Land Acquisitions.",
    },
  ],
};

// Who we serve (stated in the profile) - used in place of invented statistics.
export const clientele = [
  "UHNIs",
  "Corporate Entities",
  "Embassies & Diplomats",
  "NRIs",
];

export const partner = {
  heading: "Partner With Us",
  sub: "Let's build a relationship.",
  body: "Premium real estate is more than just square footage. It is about the trust behind the deal. Experience the dedication of a team that is always on your side.",
};

// Where we operate (Properties page) - drawn from the profile.
export const areas = [
  "South Delhi",
  "Lutyens' Delhi",
  "Farmhouse Belts",
  "High Street Retail",
  "Corporate Offices",
  "Hotels",
  "Land Acquisitions",
];

// Full-service support (Services page) - reflecting the profile's promise.
export const support = [
  {
    title: "Acquisition & Sourcing",
    body: "Discreet access to residences that rarely reach the open market, shaped around your goals.",
  },
  {
    title: "Documentation & Transition",
    body: "Comprehensive support through paperwork, due diligence and a seamless handover.",
  },
  {
    title: "Asset Management",
    body: "Long-term stewardship of your home or portfolio, well beyond the signature.",
  },
  {
    title: "Round-the-clock Access",
    body: "A team available 24/7, whether you are local or an NRI in a distant time zone.",
  },
];
