import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const lines = [
  'Every alert needs triage.',
  'Every runbook needs execution.',
  'Every incident needs context.',
  'Every escalation needs evidence.',
  'Every routine fix needs verification.',
]

export default function Problem() {
  return (
    <section className="relative bg-soft py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[720px]">
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
      </Container>
    </section>
  )
}
