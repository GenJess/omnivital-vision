import { motion } from "framer-motion";
import spaceImg from "@/assets/space-architecture.jpg";

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-padding relative overflow-hidden">
      <div className="container-narrow grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="md:col-span-5"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={spaceImg}
              alt="Architectural stillness — a space designed for the daily ritual"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-7"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="hairline" />
            <span className="eyebrow">Philosophy</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground mb-8">
            Wellness is not <span className="italic text-primary">a product.</span>
            <br />
            It is <span className="italic text-primary">a practice.</span>
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed font-light max-w-lg">
            <p>
              The industry has, for decades, sold bottles. Promises in capsule form, taken once and
              forgotten. We were taught to optimise without intention.
            </p>
            <p>
              OmniVital begins from a different premise. That the act of caring for oneself is a
              ritual — deliberate, considered, repeated. And that the right tools, used with quiet
              consistency, compound into something extraordinary.
            </p>
            <p className="text-foreground">
              We are not a supplement company. We are the companion that makes the practice stick.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
