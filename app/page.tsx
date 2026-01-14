import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CircleDollarSign,
  FileText,
  Layers,
  LockKeyhole,
  NotebookText,
  Plug,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TrustSignal = {
  label: string;
  value: string;
  logoSrc?: string;
  logoAlt?: string;
  logoText?: string;
};

type BenefitHighlight = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

type DividerItem = {
  label: string;
  Icon: LucideIcon;
};

const heroStats = [
  {
    value: "Fully onchain",
    label: "Generic only uses onchain strategies, all our backings are transparent to users and clients",
  },
  {
    value: "1:1",
    label: "Fully collateralized ERC-4626 vaults with exposure limits",
  },
  {
    value: "Security first",
    label:
      "We only work with the best industry. Steakhouse is our curator and risk manager, audited by Spearbit.",
  },
];

const dividerItems: DividerItem[] = [
  {
    label: "Transparency report",
    Icon: FileText,
  },
  {
    label: "Policy-aligned liquidity",
    Icon: Scale,
  },
  {
    label: "Transparent and independent attestations",
    Icon: BadgeCheck,
  },
  {
    label: "LayerZero fast settlement",
    Icon: Zap,
  },
  {
    label: "Native trustless settlement",
    Icon: LockKeyhole,
  },
  {
    label: "Documented and open operations",
    Icon: NotebookText,
  },
];

const settlementHighlights = [
  {
    primary: "LayerZero and native settlement",
    secondary: "↺ Synced supply",
    variant: "light" as const,
  },
  {
    primary: "Real yield prime vaults",
    variant: "accent" as const,
  },
];

const trustSignals: TrustSignal[] = [
  {
    label: "Security Audit",
    value: "Spearbit",
    logoSrc: "/brand-mark.svg",
    logoAlt: "Spearbit audit badge",
  },
  {
    label: "Vault Manager",
    value: "Steakhouse Financial",
    logoSrc: "/steakhouse-icon.svg",
    logoAlt: "Steakhouse Financial icon",
  },
  {
    label: "Messaging Layer",
    value: "LayerZero",
    logoSrc: "/layerzero-icon.svg",
    logoAlt: "LayerZero icon",
  },
];

const narrativeMilestones = [
  {
    title: "Review & customize",
    description:
      "Check the contracts and the docs, review our transparency reports and contact us to get to know how to make GUSD yours.",
  },
  {
    title: "Mint with controls",
    description:
      "We’ll deploy the whitelabel for you and we’ll send the yield right where you tell use so it can be used to benefit your network",
  },
  {
    title: "Monitor & report",
    description:
      "Work with our team to define reporting cadences, escalation paths, and dashboards so your stakeholders stay informed at every step.",
  },
];

const benefitHighlights: BenefitHighlight[] = [
  {
    title: "Canonical across rollups",
    description:
      "Choose your preferred messaging channel to move balances across chains securely and fast.",
    Icon: Layers,
  },
  {
    title: "Native yield",
    description:
      "Onchain yields in prime vaults have consistently had higher yields that offchain T Bill, while keeping funds backed by safe collaterals",
    Icon: CircleDollarSign,
  },
  {
    title: "Operational assurance",
    description:
      "Programmatic limits, change windows, and human sign-off protect every contract or policy update. From the team at Aragon that manages some of the most critical security councils in the industry",
    Icon: ShieldCheck,
  },
  {
    title: "Integration ready",
    description:
      "Attestations, and standardized APIs make it simple for exchanges and protocols to integrate.",
    Icon: Plug,
  },
];

const proofColumns = [
  {
    title: "Controls you can verify",
    bullets: [
      "Segregated collateral wallets with automated exposure thresholds.",
      "Real-time attestation feed comparing canonical and rollup balances.",
      "First-loss reserve absorbs volatility before user balances move.",
    ],
  },
  {
    title: "Reporting that travels with you",
    bullets: [
      "Real-time dashboards for supply, buffer health, and oracle status.",
      "Audit trail with change control diffs and incident communications.",
      "10% protocol fee disclosed with treasury distribution reporting.",
    ],
  },
];

