import Image from "next/image";
import type { Property } from "@/data/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

/** Refined empty state shown until real listings are added to the data layer. */
function EmptyState() {
  return (
    <Reveal className="relative overflow-hidden rounded-[3px]">
      <div className="relative h-[440px] w-full sm:h-[480px]">
        <Image
          src="/brand/interior.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink-canvas/72" />
      </div>
      <div className="absolute inset-0 grid place-items-center px-6 text-center">
        <div className="flex max-w-lg flex-col items-center gap-5">
          <span className="text-[11px] uppercase tracking-luxe text-accent-soft">
            By appointment
          </span>
          <h3 className="font-serif text-3xl text-ink-text sm:text-4xl">
            The finest homes are rarely advertised
          </h3>
          <p className="text-pretty text-sm leading-relaxed text-ink-text/80">
            Our current residences are shared discreetly, on enquiry. Tell us
            what you are looking for and we will open the right doors.
          </p>
          <Button href="/contact" onDark arrow className="mt-2">
            Request access
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function PropertyGrid({ properties }: { properties: Property[] }) {
  if (properties.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property, i) => (
        <Reveal key={property.id} delay={i * 0.08}>
          <PropertyCard property={property} />
        </Reveal>
      ))}
    </div>
  );
}

export default PropertyGrid;
