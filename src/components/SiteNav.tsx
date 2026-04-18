import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const homeLinks = [
  { label: "Ritual", href: "#ritual" },
  { label: "Platform", href: "#platform" },
  { label: "Experience", href: "#experience" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onStrategy = location.pathname === "/strategy";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleAnchor = (href: string) => {
    setOpen(false);
    if (onStrategy) {
      window.location.href = `/${href}`;
    }
  };

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open || onStrategy
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link
          to="/"
          className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
        >
          <img src="/logo.png" alt="OmniVital" className="h-8 w-8 object-contain" width={32} height={32} />
          <span className="font-display text-2xl tracking-tight">OmniVital</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {!onStrategy &&
            homeLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          {onStrategy && (
            <Link
              to="/"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Home
            </Link>
          )}
          <Link
            to="/strategy"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground border border-foreground/40 hover:border-primary hover:text-primary px-5 py-2.5 transition-all"
          >
            Strategy
            <span className="w-1 h-1 rounded-full bg-primary animate-soft-pulse" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-foreground transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {!onStrategy &&
                homeLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => handleAnchor(l.href)}
                    className="block py-3 text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              {onStrategy && (
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground"
                >
                  ← Home
                </Link>
              )}
              <Link
                to="/strategy"
                onClick={() => setOpen(false)}
                className="block mt-4 text-center text-xs tracking-[0.2em] uppercase border border-primary/60 text-primary px-5 py-3"
              >
                Strategy
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
