import Image from "next/image";
import { portfolio } from "@/content/content";
import { Reveal } from "@/components/motion/Reveal";

export function PortfolioCategories() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {portfolio.map((c, i) => (
        <Reveal key={c.title} delay={i * 0.1} className="group flex flex-col">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[3px]">
            <Image
              src={c.image}
              alt={c.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-canvas/85 via-ink-canvas/20 to-transparent" />
            {/* hover accent line */}
            <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-luxe group-hover:scale-x-100" />
            <div className="absolute inset-x-5 bottom-5">
              <div className="glass-dark inline-flex items-center gap-2.5 rounded-full px-4 py-2.5">
                <span className="font-display text-xs tracking-caps text-accent-soft">
                  {c.n}
                </span>
                <h3 className="font-display text-[13px] uppercase tracking-caps text-white">
                  {c.title}
                </h3>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{c.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

export default PortfolioCategories;
