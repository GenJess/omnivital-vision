import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Why Now", href: "#why-now" },
  { label: "Ritual OS", href: "#ritual" },
  { label: "Platform", href: "#platform" },
  { label: "How It Works", href: "#experience" },
  { label: "Moat", href: "#moat" },
  { label: "Progress", href: "#progress" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function MobileNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || open ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight text-foreground">
          Omni<span className="text-gradient-primary">Vital</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:brightness-110 transition-all glow-sm"
          >
            Strategy
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 pt-2"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center text-sm font-medium bg-primary text-primary-foreground px-4 py-2.5 rounded-lg"
            >
              Request Strategy Brief →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
