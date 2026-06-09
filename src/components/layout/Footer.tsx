import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-canvas text-ink-text">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/brand/mark.png"
                alt=""
                width={350}
                height={150}
                className="h-7 w-auto"
              />
              <span className="font-display text-[15px] tracking-caps text-ink-text">
                SURI REAL ESTATE
              </span>
            </Link>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-ink-muted">
              {site.tagline} A private practice across {site.location.area},{" "}
              {site.location.city} and the wider NCR.
            </p>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-luxe text-ink-muted">
              Explore
            </span>
            <ul className="flex flex-col gap-3">
              {site.nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-text/85 transition-colors duration-300 hover:text-accent-soft"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-luxe text-ink-muted">
              Partner with us
            </span>
            <ul className="flex flex-col gap-3 text-sm text-ink-text/85">
              {site.contacts.map((c) => (
                <li key={c.name} className="flex flex-wrap items-baseline gap-x-3">
                  <span className="text-ink-text">{c.name}</span>
                  <a
                    href={`tel:${c.phone.replace(/\s+/g, "")}`}
                    className="text-ink-muted transition-colors duration-300 hover:text-accent-soft"
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-300 hover:text-accent-soft"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-ink-muted">
                {site.location.area}, {site.location.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-line pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-ink-muted/70">Available 24/7.</p>
        </div>
      </Container>
    </footer>
  );
}
