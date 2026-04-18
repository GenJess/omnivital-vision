import { motion } from "framer-motion";

const horizons = [
  {
    phase: "I",
    title: "Foundation",
    desc: "The ritual itself. Onboarding, tracking, the voice companion, the dashboard. Built and live.",
  },
  {
    phase: "II",
    title: "Engagement",
    desc: "The Collective expands. Subscriptions, agent-led checkout, peer matching. The practice deepens.",
  },
  {
    phase: "III",
    title: "Intelligence",
    desc: "Wearable signal. Adaptive recommendations. A companion that learns the contours of your life.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding bg-card/30 border-y border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="hairline" />
            <span className="eyebrow">What's Next</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-foreground">
            Three horizons, <span className="italic text-primary">considered.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {horizons.map((h, i) => (
            <motion.div
              key={h.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-background p-10 md:p-12"
            >
              <p className="font-display text-primary text-3xl italic mb-6">{h.phase}</p>
              <h3 className="font-display text-3xl text-foreground mb-4">{h.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
