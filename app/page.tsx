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
  logos?: { src: string; alt: string }[];
  logoSrc?: string;
  logoAlt?: string;
  logoText?: string;
};

type BenefitHighlight = {
  title: string;
  bullets: string[];
  Icon: LucideIcon;
};

type DividerItem = {
  label: string;
  Icon: LucideIcon;
};

const heroStats = [
  {
    value: "Shared liquidity",
    label: "Each instance is customisable on top of a shared liquidity and accounting layer, compounding integrations",
  },
  {
    value: "Neutral economics",
    label: "You get the best risk-adjusted onchain yield to fund adoption without the cost of issuer dependencies",
  },
  {
    value: "Embedded privacy",
    label: "Protocol-level integrated privacy and confidentiality at a speed suitable for everyday payments",
  },
  {
    value: "Security first",
    label:
      "Fully onchain, Tier 1 audits and the best risk curation delivering uncompromising security and transparency",
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
    label: "Steakhouse",
    value: "Risk curation and strategy",
    logoSrc: "/partners/steakhouse-icon.svg",
    logoAlt: "Steakhouse icon",
  },
  {
    label: "Morpho + Sky (USDS)",
    value: "Yield sourcing and collateral rails",
    logos: [
      { src: "/partners/morpho.png", alt: "Morpho logo" },
      { src: "/partners/sky.png", alt: "Sky logo" },
    ],
  },
  {
    label: "LayerZero",
    value: "Cross-chain messaging",
    logoSrc: "/partners/layerzero-icon.svg",
    logoAlt: "LayerZero icon",
  },
  {
    label: "Merkl",
    value: "Incentive rails for yield distribution",
    logoSrc: "/partners/merkl.png",
    logoAlt: "Merkl logo",
  },
  {
    label: "Aragon",
    value: "Value accrual infrastructure",
    logoSrc: "/partners/aragon.png",
    logoAlt: "Aragon logo",
  },
];

const narrativeMilestones = [
  {
    title: "Minting",
    bullets: [
      "Mint GUSD to the target network/app through Generic (abstracted).",
      "1:1 backed by stablecoin collateral held in the Generic Protocol.",
      "Networks/apps run their own configurable wrapper on GUSD while benefitting from the shared rails (liquidity and integrations).",
    ],
  },
  {
    title: "Usage",
    bullets: [
      "GUSD is usable as the default onchain dollar across the stack.",
      "Provide DEX liquidity, lend/borrow in money markets, stake as sGUSD, make private payments.",
    ],
  },
  {
    title: "Yield",
    bullets: [
      "Collateral is allocated into curated onchain strategies on Ethereum.",
      "Yield accrues back and is passed to the distributions layer.",
      "Yield funds liquidity, incentives, and ecosystem programs, creating a compounding adoption loop.",
    ],
  },
];

