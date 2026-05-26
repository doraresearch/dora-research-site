import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const agentsHandle = [
  'workflow execution',
  'monitoring',
  'reporting',
  'operational throughput',
  'repetitive task coordination',
]

const humansRetain = [
  'strategic decisions',
  'quality governance',
  'escalations',
  'compliance accountability',
  'exceptions & edge cases',
]

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const m = {
    tl: 'left-3 top-3 border-l border-t',
    tr: 'right-3 top-3 border-r border-t',
    bl: 'bottom-3 left-3 border-b border-l',
    br: 'bottom-3 right-3 border-b border-r',
  } as const
  return <span className={`absolute h-3.5 w-3.5 border-white/20 ${m[pos]}`} aria-hidden="true" />
}

export default function OperatingPhilosophy() {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <Eyebrow className="mb-3">Operating philosophy</Eyebrow>
              <h2 className="text-[28px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">
                <span className="font-serif font-normal italic">Human-governed</span> agentic operations.
              </h2>
              <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            </div>
            <div className="space-y-4 text-[17px] leading-[1.7] text-body">
              <p>DORA does not replace human judgment. It moves repetitive operational execution into governed AI systems while preserving human oversight for judgment, strategy, escalation, quality, and edge cases.</p>
              <p className="font-semibold text-ink">The goal is not to remove humans from gaming operations — it is to preserve human judgment while materially improving speed, scale, responsiveness, and margin efficiency.</p>
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-stage border border-[#1c2026] bg-[radial-gradient(120%_150%_at_50%_-10%,#161a22_0%,#0B0D11_62%)] p-6 shadow-[0_50px_90px_-55px_rgba(5,6,8,0.65)] sm:p-8">
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />

            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              {/* Agents */}
              <div className="bg-[#0B0D11] p-5 sm:p-6">
                <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal2" aria-hidden="true" />
                  Agents handle
                </p>
                <ul className="space-y-2">
                  {agentsHandle.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#dff4ff]">
                      <span className="h-px w-3 shrink-0 bg-signal2" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Humans */}
              <div className="bg-[#0B0D11] p-5 sm:p-6">
                <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#aeb7c2]">
                  <span className="h-1.5 w-1.5 rounded-full bg-spectral" aria-hidden="true" />
                  Humans retain control over
                </p>
                <ul className="space-y-2">
                  {humansRetain.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14px] text-white">
                      <span className="h-px w-3 shrink-0 bg-spectral" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f7782]">
              Agents act · humans govern
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
