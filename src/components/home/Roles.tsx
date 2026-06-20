import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const teammates = [
  {
    title: 'NOC Teammate',
    description: 'Triage alerts, correlate events, run first diagnostics, and escalate with evidence.',
    color: 'text-deep-signal',
    bgColor: 'bg-deep-signal/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'DBA Teammate',
    description: 'Investigate query performance, backup failures, replication lag, capacity issues, and recurring database incidents.',
    color: 'text-deep-signal',
    bgColor: 'bg-deep-signal/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
      </svg>
    ),
  },
  {
    title: 'Sys Admin Teammate',
    description: 'Handle routine checks, configuration drift, patch workflows, service restarts, and infrastructure health tasks.',
    color: 'text-deep-signal',
    bgColor: 'bg-deep-signal/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="7" rx="2" />
        <rect x="2" y="14" width="20" height="7" rx="2" />
        <circle cx="6" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="6" cy="17.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Incident Teammate',
    description: 'Assemble incident context, recommend response paths, update tickets, and coordinate escalation.',
    color: 'text-deep-signal',
    bgColor: 'bg-deep-signal/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
]

export default function Roles() {
  return (
    <section id="teammates" className="relative bg-soft py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            AI teammates
          </p>
          <h2 className="mt-4 max-w-[26ch] text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[42px]">
            Deploy AI teammates for{' '}
            <span className="font-serif font-normal italic">recurring</span> operations.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teammates.map((tm, i) => (
            <Reveal key={tm.title} delay={i * 100}>
              <div className="group rounded-card border border-line bg-white p-7 transition-colors hover:border-line-strong hover:bg-surface">
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-[12px] ${tm.bgColor} ${tm.color}`}>
                  {tm.icon}
                </div>
                <h3 className="text-[17px] font-bold text-ink">{tm.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-body">{tm.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
