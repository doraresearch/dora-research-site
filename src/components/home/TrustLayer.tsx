import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const safeguards: [string, string][] = [
  ['Scoped permissions', 'agents act only within bounded surfaces'],
  ['Human review gates', 'sensitive actions wait for approval'],
  ['Audit trails', 'every action logged and replayable'],
  ['Escalation rules', 'edge cases route to people, not models'],
  ['Policy-aware agents', 'rules embedded in agent context'],
  ['Constrained execution', 'tool access limited per role'],
  ['Monitoring & evaluation', 'live observability across the harness'],
  ['Compliance-aligned workflows', 'regulator-ready by construction'],
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
          <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">
                Built for <span className="font-serif font-normal italic">regulated</span> operational environments.
              </h2>
              <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            </div>
            <Eyebrow>Trust layer</Eyebrow>
          </div>

          <p className="mb-7 max-w-[68ch] text-[16px] leading-[1.6] text-body">
            DORA systems are designed for controlled deployment inside regulated gaming operations — bounded, audited, and accountable by construction.
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
