import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Home, AlertTriangle, TrendingUp, Layers, Sparkles, Workflow, Shield, ListChecks, Map, Compass } from "lucide-react";

const items = [
  { id: "hero", label: "Top", icon: Home },
  { id: "problem", label: "Problem", icon: AlertTriangle },
  { id: "why-now", label: "Why Now", icon: TrendingUp },
  { id: "ritual", label: "Ritual OS", icon: Layers },
  { id: "platform", label: "Platform", icon: Sparkles },
  { id: "experience", label: "How It Works", icon: Workflow },
  { id: "moat", label: "Moat", icon: Shield },
  { id: "progress", label: "Progress", icon: ListChecks },
  { id: "roadmap", label: "Roadmap", icon: Map },
  { id: "contact", label: "Strategy", icon: Compass },
];

function DockItem({
  item,
  mouseY,
  active,
  onClick,
}: {
  item: typeof items[number];
  mouseY: any;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const sizeTransform = useTransform(distance, [-120, 0, 120], [40, 64, 40]);
  const size = useSpring(sizeTransform, { mass: 0.1, stiffness: 200, damping: 15 });

  const Icon = item.icon;

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ width: size, height: size }}
      aria-label={item.label}
      className={`relative flex items-center justify-center rounded-full border transition-colors ${
        active
          ? "bg-primary/20 border-primary/60 text-primary"
          : "bg-card/70 border-border/60 text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="w-1/2 h-1/2" strokeWidth={1.75} />

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-card border border-border text-xs text-foreground whitespace-nowrap shadow-lg"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function DockNav() {
  const mouseY = useMotionValue(Infinity);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -40% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex"
    >
      <div className="flex flex-col items-center gap-2 px-2 py-3 rounded-full bg-background/60 backdrop-blur-xl border border-border/60 shadow-2xl">
        {items.map((item) => (
          <DockItem
            key={item.id}
            item={item}
            mouseY={mouseY}
            active={active === item.id}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}
