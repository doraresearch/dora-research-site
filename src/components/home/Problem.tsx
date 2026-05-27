import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const traits: [string, string][] = [
  ['High-volume queues', 'Cases never stop arriving.'],
  ['Cross-functional context', 'The right decision rarely lives in one system.'],
  ['Measurable economics', 'Time, throughput, error, escalation, and resolution can be quantified.'],
]

export default function Problem() {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">Why iGaming</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            iGaming runs on high-volume operational <span className="font-serif font-normal italic">judgment</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[78ch] text-[16.5px] leading-[1.7] text-body">
            Operators rely on teams to review withdrawals, verify identities, monitor fraud, manage compliance, handle support escalations, coordinate CRM, review affiliates, reconcile reporting, and detect trading anomalies. These workflows are measurable, policy-bound, and exposed to missed context, inconsistent execution, and human fatigue.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {traits.map(([title, copy]) => (
              <div key={title} className="rounded-card border border-line bg-white p-5">
                <p className="text-[15.5px] font-semibold leading-[1.35] text-ink">{title}</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-body">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