const faqs = [
  {
    question: "What makes GUSD different from bridged stablecoins?",
    answer:
      "While other stablecoins stay idle in your product not being capital efficient, GUSD will generate yield that will directly go to your network address.",
  },
  {
    question: "How is collateral managed and audited?",
    answer:
      "Collateral lives in segregated ERC-4626 vaults managed by Steakhouse Financial. Spearbit and other reviewers assess contracts, and daily attestations confirm vault balances against circulating supply.",
  },
  {
    question: "Where can I review the yield distribution policy?",
    answer:
      "All the generate yield will be transferred over to your designated address on a weekly period, while generic keeps a fee of it to sustain the protocol.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#F5F6FA] text-[#0A0B0D]">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-generic-grid" />

      <section className="relative isolate px-6 pb-24 pt-32 sm:px-10 lg:pt-36">
        <div className="hero-surface" />
        <div className="hero-ribbon" />
        <div className="hero-ribbon-alt" />
        <div className="hero-orb hero-orb-lg" />
        <div className="hero-orb hero-orb-sm" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative z-10 flex flex-col">
              <div className="mb-4">
                <span className="section-kicker badge-rise hero-brand__chip">
                  Generic USD (GUSD)
                </span>
              </div>
              <div className="hero-brand mb-6">
                <Image
                  src="/full-logo-black.svg"
                  alt="Generic logo"
                  width={496}
                  height={132}
                  priority
                  className="hero-brand__logo"
                />
              </div>
              <h1 className="font-display text-[2.4rem] leading-tight text-[#0A0B0D] sm:text-[3rem] lg:text-[3.6rem]">
                <span className="block">
                  Launch your native stablecoin, <br />
                  no issuer needed
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[#393B40]/90 sm:text-xl">
                Generic connects Ethereum&apos;s collateral to rollup liquidity with documented controls, live strategies and
                audited reporting.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <Link
                  href="/whitepaper.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center rounded-full border border-[#3F79FF] bg-[#3F79FF] px-8 py-3 text-base font-medium text-white shadow-[0_22px_60px_rgba(63,121,255,0.28)] transition hover:bg-[#3566d9]"
                >
                  <span>Read the white paper</span>
                  <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
                </Link>

                <Link
                  href="https://app.generic.money"
                  aria-disabled="true"
                  tabIndex={-1}
                  title="Coming soon"
                  className="pointer-events-none inline-flex cursor-not-allowed items-center justify-center rounded-full border border-[#0A0B0D]/20 bg-white/80 px-6 py-3 text-base font-medium text-[#0A0B0D] opacity-80 shadow-sm backdrop-blur"
                >
                  <span>Open app</span>
                  <span className="ml-3 rounded-full border border-[#0A0B0D]/10 bg-[#F5F6FA] px-2 py-0.5 text-[0.7rem] uppercase tracking-[0.24em] text-[#6D6F76]">
                    Coming soon
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative z-10">
              <div className="hero-stage">
                <span className="hero-stage-glow" />
                <span className="hero-stage-grid" />
                <span className="hero-stage-beam" />

                <div className="hero-stage-window">
                  <Image
                    src="/window.svg"
                    alt="Generic liquidity viewport"
                    fill
                    sizes="(min-width: 1024px) 480px, 82vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="hero-stage-token">
                  <Image src="/brand-mark.svg" alt="Generic emblem" width={64} height={64} />
                </div>

                <div className="hero-stage-orbit">
                  <Image src="/globe.svg" alt="Rollup footprint" width={80} height={80} />
                </div>

                <div className="hero-stage-orbit hero-stage-orbit-alt">
                  <Image src="/file.svg" alt="Onchain audit file" width={72} height={72} />
                </div>

                <div className="glass-card hero-stage-card overflow-hidden rounded-[2.4rem] p-8">
                  <div className="flex items-center justify-between text-sm text-[#6D6F76]">
                    <span>In Audits</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#3F79FF]/40 bg-white/70 px-3 py-1 text-xs font-medium text-[#3F79FF]">
                      Spearbit
                    </span>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-2xl bg-[#E0EAFF]/70">
                      <div className="absolute inset-2 flex items-center justify-center rounded-xl bg-white">
                        <Image src="/brand-mark.svg" alt="Generic mark" width={40} height={40} />
                      </div>
                    </div>
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#6D6F76]">Transparent Operation</p>
                      <p className="mt-1 font-display text-xl text-[#0A0B0D]">One balance, all networks.</p>
                    </div>
                  </div>
                  <div className="mt-8 space-y-3 text-sm text-[#393B40]">
                    <p>Canonical supply lives on Ethereum while mirrored balances only get minted through this backed assets.</p>
                    <p>Collateral yield refills program buffers before streaming to ecosystems and treasury.</p>
                  </div>

                  <div className="mt-8 grid gap-3">
                    {settlementHighlights.map((highlight) => (
                      <div
                        key={highlight.primary}
                        className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-xs uppercase tracking-[0.24em] ${
                          highlight.variant === "accent"
                            ? "border-[#3F79FF]/30 bg-[#3F79FF]/10 text-[#0A0B0D]"
                            : "border-white/40 bg-white/70 text-[#3F79FF]"
                        }`}
                      >
                        <span>{highlight.primary}</span>
                        {highlight.secondary ? (
                          <span>{highlight.secondary}</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
            <div className="grid flex-1 min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {heroStats.map((stat) => (
                <div
                  key={stat.value}
                  className="h-full rounded-3xl border border-black/[0.04] bg-white/80 p-5 sm:p-6 lg:p-7 backdrop-blur"
                >
                  <p className="font-display text-2xl text-[#3F79FF]">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#6D6F76]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex-none self-start pl-4 lg:pl-8">
              <div className="floating-chip inline-flex items-center gap-2 rounded-full border border-[#3F79FF]/40 bg-white/80 px-3 py-1.5 text-sm text-[#0A0B0D] backdrop-blur">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3F79FF]/15 text-[#3F79FF]">
                  <RefreshCcw className="h-3.5 w-3.5" aria-hidden />
                  <span className="sr-only">Real-time reserves</span>
                </span>
                Real-time reserves
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hero-divider">
        <div className="hero-divider-track">
          {dividerItems.concat(dividerItems).map((item, index) => (
            <span key={`${item.label}-${index}`} className="hero-divider-item">
              <span className="hero-divider-icon" aria-hidden>
                <item.Icon className="h-4 w-4" />
              </span>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <section className="relative isolate px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="section-kicker">Transparent Security</span>
            <h2 className="section-heading">Independent partners validate the programme</h2>
            <p className="mt-4 text-base text-[#393B40] sm:text-lg">
              Oversight partners are disclosed up front so risk, legal, and engineering teams understand who operates each
              layer and how reviews are progressing.
            </p>
          </div>

          <div className="trust-strip trust-strip--standalone mt-10" aria-label="Oversight and infrastructure partners">
            <div className="trust-strip__summary">
              <span className="trust-strip__label">Security by top players</span>
              <p className="trust-strip__quote">
                Controls-first architecture for cross-chain USD.
              </p>
            </div>
            <div className="trust-strip__items">
              {trustSignals.map((item) => (
                <div key={item.value} className="trust-strip__item">
                  <div className="trust-strip__logo" aria-hidden>
                    {item.logoSrc ? (
                      <Image src={item.logoSrc} alt={item.logoAlt ?? item.value} width={40} height={40} />
                    ) : (
                      <span className="trust-strip__logo-text">{item.logoText}</span>
                    )}
                  </div>
                  <div className="trust-strip__meta">
                    <span className="trust-strip__meta-label">{item.label}</span>
                    <span className="trust-strip__meta-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate border-y border-black/5 bg-diagonal-fade px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">Yours</span>
          <h2 className="section-heading">Your whitelabel stablecoin made easy</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#393B40]">
            GUSD is structured so legal, risk, and product teams can agree on a single lifecycle. Each step is auditable,
            codified, and synchronized across every supported chain.
          </p>

          <div className="narrative-timeline mt-12">
            {narrativeMilestones.map((milestone, index) => (
              <div key={milestone.title} className="narrative-step">
                <span className="narrative-step__index">0{index + 1}</span>
                <div className="narrative-step__body">
                  <h3 className="narrative-step__title">{milestone.title}</h3>
                  <p className="narrative-step__description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">Benefits</span>
          <h2 className="section-heading">Designed to keep projects and ecosystems aligned</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#393B40]">
            From real-yield generation to rollout-ready integrations, GUSD prioritizes clarity and differentiated controls so
            partners can activate capital with confidence.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitHighlights.map(({ title, description, Icon }) => (
              <div key={title} className="benefit-card">
                <span className="benefit-card__icon" aria-hidden>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="benefit-card__title">{title}</h3>
                <p className="benefit-card__description">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate border-y border-black/5 bg-white/80 px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="section-kicker">Proof</span>
            <h2 className="section-heading">Transparency, controls, and separation of concerns by design</h2>
            <p className="mt-4 text-lg text-[#393B40]">
              Each policy ships with verifiable artifacts—from contract audits and buffer thresholds to real-time reporting
              feeds—so diligence teams can confirm controls before launch.
            </p>

            <div className="mt-10 space-y-6">
              {proofColumns.map((column) => (
                <div key={column.title} className="proof-card">
                  <h3 className="proof-card__title">{column.title}</h3>
                  <ul className="proof-card__list">
                    {column.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span className="proof-card__dot" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="cta-panel">
              <p className="cta-panel__title">Need diligence materials?</p>
              <p className="cta-panel__description">
                Request the compliance pack for technical diagrams, monitoring hooks, and documentation.
              </p>
              <Link
                href="mailto:hello@generic.money"
                className="cta-panel__button"
              >
                Request the pack
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <span className="section-kicker">FAQs</span>
          <h2 className="section-heading">It’s yours, but we have some answers</h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <h3 className="faq-item__question">{faq.question}</h3>
                <p className="faq-item__answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative isolate px-6 pb-16 pt-12 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[#393B40] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-[#0A0B0D]">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E0EAFF]">
              <Image src="/brand-mark.svg" alt="Generic mark" width={36} height={36} />
            </span>
            <div>
              <p className="font-display text-base">Generic</p>
              <p className="text-xs text-[#6D6F76]">Unified liquidity for Ethereum.</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <a href="mailto:partners@generic.money" className="hover:text-[#3F79FF]">
              partners@generic.money
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
