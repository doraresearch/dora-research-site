import { useState } from 'react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

type StepVisual =
  | { kind: 'sources'; sources: string[]; label: string }
  | { kind: 'checks'; checks: string[]; label: string }
  | { kind: 'actions'; actions: string[]; label: string }
  | { kind: 'escalation'; from: string; to: string; label: string }
  | { kind: 'items'; items: string[]; label: string }

const steps: { num: string; title: string; description: string; visual: StepVisual }[] = [
  {
    num: '01',
    title: 'Observe',
    description: 'DORA connects to observability, ticketing, cloud, databases, chat, runbooks, and internal tools — building a live model of system signals across your stack.',
    visual: {
      kind: 'sources',
      sources: ['Datadog', 'PagerDuty', 'CloudWatch', 'Prometheus', 'Jira', 'Slack'],
      label: 'System signals ingested',
    },
  },
  {
    num: '02',
    title: 'Diagnose',
    description: 'When an event occurs, DORA evaluates it against historical patterns, runbooks, and operational context. It identifies likely causes and determines the appropriate response path.',
    visual: {
      kind: 'checks',
      checks: ['Pattern matching', 'Root cause analysis', 'Impact assessment', 'Runbook lookup'],
      label: 'Likely cause identified',
    },
  },
  {
    num: '03',
    title: 'Execute',
    description: 'For known patterns with approved workflows, DORA executes autonomously — restarting services, scaling resources, clearing queues, running patches. Every action is logged.',
    visual: {
      kind: 'actions',
      actions: ['Restart service', 'Scale resources', 'Clear queue', 'Apply patch', 'Update DNS', 'Rotate creds'],
      label: 'Approved workflow executed',
    },
  },
  {
    num: '04',
    title: 'Verify',
    description: 'After execution, DORA confirms recovery — checking metrics, validating service health, and ensuring the fix holds. No silent failures.',
    visual: {
      kind: 'checks',
      checks: ['Metric recovery', 'Service health', 'SLO compliance', 'Regression check'],
      label: 'Recovery confirmed',
    },
  },
  {
    num: '05',
    title: 'Document',
    description: 'Every resolution — automated or human-driven — is documented with full context: what happened, what was tried, what worked, and what to watch.',
    visual: {
      kind: 'items',
      items: ['Timeline → Ticket', 'Actions → Audit log', 'Outcome → Knowledge base'],
      label: 'Result documented',
    },
  },
  {
    num: '06',
    title: 'Escalate',
    description: 'When DORA encounters something outside its approved scope — novel failures, ambiguous signals, high-risk changes — it escalates to the right human with full context and recommended actions.',
    visual: {
      kind: 'escalation',
      from: 'Exception detected',
      to: 'Human review',
      label: 'Context-rich escalation',
    },
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)

  return (
    <section id="product" className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-line to-transparent" />

      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            How it works
          </p>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[42px]">
            From alert to outcome.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[45%_1fr]">
          {/* Accordion */}
          <div className="space-y-1">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <button
                  type="button"
                  className={`w-full rounded-lg text-left transition-all duration-300 ${active === i ? 'bg-ink/[0.03]' : 'hover:bg-ink/[0.02]'}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-expanded={active === i}
                  aria-controls={`step-panel-${step.num}`}
                >
                  <div className="flex items-start gap-4 px-5 py-4">
                    <div className="flex items-center">
                      {active === i && (
                        <span className="mr-3 h-8 w-[3px] rounded-full bg-spectral-v" />
                      )}
                      <span className={`font-mono text-[13px] font-semibold ${active === i ? 'text-deep-signal' : 'text-ink/20'}`}>
                        {step.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className={`text-[17px] font-bold transition-colors ${active === i ? 'text-ink' : 'text-ink/40'}`}>
                        {step.title}
                      </p>
                      <div
                        id={`step-panel-${step.num}`}
                        role="region"
                        className="grid transition-all duration-500"
                        style={{ gridTemplateRows: active === i ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="pt-2 text-[14px] leading-[1.6] text-body">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Visual panel */}
          <Reveal>
            <div className="relative overflow-hidden rounded-stage border border-white/[0.06] bg-graphite p-8 lg:p-10">
              {/* Corner brackets */}
              {['top-3 left-3', 'top-3 right-3 rotate-90', 'bottom-3 right-3 rotate-180', 'bottom-3 left-3 -rotate-90'].map((pos) => (
                <span key={pos} className={`absolute ${pos} h-4 w-4 border-l-[1.5px] border-t-[1.5px] border-white/[0.15]`} />
              ))}

              {/* Step visual */}
              <div className="relative min-h-[300px]">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                  >
                    <div className="space-y-3">
                      {step.visual.kind === 'sources' && (
                        <div className="flex flex-wrap gap-2">
                          {step.visual.sources.map((s) => (
                            <span key={s} className="rounded-pill border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-white/60">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                      {step.visual.kind === 'checks' && (
                        <div className="space-y-2">
                          {step.visual.checks.map((c) => (
                            <div key={c} className="flex items-center gap-3">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan/20">
                                <svg viewBox="0 0 16 16" className="h-3 w-3 text-cyan"><path d="M4 8l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                              </span>
                              <span className="text-[14px] text-white/60">{c}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {step.visual.kind === 'actions' && (
                        <div className="grid grid-cols-2 gap-2">
                          {step.visual.actions.map((a) => (
                            <div key={a} className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                              <span className="text-[13px] text-white/60">{a}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {step.visual.kind === 'escalation' && (
                        <div className="flex items-center gap-4">
                          <div className="rounded-lg border border-sky/30 bg-sky/10 px-4 py-3">
                            <p className="text-[13px] font-medium text-sky">{step.visual.from}</p>
                          </div>
                          <div className="flex-1 border-t border-dashed border-white/20" />
                          <div className="rounded-lg border border-cyan/30 bg-cyan/10 px-4 py-3">
                            <p className="text-[13px] font-medium text-cyan">{step.visual.to}</p>
                          </div>
                        </div>
                      )}
                      {step.visual.kind === 'items' && (
                        <div className="space-y-3">
                          {step.visual.items.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-lg bg-white/[0.04] px-4 py-3">
                              <span className="text-[14px] text-white/60">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/30">
                      {step.num} · {step.visual.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom chrome */}
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">
                  {steps[active].num} · {steps[active].title}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">
                  workflow execution
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="mx-auto mt-12 max-w-[600px] text-center text-[15px] leading-[1.6] text-muted">
            This is not a chatbot. It is role-level execution for recurring operational work.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
