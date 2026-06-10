"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const EASE = [0.16, 1, 0.3, 1] as const;

const META = [
  "Vasant Vihar, New Delhi",
  "UHNIs · Corporates · Embassies",
  "Available 24/7",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden"
    >
      {/* Full-bleed image with gentle parallax */}
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-0 scale-[1.1]"
      >
        <Image
          src="/brand/hero-terrace.jpg"
          alt="A premium rooftop terrace residence represented by Suri Real Estate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Scrims: top for nav legibility, bottom-left for hero copy */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-canvas/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-ink-canvas/90 via-ink-canvas/45 to-transparent" />

      <Container className="relative z-10 flex h-full flex-col justify-end pb-14 sm:pb-16">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-[11px] uppercase tracking-luxe text-white/80"
          >
            <span className="h-px w-8 bg-accent" />
            Private Real Estate · New Delhi
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-balance text-[2.85rem] leading-[1.02] text-white sm:text-6xl lg:text-7xl"
          >
            Where premium meets{" "}
            <span className="italic text-accent-soft">personal.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
          >
            From Lutyens&rsquo; timeless avenues to prime commercial and
            farmhouse estates, we represent the rare and the remarkable across
            the NCR.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button href="/properties" onDark arrow>
              View portfolio
            </Button>
            <Button
              href="/contact"
              variant="glass"
              onDark
              refractImage="/brand/hero-terrace.jpg"
            >
              Partner with us
            </Button>
          </motion.div>

          {/* Meta strip fills the lower band and adds substance */}
          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-7 text-[11px] uppercase tracking-luxe text-white/65"
          >
            {META.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      {!reduce ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-white/55" />
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  );
}
