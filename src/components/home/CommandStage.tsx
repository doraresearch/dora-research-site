import AuroraRibbons from './AuroraRibbons'

const steps: [string, string, string][] = [
  ['01', 'Gather', 'Collect context from tools and systems.'],
  ['02', 'Reason', 'Apply operator rules and workflow logic.'],
  ['03', 'Act', 'Complete approved actions or prepare decisions.'],
  ['04', 'Escalate', 'Route exceptions to humans.'],
  ['05', 'Learn', 'Improve playbooks and operational memory over time.'],
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

// "How it works" stage: flowing Aurora ribbons behind the four-step product model
// (Turing-hero treatment, recolored to the Aurora signature).
export default function CommandStage() {
  return (
    <div className="relative overflow-hidden rounded-stage border border-[#1c2026] bg-[radial-gradient(120%_150%_at_50%_-10%,#161a22_0%,#0B0D11_62%)] shadow-[0_50px_90px_-55px_rgba(5,6,8,0.65)]">
      <AuroraRibbons className="absolute inset-0 z-[1] h-full w-full" />
      <span
        className="absolute inset-0 z-[1] bg-[radial-gradient(52%_56%_at_50%_38%,rgba(8,10,14,0.42),transparent_72%)]"
        aria-hidden="true"
      />
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      <div className="relative z-[2] mx-auto max-w-[1000px] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-dark-muted">How DORA works</p>
          <h2 className="mt-5 text-[30px] font-bold leading-[1.04] tracking-[-0.03em] text-dark-text sm:text-[42px] lg:text-[48px]">
            Gather. Reason. Act. Escalate. <span className="font-serif font-normal italic">Learn.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[54ch] text-[15px] leading-[1.7] text-dark-muted sm:text-[16px]">
            Every deployment runs the same loop &mdash; autonomous where safe, human-controlled where it matters.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map(([n, verb, copy]) => (
            <div key={verb} className="border-t border-white/10 pt-4 text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                {n} · {verb}
              </p>
              <p className="mt-2.5 text-[13.5px] leading-[1.6] text-dark-muted">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
