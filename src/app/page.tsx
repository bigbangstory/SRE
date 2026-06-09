import Image from "next/image";
import Hero from "@/components/home/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { PortfolioCategories } from "@/components/sections/PortfolioCategories";
import { CoreValues } from "@/components/sections/CoreValues";
import { Mission } from "@/components/sections/Mission";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { getFeaturedProperties } from "@/data/properties";
import { about, expertise, clientele } from "@/content/content";

export default async function HomePage() {
  const featured = await getFeaturedProperties(3);

  return (
    <>
      <Hero />

      {/* About / intro */}
      <section className="border-b border-line">
        <Container className="py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading eyebrow={about.eyebrow} title={about.lead} />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.1}>
                <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                  {about.body}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {clientele.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-caps text-muted"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>

        {/* Skyline illustration band */}
        <Reveal className="relative h-56 w-full sm:h-72 lg:h-80">
          <Image
            src="/brand/skyline.jpg"
            alt="The Delhi skyline, illustrated"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </Reveal>
      </section>

      {/* Expertise */}
      <section className="border-b border-line">
        <Container className="py-24 sm:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
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
            <div>
              <SectionHeading
                eyebrow="Expertise"
                title="Strategic Property Advisory"
                intro={expertise.intro}
              />
              <div className="mt-8 flex flex-col divide-y divide-line border-t border-line">
                {expertise.areas.map((a, i) => (
                  <Reveal
                    key={a.title}
                    delay={i * 0.08}
                    className="flex flex-col gap-1.5 py-5"
                  >
                    <h3 className="font-serif text-xl italic text-ink">
                      {a.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{a.body}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal className="mt-8">
                <Button href="/services" variant="link" arrow>
                  Explore our services
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio */}
      <section className="border-b border-line bg-surface">
        <Container className="py-24 sm:py-32">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our portfolio"
              title="Where we operate"
              intro="A diverse and elite portfolio across the capital."
            />
            <Reveal>
              <Button href="/properties" variant="link" arrow>
                View properties
              </Button>
            </Reveal>
          </div>
          <PortfolioCategories />
        </Container>
      </section>

      {/* Core values */}
      <section className="border-b border-line">
        <Container className="py-24 sm:py-32">
          <SectionHeading
            eyebrow="Core values"
            title="What we stand on"
            className="mb-14 max-w-2xl"
          />
          <CoreValues />
        </Container>
      </section>

      {/* Mission */}
      <section className="border-b border-line bg-surface">
        <Container className="py-24 sm:py-32">
          <SectionHeading
            eyebrow="Our mission"
            title="How we work"
            className="mb-14 max-w-2xl"
          />
          <Mission />
        </Container>
      </section>

      {/* Featured residences (empty state until listings are added) */}
      <section className="border-b border-line">
        <Container className="py-24 sm:py-32">
          <SectionHeading
            eyebrow="Residences"
            title="Selected homes"
            align="center"
            className="mb-12"
          />
          <PropertyGrid properties={featured} />
        </Container>
      </section>

      <PartnerCTA />
    </>
  );
}
