import { useState } from 'react'
import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import AuroraRibbons from './AuroraRibbons'
import Logo from '@/components/Logo'

type Step = { title: string; copy: string; visual: ReactNode }

const panelCls = 'rounded-[12px] border border-[#232b35] bg-[#11151b]/90'
const monoCls = 'font-mono uppercase tracking-[0.14em]'

function MiniCheck({ dim = false }: { dim?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" className={`h-3 w-3 shrink-0 ${dim ? 'text-[#3a4654]' : 'text-signal2'}`} aria-hidden="true">
      <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FlowLines({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 40 120" fill="none" stroke="#2e3a47" strokeWidth="1.3" className={`h-24 w-8 shrink-0 ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <path d="M0 14C20 14 20 60 40 60M0 60h40M0 106C20 106 20 60 40 60" />
      <circle cx="40" cy="60" r="2.2" fill="#38BDF8" stroke="none" />
    </svg>
  )
}

const sources = ['Support', 'KYC', 'Payments', 'Risk', 'CRM', 'Reporting']
const actions = ['Update CRM', 'Create ticket', 'Request document', 'Approve queue', 'Notify team', 'Generate report']

const steps: Step[] = [
  {
    title: 'Gather',
    copy: 'DORA collects context from the systems, tools, tickets, transactions, policies, and team inputs your operation already depends on.',
    visual: (
      <div className="flex w-full max-w-[470px] items-center gap-3 sm:gap-4">
        <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
          {sources.map((s) => (
            <div key={s} className={`${panelCls} flex items-center gap-1.5 px-2.5 py-2 ${monoCls} text-[9.5px] text-[#9aa3ad]`}>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal2 shadow-[0_0_6px_#38BDF8]" aria-hidden="true" />
              {s}
            </div>
          ))}
        </div>
        <FlowLines />
        <div className="flex-1 rounded-[14px] border border-[#1f3a4d] bg-[#0c1620] p-4 text-center shadow-[0_0_34px_-14px_#38BDF8]">
          <Logo size={22} variant="white" className="mx-auto" />
          <p className={`mt-2.5 ${monoCls} text-[9.5px] text-[#dff4ff]`}>Context assembled</p>
          <p className={`mt-1.5 ${monoCls} text-[9px] text-[#6f7782]`}>9 sources · linked</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Reason',
    copy: 'Agents apply operator rules, workflow logic, prior cases, and business context to understand what happened and determine the next best step.',
    visual: (
      <div className="w-full max-w-[400px]">
        <div className={`${panelCls} p-4`}>
          <div className="flex items-center justify-between">
            <p className={`${monoCls} text-[9.5px] text-[#aeb7c2]`}>Case evaluation</p>
            <p className={`${monoCls} text-[9.5px] text-signal`}>Live</p>
          </div>
          <div className="mt-3 space-y-2">
            {['Operator policy applied', 'Signals linked across functions', 'Prior cases matched (3)'].map((r) => (
              <p key={r} className="flex items-center gap-2 text-[12px] text-[#cbd5e1]">
                <MiniCheck /> {r}
              </p>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className={`${monoCls} text-[9px] text-[#6f7782]`}>Confidence</p>
              <p className={`${monoCls} text-[9px] text-[#dff4ff]`}>0.82</p>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#1c2530]">
              <div className="h-full w-[82%] rounded-full bg-spectral" />
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-center gap-2">
          {['Proceed', 'Hold', 'Escalate'].map((d, i) => (
            <span
              key={d}
              className={`rounded-lg border px-3 py-1.5 ${monoCls} text-[9.5px] ${
                i === 0 ? 'border-signal2 bg-[#0c1620] text-[#dff4ff] shadow-[0_0_16px_-6px_#38BDF8]' : 'border-[#232b35] bg-[#0d1116] text-[#5b6675]'
              }`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Act',
    copy: 'DORA completes approved tasks, prepares decisions, updates systems, routes cases, and triggers follow-ups inside the workflows you define.',
    visual: (
      <div className="flex w-full max-w-[470px] items-center gap-3 sm:gap-4">
        <div className="flex-1 rounded-[14px] border border-[#1f3a4d] bg-[#0c1620] p-4 text-center shadow-[0_0_34px_-14px_#38BDF8]">
          <Logo size={22} variant="white" className="mx-auto" />
          <p className={`mt-2.5 ${monoCls} text-[9.5px] text-[#dff4ff]`}>Executing</p>
          <p className={`mt-1.5 ${monoCls} text-[9px] text-[#6f7782]`}>Under policy</p>
        </div>
        <FlowLines flip />
        <div className="flex-1 space-y-1.5">
          {actions.map((a) => (
            <div key={a} className={`${panelCls} flex items-center justify-between gap-2 px-2.5 py-1.5`}>
              <span className={`${monoCls} text-[9.5px] text-[#9aa3ad]`}>{a}</span>
              <MiniCheck />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Escalate',
    copy: 'When a decision needs human judgment, regulatory review, or operator approval, DORA routes the full context to the right person.',
    visual: (
      <div className="w-full max-w-[380px]">
        <div className={`${panelCls} flex items-center justify-between gap-3 px-3.5 py-3`}>
          <p className={`${monoCls} text-[9.5px] text-[#dff4ff]`}>Case #4821 · Exception</p>
          <p className={`${monoCls} text-[9px] text-signal`}>Needs judgment</p>
        </div>
        <div className="ml-7 flex items-center gap-2.5 py-1.5">
          <span className="h-7 w-px border-l border-dashed border-signal2/70" aria-hidden="true" />
          <p className={`${monoCls} text-[9px] text-[#6f7782]`}>Full context attached</p>
        </div>
        <div className="rounded-[14px] border border-[#1f3a4d] bg-[#0c1620] p-4 shadow-[0_0_34px_-14px_#38BDF8]">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#2e3a47] bg-[#11151b]" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#9aa3ad" strokeWidth="1.7" className="h-3.5 w-3.5">
                <circle cx="12" cy="8.5" r="3" />
                <path d="M5.5 19.5c1.3-3.2 3.6-4.8 6.5-4.8s5.2 1.6 6.5 4.8" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className="text-[12.5px] font-semibold text-[#dff4ff]">Human review</p>
              <p className={`${monoCls} text-[9px] text-[#6f7782]`}>Risk lead · on-call</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {['Evidence', 'Rationale', 'Audit trail'].map((t) => (
              <span key={t} className={`rounded-md border border-[#232b35] bg-[#11151b] px-2 py-1 ${monoCls} text-[8.5px] text-[#9aa3ad]`}>
                {t}
              </span>
            ))}
          </div>
          <div className="mt-3.5 flex gap-2">
            <span className={`rounded-pill bg-signal px-3.5 py-1.5 ${monoCls} text-[9.5px] font-bold text-[#04263a]`}>Approve</span>
            <span className={`rounded-pill border border-[#2e3a47] px-3.5 py-1.5 ${monoCls} text-[9.5px] text-[#9aa3ad]`}>Override</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Learn',
    copy: 'DORA captures outcomes, reviewer feedback, and workflow patterns so playbooks, routing, and operational memory improve over time.',
    visual: (
      <div className="w-full max-w-[400px]">
        <div className={`${panelCls} p-4`}>
          <div className="flex items-center justify-between">
            <p className={`${monoCls} text-[9.5px] text-[#aeb7c2]`}>Operational memory</p>
            <p className={`${monoCls} text-[9.5px] text-signal`}>Updated</p>
          </div>
          <div className="mt-3 space-y-2">
            {[
              ['Playbook', 'v12 → v13'],
              ['Routing rules', '+2 refined'],
              ['Patterns captured', '+14 this week'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between">
                <p className={`${monoCls} text-[9.5px] text-[#9aa3ad]`}>{k}</p>
                <p className={`${monoCls} text-[9.5px] text-[#dff4ff]`}>{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" />
              <path d="M19.5 4v4h-4" />
            </svg>
            <p className={`${monoCls} text-[9px] text-[#6f7782]`}>Outcomes feed playbooks</p>
          </div>
          <div className="flex items-end gap-1" aria-hidden="true">
            {[8, 12, 15, 19, 24].map((h, i) => (
              <span
                key={h}
                style={{ height: `${h}px` }}
                className={`w-2 rounded-sm ${i >= 3 ? 'bg-signal2 shadow-[0_0_8px_-2px_#38BDF8]' : 'bg-[#2e3a47]'}`}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
]

type CornerPos = 'tl' | 'tr' | 'bl' | 'br'

function Corner({ pos }: { pos: CornerPos }) {
  const m: Record<CornerPos, string> = {
    tl: 'left-3 top-3 border-l border-t',
    tr: 'right-3 top-3 border-r border-t',
    bl: 'bottom-3 left-3 border-b border-l',
    br: 'bottom-3 right-3 border-b border-r',
  }
  return <span className={`absolute z-[3] h-4 w-4 border-white/20 ${m[pos]}`} aria-hidden="true" />
}

export default function HowDoraWorks() {
  const [active, setActive] = useState(0)

  return (
    <section id="how-it-works" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">Operating model</Eyebrow>
          <h2 className="text-balance text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[44px]">
            How DORA <span className="font-serif font-normal italic">works</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />

          <div className="mt-9 grid items-stretch gap-6 lg:grid-cols-[45fr_55fr] lg:gap-10">
            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => {
                const expanded = active === i
                return (
                  <div
                    key={step.title}
                    onMouseEnter={() => setActive(i)}
                    className={`relative overflow-hidden rounded-card border transition-colors duration-200 ${
                      expanded ? 'border-line-strong bg-soft' : 'border-line bg-white hover:border-line-strong'
                    }`}
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-[3px] bg-spectral-v transition-opacity duration-300 motion-reduce:transition-none ${
                        expanded ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      id={`how-step-trigger-${i}`}
                      aria-expanded={expanded}
                      aria-controls={`how-step-panel-${i}`}
                      onClick={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="flex w-full items-baseline gap-4 px-5 pb-1 pt-4 text-left sm:px-6"
                    >
                      <span className={`font-mono text-[11px] font-semibold tracking-[0.1em] ${expanded ? 'text-deep-signal' : 'text-muted'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[18px] font-bold tracking-[-0.01em] text-ink sm:text-[19px]">{step.title}</span>
                    </button>
                    <div
                      id={`how-step-panel-${i}`}
                      role="region"
                      aria-labelledby={`how-step-trigger-${i}`}
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                        expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 pl-[52px] pt-1 text-[14px] leading-[1.6] text-body sm:px-6 sm:pl-[56px]">{step.copy}</p>
                      </div>
                    </div>
                    <div className="pb-3" aria-hidden="true" />
                  </div>
                )
              })}
            </div>

            {/* Visual panel */}
            <div className="relative min-h-[400px] overflow-hidden rounded-stage border border-[#1c2026] bg-[radial-gradient(120%_150%_at_50%_-10%,#161a22_0%,#0B0D11_62%)] shadow-[0_50px_90px_-55px_rgba(5,6,8,0.65)] sm:min-h-[460px] lg:min-h-0">
              <AuroraRibbons className="absolute inset-0 z-[1] h-full w-full opacity-35" />
              <span
                className="absolute inset-0 z-[1] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(8,10,14,0.45),transparent_75%)]"
                aria-hidden="true"
              />
              <Corner pos="tl" />
              <Corner pos="tr" />
              <Corner pos="bl" />
              <Corner pos="br" />

              {steps.map((step, i) => (
                <div
                  key={step.title}
                  aria-hidden={active !== i}
                  className={`absolute inset-0 z-[2] flex items-center justify-center p-6 transition-all duration-500 ease-out motion-reduce:transition-none sm:p-10 ${
                    active === i ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
                  }`}
                >
                  {step.visual}
                </div>
              ))}

              <p className={`absolute bottom-4 left-5 z-[2] ${monoCls} text-[9.5px] text-[#6f7782]`}>
                {String(active + 1).padStart(2, '0')} · {steps[active].title}
              </p>
              <p className={`absolute bottom-4 right-5 z-[2] ${monoCls} text-[9.5px] text-[#6f7782]`}>Operating loop</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
