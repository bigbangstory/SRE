import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { expertise, support } from "@/content/content";

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
              <Image
                src="/brand/tower.jpg"
                alt="A commercial development represented by Suri Real Estate"
                width={1383}
                height={922}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full mix-blend-multiply"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Full-service support */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div
          aria-hidden
          className="dot-grid pointer-events-none absolute inset-0 text-accent/25"
        />
        <Container className="relative py-20 sm:py-28">
          <SectionHeading
            eyebrow="Full-service"
            title="Support at every stage"
            intro="From first viewing to long after the signature, the relationship continues."
            className="mb-14 max-w-2xl"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {support.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.08}
                className="glass rounded-[24px] p-8 sm:p-10"
              >
                <span className="font-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-2xl italic text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <PartnerCTA />
    </>
  );
}
