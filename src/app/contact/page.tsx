import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { partner } from "@/content/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with Suri Real Estate. Speak with Lokesh or Preeti Suri, or send an enquiry. Available 24/7 from Vasant Vihar, New Delhi.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Partner with us" intro={partner.body} />

      <section>
        <Container className="py-20 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            {/* Details */}
            <Reveal className="flex flex-col gap-10">
              <div>
                <span className="text-[11px] uppercase tracking-luxe text-accent">
                  Speak with us
                </span>
                <ul className="mt-5 flex flex-col gap-4">
                  {site.contacts.map((c) => (
                    <li key={c.name} className="flex flex-col">
                      <span className="font-serif text-xl text-ink">
                        {c.name}
                      </span>
                      <a
                        href={`tel:${c.phone.replace(/\s+/g, "")}`}
                        className="text-sm text-muted transition-colors hover:text-accent"
                      >
                        {c.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-luxe text-accent">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block text-ink transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-luxe text-accent">
                  Studio
                </span>
                <p className="mt-4 text-ink-soft">
                  {site.location.area}, {site.location.city}
                  <br />
                  <span className="text-muted">{site.location.region}</span>
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-luxe text-accent">
                  Availability
                </span>
                <p className="mt-4 text-ink-soft">
                  Round the clock, 24/7. Whether you are a local leader or an NRI
                  in a distant time zone, we are here when you need us.
                </p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1} className="glass rounded-[6px] p-8 sm:p-10">
              <h2 className="font-display text-lg uppercase tracking-caps text-ink">
                Send an enquiry
              </h2>
              <p className="mt-2 text-sm text-muted">
                Every enquiry is handled with absolute discretion.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
