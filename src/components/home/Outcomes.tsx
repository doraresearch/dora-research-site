import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const outcomes = [
  'Lower operational cost',
  'Reduced manual workload',
  'Faster support resolution',
  'Improved CRM execution cadence',
  'Faster compliance review cycles',
  'Improved fraud and risk triage',
  'Better affiliate reconciliation',
  'Improved reporting frequency',
  'Higher operational throughput',
  'Margin expansion',
]

export default function Outcomes() {
  return (
    <section id="outcomes" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">
                Built for measurable operator impact.
              </h2>
              <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            </div>
            <Eyebrow>What operators measure</Eyebrow>
          </div>

          <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-body">
            DORA deployments are designed around real, operator-relevant numbers — not generic AI metrics.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {outcomes.map((label, i) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-card border border-line bg-white px-4 py-3.5"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-spectral" aria-hidden="true" />
                <span className="text-[15px] font-medium text-ink">{label}</span>
                <span className="ml-auto font-mono text-[10px] tracking-[0.14em] text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
