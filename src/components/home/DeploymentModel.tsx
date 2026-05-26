import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const phases: [string, string, string][] = [
  ['01', 'Assess', 'Identify high-cost, repetitive, measurable operating functions across the operator.'],
  ['02', 'Deploy', 'Deploy agents into specific workflows with limited permissions and human oversight.'],
  ['03', 'Validate', 'Measure cost, speed, throughput, escalation quality, retention impact, and reporting cadence.'],
  ['04', 'Expand', 'Increase agent responsibility as trust, accuracy, and ROI are proven workflow by workflow.'],
  ['05', 'Productize', 'Turn repeatable systems into reusable operating infrastructure for gaming operators.'],
]

export default function DeploymentModel() {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">
                How DORA <span className="font-serif font-normal italic">deploys</span>.
              </h2>
              <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            </div>
            <Eyebrow>Deployment model</Eyebrow>
          </div>

          <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-body">
            DORA deployments start small, prove ROI, and expand workflow by workflow. Each phase tightens trust between operator and system before unlocking the next.
          </p>

          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {/* signal line through circles (lg only) */}
            <div className="absolute left-8 right-8 top-[26px] hidden h-px bg-line lg:block" aria-hidden="true" />
            <div className="absolute left-8 top-[26px] hidden h-px w-[calc(80%-3rem)] bg-spectral lg:block" aria-hidden="true" />

            {phases.map(([n, label, copy]) => (
              <div key={label} className="relative z-10 rounded-card border border-line bg-white p-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-pill border border-deep-signal bg-white font-mono text-[12px] font-bold text-ink">
                  {n}
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-deep-signal">{label}</p>
                <p className="mt-2 text-[14px] leading-[1.55] text-body">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
