import { motion } from "framer-motion";
import { TrendingDown, Package, UserX, EyeOff } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Acquire, Disappear, Churn",
    body: "Brands optimize for the first purchase, then go silent. Most subscribers cancel within 60 days.",
  },
  {
    icon: Package,
    title: "Commoditized SKUs",
    body: "Green powders. Multivitamins. Protein. Private-label economics make switching costs zero.",
  },
  {
    icon: UserX,
    title: "No Real Personalization",
    body: "A 5-question quiz isn't personalization. Real adaptation requires persistent context — which nobody is building.",
  },
  {
    icon: EyeOff,
    title: "No Retention Loop",
    body: "No advisor. No streaks. No community. Customers have no reason to open the app — or remember the brand.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">The Problem</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Most supplement brands are <span className="text-gradient-primary">logistics companies</span> with marketing budgets.
          </h2>
          <p className="text-muted-foreground text-lg">
            They sell you a bottle. They never talk to you again. The wellness industry has zero retention infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 group hover:border-primary/40 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
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
