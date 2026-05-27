import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const contrasts: [string, string][] = [
  ['Add people to scale operational queues', 'Deploy agents to scale operational capacity'],
  ['Analysts gather context manually', 'Agents gather context across systems'],
  ['Decisions vary by team, tool, and analyst', 'Policy, documentation, escalation, and follow-through are applied consistently'],
  ['Systems flag or score in isolation', 'Agents reason across functions before action is taken'],
  ['Humans handle repetitive synthesis', 'Humans supervise exceptions and judgment-heavy cases'],
]

export default function ParadigmShift() {
  return (
    <section id="why-now" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">Why now</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            The operating model is <span className="font-serif font-normal italic">changing</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[78ch] text-[16.5px] leading-[1.7] text-body">
            Traditional operators scale by adding people. Agentic operators scale by deploying systems that gather, reason, act, escalate, and learn.
          </p>

          <div className="mt-9 overflow-hidden rounded-card border border-line">
            <div className="grid grid-cols-2">
              <div className="border-r border-line bg-soft px-4 py-3.5 sm:px-5 sm:py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span className="hidden sm:inline">Old way · </span>Human-heavy operations
                </p>
              </div>
              <div className="relative bg-signal-soft px-4 py-3.5 sm:px-5 sm:py-4">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-spectral" aria-hidden="true" />
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-deep-signal">
                  <span className="hidden sm:inline">New way · </span>Agentic operations
                </p>
              </div>
            </div>
            {contrasts.map(([oldWay, newWay], i) => (
              <div key={i} className="grid grid-cols-2 border-t border-line">
                <div className="border-r border-line bg-white px-4 py-4 text-[13px] leading-[1.5] text-muted sm:px-5 sm:py-5 sm:text-[14.5px] sm:leading-[1.55]">
                  {oldWay}
                </div>
                <div className="bg-white px-4 py-4 text-[13px] font-medium leading-[1.5] text-ink sm:px-5 sm:py-5 sm:text-[14.5px] sm:leading-[1.55]">
                  {newWay}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
