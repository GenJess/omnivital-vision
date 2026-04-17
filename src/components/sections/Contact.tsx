import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Lock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Lock className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium tracking-wider uppercase text-primary">Strategy · By Invitation</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
            We're building the <span className="text-gradient-primary">infrastructure</span> for personalized wellness.
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">
            Investors, strategic partners, and exceptional operators — request a strategy brief.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-5 max-w-4xl mx-auto">
          {/* Side panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass-card p-7 space-y-6"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Stage</p>
              <p className="font-display text-base font-semibold text-foreground">Pre-launch · Building</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Status</p>
              <p className="font-display text-base font-semibold text-foreground">90% built · weeks from launch</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Open conversations</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> Pre-seed / seed capital</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> Strategic partnerships</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> Founding team</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> Manufacturing partners</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-border">
              <a href="mailto:strategy@omnivital.co" className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                <Mail className="w-4 h-4" />
                strategy@omnivital.co
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 glass-card p-7 md:p-8"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-xl font-semibold text-foreground mb-2">Brief requested.</p>
                <p className="text-sm text-muted-foreground">We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-muted/60 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground block mb-1.5">Organization</label>
                    <input
                      type="text"
                      className="w-full bg-muted/60 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                      placeholder="Fund / company"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-muted/60 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                    placeholder="you@firm.com"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1.5">Interest</label>
                  <select className="w-full bg-muted/60 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors">
                    <option>Investment — pre-seed / seed</option>
                    <option>Strategic partnership</option>
                    <option>Founding team</option>
                    <option>Manufacturing / supply</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1.5">Context</label>
                  <textarea
                    rows={3}
                    className="w-full bg-muted/60 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors resize-none"
                    placeholder="A few lines on why OmniVital fits your thesis..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all glow-md flex items-center justify-center gap-2"
                >
                  Request Strategy Brief
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <p className="mt-16 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} OmniVital. The Wellness Operating System.
        </p>
      </div>
    </section>
  );
}
