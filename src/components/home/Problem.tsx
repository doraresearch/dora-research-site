import { lazy, Suspense, useEffect, useState } from 'react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const ScaleVisual3D = lazy(() => import('./ScaleVisual3D'))

const lines = [
  'Every alert needs triage.',
  'Every runbook needs execution.',
  'Every incident needs context.',
  'Every escalation needs evidence.',
  'Every routine fix needs verification.',
]

function Person({ accent }: { accent?: boolean }) {
  return (
    <svg viewBox="0 0 16 18" fill="none" className={`h-[18px] w-4 ${accent ? 'text-deep-signal' : 'text-ink/25'}`}>
      <circle cx="8" cy="5" r="3.5" fill="currentColor" />
      <path d="M1 17c0-3.87 3.13-7 7-7s7 3.13 7 7" fill="currentColor" />
    </svg>
  )
}

const stages: {
  customers: string
  team: number
  load: string[]
  overloaded?: boolean
}[] = [
  { customers: '10', team: 3, load: [] },
  { customers: '100', team: 7, load: ['Alerts ×3', 'Runbooks ×4'] },
  { customers: '1,000', team: 14, load: ['Alerts ×12', 'Runbooks ×18', 'Incidents ×9'], overloaded: true },
]

function ScaleVisual() {
  return (
    <div className="rounded-2xl border border-line bg-white">
      {/* Header */}
      <div className="border-b border-line px-5 py-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Ops headcount required
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Workload
          </span>
        </div>
      </div>

      {/* Stages */}
      {stages.map((stage, i) => (
        <div
          key={stage.customers}
          className={`relative px-5 py-4 ${
            i < stages.length - 1 ? 'border-b border-line' : ''
          } ${stage.overloaded ? 'bg-deep-signal/[0.03]' : ''}`}
        >
          {/* Customer label */}
          <p className={`text-[13px] font-semibold ${stage.overloaded ? 'text-deep-signal' : 'text-ink/70'}`}>
            {stage.customers} customers
          </p>

          {/* People grid + load chips */}
          <div className="mt-3 flex items-end justify-between gap-4">
            {/* Person icons */}
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: stage.team }).map((_, j) => (
                <Person key={j} accent={stage.overloaded && j >= stage.team - 5} />
              ))}
            </div>

            {/* Workload chips */}
            {stage.load.length > 0 && (
              <div className="flex shrink-0 flex-col items-end gap-1">
                {stage.load.map((l) => (
                  <span
                    key={l}
                    className={`whitespace-nowrap rounded-pill px-2 py-0.5 font-mono text-[10px] tracking-[0.04em] ${
                      stage.overloaded
                        ? 'bg-deep-signal/10 text-deep-signal'
                        : 'bg-ink/[0.05] text-ink/40'
                    }`}
                  >
                    {l}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottleneck callout */}
          {stage.overloaded && (
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-deep-signal/15 bg-deep-signal/[0.05] px-3 py-2">
              <div className="h-px flex-1 bg-spectral-v opacity-40" />
              <p className="shrink-0 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-deep-signal">
                Bottleneck
              </p>
              <div className="h-px flex-1 bg-spectral-v opacity-40" />
            </div>
          )}
        </div>
      ))}

      {/* Footer */}
      <div className="border-t border-line px-5 py-3">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          Every new customer adds operational work.
        </p>
      </div>
    </div>
  )
}

export default function Problem() {
  const [enhanced, setEnhanced] = useState(false)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let webgl = false
    try {
      const c = document.createElement('canvas')
      webgl = !!(c.getContext('webgl2') || c.getContext('webgl'))
    } catch {
      webgl = false
    }
    if (webgl && !reduce) setEnhanced(true)
  }, [])

  return (
    <section className="relative bg-soft py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                The problem
              </p>
              <h2 className="mt-4 text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[42px]">
                Operations still scale through{' '}
                <span className="text-muted">human execution.</span>
              </h2>

              <div className="mt-12 space-y-4">
                {lines.map((line, i) => (
                  <Reveal key={line} delay={i * 80}>
                    <p className="text-[18px] font-medium leading-[1.5] text-ink/70 sm:text-[20px]">
                      {line}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={500}>
                <p className="mt-10 text-[17px] leading-[1.65] text-body">
                  As infrastructure grows, teams add headcount or push more repeat work to senior engineers. That model breaks.
                </p>
              </Reveal>
            </div>
          </Reveal>

          <Reveal delay={200}>
            {enhanced ? (
              <Suspense fallback={<ScaleVisual />}>
                <ScaleVisual3D />
              </Suspense>
            ) : (
              <ScaleVisual />
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