const benefitHighlights: BenefitHighlight[] = [
  {
    title: "Compounding liquidity and integrations",
    bullets: [
      "Liquidity remains unified through shared rails.",
      "With a single pattern, integrations are composable across stablecoin instances.",
    ],
    Icon: Layers,
  },
  {
    title: "Yield that funds adoption",
    bullets: [
      "You receive the best onchain yield to fund liquidity, incentives, or share with users.",
      "Adoption turns the yield into an ongoing revenue stream for you, not an issuer.",
    ],
    Icon: CircleDollarSign,
  },
  {
    title: "Payments-ready confidentiality",
    bullets: [
      "FHE-powered Privacy Pool for confidential balances and transfers.",
      '"Prove when needed" for regulated endpoints, without slowing every transfer.',
    ],
    Icon: ShieldCheck,
  },
  {
    title: "Your instance, without issuer overhead",
    bullets: [
      "Each network or app configures its instance: limits, disclosure modes, yield routing.",
      "No offchain issuer stack to depend on or pay rent to.",
    ],
    Icon: Plug,
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
                <span className="block">Build a better onchain dollar that is yours</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[#393B40]/90 sm:text-xl">
                Generic provides stablecoin-as-a-service that delivers you the best risk-adjusted onchain yield and
                payments-ready privacy without the overhead and cost of offchain issuers.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <Link
                  href="mailto:partners@generic.money"
                  className="group inline-flex items-center justify-center rounded-full border border-[#3F79FF] bg-[#3F79FF] px-8 py-3 text-base font-medium text-white shadow-[0_22px_60px_rgba(63,121,255,0.28)] transition hover:bg-[#3566d9]"
                >
                  <span>Build with Generic</span>
                  <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
                </Link>

                <Link
                  href="https://docs.generic.money"
                  className="inline-flex items-center justify-center rounded-full border border-[#0A0B0D]/20 bg-white/80 px-6 py-3 text-base font-medium text-[#0A0B0D] shadow-sm backdrop-blur transition hover:border-[#0A0B0D]/30 hover:bg-white"
                >
                  <span>Read the docs</span>
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
                  <div className="flex items-center gap-3 text-sm text-[#6D6F76]">
                    <span>Audited by:</span>
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

          <div className="mt-14">
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
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
            <span className="section-kicker">Partners</span>
            <h2 className="section-heading">Partners</h2>
            <p className="mt-4 text-base text-[#393B40] sm:text-lg">
              We are building Generic with best-in-class partners across yield sourcing, risk curation, cross-chain
              messaging, value routing and more.
            </p>
          </div>

          <div className="trust-strip trust-strip--standalone mt-10" aria-label="Oversight and infrastructure partners">
            <div className="trust-strip__items">
              {trustSignals.map((item) => (
                <div key={item.value} className="trust-strip__item">
                  <div
                    className={`trust-strip__logo ${item.logos ? "trust-strip__logo--stack" : ""}`}
                    aria-hidden
                  >
                    {item.logos ? (
                      item.logos.map((logo) => (
                        <span key={logo.src} className="trust-strip__logo-stack">
                          <Image src={logo.src} alt={logo.alt} width={28} height={28} className="trust-strip__logo-image" />
                        </span>
                      ))
                    ) : item.logoSrc ? (
                      <Image
                        src={item.logoSrc}
                        alt={item.logoAlt ?? item.value}
                        width={36}
                        height={36}
                        className="trust-strip__logo-image"
                      />
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
          <h2 className="section-heading">How it works - liquidity and yield</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#393B40]">
            Generic builds on top of the most widely adopted stablecoins (USDC/USDT/USDS) to provide apps and networks with
            their own native dollar. Liquidity and integrations are shared across the system to ensure network effects
            compound, while each instance is configurable.
          </p>

          <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 shadow-[0_18px_55px_rgba(60,84,145,0.16)] backdrop-blur">
            <Image
              src="/how-it-works.png"
              alt="How it works flow diagram"
              width={3344}
              height={1742}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="narrative-timeline mt-12">
            {narrativeMilestones.map((milestone, index) => (
              <div key={milestone.title} className="narrative-step">
                <span className="narrative-step__index">0{index + 1}</span>
                <div className="narrative-step__body">
                  <h3 className="narrative-step__title">{milestone.title}</h3>
                  <ul className="narrative-step__description mt-2 space-y-2 text-sm text-[#393B40]">
                    {milestone.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">Benefits</span>
          <h2 className="section-heading">Fueling your growth</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#393B40]">
            Generic helps you build a stablecoin that serves as a growth engine by delivering shared liquidity, configurable
            instances, yield you direct to fund adoption, and privacy that works in practice.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitHighlights.map(({ title, bullets, Icon }) => (
              <div key={title} className="benefit-card">
                <span className="benefit-card__icon" aria-hidden>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="benefit-card__title">{title}</h3>
                <ul className="benefit-card__description mt-3 space-y-2 text-sm text-[#393B40]">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
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
