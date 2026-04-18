import { motion } from "framer-motion";
import pourImg from "@/assets/ritual-pour.jpg";

const steps = [
  { n: "I", title: "Begin with intention", body: "A short conversation reveals your goals — energy, focus, sleep, calm. Your first ritual is shaped." },
  { n: "II", title: "Receive your formulas", body: "Six formulas, arranged into morning, midday, and evening. Considered ingredients in clinical doses." },
  { n: "III", title: "Practice, daily", body: "A single check-in. One feeling. Your streak grows. The act of returning becomes the practice." },
  { n: "IV", title: "Speak with OV", body: "Tap the orb. Ask anything. The companion knows your stack — and answers as if it has known you for years." },
  { n: "V", title: "Compound, quietly", body: "Months pass. Your data graph deepens. Recommendations sharpen. The practice becomes second nature." },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="md:col-span-5 md:sticky md:top-32 md:self-start"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="hairline" />
            <span className="eyebrow">The Practice</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground mb-8">
            How a day <span className="italic text-primary">unfolds.</span>
          </h2>
          <div className="aspect-[4/5] overflow-hidden mt-10 max-w-sm">
            <img
              src={pourImg}
              alt="A morning pour — the ritual begins"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="md:col-span-7 space-y-12 md:space-y-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="border-t border-border pt-8 md:pt-10 grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-6"
            >
              <p className="font-display text-3xl md:text-4xl text-primary italic">{s.n}</p>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-md">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
