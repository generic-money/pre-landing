import type { LucideIcon } from "lucide-react";
import { CircleDollarSign, Layers, LockKeyhole, Plug, RefreshCcw, ShieldCheck } from "lucide-react";
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

type HeroStat = {
  value: string;
  label: string;
  Icon: LucideIcon;
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

const heroStats: HeroStat[] = [
  {
    value: "Shared liquidity",
    label: "Each instance is customisable on top of a shared liquidity and accounting layer, compounding integrations",
    Icon: Layers,
  },
  {
    value: "Neutral economics",
    label: "You get the best risk-adjusted onchain yield to fund adoption without the cost of issuer dependencies",
    Icon: CircleDollarSign,
  },
  {
    value: "Embedded privacy",
    label: "Protocol-level integrated privacy and confidentiality at a speed suitable for everyday payments",
    Icon: LockKeyhole,
  },
  {
    value: "Security first",
    label:
      "Fully onchain, Tier 1 audits and the best risk curation delivering uncompromising security and transparency",
    Icon: ShieldCheck,
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
    label: "Morpho",
    value: "Yield sourcing and collateral rails",
    logoSrc: "/partners/morpho.png",
    logoAlt: "Morpho logo",
  },
  {
    label: "LayerZero",
    value: "Instant cross-chain messaging",
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
      "Yield accrues back and is passed to the distribution layer.",
      "Yield funds liquidity, incentives, and ecosystem programs, creating a compounding adoption loop.",
    ],
  },
];

const privacyMilestones = [
  {
    title: "Private mint",
    bullets: [
      "Users mint directly into the Privacy Pool in one step.",
      "A single KYT check is executed, providing the transfer with a “clean” attestation without exposing the user.",
      "Users transact without re-running checks on every hop, removing payment latency.",
    ],
  },
  {
    title: "Confidential payments through FHE balances",
    bullets: [
      "Balances and amounts remain confidential at the protocol level via FHE.",
      "Transfers stay compatible with standard onchain routing and settlement.",
      "Payment UX gets fast without “compliance latency” baked into every transfer.",
    ],
  },
  {
    title: "Selective disclosure",
    bullets: [
      "Users can generate exclusion proofs to show they’re not associated with flagged activity.",
      "Selective disclosure supports regulated endpoints without global deanonymisation.",
      "Privacy where it matters, credibility where it’s required.",
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

      <div className="top-banner">
        <span>
          Live now on StatusL2 and Citrea:{" "}
          <Link href="https://app.generic.money" target="_blank" rel="noreferrer" className="top-banner__link">
            app.generic.money
          </Link>
        </span>
      </div>

      <section className="relative isolate px-6 pb-28 pt-32 sm:px-10 lg:pt-36">
        <div className="hero-surface" />
        <div className="hero-ribbon" />
        <div className="hero-ribbon-alt" />
        <div className="hero-orb hero-orb-lg" />
        <div className="hero-orb hero-orb-sm" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16">
            <div className="relative z-10 flex flex-col">
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
                <span className="block">Build a better onchain dollar</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-6 text-[#393B40]/90 sm:text-lg sm:leading-7">
                Generic provides stablecoin-as-a-service that delivers you the best risk-adjusted onchain yield and
                payments-ready privacy without the overhead and cost of offchain issuers.
              </p>
              <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row">
                <Link
                  href="mailto:generic@generic.money"
                  className="group inline-flex items-center justify-center rounded-full border border-[#3F79FF] bg-[#3F79FF] px-7 py-2.5 text-base font-medium text-white shadow-[0_10px_24px_rgba(63,121,255,0.2)] transition hover:bg-[#3566d9]"
                >
                  <span>Generic App</span>
                  <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
                </Link>

                <Link
                  href="https://docs.generic.money/protocol/overview"
                  className="inline-flex items-center justify-center rounded-full border border-[#0A0B0D]/20 bg-white/80 px-6 py-2.5 text-base font-medium text-[#0A0B0D] shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition hover:border-[#0A0B0D]/30 hover:bg-white"
                >
                  <span>Read the docs</span>
                </Link>
              </div>
              <div className="mt-12" />
            </div>
          </div>

          <div className="mt-18">
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
              {heroStats.map((stat) => (
                <div
                  key={stat.value}
                  className="relative h-full rounded-3xl border border-black/[0.08] bg-white/70 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-6 lg:p-7"
                >
                  <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#1A1C20] sm:right-5 sm:top-5">
                    <stat.Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="font-display text-xl text-[#111318]">{stat.value}</p>
                  <p className="mt-2 text-[0.92rem] leading-6 text-[#6D6F76]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-7xl">
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

      <section className="relative isolate border-y border-black/5 bg-diagonal-fade px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <span className="section-kicker">Yield</span>
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

      <section className="relative isolate px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <span className="section-kicker">Privacy</span>
          <h2 className="section-heading">How it works - practical privacy</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#393B40]">
            Generic makes GUSD usable as money: private by default, provable on demand. It combines an FHE-powered Privacy
            Pool with compliance-grade proofs, so payments use cases don’t collapse into compliance friction and latency.
          </p>

          <div className="narrative-timeline mt-12">
            {privacyMilestones.map((milestone, index) => (
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

      <section className="relative isolate px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
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
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/genericmoney"
                className="text-xs uppercase tracking-[0.2em] text-[#6D6F76] transition hover:text-[#3F79FF]"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
              <a
                href="https://github.com/generic-money"
                className="text-xs text-[#6D6F76] transition hover:text-[#3F79FF]"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <a href="mailto:generic@generic.money" className="hover:text-[#3F79FF]">
              generic@generic.money
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
