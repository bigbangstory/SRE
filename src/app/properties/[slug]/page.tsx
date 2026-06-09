import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  getProperties,
  getPropertyBySlug,
  STATUS_LABEL,
} from "@/data/properties";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const all = await getProperties();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return { title: "Property" };
  return { title: property.title, description: property.description };
}

export default async function PropertyDetailPage({ params }: Params) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();

  const specs = [
    property.beds ? { label: "Bedrooms", value: String(property.beds) } : null,
    property.baths ? { label: "Bathrooms", value: String(property.baths) } : null,
    property.area ? { label: "Area", value: property.area } : null,
    { label: "Status", value: STATUS_LABEL[property.status] },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="pt-28">
      <Container>
        <Reveal>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All properties
          </Link>
        </Reveal>
        <Reveal className="mt-6 flex flex-col gap-3">
          <span className="text-[11px] uppercase tracking-luxe text-accent">
            {property.location}
          </span>
          <h1 className="font-serif text-4xl text-ink sm:text-5xl">
            {property.title}
          </h1>
          <p className="text-lg text-ink-soft">{property.price}</p>
        </Reveal>
      </Container>

      <Container className="mt-10">
        <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[3px]">
          {property.heroImage ? (
            <Image
              src={property.heroImage}
              alt={property.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          ) : (
            <ImagePlaceholder label={property.title} className="h-full w-full" />
          )}
        </Reveal>
      </Container>

      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="order-2 lg:order-1">
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">
              {property.description}
            </p>
            {property.features.length > 0 ? (
              <>
                <h2 className="mt-10 font-display text-lg uppercase tracking-caps text-ink">
                  Features
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {property.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </Reveal>

          <Reveal className="glass order-1 h-fit rounded-[24px] p-8 lg:order-2">
            <h2 className="font-display text-sm uppercase tracking-caps text-ink">
              Overview
            </h2>
            <dl className="mt-5 flex flex-col divide-y divide-line">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <dt className="text-muted">{s.label}</dt>
                  <dd className="text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
            <Button href="/contact" arrow className="mt-6 w-full">
              Enquire
            </Button>
          </Reveal>
        </div>

        {property.gallery && property.gallery.length > 0 ? (
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {property.gallery.map((g, i) => (
              <Reveal
                key={g}
                delay={i * 0.05}
                className="relative aspect-[4/3] overflow-hidden rounded-[3px]"
              >
                <Image
                  src={g}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>
        ) : null}
      </Container>
    </article>
  );
}
