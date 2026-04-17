import { motion } from "framer-motion";
import { Mic, BarChart3, Cpu, Shield } from "lucide-react";
import voiceWave from "@/assets/voice-wave.jpg";

const pillars = [
  {
    icon: Mic,
    title: "OV Voice Advisor",
    desc: "ElevenLabs-powered floating orb. Tap to talk. The advisor knows your exact stack, today's check-in, and your streak.",
    value: "24/7 customer success that never sleeps.",
  },
  {
    icon: BarChart3,
    title: "Ritual Dashboard",
    desc: "Daily 1–5 feeling check-ins. Streak bars. Monthly heatmap. Every interaction compounds into a personal data graph.",
    value: "Compounding data deepens personalization.",
  },
  {
    icon: Cpu,
    title: "OV GPT-4.1 Advisor",
    desc: "A persistent AI that knows your formulas, history, and goals — and can reason about ingredient stacking and timing.",
    value: "Re-engagement that drives retention.",
  },
  {
    icon: Shield,
    title: "The Collective",
    desc: "Privacy-first community. Connect by color tag, not real name. Realtime threads. Belonging without exposure.",
    value: "Network effects without compromising data.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="section-padding relative overflow-hidden">
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-20 pointer-events-none">
        <img src={voiceWave} alt="" loading="lazy" width={1536} height={768} className="w-full h-full object-cover mix-blend-screen" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">The Platform</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
            The software layer that makes <span className="text-gradient-primary">supplements sticky.</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            AG1, Ritual, Thesis — they all sell bottles. OmniVital sells a system. Four integrated layers, designed for retention.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-7 group hover:border-primary/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
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
