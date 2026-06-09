import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Mission } from "@/components/sections/Mission";
import { PortfolioCategories } from "@/components/sections/PortfolioCategories";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { expertise } from "@/content/content";

export const metadata: Metadata = {
  title: "Services",
  description: expertise.intro,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={expertise.heading}
        intro={expertise.intro}
      />

      {/* Areas of expertise */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Areas of focus"
                title="Counsel across the capital"
                className="mb-8"
              />
              <div className="flex flex-col divide-y divide-line border-t border-line">
                {expertise.areas.map((a, i) => (
                  <Reveal
                    key={a.title}
                    delay={i * 0.08}
                    className="flex flex-col gap-2 py-6"
                  >
                    <h3 className="font-serif text-2xl italic text-ink">
                      {a.title}
                    </h3>
                    <p className="leading-relaxed text-muted">{a.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[3px]">
                <Image
                  src="/brand/tower.jpg"
                  alt="A commercial development represented by Suri Real Estate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we handle */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="What we handle"
            title="A diverse portfolio"
            className="mb-14 max-w-2xl"
          />
          <PortfolioCategories />
        </Container>
      </section>

      {/* How we work */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Our mission"
            title="How we work"
            className="mb-14 max-w-2xl"
          />
          <Mission />
        </Container>
      </section>

      <PartnerCTA />
    </>
  );
}
