import { useState } from "react";
import { motion } from "framer-motion";

type Status = "Live" | "Prototype" | "Planned" | "Gap";

interface Item {
  label: string;
  status: Status;
}

const columns: { title: string; items: Item[] }[] = [
  {
    title: "Built",
    items: [
      { label: "Consumer-facing pages", status: "Live" },
      { label: "Product detail page", status: "Live" },
      { label: "Authentication flow", status: "Live" },
      { label: "Ritual Dashboard", status: "Live" },
      { label: "AI voice agent / Ritual Advisor widget", status: "Prototype" },
      { label: "Backend foundation (DB, auth, security)", status: "Live" },
      { label: "Design system foundation", status: "Live" },
    ],
  },
  {
    title: "In Progress / Planned",
    items: [
      { label: "Live community chat", status: "Planned" },
      { label: "Privacy-preserving peer matching", status: "Planned" },
      { label: "Apple Watch / Google Fit integrations", status: "Planned" },
      { label: "RAG-powered advisor", status: "Planned" },
      { label: "Subscription management", status: "Planned" },
      { label: "Agent-driven checkout", status: "Planned" },
    ],
  },
  {
    title: "Gaps to Close",
    items: [
      { label: "Transactional logic for 'Add to Ritual'", status: "Gap" },
      { label: "Full community functionality beyond preview", status: "Gap" },
      { label: "Deeper AI context injection / tool use", status: "Gap" },
    ],
  },
];

const statusColors: Record<Status, string> = {
  Live: "bg-emerald-500/20 text-emerald-400",
  Prototype: "bg-amber-500/20 text-amber-400",
  Planned: "bg-sky-500/20 text-sky-400",
  Gap: "bg-rose-500/20 text-rose-400",
};

const tabs = columns.map((c) => c.title);

export default function Progress() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="progress" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Progress Tracker</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's been built — and what's next
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            A transparent view of current capabilities, planned features, and known gaps.
          </p>
        </motion.div>

        {/* Mobile tabs */}
        <div className="flex md:hidden gap-1 mb-6 bg-muted rounded-lg p-1">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`flex-1 text-xs font-medium py-2 rounded-md transition-colors ${
                activeTab === i ? "bg-card text-foreground" : "text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Desktop: 3 columns / Mobile: active tab */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {columns.map((col, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-5 pb-3 border-b border-border">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-3">
                    <span className={`text-[10px] tracking-wider uppercase font-medium px-2 py-0.5 rounded mt-0.5 shrink-0 ${statusColors[item.status]}`}>
                      {item.status}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden glass-card p-6">
          <ul className="space-y-3">
            {columns[activeTab].items.map((item, ii) => (
              <li key={ii} className="flex items-start gap-3">
                <span className={`text-[10px] tracking-wider uppercase font-medium px-2 py-0.5 rounded mt-0.5 shrink-0 ${statusColors[item.status]}`}>
                  {item.status}
                </span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
