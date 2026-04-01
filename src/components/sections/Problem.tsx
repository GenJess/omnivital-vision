import { motion } from "framer-motion";
import { TrendingDown, Package, UserX, EyeOff } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Low Retention",
    body: "Most wellness brands see dramatic churn after initial purchase. Without ongoing value, customers leave within 60 days.",
  },
  {
    icon: Package,
    title: "Commodity Products",
    body: "Supplements are undifferentiated. Private-label economics make switching costs near zero for consumers.",
  },
  {
    icon: UserX,
    title: "No Personalization",
    body: "One-size-fits-all recommendations ignore individual biology, lifestyle, and goals — leading to poor outcomes and disengagement.",
  },
  {
    icon: EyeOff,
    title: "No Measurable Progress",
    body: "Users have no objective way to know if a routine is working. Without visibility into outcomes, motivation fades.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Problem() {
  return (
    <section id="problem" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">The Problem</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Traditional wellness brands are structurally weak
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            The industry optimizes for acquisition, not retention. Most brands lack the tools to keep users engaged, accountable, or improving.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="glass-card p-6 group hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
