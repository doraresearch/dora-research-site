import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const safeguards: [string, string][] = [
  ['Human approval paths', 'Sensitive actions wait for sign-off.'],
  ['Permissioned actions', 'Agents act only within scoped surfaces.'],
  ['Audit logs', 'Every action logged and replayable.'],
  ['Escalation rules', 'Edge cases route to people, not models.'],
  ['Operator-configured playbooks', 'Your policies define what agents can do.'],
  ['Compliance-aware workflows', 'Regulator-ready by construction.'],
  ['Existing-stack integration', 'Runs inside the systems you already use.'],
  ['Monitoring & review', 'Agent quality measured continuously.'],
]

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const m = {
    tl: 'left-3 top-3 border-l border-t',
    tr: 'right-3 top-3 border-r border-t',
    bl: 'bottom-3 left-3 border-b border-l',
    br: 'bottom-3 right-3 border-b border-r',
  } as const
  return <span className={`absolute z-[2] h-3.5 w-3.5 border-signal/50 ${m[pos]}`} aria-hidden="true" />
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal2">
      <path d="M5 12l4 4 10-10" />
    </svg>
  )
}

export default function TrustLayer() {
  return (
    <section className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">Built for operators, not demos</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            Autonomous where safe. <span className="font-serif font-normal italic">Human-controlled</span> where it matters.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mb-7 mt-5 max-w-[72ch] text-[16.5px] leading-[1.7] text-body">
            Built for regulated iGaming. Every agent runs with human approval paths, permissioned actions, and audit logs — under your policies, from day one.
          </p>

          <div className="relative overflow-hidden rounded-stage border border-[#1c2026] bg-[radial-gradient(120%_150%_at_50%_-10%,#161a22_0%,#0B0D11_62%)] p-6 shadow-[0_50px_90px_-55px_rgba(5,6,8,0.65)] sm:p-8">
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />

            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6f7782]">Harness · compliance</span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_#7DD3FC]" aria-hidden="true" />
                Compliant
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {safeguards.map(([title, sub]) => (
                <div key={title} className="flex items-start gap-3 rounded-[12px] border border-[#232b35] bg-[#11151b]/85 px-4 py-3.5">
                  <Check />
                  <div>
                    <p className="text-[14px] font-semibold text-[#dff4ff]">{title}</p>
                    <p className="mt-0.5 text-[12.5px] text-[#8b95a1]">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f7782]">
              Regulated operational environments
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
