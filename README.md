# OmniVital — The Wellness Operating System

> *Practice over product. Precision built. Quietly intelligent.*

OmniVital is not another supplement brand. It is the **software layer the wellness industry forgot to build** — an editorial, AI-native operating system for daily ritual, organized around six precision formulas, a GPT-4.1 advisor, an ElevenLabs voice agent, and a privacy-first community.

This repository is the public, investor-facing site: a deliberately restrained editorial experience (homepage) paired with a full strategic deck at `/strategy`.

---

## The Thesis

The supplement industry is a logistics business dressed up as a wellness business. Brands optimize for the first conversion, then disappear. AG1 built a $600M/year empire on a single SKU and a podcast ad — and is now a commodity in a sea of green powders.

OmniVital inverts the model. **The product is the ritual. The app is the retention engine. The community is the moat.**

Three layers, one operating system:

1. **The Ritual** — Six precision formulas organized into morning, midday, and evening windows. Supplementation as intentional practice, not a forgotten bottle.
2. **The Advisor** — GPT-4.1 that knows the user's stack, today's feeling score, their streak, their name. A customer success team that never sleeps.
3. **The Collective** — Privacy-first community. Connect by color tag, not real name. Realtime threads. The social layer that turns customers into believers.

No competitor combines all three. The closest, Thesis, has a personalization quiz and zero community or persistent advisor.

---

## Brand & Visual Identity

This site is a deliberate departure from the consumer-supplement aesthetic — no bottle shots, no discount banners, no cart UI. Inspiration: **Aesop, Equinox, editorial print**.

| Token | Value | Role |
|-------|-------|------|
| Background | `30 8% 8%` (warm charcoal) | Primary surface |
| Foreground | `36 22% 92%` (bone) | Body text |
| Primary | `36 30% 70%` (warm brass / champagne) | Accent, CTAs, italic emphasis |
| Sage / Terracotta | Secondary muted tones | Supporting palette |
| Display | Cormorant Garamond | Headlines, italic gestures |
| Body | Inter (300 weight) | Long-form prose |

The logo is a serif **OV** monogram in brass, used as the favicon and lockup. Every page leans on generous negative space, hairline rules, and a fine-grain noise overlay (`.grain`) to feel printed rather than pixel-perfect.

---

## Site Structure

The site is split intentionally between **public brand story** and **investor deck**.

### `/` — Homepage (Brand Story)

| Section | Purpose |
|---------|---------|
| **Hero** | Editorial full-bleed: "Practice over product." |
| **Philosophy** | The manifesto. Why ritual beats consumption. |
| **Ritual System** | Six formulas across morning / midday / evening, presented as an editorial spread |
| **Platform** | Advisor, Voice, Collective — the software layer |
| **Experience** | Sticky 5-step practice walkthrough |
| **Footer** | Quiet sign-off, link to Strategy |

### `/strategy` — Investor Deck (Gated Entry Point)

Reached via the brass **Strategy** button in the nav. A long-form, single-page deck:

- **Thesis** — what OmniVital actually is, in one paragraph
- **Market & Timing** — $521B global supplements, 27% CAGR on AI personalized nutrition, $80B nootropics by 2035
- **Competitive Matrix** — OmniVital vs AG1, Ritual, Momentous, Thesis, Rootine, Seed, Cymbiotika across AI, voice, community, ritual system
- **Unit Economics** — 86% gross margin, 24:1 → 58:1 LTV:CAC, $140–$200 avg stack value
- **Two-Phase Launch Play** — Digital Collective first; physical product (white-label → private label) second
- **30-Day Launch Sprint** — Week-by-week execution plan
- **12-Month MRR Projection** — Conservative path to $272K MRR / $3.26M ARR organic-first
- **Risk Register** — FDA, CAC spikes, hallucinations, churn, competitive response
- **Strategy Brief** — Inquiry form for investors, partners, and operators

---

## Product Line

Six precision formulas organized into three daily windows:

### Morning
| Product | Price | Hero Ingredient | Goal |
|---------|-------|-----------------|------|
| **OV Drive** | $64/mo | Cordyceps Militaris | Caffeine-free energy, mitochondrial ATP |
| **OV Adapt** | $68/mo | KSM-66 Ashwagandha | HPA-axis regulation, stress resilience |

### Midday
| Product | Price | Hero Ingredient | Goal |
|---------|-------|-----------------|------|
| **OV Bright** | $72/mo | affron® Saffron Extract | Serotonergic mood support |
| **OV Quiet Focus** | $66/mo | Cognizin® CDP-Choline | Calm concentration, NGF support |

