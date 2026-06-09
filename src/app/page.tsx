import Image from "next/image";
import Hero from "@/components/home/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { PortfolioCategories } from "@/components/sections/PortfolioCategories";
import { CoreValues } from "@/components/sections/CoreValues";
import { Mission } from "@/components/sections/Mission";
import { StatementBand } from "@/components/sections/StatementBand";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { getFeaturedProperties } from "@/data/properties";
import { about, expertise, clientele } from "@/content/content";

export default async function HomePage() {
  const featured = await getFeaturedProperties(3);

  return (
    <>
      <Hero />

      {/* About intro, with the skyline as a clean banner beneath the copy */}
      <section className="overflow-hidden border-b border-line">
        <Container className="pb-10 pt-20 text-center sm:pb-12 sm:pt-28">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="font-display text-balance text-2xl uppercase leading-[1.15] tracking-caps text-ink sm:text-3xl lg:text-[2.5rem]">
              {about.lead}
            </h2>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              {about.body}
            </p>
            <ul className="mt-2 flex flex-wrap justify-center gap-2.5">
              {clientele.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-line bg-canvas/70 px-4 py-1.5 text-xs uppercase tracking-caps text-muted"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
        {/* Skyline banner: white dropped via multiply so it sits on the page */}
        <Reveal className="px-6">
          <Image
            src="/brand/skyline-banner.jpg"
            alt="The Delhi skyline, illustrated"
            width={1536}
            height={740}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="mx-auto block h-auto w-full max-w-5xl mix-blend-multiply"
          />
        </Reveal>
      </section>

      {/* Expertise */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
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
        <Container className="py-20 sm:py-28">
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

      {/* Immersive statement */}
      <StatementBand
        image="/brand/interior.jpg"
        eyebrow="The practice"
        statement="We move quietly and think strategically, representing the rare and the remarkable."
      />

      {/* Core values */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Core values"
            title="What we stand on"
            className="mb-14 max-w-2xl"
          />
          <CoreValues />
        </Container>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div
          aria-hidden
          className="dot-grid pointer-events-none absolute right-6 top-10 hidden h-40 w-40 text-accent/25 lg:block"
        />
        <Container className="relative py-20 sm:py-28">
          <SectionHeading
            eyebrow="Our mission"
            title="How we work"
            className="mb-14 max-w-2xl"
          />
          <Mission />
        </Container>
      </section>

      {/* Selected homes (empty state until listings are added) */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
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
