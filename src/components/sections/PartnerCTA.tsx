import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { partner } from "@/content/content";
import { site } from "@/lib/site";

export function PartnerCTA() {
  return (
    <section className="relative overflow-hidden bg-accent text-white">
      {/* Faint roofline watermark, echoing the profile's closing page */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/brand/roofline-watermark.png"
          alt=""
          width={1398}
          height={710}
          className="w-[85%] max-w-3xl opacity-[0.10]"
        />
      </div>

      <Container className="relative py-24 text-center sm:py-32">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="font-display text-3xl uppercase tracking-caps sm:text-4xl">
            {partner.heading}
          </h2>
          <p className="font-serif text-2xl italic text-white/90">
            {partner.sub}
          </p>
          <p className="text-pretty leading-relaxed text-white/85">
            {partner.body}
          </p>

          <div className="mt-2 flex flex-col items-center gap-1.5 text-sm text-white/90">
            {site.contacts.map((c) => (
              <span key={c.name}>
                {c.name}{" "}
                <a
                  href={`tel:${c.phone.replace(/\s+/g, "")}`}
                  className="text-white underline-offset-4 transition hover:underline"
                >
                  {c.phone}
                </a>
              </span>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="mt-1 text-white/80 underline-offset-4 transition hover:text-white hover:underline"
            >
              {site.email}
            </a>
          </div>

          <Link
            href="/contact"
            className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[13px] tracking-wide text-accent transition-colors duration-500 ease-luxe hover:bg-ink hover:text-white"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

export default PartnerCTA;
