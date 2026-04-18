import { motion } from "framer-motion";
import heroImg from "@/assets/hero-editorial.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden grain">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A figure in cream cashmere, in stillness — the morning ritual"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-32 pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="hairline" />
            <span className="eyebrow">Est. 2026 · Wellness, Reconsidered</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-foreground mb-8"
          >
            The ritual,{" "}
            <span className="italic text-primary">precision built.</span>
            <br />
            The companion,{" "}
            <span className="italic text-primary">always present.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed font-light mb-12"
          >
            Six considered formulas, organised across the day. An intelligent advisor, attuned to your stack.
            A quiet community of people who care about how they live.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a
              href="#ritual"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase bg-foreground text-background px-7 py-4 hover:bg-primary transition-all duration-500"
            >
              Discover the Ritual
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#philosophy"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-foreground border-b border-foreground/30 hover:border-primary hover:text-primary pb-1 transition-colors"
            >
              Our Philosophy
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 hidden md:block text-[10px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 origin-bottom-right"
      >
        Scroll to begin
      </motion.div>
    </section>
  );
}
