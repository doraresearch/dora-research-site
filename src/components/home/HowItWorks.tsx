import { useState } from 'react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

type CapabilityId = 'remember' | 'trace' | 'anticipate'

type Capability = {
  id: CapabilityId
  index: string
  verb: string
  title: string
  description: string
}

const capabilities: Capability[] = [
  {
    id: 'remember',
    index: '01',
    verb: 'Remember',
    title: 'Work becomes memory as it happens.',
    description: 'Meetings, tickets, documents, code, research, and system signals become a time-ordered record of what changed.',
  },
  {
    id: 'trace',
    index: '02',
    verb: 'Trace',
    title: 'The reason stays with the decision.',
    description: 'Evidence, owners, dependencies, and downstream effects remain visible as plans evolve.',
  },
  {
    id: 'anticipate',
    index: '03',
    verb: 'Anticipate',
    title: 'The next important thing comes forward.',
    description: 'Blockers, deadlines, open decisions, and accountable people surface before the work has to be reconstructed.',
  },
]

function RememberPreview() {
  const sources = ['Meeting', 'Linear', 'GitHub', 'Datadog']
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {sources.map((source) => (
          <span key={source} className="rounded-[8px] border border-control/70 bg-dark px-3 py-2 font-mono text-[10px] uppercase tracking-[0.07em] text-context">
            {source}
          </span>
        ))}
      </div>
      <div className="relative mt-10 px-3">
        <div className="absolute left-5 right-5 top-[5px] h-px bg-control/60" aria-hidden="true" />
        <div className="relative flex justify-between">
          {['07:55', '08:12', '08:26', '08:31'].map((time, index) => (
            <span key={time} className="flex flex-col items-center">
              <span className={`h-[11px] w-[11px] rounded-full border-[3px] border-dark ${index === 3 ? 'bg-action' : 'bg-context'}`} />
              <span className="mt-3 font-mono text-[10px] tracking-[0.05em] text-context">{time}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mt-9 rounded-[10px] border border-action/60 bg-action/15 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-context">Usable history · Updated 08:40</p>
        <p className="mt-2 text-[15px] font-semibold text-canvas">Four moments now describe one change in the release plan.</p>
      </div>
    </div>
  )
}

function TracePreview() {
  const trail = [
    ['Decision', 'Audit history enters beta'],
    ['Why', 'Three teams need traceability'],
    ['Source', 'Dovetail · Linear'],
  ]
  return (
    <div>
      <div className="space-y-3">
        {trail.map(([label, value], index) => (
          <div key={label} className="relative flex min-h-16 items-center gap-4 rounded-[10px] border border-control/70 bg-dark px-4">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${index === 1 ? 'bg-highlight text-ink' : 'bg-context text-ink'}`}>
              {index + 1}
            </span>
            <div>
              <p className={`font-mono text-[10px] uppercase tracking-[0.08em] ${index === 1 ? 'text-highlight' : 'text-context'}`}>{label}</p>
              <p className="mt-1 text-[13px] font-semibold text-canvas">{value}</p>
            </div>
            {index < trail.length - 1 ? <span className="absolute -bottom-4 left-[31px] h-4 w-px bg-control" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
      <p className="mt-5 text-right font-mono text-[10px] uppercase tracking-[0.08em] text-highlight">One inspectable trail</p>
    </div>
  )
}

function AnticipatePreview() {
  return (
    <div>
      <div className="rounded-[12px] border border-risk/70 bg-risk-tint p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.07em] text-risk">
          <span>Risk · Auth p95 +18%</span>
          <span>Gate · 14:00</span>
        </div>
        <h3 className="mt-5 font-display text-[28px] font-bold leading-[1.08] tracking-[-0.025em] text-ink">
          Build 842 is holding rollout.
        </h3>
        <p className="mt-3 text-[14px] leading-[1.55] text-secondary">
          This reliability signal now blocks the private-beta plan. Sam owns the fix or rollback.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-[8px] bg-surface px-3 py-2 font-mono text-[10px] text-ink">Owner · Sam</span>
          <span className="rounded-[8px] bg-surface px-3 py-2 font-mono text-[10px] text-ink">Decision · 14:00</span>
        </div>
      </div>
      <p className="mt-5 text-right font-mono text-[10px] uppercase tracking-[0.08em] text-risk">Brought forward before you ask</p>
    </div>
  )
}

function CapabilityPreview({ activeId }: { activeId: CapabilityId }) {
  return (
    <div id="capability-preview" role="region" aria-live="polite" className="rounded-[18px] border border-control/70 bg-ink p-5 shadow-[0_22px_60px_rgba(0,0,0,.24)] sm:p-7">
      <div className="flex items-center justify-between gap-4 border-b border-control/50 pb-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.09em] text-context">Zora / Background intelligence</p>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.07em] text-context">
          <span className="h-2 w-2 rounded-full bg-action" aria-hidden="true" /> Active
        </span>
      </div>
      <div key={activeId} className="min-h-[300px] animate-fade-up pt-7 motion-reduce:animate-none sm:min-h-[320px]">
        {activeId === 'remember' ? <RememberPreview /> : null}
        {activeId === 'trace' ? <TracePreview /> : null}
        {activeId === 'anticipate' ? <AnticipatePreview /> : null}
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [activeId, setActiveId] = useState<CapabilityId>('remember')

  return (
    <section id="how-it-works" className="overflow-hidden bg-dark">
      <Container className="py-20 sm:py-24 lg:py-[104px]">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,.9fr)] lg:items-end lg:gap-16">
          <Reveal>
            <p className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-context">
              Always working in the background
            </p>
            <h2 className="max-w-[720px] text-balance font-display text-[42px] font-bold leading-[1.02] tracking-[-0.035em] text-canvas sm:text-[52px] lg:text-[58px]">
              It remembers the work. You keep moving.
            </h2>
          </Reveal>
          <p className="max-w-[520px] text-[16px] leading-[1.65] text-context sm:text-[17px]">
            Not another place to file information. Zora turns the work already happening into memory, reasoning, and timely attention.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[minmax(0,1.03fr)_minmax(420px,.97fr)] lg:items-start lg:gap-10">
          <div className="divide-y divide-control/65 border-y border-control/65">
            {capabilities.map((capability) => {
              const selected = capability.id === activeId
              return (
                <button
                  key={capability.id}
                  type="button"
                  aria-pressed={selected}
                  aria-controls="capability-preview"
                  onClick={() => setActiveId(capability.id)}
                  className={`group grid min-h-[154px] w-full gap-3 py-6 text-left transition-colors duration-200 motion-reduce:transition-none sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6 ${selected ? 'bg-ink/65 px-4 sm:px-5' : 'px-0 hover:bg-ink/35 hover:px-4 sm:hover:px-5'}`}
                >
                  <span className={`font-mono text-[10px] font-medium uppercase tracking-[0.1em] ${capability.id === 'anticipate' ? 'text-risk' : capability.id === 'trace' ? 'text-highlight' : 'text-context'}`}>
                    {capability.index} / {capability.verb}
                  </span>
                  <span>
                    <span className="block text-[20px] font-semibold leading-[1.3] text-canvas sm:text-[22px]">{capability.title}</span>
                    <span className="mt-3 block max-w-[560px] text-[14px] leading-[1.6] text-context sm:text-[15px]">{capability.description}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <Reveal delay={100}>
            <CapabilityPreview activeId={activeId} />
          </Reveal>
        </div>

        <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.08em] text-control">
          Interaction · Select a row to inspect the same work from a different angle
        </p>
      </Container>
    </section>
  )
}
