import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PortfolioCategories } from "@/components/sections/PortfolioCategories";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { getProperties } from "@/data/properties";
import { areas } from "@/content/content";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "A diverse and elite portfolio across South Delhi, Lutyens' Delhi, farmhouse belts, commercial, retail, hospitality and land.",
};

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title="The rare and the remarkable"
        intro="A diverse and elite portfolio across the capital, from prestigious residential addresses to high-impact commercial, hospitality and land."
      />

      {/* Categories */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <PortfolioCategories />
        </Container>
      </section>

      {/* Areas we cover */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div
          aria-hidden
          className="dot-grid pointer-events-none absolute inset-0 text-accent/25"
        />
        <Container className="relative py-20 sm:py-28">
          <SectionHeading
            eyebrow="Where we operate"
            title="Areas we cover"
            intro="From the capital's most prestigious addresses to its commercial and land opportunities."
            className="mb-12 max-w-2xl"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal
                key={a}
                delay={i * 0.05}
                className="glass flex items-center gap-4 rounded-2xl px-6 py-5"
              >
                <span className="font-display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-lg text-ink">{a}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Available residences */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Available now"
            title="Current residences"
            align="center"
            className="mb-12"
          />
          <PropertyGrid properties={properties} />
        </Container>
      </section>

      <PartnerCTA />
    </>
  );
}
