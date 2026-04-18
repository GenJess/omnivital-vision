import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";

const competitors = [
  { brand: "AG1", sku: "1 greens powder", price: "$99/mo", ai: false, voice: false, community: false, ritual: false },
  { brand: "Ritual", sku: "Multivitamins", price: "$35/mo", ai: false, voice: false, community: false, ritual: false },
  { brand: "Momentous", sku: "Performance", price: "$60–120", ai: false, voice: false, community: false, ritual: false },
  { brand: "Thesis", sku: "Nootropics", price: "$79–119", ai: "quiz", voice: false, community: false, ritual: false },
  { brand: "Seed", sku: "Probiotics", price: "$49/mo", ai: false, voice: false, community: "light", ritual: false },
  { brand: "OmniVital", sku: "6-formula OS", price: "$64–78", ai: true, voice: true, community: true, ritual: true, highlight: true },
];

function Cell({ value }: { value: any }) {
  if (value === true) return <Check className="w-4 h-4 text-primary mx-auto" strokeWidth={1.75} />;
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" strokeWidth={1.5} />;
  return <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground italic">{value}</span>;
}

const market = [
  { v: "$521.4B", l: "Global supplement market", n: "2025" },
  { v: "$80.4B", l: "Nootropics by 2035", n: "14.2% CAGR" },
  { v: "$10.2B", l: "AI personalised nutrition", n: "27.2% CAGR" },
  { v: "$600M", l: "AG1 annual revenue", n: "Single SKU" },
];

const problems = [
  { t: "Acquire, disappear, churn", b: "Brands optimise for the first purchase, then go silent. Most subscribers cancel within 60 days." },
  { t: "Commoditised SKUs", b: "Green powders. Multivitamins. Protein. Private-label economics make switching costs zero." },
  { t: "No real personalisation", b: "A 5-question quiz is not personalisation. Real adaptation requires persistent context — which nobody is building." },
  { t: "No retention loop", b: "No advisor. No streaks. No community. Customers have no reason to open the app — or remember the brand." },
];

const built = [
  "Consumer-facing pages",
  "Product detail pages",
  "Authentication flow",
  "Ritual Dashboard",
  "OV voice agent (ElevenLabs)",
  "GPT-4.1 advisor (FastAPI + MongoDB)",
  "Supabase schema · auth · realtime",
  "Design system foundation",
];
const planned = [
  "Live community chat",
  "Privacy-preserving peer matching",
  "Apple Watch / Google Fit integrations",
  "RAG-powered advisor",
  "Subscription management (Stripe)",
  "Agent-driven checkout",
];
const gaps = [
  "Transactional logic for 'Add to Ritual'",
  "Full community functionality beyond preview",
  "Deeper AI context injection / tool use",
];

