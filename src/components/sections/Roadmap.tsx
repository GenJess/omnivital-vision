import { motion } from "framer-motion";
import { Layers, Zap, BrainCircuit } from "lucide-react";

const horizons = [
  {
    icon: Layers,
    phase: "Phase 1",
    title: "Foundation",
    status: "Active",
    items: [
      "Core ritual onboarding flow",
      "Ritual tracking & streak mechanics",
      "Authentication & user profiles",
      "Voice AI agent (OV) prototype",
      "Design system & responsive UI",
    ],
  },
  {
    icon: Zap,
    phase: "Phase 2",
    title: "Engagement",
    status: "Next",
    items: [
      "Community chat & peer matching",
      "Subscription management",
      "Guided checkout via AI agent",
      "Notification & reminder system",
      "Expanded product catalog",
    ],
  },
  {
    icon: BrainCircuit,
    phase: "Phase 3",
    title: "Intelligence",
    status: "Future",
    items: [
      "RAG-powered adaptive advisor",
      "Wearable & biomarker integrations",
      "Richer personalization signals",
      "Predictive wellness insights",
      "Partner API & B2B layer",
    ],
  },
];

const statusStyle: Record<string, string> = {
  Active: "bg-emerald-500/20 text-emerald-400",
  Next: "bg-sky-500/20 text-sky-400",
  Future: "bg-violet-500/20 text-violet-400",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/3 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Roadmap</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three horizons of growth
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            A staged plan from core infrastructure through engagement mechanics to adaptive intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {horizons.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7 group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{h.phase}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground">{h.title}</h3>
                </div>
                <span className={`ml-auto text-[10px] tracking-wider uppercase font-medium px-2 py-0.5 rounded ${statusStyle[h.status]}`}>
                  {h.status}
                </span>
              </div>
              <ul className="space-y-2.5">
                {h.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="mt-12 flex items-center gap-0 max-w-2xl mx-auto">
          {horizons.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div className={`h-1.5 w-full rounded-full ${i === 0 ? "bg-primary/60" : i === 1 ? "bg-primary/25" : "bg-border"}`} />
              <p className="text-xs text-muted-foreground mt-2">{h.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
