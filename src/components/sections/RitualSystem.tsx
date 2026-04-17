import { motion } from "framer-motion";
import { Sun, Sunrise, Moon } from "lucide-react";
import ritualImg from "@/assets/ritual-windows.jpg";

const windows = [
  {
    icon: Sunrise,
    time: "Morning",
    label: "Activate",
    formulas: [
      { name: "OV Drive", hero: "Cordyceps Militaris", goal: "Caffeine-free energy" },
      { name: "OV Adapt", hero: "KSM-66 Ashwagandha", goal: "Stress resilience" },
    ],
  },
  {
    icon: Sun,
    time: "Midday",
    label: "Sustain",
    formulas: [
      { name: "OV Bright", hero: "affron® Saffron", goal: "Mood support" },
      { name: "OV Quiet Focus", hero: "Cognizin® CDP-Choline", goal: "Calm concentration" },
    ],
  },
  {
    icon: Moon,
    time: "Evening",
    label: "Recover",
    formulas: [
      { name: "OV Neuro Night", hero: "Magnesium Glycinate", goal: "Sleep architecture" },
      { name: "OV Cortex", hero: "BaCognize® Bacopa", goal: "Memory & cognition" },
    ],
  },
];

export default function RitualSystem() {
  return (
    <section id="ritual" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <img
          src={ritualImg}
          alt=""
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">The Ritual System</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
            Six precision formulas. <span className="text-gradient-primary">Three daily windows.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Clinically studied patented ingredients. Research-validated dosages.
            Organized into a ritual that compounds — instead of a bottle that gets forgotten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {windows.map((w, i) => (
            <motion.div
              key={w.time}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 group hover:border-primary/40 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <w.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{w.label}</p>
                  <p className="font-display text-lg font-semibold text-foreground">{w.time}</p>
                </div>
              </div>

              <div className="space-y-3">
                {w.formulas.map((f) => (
                  <div
                    key={f.name}
                    className="p-4 rounded-lg bg-muted/40 border border-border/60 hover:border-primary/30 transition-colors"
                  >
                    <p className="font-display text-base font-semibold text-foreground">{f.name}</p>
                    <p className="text-xs text-primary/80 mt-0.5">{f.hero}</p>
                    <p className="text-xs text-muted-foreground mt-1.5">{f.goal}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {["Patented Actives", "Clinical Dosages", "3rd-Party Tested", "GMP-Certified", "Non-GMO", "Vegan"].map((b) => (
            <span
              key={b}
              className="text-xs text-muted-foreground border border-border px-3 py-1.5 rounded-full bg-card/40"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