const projections = [
  { m: "M1", users: "200", paying: "0", mrr: "$0" },
  { m: "M2", users: "500", paying: "50", mrr: "$5.4K" },
  { m: "M3", users: "800", paying: "150", mrr: "$16.3K" },
  { m: "M6", users: "2,500", paying: "750", mrr: "$81.6K" },
  { m: "M12", users: "8,000", paying: "2,500", mrr: "$272K" },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="section-padding border-t border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="hairline" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export default function Strategy() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-10 border-b border-border">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Lock className="w-3 h-3 text-primary" strokeWidth={1.5} />
              <span className="eyebrow">Strategy Brief · Confidential</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-foreground mb-10">
              A software company <br />
              that <span className="italic text-primary">sells supplements.</span>
            </h1>

            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mb-12">
              The supplement industry is a $521B logistics business in costume. OmniVital is the
              software layer it has never had — a wellness operating system built on six precision
              formulas, a GPT-4.1 advisor, an ElevenLabs voice companion, and a privacy-first community.
              90% built. Weeks from launch.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-3xl">
              {[
                { v: "90%", l: "Product built" },
                { v: "$3.3M", l: "Y1 ARR (conservative)" },
                { v: "86%", l: "Gross margin" },
                { v: "24:1", l: "LTV:CAC" },
              ].map((s) => (
                <div key={s.l} className="bg-background p-5">
                  <p className="font-display text-3xl text-primary italic">{s.v}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <Section id="problem" eyebrow="The Problem" title={<>Most supplement brands are <span className="italic text-primary">logistics companies</span> with marketing budgets.</>}>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {problems.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10"
            >
              <p className="font-display text-2xl text-primary italic mb-3">0{i + 1}</p>
              <h3 className="font-display text-2xl text-foreground mb-3">{p.t}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{p.b}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Now */}
      <Section id="why-now" eyebrow="Why Now" title={<>A <span className="italic text-primary">$521B market</span> waiting for software.</>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-16">
          {market.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background p-6 md:p-8"
            >
              <p className="font-display text-3xl md:text-4xl text-primary italic">{s.v}</p>
              <p className="text-sm text-foreground mt-3">{s.l}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.n}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
          {[
            { t: "AG1 proved the model — at $600M ARR", b: "DTC subscription wellness works at scale. The category is validated." },
            { t: "AI is now table stakes", b: "ElevenLabs voice + GPT-4.1 has crossed from gimmick to magical. We were AI-native from day one." },
            { t: "Biohacking went mainstream", b: "Post-COVID, optimisation is no longer fringe — it's a $100B+ consumer category." },
            { t: "The 'Ritual' framing is timed perfectly", b: "Mindfulness, routines, protocols. Culture has moved past 'pop a vitamin' to 'design your day'." },
          ].map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-t border-border pt-6"
            >
              <h3 className="font-display text-xl text-foreground mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.b}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Moat / Competitive */}
      <Section id="moat" eyebrow="Defensibility" title={<>No competitor has the <span className="italic text-primary">full stack.</span></>}>
        <p className="text-muted-foreground font-light leading-relaxed max-w-xl mb-12">
          The closest analog is Thesis — quiz-based personalisation. Zero voice, zero realtime community,
          zero persistent advisor.
        </p>

        <div className="border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-5 eyebrow font-medium">Brand</th>
                  <th className="text-left p-5 eyebrow font-medium hidden sm:table-cell">Product</th>
                  <th className="text-left p-5 eyebrow font-medium">Price</th>
                  <th className="p-5 eyebrow font-medium text-center">AI</th>
                  <th className="p-5 eyebrow font-medium text-center">Voice</th>
                  <th className="p-5 eyebrow font-medium text-center">Community</th>
                  <th className="p-5 eyebrow font-medium text-center">Ritual</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <motion.tr
                    key={c.brand}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className={`border-b border-border/60 last:border-b-0 ${c.highlight ? "bg-primary/5" : ""}`}
                  >
                    <td className={`p-5 font-display text-base ${c.highlight ? "text-primary italic" : "text-foreground"}`}>
                      {c.brand}
                    </td>
                    <td className="p-5 text-muted-foreground hidden sm:table-cell font-light">{c.sku}</td>
                    <td className="p-5 text-muted-foreground font-light">{c.price}</td>
                    <td className="p-5"><Cell value={c.ai} /></td>
                    <td className="p-5"><Cell value={c.voice} /></td>
                    <td className="p-5"><Cell value={c.community} /></td>
                    <td className="p-5"><Cell value={c.ritual} /></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border mt-12">
          {[
            { v: "86%", l: "Projected gross margin", n: "vs 70–80% best-in-class DTC" },
            { v: "24:1", l: "LTV:CAC (conservative)", n: "AI advisor + community drive retention" },
            { v: "12–18mo", l: "Competitive window", n: "AG1 / Thesis too big to pivot" },
          ].map((m) => (
            <div key={m.l} className="bg-background p-8">
              <p className="font-display text-4xl text-primary italic mb-3">{m.v}</p>
              <p className="text-sm text-foreground">{m.l}</p>
              <p className="text-xs text-muted-foreground mt-1 font-light">{m.n}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Progress */}
      <Section id="progress" eyebrow="Progress" title={<>What is built. <span className="italic text-primary">What is next.</span></>}>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { title: "Built", items: built, tone: "text-primary" },
            { title: "Planned", items: planned, tone: "text-foreground" },
            { title: "Gaps", items: gaps, tone: "text-muted-foreground" },
          ].map((col) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-background p-8 md:p-10"
            >
              <h3 className={`font-display text-3xl italic mb-8 ${col.tone}`}>{col.title}</h3>
              <ul className="space-y-4">
                {col.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground font-light leading-relaxed border-t border-border pt-4">
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Financials */}
      <Section id="financials" eyebrow="Financials" title={<>$272K MRR. <span className="italic text-primary">Organic-first.</span></>}>
        <p className="text-muted-foreground font-light leading-relaxed max-w-xl mb-12">
          Conservative 12-month model assuming organic-first launch — content, community, minimal paid.
          Avg stack ≈ 2 formulas at ~$136/mo. Quarterly Subscribe & Save 20% off.
        </p>

        <div className="border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-5 eyebrow font-medium">Month</th>
                  <th className="text-left p-5 eyebrow font-medium">New Users</th>
                  <th className="text-left p-5 eyebrow font-medium">Paying</th>
                  <th className="text-left p-5 eyebrow font-medium">MRR</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((p, i) => (
                  <motion.tr
                    key={p.m}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`border-b border-border/60 last:border-b-0 ${i === projections.length - 1 ? "bg-primary/5" : ""}`}
                  >
                    <td className={`p-5 font-display text-lg ${i === projections.length - 1 ? "text-primary italic" : "text-foreground"}`}>{p.m}</td>
                    <td className="p-5 text-muted-foreground font-light">{p.users}</td>
                    <td className="p-5 text-muted-foreground font-light">{p.paying}</td>
                    <td className={`p-5 font-display ${i === projections.length - 1 ? "text-primary italic" : "text-foreground"}`}>{p.mrr}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-6 font-light italic">
          $272K MRR = $3.26M ARR by end of Y1. With $50K/mo paid + 3:1 ROAS, add ~$150K MRR.
        </p>
      </Section>

      {/* Roadmap detail */}
      <Section id="roadmap-detail" eyebrow="Roadmap" title={<>30-day <span className="italic text-primary">launch sprint.</span></>}>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            { w: "Week I", t: "Deploy & wire", items: ["Vercel deploy", "Domain (omnivital.co)", "Stripe checkout + webhooks", "ElevenLabs agent live", "End-to-end smoke test"] },
            { w: "Week II", t: "Content & community", items: ["@omnivital social channels", "First 3 brand pieces", "Micro-influencer gifting (10)", "Klaviyo welcome flow", "Onboarding quiz"] },
            { w: "Week III", t: "Supply", items: ["Supliful integration (dropship)", "Private-label quotes (parallel)", "Sample batch ordered", "Shopify or Stripe fulfillment", "Founder pre-order opens"] },
            { w: "Week IV", t: "Launch", items: ["Product Hunt launch", "Press: TC, Fast Co, The Information", "Reddit soft-launch", "Influencer activation", "Live AMA in The Collective"] },
          ].map((s, i) => (
            <motion.div
              key={s.w}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-t border-border pt-8"
            >
              <p className="eyebrow mb-2">{s.w}</p>
              <h3 className="font-display text-2xl text-foreground mb-5 italic">{s.t}</h3>
              <ul className="space-y-2.5">
                {s.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground font-light flex gap-3">
                    <span className="text-primary mt-1.5">·</span>
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact / Inquiry */}
      <section className="section-padding border-t border-border">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="hairline" />
              <span className="eyebrow">By Invitation</span>
              <span className="hairline" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-foreground mb-6">
              Request the <span className="italic text-primary">full brief.</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Investors, strategic partners, exceptional operators — a more detailed package is available on request.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-border bg-card max-w-xl mx-auto p-8 md:p-10"
          >
            {submitted ? (
              <div className="py-10 text-center">
                <p className="font-display text-3xl text-primary italic mb-3">Thank you.</p>
                <p className="text-sm text-muted-foreground font-light">We will be in touch within 48 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="eyebrow block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-border focus:border-primary px-0 py-2.5 text-sm text-foreground focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2">Organisation</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-border focus:border-primary px-0 py-2.5 text-sm text-foreground focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="eyebrow block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-border focus:border-primary px-0 py-2.5 text-sm text-foreground focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="eyebrow block mb-2">Interest</label>
                  <select className="w-full bg-transparent border-b border-border focus:border-primary px-0 py-2.5 text-sm text-foreground focus:outline-none transition-colors">
                    <option className="bg-background">Investment — pre-seed / seed</option>
                    <option className="bg-background">Strategic partnership</option>
                    <option className="bg-background">Founding team</option>
                    <option className="bg-background">Manufacturing / supply</option>
                  </select>
                </div>
                <div>
                  <label className="eyebrow block mb-2">Context</label>
                  <textarea
                    rows={3}
                    className="w-full bg-transparent border-b border-border focus:border-primary px-0 py-2.5 text-sm text-foreground focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase bg-foreground text-background px-7 py-4 hover:bg-primary transition-colors duration-500"
                >
                  Request the brief
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          <div className="mt-20 text-center">
            <Link
              to="/"
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to OmniVital
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
