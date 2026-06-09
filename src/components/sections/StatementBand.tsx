import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

export function StatementBand({
  image,
  eyebrow,
  statement,
  align = "center",
}: {
  image: string;
  eyebrow?: string;
  statement: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink-canvas/80" />
      </div>
      {/* faint roofline watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/brand/roofline-watermark.png"
          alt=""
          width={1398}
          height={710}
          className="w-[72%] max-w-2xl opacity-[0.07]"
        />
      </div>

      <Container className="relative py-20 sm:py-28">
        <Reveal
          className={cn(
            "mx-auto flex max-w-3xl flex-col gap-6",
            align === "center" && "items-center text-center",
          )}
        >
          {eyebrow ? <Eyebrow dark>{eyebrow}</Eyebrow> : null}
          <p className="font-serif text-balance text-3xl leading-[1.18] text-ink-text sm:text-4xl lg:text-[2.85rem]">
            {statement}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export default StatementBand;
