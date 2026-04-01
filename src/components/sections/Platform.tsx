import { motion } from "framer-motion";
import { Mic, BarChart3, Cpu, Shield } from "lucide-react";

const pillars = [
  {
    icon: Mic,
    title: "Voice-First AI",
    desc: "OV, the conversational wellness companion, guides users through routines, answers questions, and adapts recommendations — all via natural voice interaction.",
    value: "Increases engagement through low-friction, high-trust interactions.",
  },
  {
    icon: BarChart3,
    title: "Ritual Dashboard",
    desc: "A quantitative tracking layer where users log adherence, feelings, streaks, and progress. Every ritual becomes measurable.",
    value: "Creates compounding data that deepens personalization over time.",
  },
  {
    icon: Cpu,
    title: "Recommendation Engine",
    desc: "Personalized guidance synthesized from user goals, routine data, and — eventually — biomarker signals to surface the right next action.",
    value: "Drives retention by continuously improving the user's experience.",
  },
  {
    icon: Shield,
    title: "Privacy-Preserving Community",
    desc: "Peer engagement mechanics that foster accountability and belonging without requiring users to share sensitive health data.",
    value: "Builds network effects and belonging while respecting data boundaries.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">The Platform</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            A system, not a storefront
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            OmniVital is designed as an integrated wellness platform where every layer reinforces engagement, retention, and personalization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-7 group hover:border-primary/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <p className="text-xs text-accent-foreground bg-accent/40 px-3 py-1.5 rounded-md inline-block">
                {p.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
