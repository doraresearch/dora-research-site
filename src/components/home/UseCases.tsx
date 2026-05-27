import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const cases: [string, string, string][] = [
  ['01 / PAYMENTS', 'Payments & withdrawals', 'Agents review, release, verify, hold, refund, and escalate payment flows.'],
  ['02 / KYC', 'KYC & compliance', 'Agents connect identity, verification, source-of-funds, sanctions, and policy checks.'],
  ['03 / RISK', 'Fraud & risk', 'Agents link device, behavior, transaction, account, and prior-case signals.'],
  ['04 / SUPPORT', 'Support', 'Agents route escalations, draft responses, surface context, and preserve case history.'],
  ['05 / CRM', 'CRM & VIP', 'Agents coordinate offers, retention, risk controls, support context, and player value.'],
  ['06 / AFFILIATES', 'Affiliates', 'Agents review traffic quality, bonus abuse, disputes, and commercial performance.'],
  ['07 / BI', 'BI & reporting', 'Agents turn operational activity into decision, trend, and leadership reporting.'],
  ['08 / TRADING', 'Trading', 'Agents escalate exposure, suspicious patterns, pricing anomalies, and operational exceptions.'],
]

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">Where DORA runs</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            Core functions ready for <span className="font-serif font-normal italic">agentic operations</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cases.map(([n, t, c]) => (
              <div key={t} className="group relative overflow-hidden rounded-card border border-line bg-white p-5 transition-colors hover:border-line-strong">
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
