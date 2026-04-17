import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import networkGrid from "@/assets/network-grid.jpg";

const competitors = [
  { brand: "AG1", sku: "1 greens powder", price: "$99/mo", ai: false, voice: false, community: false, ritual: false },
  { brand: "Ritual", sku: "Multivitamins", price: "$35/mo", ai: false, voice: false, community: false, ritual: false },
  { brand: "Momentous", sku: "Performance", price: "$60-120", ai: false, voice: false, community: false, ritual: false },
  { brand: "Thesis", sku: "Nootropics", price: "$79-119", ai: "quiz", voice: false, community: false, ritual: false },
  { brand: "Seed", sku: "Probiotics", price: "$49/mo", ai: false, voice: false, community: "light", ritual: false },
  { brand: "OmniVital", sku: "6-formula OS", price: "$64-78", ai: true, voice: true, community: true, ritual: true, highlight: true },
];

function Cell({ value }: { value: any }) {
  if (value === true) return <Check className="w-4 h-4 text-primary mx-auto" strokeWidth={2.5} />;
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-[10px] uppercase tracking-wider text-amber-400">{value}</span>;
}

export default function Moat() {
  return (
    <section id="moat" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src={networkGrid} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover mix-blend-screen" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Defensibility</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 max-w-3xl mx-auto leading-tight">
            No competitor has the <span className="text-gradient-primary">full stack.</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            The closest analog is Thesis — a quiz-based personalization layer. Zero voice, zero realtime community, zero persistent advisor.
          </p>
        </motion.div>

        {/* Comparison matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 font-medium text-muted-foreground">Brand</th>
                  <th className="text-left p-4 font-medium text-muted-foreground hidden sm:table-cell">Product</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Price</th>
                  <th className="p-4 font-medium text-muted-foreground text-center">AI</th>
                  <th className="p-4 font-medium text-muted-foreground text-center">Voice</th>
                  <th className="p-4 font-medium text-muted-foreground text-center">Community</th>
                  <th className="p-4 font-medium text-muted-foreground text-center">Ritual System</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <motion.tr
                    key={c.brand}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`border-b border-border/50 transition-colors ${
                      c.highlight ? "bg-primary/5 hover:bg-primary/10" : "hover:bg-muted/20"
                    }`}
                  >
                    <td className={`p-4 font-medium ${c.highlight ? "text-primary" : "text-foreground"}`}>
                      {c.brand}
                      {c.highlight && (
                        <span className="ml-2 text-[9px] uppercase tracking-wider bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                          Us
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-muted-foreground hidden sm:table-cell">{c.sku}</td>
                    <td className="p-4 text-muted-foreground">{c.price}</td>
                    <td className="p-4"><Cell value={c.ai} /></td>
                    <td className="p-4"><Cell value={c.voice} /></td>
                    <td className="p-4"><Cell value={c.community} /></td>
                    <td className="p-4"><Cell value={c.ritual} /></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Moat layers */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[
            { stat: "86%", label: "Projected gross margin", note: "vs 70-80% best-in-class DTC" },
            { stat: "24:1", label: "LTV:CAC (conservative)", note: "AI advisor + community = retention" },
            { stat: "12-18mo", label: "Competitive window", note: "AG1/Thesis too big to pivot fast" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 text-center"
            >
              <p className="font-display text-4xl font-bold text-gradient-primary mb-2">{m.stat}</p>
              <p className="text-sm text-foreground font-medium">{m.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{m.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
