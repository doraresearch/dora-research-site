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
                <span className="text-white/40">from the queue.</span>
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-white/40">
                Track what matters after deployment.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="-mx-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-2" style={{ minWidth: 'max-content' }}>
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 60}>
                <div className="flex h-[260px] w-[270px] flex-col items-center justify-between rounded-[16px] border border-white/[0.06] bg-white/[0.04] px-6 pb-7 pt-8 transition-colors hover:bg-white/[0.07]">
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
      </Container>
    </section>
  )
}
