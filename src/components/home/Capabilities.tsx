import { useRef, useEffect } from 'react'
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
    <article className="relative flex h-[340px] w-[300px] shrink-0 flex-col rounded-card border border-white/[0.12] bg-white/[0.035] p-5 transition-colors hover:border-white/[0.18] hover:bg-white/[0.055]">
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

const CARD_W = 300
const GAP = 16
const CARD_STEP = CARD_W + GAP
const SET_OFFSET = metrics.length * CARD_STEP

const extendedMetrics = [...metrics, ...metrics, ...metrics]

export default function Capabilities() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollLeft = SET_OFFSET

    let timer: ReturnType<typeof setTimeout>
    const handleScroll = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (el.scrollLeft >= SET_OFFSET * 2) {
          el.style.scrollBehavior = 'auto'
          el.scrollLeft -= SET_OFFSET
          el.style.scrollBehavior = ''
        } else if (el.scrollLeft < CARD_STEP) {
          el.style.scrollBehavior = 'auto'
          el.scrollLeft += SET_OFFSET
          el.style.scrollBehavior = ''
        }
      }, 80)
    }
    el.addEventListener('scroll', handleScroll)
    return () => {
      el.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'right' ? CARD_STEP : -CARD_STEP, behavior: 'smooth' })
  }

  return (
    <section id="outcomes" className="relative bg-graphite py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <h2 className="max-w-[24ch] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-[42px]">
                Measure the work removed{' '}
                <span className="text-spectral">from the queue.</span>
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-white/50">
                Track what matters after deployment.
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scroll('left')}
                className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.04] text-white/60 transition-colors hover:bg-white/[0.08]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scroll('right')}
                className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.04] text-white/60 transition-colors hover:bg-white/[0.08]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <div ref={scrollRef} className="-mx-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 px-2" style={{ minWidth: 'max-content' }}>
              {extendedMetrics.map((m, i) => (
                <Reveal key={`${m.tag}-${i}`} delay={(i % metrics.length) * 60}>
                  <MetricCard m={m} />
                </Reveal>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-graphite to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-graphite to-transparent" />
        </div>
      </Container>
    </section>
  )
}
