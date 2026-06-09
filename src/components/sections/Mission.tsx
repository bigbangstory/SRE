import { mission } from "@/content/content";
import { Reveal } from "@/components/motion/Reveal";

export function Mission() {
  return (
    <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
      {mission.map((m, i) => (
        <Reveal
          key={m.title}
          delay={i * 0.1}
          className="flex flex-col gap-4 border-t border-line pt-7"
        >
          <span className="font-display text-3xl text-accent">{m.n}</span>
          <h3 className="font-serif text-2xl italic text-ink">{m.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{m.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

export default Mission;
