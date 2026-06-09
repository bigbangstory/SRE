import Image from "next/image";
import { portfolio } from "@/content/content";
import { Reveal } from "@/components/motion/Reveal";

export function PortfolioCategories() {
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-3">
      {portfolio.map((c, i) => (
        <Reveal key={c.title} delay={i * 0.1} className="group flex flex-col">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
            <Image
              src={c.image}
              alt={c.title}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.05]"
            />
          </div>
          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-sm text-accent">{c.n}</span>
            <h3 className="font-display text-base uppercase tracking-caps text-ink">
              {c.title}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

export default PortfolioCategories;
