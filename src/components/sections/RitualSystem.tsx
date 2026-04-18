import { motion } from "framer-motion";
import ritualImg from "@/assets/ritual-still-life.jpg";

const windows = [
  {
    time: "Morning",
    label: "Activate",
    formulas: [
      { name: "OV Drive", hero: "Cordyceps Militaris", note: "Caffeine-free vitality" },
      { name: "OV Adapt", hero: "KSM-66 Ashwagandha", note: "Stress resilience" },
    ],
  },
  {
    time: "Midday",
    label: "Sustain",
    formulas: [
      { name: "OV Bright", hero: "affron® Saffron", note: "Mood, lifted" },
      { name: "OV Quiet Focus", hero: "Cognizin® CDP-Choline", note: "Calm concentration" },
    ],
  },
  {
    time: "Evening",
    label: "Recover",
    formulas: [
      { name: "OV Neuro Night", hero: "Magnesium Glycinate", note: "Sleep architecture" },
      { name: "OV Cortex", hero: "BaCognize® Bacopa", note: "Memory & cognition" },
    ],
  },
];

export default function RitualSystem() {
  return (
    <section id="ritual" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="hairline" />
            <span className="eyebrow">The Ritual</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-foreground mb-6">
            Six formulas. <span className="italic text-primary">Three windows.</span>
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Considered actives, in clinical doses, organised into a structure that compounds.
          </p>
        </motion.div>

        {/* Editorial still life */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-[16/8] overflow-hidden mb-16 md:mb-24 max-w-5xl mx-auto"
        >
          <img
            src={ritualImg}
            alt="The six formulas — still life in stone and bone"
            loading="lazy"
            width={1920}
            height={1024}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Three windows */}
        <div className="grid md:grid-cols-3 gap-px bg-border max-w-6xl mx-auto">
          {windows.map((w, i) => (
            <motion.div
              key={w.time}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-background p-8 md:p-10"
            >
              <div className="mb-8">
                <p className="eyebrow mb-3">{w.label}</p>
                <h3 className="font-display text-3xl md:text-4xl text-foreground italic">{w.time}</h3>
              </div>

              <div className="space-y-6">
                {w.formulas.map((f) => (
                  <div key={f.name} className="border-t border-border pt-5">
                    <p className="font-display text-xl text-foreground">{f.name}</p>
                    <p className="text-xs text-primary tracking-wide mt-1">{f.hero}</p>
                    <p className="text-sm text-muted-foreground font-light mt-2">{f.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality marks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 max-w-3xl mx-auto"
        >
          {["Patented Actives", "Clinical Dosages", "3rd-Party Tested", "GMP-Certified", "Non-GMO", "Vegan"].map((b) => (
            <span key={b} className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
