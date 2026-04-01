import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden">
      {/* Subtle glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/3 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
            AI-Powered Wellness Platform
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-6">
            The operating system for{" "}
            <span className="text-gradient-primary">personalized wellness</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            OmniVital combines voice AI, ritual tracking, personalized guidance, and
            privacy-preserving community into a high-retention wellness platform —
            moving beyond commodity supplements into measurable, adaptive routines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#progress"
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all glow-sm"
          >
            View Progress
          </a>
          <a
            href="#platform"
            className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            See the Vision
          </a>
        </motion.div>

        {/* Abstract floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {[
            { label: "Voice AI", value: "Conversational" },
            { label: "Ritual Data", value: "Compounding" },
            { label: "Retention", value: "Subscription-First" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
