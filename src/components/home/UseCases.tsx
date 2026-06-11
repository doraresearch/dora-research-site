import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import Logo from '@/components/Logo'

type UseCase = {
  title: string
  copy: string
  tint: string
  stroke: string
  icon: ReactNode
}

// Icon chips sweep the Aurora hues (deepened for contrast on light tints) — cool only, per DESIGN.md.
const cases: UseCase[] = [
  {
    title: 'Support',
    copy: 'Triages player issues, drafts responses, and escalates sensitive cases.',
    tint: 'rgba(110,231,183,0.18)',
    stroke: '#059669',
    icon: (
      <>
        <path d="M4.5 13.5a7.5 7.5 0 0 1 15 0" />
        <rect x="3.5" y="13" width="3.6" height="5.4" rx="1.6" />
        <rect x="16.9" y="13" width="3.6" height="5.4" rx="1.6" />
        <path d="M19 18.6v.4a2.5 2.5 0 0 1-2.5 2.5H13" />
      </>
    ),
  },
  {
    title: 'KYC',
    copy: 'Collects documents, runs checks, flags exceptions, and routes approvals.',
    tint: 'rgba(45,212,191,0.16)',
    stroke: '#0D9488',
    icon: (
      <>
        <path d="M12 3.5l7.5 3.5v4.7c0 4.6-3.2 7-7.5 8.4-4.3-1.4-7.5-3.8-7.5-8.4V7z" />
        <path d="M9 11.8l2.1 2.1 4-4.1" />
      </>
    ),
  },
  {
    title: 'Payments',
    copy: 'Monitors deposits, withdrawals, chargebacks, and unresolved cases.',
    tint: 'rgba(34,211,238,0.15)',
    stroke: '#0891B2',
    icon: (
      <>
        <rect x="3" y="6.5" width="18" height="12" rx="2" />
        <path d="M3 10.5h18M7 15h4" />
      </>
    ),
  },
  {
    title: 'Risk & fraud',
    copy: 'Surfaces suspicious patterns, bonus abuse, and cases needing review.',
    tint: 'rgba(56,189,248,0.15)',
    stroke: '#0284C7',
    icon: (
      <>
        <path d="M12 4.5L21 19.5H3z" />
        <path d="M12 10.5v4M12 16.8h.01" />
      </>
    ),
  },
  {
    title: 'VIP & CRM',
    copy: 'Coordinates offers, retention, and player value with risk context.',
    tint: 'rgba(59,130,246,0.13)',
    stroke: '#2563EB',
    icon: (
      <>
        <circle cx="9" cy="8.6" r="3.1" />
        <path d="M3.5 19.5c1.2-2.9 3.2-4.4 5.5-4.4s4.3 1.5 5.5 4.4" />
        <path d="M15.6 5.9a3.1 3.1 0 0 1 0 5.4M17.6 15.4c1.5.8 2.6 2.1 3.2 4.1" />
      </>
    ),
  },
  {
    title: 'Compliance',
    copy: 'Tracks obligations, assembles evidence, and prepares regulator-ready reviews.',
    tint: 'rgba(45,212,191,0.16)',
    stroke: '#0D9488',
    icon: (
      <>
        <path d="M6 3.5h8l4 4v13H6z" />
        <path d="M14 3.5V8h4" />
        <path d="M9.5 13.5l2 2 3.5-3.5" />
      </>
    ),
  },
  {
    title: 'BI & reporting',
    copy: 'Generates operational summaries, shift reports, and exception logs.',
    tint: 'rgba(34,211,238,0.15)',
    stroke: '#0891B2',
    icon: (
      <>
        <path d="M4 19.5h16" />
        <path d="M7.5 19.5V14M12 19.5V10M16.5 19.5v-7.5" />
      </>
    ),
  },
  {
    title: 'Trading & sportsbook',
    copy: 'Escalates exposure, pricing anomalies, and operational exceptions.',
    tint: 'rgba(56,189,248,0.15)',
    stroke: '#0284C7',
    icon: (
      <>
        <path d="M3 16.5L9.5 10l4 3.5 7.5-7" />
        <path d="M15.5 6.5H21V12" />
      </>
    ),
  },
]

function UseCaseCard({ title, copy, tint, stroke, icon }: UseCase) {
  return (
    <div className="group relative flex flex-col items-center overflow-hidden rounded-card border border-line bg-white px-5 py-7 text-center transition-colors hover:border-line-strong">
      <span className="absolute inset-x-0 top-0 h-[3px] bg-spectral opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
      <span
        className="flex h-10 w-10 items-center justify-center rounded-[12px]"
        style={{ backgroundColor: tint, color: stroke }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          {icon}
        </svg>
      </span>
      <h3 className="mt-4 text-[16.5px] font-bold tracking-[-0.01em] text-ink">{title}</h3>
      <p className="mt-2 max-w-[32ch] text-[13.5px] leading-[1.55] text-body">{copy}</p>
    </div>
  )
}

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="text-center">
            <Eyebrow chip className="mb-4">Core functions</Eyebrow>
            <h2 className="mx-auto max-w-[24ch] text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
              What your AI operations team <span className="font-serif font-normal italic">handles</span>.
            </h2>
            <span className="mx-auto mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            <p className="mx-auto mt-5 max-w-[58ch] text-[16.5px] leading-[1.7] text-body">
              Agents handle the routine path. Humans approve where it matters. Every action is audited.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cases.slice(0, 4).map((c) => (
              <UseCaseCard key={c.title} {...c} />
            ))}

            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-card bg-graphite px-6 py-9 text-center sm:col-span-2 lg:col-span-1">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-spectral" aria-hidden="true" />
              <div className="flex items-center gap-2.5">
                <Logo size={26} variant="white" />
                <span className="text-[21px] font-extrabold tracking-[-0.02em] text-dark-text">DORA</span>
              </div>
              <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-dark-muted">
                One agent-native operations layer
              </p>
              <a
                href="#deployment-pattern"
                className="mt-5 inline-flex items-center gap-1.5 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-2 text-[12px] font-semibold text-dark-text transition-colors hover:bg-white/10"
              >
                See a workflow example <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {cases.slice(4).map((c) => (
              <UseCaseCard key={c.title} {...c} />
            ))}
          </div>

          <div className="mt-7 flex justify-center">
            <a
              href="/operator-workflows"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-deep-signal transition-colors hover:text-ink"
            >
              See operator workflows <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
