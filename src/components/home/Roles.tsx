import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const roles = [
  {
    title: 'Database Administrators',
    description: 'DORA monitors query performance, manages backups, handles failovers, and optimizes schemas — the way a senior DBA would, 24/7.',
    capabilities: ['Query optimization', 'Backup & recovery', 'Schema management', 'Performance monitoring', 'Capacity planning'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
      </svg>
    ),
  },
  {
    title: 'System Administrators',
    description: 'DORA manages server configurations, automates deployments, patches systems, and resolves incidents before they escalate.',
    capabilities: ['Config management', 'Automated patching', 'Incident resolution', 'Infrastructure scaling', 'Security hardening'],
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
    title: 'NOC Engineers',
    description: 'DORA triages alerts, correlates events across systems, runs initial diagnostics, and escalates only what needs human judgment.',
    capabilities: ['Alert triage', 'Event correlation', 'Root cause analysis', 'Runbook execution', 'Escalation routing'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export default function Roles() {
  return (
    <section className="relative bg-base py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            Built for operations teams
          </p>
          <h2 className="mt-4 max-w-[22ch] text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-white/90 sm:text-[42px]">
            Built for the teams that{' '}
            <span className="font-serif font-normal italic">own</span> the stack.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 100}>
              <div className="group rounded-card border border-white/[0.06] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[12px] bg-white/[0.06] text-cyan">
                  {role.icon}
                </div>
                <h3 className="text-[20px] font-bold text-white/90">{role.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-white/50">{role.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-pill border border-white/[0.06] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/40"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
