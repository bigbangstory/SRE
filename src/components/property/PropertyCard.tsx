import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Property } from "@/data/properties";
import { STATUS_LABEL } from "@/data/properties";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function PropertyCard({ property }: { property: Property }) {
  const meta = [
    property.beds ? `${property.beds} bed` : null,
    property.baths ? `${property.baths} bath` : null,
    property.area ?? null,
  ].filter(Boolean) as string[];

  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-[3px]">
        {property.heroImage ? (
          <Image
            src={property.heroImage}
            alt={property.title}
            width={900}
            height={675}
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.04]"
          />
        ) : (
          <ImagePlaceholder
            label={property.title}
            className="aspect-[4/3] w-full transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.04]"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 text-[10px] uppercase tracking-luxe text-ink backdrop-blur">
          {STATUS_LABEL[property.status]}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-luxe text-accent">
            {property.location}
          </p>
          <h3 className="mt-2 font-display text-xl leading-snug text-ink">
            {property.title}
          </h3>
          {meta.length > 0 ? (
            <p className="mt-2 text-sm text-muted">{meta.join("  ·  ")}</p>
          ) : null}
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-all duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      <p className="mt-3 text-sm text-ink-soft">{property.price}</p>
    </Link>
  );
}

export default PropertyCard;