### Evening
| Product | Price | Hero Ingredient | Goal |
|---------|-------|-----------------|------|
| **OV Neuro Night** | $74/mo | Magnesium Glycinate | Sleep architecture, glymphatic recovery |
| **OV Cortex** | $78/mo | BaCognize® Bacopa | Working memory, executive function |

All formulas: clinically studied patented ingredients, research-validated dosages, third-party tested, GMP-certified, non-GMO, vegan. Subscribe & Save reduces effective price by 20% on quarterly billing.

---

## Market Context

| Market | 2025 Size | Projection | CAGR |
|--------|-----------|-----------|------|
| Global Dietary Supplements | $521.4B | — | — |
| US Supplement Market | $85.4B | — | — |
| Nootropics (global) | $21.33B | $80.39B by 2035 | 14.19% |
| AI Personalized Nutrition | $1.54B | $10.21B by 2033 | 27.21% |
| Supplement Subscription Services | $10B | — | 8–10% |

**Why now:** AG1 has proven DTC subscription works at scale. AI-native is becoming table stakes. ElevenLabs voice makes a floating advisor feel magical, not gimmicky. The "ritual" framing (vs "supplement") is culturally timed perfectly.

---

## Unit Economics

| Metric | Conservative | Target |
|--------|-------------|--------|
| Avg monthly stack value | $140 | $200 |
| Month-2 retention | 65% | 75% |
| 12-month LTV | $840 | $1,440 |
| Blended CAC (organic-heavy launch) | $35 | $25 |
| LTV:CAC | 24:1 | 58:1 |
| Gross margin (2-formula stack, $15 COGS) | ~86% | ~86% |

The favorability is driven by the software layer: every advisor conversation is re-engagement; every community interaction is churn prevention.

---

## 12-Month Conservative Forecast

Organic-first launch (content + community, minimal paid ads). Digital Collective months 1–2, physical product from month 3.

| Month | New Users | Paying | MRR |
|-------|-----------|--------|-----|
| 1 | 200 | 0 | $0 |
| 2 | 500 | 50 | $5,440 |
| 3 | 800 | 150 | $16,320 |
| 6 | 2,500 | 750 | $81,600 |
| 12 | 8,000 | 2,500 | **$272,000** |

**End of Year 1: ~$272K MRR / $3.26M ARR.** A single paid channel at $50K/mo with 3:1 ROAS adds another ~$150K MRR.

---

## Tech Stack (Public Site)

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 + TypeScript + Vite | SPA, hot reload |
| Styling | Tailwind CSS + shadcn/ui | Utility-first design system, semantic HSL tokens |
| Typography | Cormorant Garamond + Inter | Editorial serif display, restrained body |
| Animation | Framer Motion | Tasteful entrances, sticky scroll, pulse |
| Routing | React Router | `/` (homepage) and `/strategy` (deck) |
| Deploy | Vercel-ready | Static SPA build |

The product platform itself (auth, ritual tracking, AI advisor, voice agent, community) lives in the OmniVital application repo: FastAPI + GPT-4.1 + MongoDB + Supabase + ElevenLabs.

---

## Design System

All colors are HSL semantic tokens defined in `src/index.css` and exposed via `tailwind.config.ts`. Components must use tokens (`bg-background`, `text-primary`) — never hardcoded colors.

```css
--background: 30 8% 8%;    /* warm charcoal */
--foreground: 36 22% 92%;  /* bone */
--primary:    36 30% 70%;  /* warm brass / champagne */
--sage:       90 12% 55%;
--terracotta: 18 35% 55%;
--radius:     0.25rem;     /* sharp, editorial */
```

Utility classes: `.eyebrow`, `.editorial-card`, `.section-padding`, `.container-narrow`, `.hairline`, `.grain`.

---

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. The site is fully static — no backend or env vars required for the marketing experience.

---

## Roadmap

- [ ] Wire the `/strategy` inquiry form to Lovable Cloud (storage + email notification)
- [ ] Animated hero orb (Three.js fluid sphere) replacing the static editorial image
- [ ] Press / featured-in marquee
- [ ] Animated MRR ramp chart on the strategy page
- [ ] Mobile micro-polish pass on the ritual grid
- [ ] OG image refresh featuring the OV monogram

---

## The One-Page Pitch

> OmniVital is a **Wellness Operating System**. Six precision formulas organized into morning, midday, and evening rituals. A GPT-4.1 advisor that knows your stack cold. An ElevenLabs voice orb you can talk to. A privacy-first community that makes belonging feel like belief.
>
> The business is 90% built. The market is $521B. The closest competitor has none of the moat. The play is to deploy now, launch The Collective for free, capture the email list, then ship physical product to a community already invested.
>
> **This is not a supplement company. It is a software company that sells supplements.**

---

*Built with restraint. Engineered for retention. Designed for people who take their practice seriously.*
