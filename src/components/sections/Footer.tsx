import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="section-padding border-t border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="hairline" />
            <span className="eyebrow">An Invitation</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-foreground mb-8">
            Take the practice <span className="italic text-primary">seriously.</span>
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-12 max-w-xl mx-auto">
            The Collective opens to a small first cohort this season. For partners, investors, and the
            uncommonly curious — a more detailed brief is available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <a
              href="mailto:hello@omnivital.co"
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase bg-foreground text-background px-7 py-4 hover:bg-primary transition-colors duration-500"
            >
              Join The Collective
            </a>
            <Link
              to="/strategy"
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-foreground border-b border-foreground/30 hover:border-primary hover:text-primary pb-1 transition-colors"
            >
              Strategy Brief →
            </Link>
          </div>
        </motion.div>

        <div className="border-t border-border pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider text-muted-foreground">
          <p className="font-display text-foreground text-lg italic">OmniVital</p>
          <p>© {new Date().getFullYear()} OmniVital · Considered Wellness</p>
          <a href="mailto:hello@omnivital.co" className="hover:text-foreground transition-colors">
            hello@omnivital.co
          </a>
        </div>
      </div>
    </footer>
  );
}
