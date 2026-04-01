import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Get Involved</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            OmniVital is building the infrastructure for personalized wellness
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-12">
            We're looking for aligned investors, strategic partners, and exceptional early team members who share our vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 md:p-10 max-w-lg mx-auto"
        >
          {submitted ? (
            <div className="py-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display text-lg font-semibold text-foreground mb-2">Thank you</p>
              <p className="text-sm text-muted-foreground">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="text-xs text-muted-foreground block mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1.5">Interest</label>
                <select
                  className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                >
                  <option>Investment</option>
                  <option>Strategic Partnership</option>
                  <option>Joining the Team</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1.5">Message</label>
                <textarea
                  rows={3}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none"
                  placeholder="Tell us about your interest..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all glow-sm"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </motion.div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} OmniVital. All rights reserved.
        </p>
      </div>
    </section>
  );
}
