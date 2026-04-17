import { motion } from "framer-motion";
import heroOrb from "@/assets/hero-orb.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orb image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroOrb}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 gradient-mesh" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              Wellness Operating System · Pre-Launch
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight text-foreground mb-8">
            Not another supplement brand.{" "}
            <span className="text-gradient-primary">A wellness operating system.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Six precision formulas, one ritual. A GPT-4.1 advisor that knows your stack.
            A voice AI you can talk to. A privacy-first community that turns customers into believers.
            <span className="text-foreground"> The retention layer the supplement industry forgot to build.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all glow-md"
          >
            Request Strategy Brief
          </a>
          <a
            href="#ritual"
            className="px-8 py-3.5 rounded-lg border border-border bg-card/40 backdrop-blur text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            See the System →
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          {[
            { v: "$521B", l: "Global supplement market" },
            { v: "27%", l: "AI nutrition CAGR" },
            { v: "$600M", l: "AG1 ARR — single SKU" },
            { v: "0", l: "Competitors with full stack" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card p-5 text-left"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-gradient-primary mb-1">{item.v}</p>
              <p className="text-xs text-muted-foreground leading-tight">{item.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
