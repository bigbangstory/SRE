import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCategories } from "@/components/sections/PortfolioCategories";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { getProperties } from "@/data/properties";

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

      {/* Available residences */}
      <section className="border-b border-line bg-surface">
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
