import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const metrics = [
  {
    tag: 'Efficiency',
    window: '30D',
    value: '-68%',
    before: '11 touches',
    after: '3.5 touches',
    progress: 68,
    title: 'Human touches per workflow',
    description: 'Manual steps each workflow requires before and after DORA.',
    footnote: 'Median across all workflows',
  },
  {
    tag: 'Autonomy',
    window: '30D',
    value: '87%',
    before: '31% auto',
    after: '87% auto',
    progress: 87,
    title: 'Autonomous resolution rate',
    description: 'Incidents resolved without human intervention.',
    footnote: 'Known-pattern incidents only',
  },
  {
    tag: 'Speed',
    window: '7D',
    value: '4.2s',
    before: '22 min',
    after: '4.2 sec',
    progress: 85,
    title: 'Time to triage',
    description: 'From alert fired to root cause identified.',
    footnote: 'P50 across all alert types',
  },
  {
    tag: 'Quality',
    window: '30D',
    value: '92%',
    before: '38% complete',
    after: '92% complete',
    progress: 92,
    title: 'Escalation quality',
    description: 'Context completeness when an exception reaches a human.',
    footnote: 'Rated by receiving engineer',
  },
  {
    tag: 'Capacity',
    window: '30D',
    value: '+14h',
    before: '4h returned',
    after: '14h returned',
    progress: 58,
    title: 'Engineering hours returned',
    description: 'Time reclaimed from recurring ops work per engineer per week.',
    footnote: 'Per engineer · per week',
  },
  {
    tag: 'Scale',
    window: '90D',
    value: '4.7×',
    before: '45 wf/eng',
    after: '212 wf/eng',
    progress: 78,
    title: 'Throughput per operator',
    description: 'Workflows handled per engineer — the core efficiency signal.',
    footnote: 'Workflows per engineer',
  },
]

function MetricCard({ m }: { m: (typeof metrics)[number] }) {
  return (
    <article className="relative flex h-[340px] w-full min-w-0 flex-col rounded-card border border-white/[0.12] bg-white/[0.035] p-5 transition-colors hover:border-white/[0.18] hover:bg-white/[0.055]">
      <div className="absolute inset-x-5 top-0 h-px bg-spectral opacity-60" />

      <div className="flex items-center justify-between gap-3">
        <span className="rounded-pill border border-white/[0.12] bg-white/[0.05] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">
          {m.tag}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
          {m.window}
        </span>
      </div>

      <div className="mt-6">
        <div className="text-[38px] font-bold leading-none tracking-[-0.03em] text-white">
          {m.value}
        </div>
        <div className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white/60">
          <span>{m.before}</span>
          <span className="h-px w-5 bg-white/30" />
          <span className="text-signal">{m.after}</span>
        </div>
      </div>

      <div className="mt-5 h-1.5 overflow-hidden rounded-pill bg-white/[0.10]">
        <div
          className="h-full rounded-pill bg-spectral"
          style={{ width: `${Math.min(Math.max(m.progress, 0), 100)}%` }}
        />
      </div>

      <div className="mt-5 flex-1">
        <h3 className="text-[15px] font-bold leading-[1.3] text-white">
          {m.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.5] text-white/60">
          {m.description}
        </p>
      </div>

      <p className="mt-auto border-t border-white/[0.10] pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/50">
        {m.footnote}
      </p>
    </article>
  )
}

// Six metrics, shown all at once: a static 3×2 grid on desktop (everything
// comparable at a glance — no carousel to operate), and a snap-scroll row on
// smaller screens where horizontal panning is the native pattern.
export default function Capabilities() {
  return (
    <section id="outcomes" className="relative bg-graphite py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mb-14">
            <h2 className="max-w-[24ch] text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-[42px]">
              Measure the work removed{' '}
              <span className="text-spectral">from the queue.</span>
            </h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-white/60">
              Track what matters after deployment.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="-mx-6 snap-x snap-mandatory overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 lg:grid lg:grid-cols-3">
              {metrics.map((m, i) => (
                <Reveal key={m.tag} delay={i * 60} className="w-[300px] shrink-0 snap-center lg:w-auto">
                  <MetricCard m={m} />
                </Reveal>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-graphite to-transparent lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-graphite to-transparent lg:hidden" />
        </div>
      </Container>
    </section>
  )
}
