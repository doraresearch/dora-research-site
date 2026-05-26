import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const cases: [string, string, string][] = [
  ['01 / CRM', 'CRM & Retention', 'AI-native player lifecycle management — segmentation, campaign orchestration, and VIP workflow support.'],
  ['02 / SUPPORT', 'Customer Support', 'Human-governed player operations with escalation, QA, policy checks, and multilingual execution.'],
  ['03 / COMPLIANCE', 'Compliance Operations', 'KYC, AML, document review, regulatory workflows, and audit-ready escalation trails.'],
  ['04 / RISK', 'Fraud & Risk', 'Behavioral monitoring, abuse detection, anomaly review, and operational risk triage.'],
  ['05 / PAYMENTS', 'Payments', 'Reconciliation, routing support, treasury coordination, and payment-risk workflows.'],
  ['06 / AFFILIATES', 'Affiliate Operations', 'Partner onboarding, reconciliation, monitoring, and campaign operations.'],
  ['07 / BI', 'BI & Reporting', 'Real-time operational intelligence, anomaly detection, and executive reporting.'],
  ['08 / TRADING', 'Trading Services', 'Exposure monitoring, trading workflow intelligence, and decision-support operations.'],
]

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">Where DORA runs inside gaming operators.</h2>
              <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            </div>
            <Eyebrow>Operating functions</Eyebrow>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cases.map(([n, t, c]) => (
              <div key={t} className="group relative overflow-hidden rounded-card border border-line p-5 transition-colors hover:border-line-strong">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-spectral opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
                <p className="font-mono text-[10px] tracking-[0.14em] text-deep-signal">{n}</p>
                <h3 className="mb-2 mt-3 text-[17px] font-bold tracking-[-0.01em] text-ink">{t}</h3>
                <p className="text-[13.5px] leading-[1.55] text-body">{c}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
