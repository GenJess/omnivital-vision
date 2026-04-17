import { motion } from "framer-motion";

const stats = [
  { value: "$521.4B", label: "Global Supplement Market", year: "2025" },
  { value: "$80.4B", label: "Nootropics by 2035", year: "14.19% CAGR" },
  { value: "$10.2B", label: "AI Personalized Nutrition", year: "27.21% CAGR" },
  { value: "$600M", label: "AG1 Annual Revenue", year: "Single SKU" },
];

const shifts = [
  {
    title: "AG1 proved the model — at $600M ARR",
    body: "DTC subscription wellness works at scale. AG1 did it with a podcast ad and one green powder. The category is validated.",
  },
  {
    title: "AI is now table stakes",
    body: "ElevenLabs voice + GPT-4.1 has crossed the line from gimmick to magical. OmniVital was built AI-native from day one.",
  },
  {
    title: "Biohacking went mainstream",
    body: "Post-COVID wellness boom hasn't plateaued. Optimization is no longer fringe — it's a $100B+ consumer category.",
  },
  {
    title: "The 'Ritual' framing is timed perfectly",
    body: "Mindfulness, routines, protocols. Culture has moved past 'pop a vitamin' to 'design your day'. OmniVital owns this language.",
  },
];

export default function WhyNow() {
  return (
    <section id="why-now" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Why Now</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
            A <span className="text-gradient-primary">$521B market</span> waiting for software.
          </h2>
        </motion.div>

        {/* Stat band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.4)" }}
              className="glass-card p-6 border"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-primary mb-2">{s.value}</p>
              <p className="text-sm text-foreground">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.year}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {shifts.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-7 group hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-4">
                <span className="font-display text-2xl font-bold text-primary/40 shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
