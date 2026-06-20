import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const workflows = [
  'Alert triage and first response',
  'Database health checks and query tuning',
  'Backup verification and recovery testing',
  'Patch management and configuration drift',
  'Incident context assembly and escalation',
  'Capacity monitoring and scaling',
  'Certificate and credential rotation',
]

export default function Deployment() {
  return (
    <section id="deployment" className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-line to-transparent" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Deployment
              </p>
              <h2 className="mt-4 max-w-[22ch] text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[42px]">
                Start with{' '}
                <span className="font-serif font-normal italic">one workflow.</span>
              </h2>
              <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.65] text-body">
                Pick one recurring operational workflow. DORA deploys a secure AI teammate scoped to that workflow — read-only at first, then approval-based, then autonomous for bounded tasks. You measure the human touches removed before expanding.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-card border border-line bg-soft p-6 sm:p-8">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Recurring workflows
              </p>
              <ul className="space-y-3">
                {workflows.map((w, i) => (
                  <li key={w} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-deep-signal/10 font-mono text-[10px] font-semibold text-deep-signal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[15px] leading-[1.5] text-ink">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
