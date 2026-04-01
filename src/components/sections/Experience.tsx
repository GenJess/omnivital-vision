import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Onboard & Discover Goals",
    desc: "Users share their wellness priorities — sleep, energy, focus, nutrition — and OV builds a baseline understanding.",
  },
  {
    num: "02",
    title: "Receive Personalized Rituals",
    desc: "The recommendation engine surfaces a curated set of daily and weekly rituals tailored to individual goals and constraints.",
  },
  {
    num: "03",
    title: "Check In Daily",
    desc: "Users log adherence and feelings through voice or tap. Each check-in feeds data back into the system.",
  },
  {
    num: "04",
    title: "Track Progress & Streaks",
    desc: "The Ritual Dashboard visualizes adherence, streaks, and self-reported outcomes — creating accountability and motivation.",
  },
  {
    num: "05",
    title: "Continuously Improve",
    desc: "Over time, recommendations adapt. The AI guide synthesizes patterns, suggests adjustments, and deepens personalization.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Product Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How OmniVital works
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            OV — the AI wellness guide — is the front door to the experience. It turns onboarding into a conversation and routines into a system.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="relative z-10 w-10 h-10 md:w-16 md:h-16 shrink-0 rounded-full bg-card border border-border flex items-center justify-center">
                  <span className="font-display text-sm md:text-base font-bold text-primary">{s.num}</span>
                </div>
                <div className="glass-card p-5 md:p-6 flex-1">
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
