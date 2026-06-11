import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const phases: [string, string, string][] = [
  ['01', 'Assess', 'Map the workflow, systems, policies, data sources, and success metrics.'],
  ['02', 'Deploy', 'Build the first governed agentic workflow inside the operator environment.'],
  ['03', 'Validate', 'Measure accuracy, review time, escalation quality, override rates, and operational lift.'],
  ['04', 'Expand', 'Move into adjacent workflows once the first deployment proves value.'],
  ['05', 'Productize', 'Turn repeated patterns into durable operating infrastructure.'],
]

export default function DeploymentModel() {
  return (
    <section id="deployment" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">The expansion story</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            Start with core functions. Scale into an agent-native <span className="font-serif font-normal italic">operating model</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />

          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
