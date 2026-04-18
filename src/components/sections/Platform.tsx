import { motion } from "framer-motion";

const pillars = [
  {
    no: "01",
    title: "OV — Voice Companion",
    body: "An intelligent presence, available the moment you need it. Tap. Speak. Receive considered guidance, attuned to your formulas, your day, your history.",
  },
  {
    no: "02",
    title: "The Daily Ritual",
    body: "A quiet dashboard for your practice. Adherence. Feeling. Streak. Months become a quiet record of how you have shown up for yourself.",
  },
  {
    no: "03",
    title: "The Advisor",
    body: "A persistent, deeply contextual intelligence — knowing your stack, your patterns, your goals. The kind of attention previously reserved for concierge medicine.",
  },
  {
    no: "04",
    title: "The Collective",
    body: "A privacy-first community. You are known by colour, not by name. Quiet conversations among people who take their practice seriously.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="section-padding bg-card/30 border-y border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="hairline" />
            <span className="eyebrow">The Companion</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-foreground">
            Four quiet layers, <span className="italic text-primary">one practice.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <p className="font-display text-primary text-2xl italic mb-4">{p.no}</p>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                {p.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
