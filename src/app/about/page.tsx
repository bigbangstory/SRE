import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CoreValues } from "@/components/sections/CoreValues";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { about, clientele } from "@/content/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: about.body,
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.lead} intro={about.body} />

      {/* The practice */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Image
                src="/brand/handshake.jpg"
                alt="The Suri Real Estate team in conversation with clients"
                width={1229}
                height={820}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full mix-blend-multiply"
              />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="The practice"
                title="Quietly, and with intent"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-soft">
                  We represent a small, deliberate portfolio for a clientele who
                  values privacy above all. From Lutyens&rsquo; timeless avenues
                  to prime commercial and farmhouse estates, our work spans the
                  rare and the remarkable across the NCR.
                </p>
                <p className="mt-5 text-pretty leading-relaxed text-muted">
                  Every introduction is considered; every detail, intentional.
                </p>
                <div className="mt-8">
                  <span className="text-[11px] uppercase tracking-luxe text-muted">
                    Who we serve
                  </span>
                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {clientele.map((c) => (
                      <li
                        key={c}
                        className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-caps text-muted"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Core values */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Core values"
            title="What we stand on"
            className="mb-14 max-w-2xl"
          />
          <CoreValues />
        </Container>
      </section>

      {/* People */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="The people"
            title="Speak with us directly"
            align="center"
            className="mb-14"
          />
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {site.contacts.map((c, i) => {
              const initials = c.name
                .split(" ")
                .map((w) => w[0])
                .join("");
              return (
                <Reveal
                  key={c.name}
                  delay={i * 0.1}
                  className="glass flex flex-col items-center gap-4 rounded-[24px] p-10 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-line/80 font-display text-lg tracking-caps text-accent">
                    {initials}
                  </span>
                  <span className="font-serif text-2xl text-ink">{c.name}</span>
                  <a
                    href={`tel:${c.phone.replace(/\s+/g, "")}`}
                    className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    {c.phone}
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <PartnerCTA />
    </>
  );
}
