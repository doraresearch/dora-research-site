import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const metrics = [
  {
    tag: 'Efficiency',
    label: 'Human touches per workflow',
    description: 'Track how many manual steps each workflow requires before and after DORA.',
  },
  {
    tag: 'Autonomy',
    label: 'Autonomous resolution rate',
    description: 'Percentage of incidents resolved without human intervention.',
  },
  {
    tag: 'Speed',
    label: 'Time to triage',
    description: 'From alert fired to root cause identified — measured in seconds, not hours.',
  },
  {
    tag: 'Quality',
    label: 'Escalation quality',
    description: 'Context completeness when an exception reaches a human.',
  },
  {
    tag: 'Capacity',
    label: 'Engineering hours returned',
    description: 'Time reclaimed from recurring ops work back to engineering.',
  },
  {
    tag: 'Scale',
    label: 'Throughput per operator',
    description: 'Workflows handled per engineer — the core efficiency signal.',
  },
]

export default function Capabilities() {
  return (
    <section id="outcomes" className="relative bg-graphite py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <h2 className="max-w-[24ch] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-[42px]">
                Measure the work removed{' '}
                <span className="text-spectral">from the queue.</span>
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-white/40">
                Track what matters after deployment.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <div className="-mx-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="relative flex gap-4 px-2" style={{ minWidth: 'max-content' }}>
              {/* Aurora connecting bar behind cards */}
              <div className="absolute left-[calc(135px+8px)] right-[calc(135px+8px)] top-1/2 -translate-y-1/2">
                <div className="h-[2px] rounded-full bg-spectral opacity-50" />
                <div className="absolute inset-x-0 -top-[3px] h-[8px] rounded-full bg-spectral opacity-15 blur-[4px]" />
                {metrics.map((_, i) => (
                  i < metrics.length - 1 && (
                    <span
                      key={i}
                      className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-signal opacity-60 shadow-[0_0_6px_var(--color-signal)]"
                      style={{ left: `${((i + 1) / (metrics.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                    />
                  )
                ))}
              </div>
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 60}>
                  <div className="relative flex h-[260px] w-[270px] flex-col items-center justify-between rounded-card border border-white/[0.06] bg-graphite px-6 pb-7 pt-8 transition-colors hover:border-white/[0.10] hover:bg-white/[0.04]">
                    <span className="inline-block rounded-pill border border-white/[0.12] bg-white/[0.06] px-3.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white/60">
                      {m.tag}
                    </span>
                    <h3 className="text-center text-[18px] font-bold leading-[1.3] text-white/85">
                      {m.label}
                    </h3>
                    <p className="text-center font-mono text-[11px] uppercase leading-[1.5] tracking-[0.08em] text-white/25">
                      {m.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          {/* Scroll fade affordance */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-graphite to-transparent" />
        </div>
      </Container>
    </section>
  )
}
