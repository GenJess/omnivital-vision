import { motion } from "framer-motion";
import { MessageSquare, Database, RefreshCw, Plug, Users } from "lucide-react";

const layers = [
  {
    icon: MessageSquare,
    title: "Conversational Interface",
    desc: "Voice-first AI increases engagement frequency and builds user trust in ways static product pages cannot.",
    depth: 1,
  },
  {
    icon: Database,
    title: "Compounding Routine Data",
    desc: "Every check-in deepens the data graph. Over time, OmniVital understands users better than any competitor entering fresh.",
    depth: 2,
  },
  {
    icon: RefreshCw,
    title: "Personalized Feedback Loops",
    desc: "Adaptive recommendations increase lifetime value and retention by continuously improving outcomes.",
    depth: 3,
  },
  {
    icon: Plug,
    title: "Health Integrations",
    desc: "Future wearable and biomarker integrations deepen signal quality — increasing switching costs and recommendation accuracy.",
    depth: 4,
  },
  {
    icon: Users,
    title: "Privacy-Preserving Community",
    desc: "Network effects create belonging and accountability without compromising sensitive health data.",
    depth: 5,
  },
];

export default function Moat() {
  return (
    <section id="moat" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Defensibility</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why OmniVital wins
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Each layer of the platform reinforces the others, creating compounding defensibility that grows with every user interaction.
          </p>
        </motion.div>

        {/* Layered moat visualization */}
        <div className="max-w-3xl mx-auto space-y-3">
          {layers.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-5 md:p-6 flex items-start gap-5 group hover:border-primary/30 transition-colors"
              style={{ marginLeft: `${i * 12}px`, marginRight: `${(4 - i) * 12}px` }}
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <l.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display text-base font-semibold text-foreground">{l.title}</h3>
                  <span className="text-[10px] tracking-wider uppercase text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    Layer {l.depth}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          Each layer deepens the moat. Combined, they create defensibility that compounds with scale.
        </motion.p>
      </div>
    </section>
  );
}
