import { motion } from "framer-motion";
import { Sparkles, Brain, Activity, Repeat } from "lucide-react";

const shifts = [
  {
    icon: Sparkles,
    title: "Personalization Over Generic",
    body: "Consumers increasingly reject one-size-fits-all wellness. The expectation is shifting toward adaptive, data-informed routines.",
  },
  {
    icon: Brain,
    title: "AI Enables Scalable Guidance",
    body: "Conversational AI makes personalized coaching economically viable at scale — something previously limited to concierge-tier services.",
  },
  {
    icon: Activity,
    title: "Biomonitoring Goes Mainstream",
    body: "Wearables and at-home health data are creating new signal sources that can inform and refine wellness recommendations.",
  },
  {
    icon: Repeat,
    title: "Retention > Acquisition",
    body: "Subscription economics reward platforms that drive long-term engagement. The highest-value wellness brands will be retention-first.",
  },
];

export default function WhyNow() {
  return (
    <section id="why-now" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Why Now</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            The market is inflecting toward intelligent wellness
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Four converging trends are creating a once-in-a-generation opportunity to build the definitive wellness platform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {shifts.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 flex gap-5 group hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
