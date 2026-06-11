import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const steps = [
  'Map one operating workflow',
  'Define agent permissions',
  'Connect required systems',
  'Configure approval and escalation rules',
  'Deploy in a controlled environment',
  'Measure performance',
  'Expand to adjacent workflows',
]

const deliverables = [
  'Workflow map',
  'Agent playbook',
  'Integration plan',
  'Human approval rules',
  'Pilot dashboard',
  'Expansion roadmap',
]

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-deep-signal" aria-hidden="true">
      <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function DeploymentModel() {
  return (
    <section id="deployment" className="bg-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">How we deploy</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            How we deploy inside your <span className="font-serif font-normal italic">operation</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[60ch] text-[16.5px] leading-[1.7] text-body">
            A controlled engagement — one workflow at a time.
          </p>

          <div className="mt-9 grid gap-6 lg:grid-cols-[7fr_5fr] lg:gap-10">
            <div className="relative rounded-card border border-line bg-white p-6 sm:p-7">
              <span className="absolute bottom-10 left-[38px] top-10 hidden w-px bg-line sm:block" aria-hidden="true" />
              <ol className="space-y-1">
                {steps.map((step, i) => (
                  <li key={step} className="relative flex items-center gap-4 py-2">
                    <span className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-pill border border-deep-signal bg-white font-mono text-[10.5px] font-bold text-ink">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[15px] font-medium leading-[1.4] text-ink">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-card border border-line bg-white p-6 sm:p-7">
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-deep-signal">What you get</p>
              <ul className="mt-4 space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] font-medium text-ink">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-[13px] leading-[1.6] text-muted">
                Expansion happens only after the first workflow proves out — measured, reviewed, and approved by your team.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
