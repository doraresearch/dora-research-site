import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

type Module = { title: string; copy: string; tint: string; stroke: string; icon: ReactNode }

// Example modules — concrete, without committing the full roadmap.
const modules: Module[] = [
  {
    title: 'Support Agent',
    copy: 'Triages player issues, summarizes context, drafts responses, and escalates sensitive cases.',
    tint: 'rgba(56,189,248,0.15)',
    stroke: '#0284C7',
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
    title: 'KYC Agent',
    copy: 'Collects documents, checks rules, flags exceptions, and routes approvals.',
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
    title: 'Payments Agent',
    copy: 'Monitors failed deposits, withdrawals, chargebacks, and unresolved payment cases.',
    tint: 'rgba(110,231,183,0.18)',
    stroke: '#059669',
    icon: (
      <>
        <rect x="3" y="6.5" width="18" height="12" rx="2" />
        <path d="M3 10.5h18M7 15h4" />
      </>
    ),
  },
  {
    title: 'Risk Agent',
    copy: 'Surfaces suspicious patterns, bonus abuse signals, and cases requiring review.',
    tint: 'rgba(34,211,238,0.15)',
    stroke: '#0891B2',
    icon: (
      <>
        <path d="M12 4.5L21 19.5H3z" />
        <path d="M12 10.5v4M12 16.8h.01" />
      </>
    ),
  },
  {
    title: 'Reporting Agent',
    copy: 'Generates operational summaries, shift reports, and exception logs.',
    tint: 'rgba(59,130,246,0.13)',
    stroke: '#2563EB',
    icon: (
      <>
        <path d="M4 19.5h16" />
        <path d="M7.5 19.5V14M12 19.5V10M16.5 19.5v-7.5" />
      </>
    ),
  },
]

export default function AgentModules() {
  return (
    <section id="agent-modules" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">Agent modules</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            Start with the agents you <span className="font-serif font-normal italic">need</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[74ch] text-[16.5px] leading-[1.7] text-body">
            Scoped, permissioned, human-governed modules &mdash; deployed per operator, expanded as value proves out.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {modules.map((m) => (
              <div key={m.title} className="group relative overflow-hidden rounded-card border border-line bg-white p-5 transition-colors hover:border-line-strong">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-spectral opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-[12px]"
                  style={{ backgroundColor: m.tint, color: m.stroke }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    {m.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-[16px] font-bold tracking-[-0.01em] text-ink">{m.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-body">{m.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Example modules · scoped per operator — not the full catalog
            </p>
            <a
              href="#deployment-pattern"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-deep-signal transition-colors hover:text-ink"
            >
              See one in production <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
