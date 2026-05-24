import SwarmCanvas from './SwarmCanvas'
import Logo from '@/components/Logo'

const rails: [string, boolean][] = [
  ['01 / WORKFLOW — Quarterly close', true],
  ['02 / ROLES — Analyst · Reviewer · Approver', true],
  ['03 / PERSONAS — context + constraints', true],
  ['04 / ORCHESTRATION — running', false],
  ['05 / HARNESS — pending review', false],
]

const chips: [string, boolean][] = [
  ['analyst·01', true],
  ['analyst·02', true],
  ['reviewer', false],
  ['router', true],
  ['approver', false],
  ['context', true],
  ['audit', false],
]

const checks = ['Context traced end to end', 'Output evaluated vs policy', 'Constraints respected']

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5 shrink-0 text-signal2">
      <path d="M5 12l4 4 10-10" />
    </svg>
  )
}

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

export default function CommandStage() {
  return (
    <div className="relative overflow-hidden rounded-stage border border-[#1c2026] bg-[radial-gradient(120%_150%_at_50%_-10%,#161a22_0%,#0B0D11_62%)] p-5 shadow-[0_50px_90px_-55px_rgba(5,6,8,0.65)]">
      <SwarmCanvas className="absolute inset-0 z-[1] h-full w-full" />
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      <div className="relative z-[2] mb-4 flex items-center justify-between gap-3 px-2 pt-1.5">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
          <Logo size={20} variant="white" />
          DORA Command Center
        </span>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b95a1] sm:inline">
          Session · DORA-CORE
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#2a3038]" />
          <span className="h-2 w-2 rounded-full bg-[#2a3038]" />
          <span className="h-2 w-2 rounded-full bg-[#2a3038]" />
        </span>
      </div>

      <div className="relative z-[2] grid gap-3.5 px-1 md:grid-cols-3">
        {/* Workflow brief */}
        <div className="rounded-[14px] border border-[#232b35] bg-[#11151b]/85 p-3.5">
          <p className="mb-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#aeb7c2]">
            Workflow brief <span className="text-signal2">Live</span>
          </p>
          {rails.map(([label, on]) => (
            <p key={label} className={`my-2 flex items-center gap-2.5 font-mono text-[11px] ${on ? 'text-[#9aa3ad]' : 'text-[#5b6675]'}`}>
              <span className={`h-[7px] w-[7px] shrink-0 rounded-full ${on ? 'bg-signal2 shadow-[0_0_8px_#38BDF8]' : 'bg-[#2a3340]'}`} />
              {label}
            </p>
          ))}
        </div>

        {/* Parallel agents */}
        <div className="rounded-[14px] border border-[#232b35] bg-[#11151b]/85 p-3.5">
          <p className="mb-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#aeb7c2]">
            Parallel agents <span className="text-signal2">04 Active</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {chips.map(([label, on], i) => (
              <span
                key={label}
                style={on ? { animationDelay: `${i * 0.3}s` } : undefined}
                className={`rounded-lg border px-2.5 py-1.5 font-mono text-[10.5px] ${
                  on ? 'animate-cell-pulse border-signal2 bg-[#0c1620] text-[#dff4ff] shadow-[0_0_16px_-5px_#38BDF8]' : 'border-[#2a3340] bg-[#0d1116] text-[#cbd5e1]'
                }`}
              >
                {label}
              </span>
            ))}
          </div>
          <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-[#6f7782]">Orchestration layer</p>
        </div>

        {/* Harness review */}
        <div className="rounded-[14px] border border-[#232b35] bg-[#11151b]/85 p-3.5">
          <p className="mb-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#aeb7c2]">
            Harness review <span className="text-signal2">OK</span>
          </p>
          {checks.map((c) => (
            <p key={c} className="my-2 flex items-center gap-2 text-[11.5px] text-[#cbd5e1]">
              <Check />
              {c}
            </p>
          ))}
          <p className="mt-3 flex items-center gap-2 rounded-lg border border-[#1f3a4d] bg-[#08161f] px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#dff4ff]">
            <span className="h-[7px] w-[7px] rounded-full bg-signal shadow-[0_0_8px_#7DD3FC]" />
            Ready for deployment
          </p>
        </div>
      </div>

      <div className="relative z-[2] flex justify-between px-2 pb-1 pt-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6f7782]">
        <span>Workflow → Orchestration → Harness</span>
        <span className="text-signal">● Harness review</span>
      </div>
    </div>
  )
}
