import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

type Range = [string, string] | null

// Target metrics: headline + before→after detail (qualitative where no pilot range exists).
const metrics: [string, Range, string][] = [
  ['Faster review cycles', ['24–72 hrs', '2–12 hrs'], 'Withdrawal-to-resolution time'],
  ['Higher reviewer throughput', ['25–35', '90–120'], 'Cases per analyst per day'],
  ['Fewer unnecessary holds', ['8–12%', '3–5%'], 'False-positive hold rate'],
  ['Better escalation quality', null, 'Exceptions arrive with evidence, rationale, and a recommended action'],
  ['Complete audit trail', null, 'Every step logged, timestamped, and replayable'],
]

export default function WithdrawalReview() {
  return (
    <section id="deployment-pattern" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">Example deployment</Eyebrow>
          <h2 className="text-balance text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[44px]">
            High-value <span className="font-serif font-normal italic">withdrawal review</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[76ch] text-[16.5px] leading-[1.7] text-body">
            DORA connects payments, KYC, AML, gameplay, device, bonus, support, and prior-case signals to prepare the case, apply operator policy, recommend action, and escalate exceptions with a complete audit trail.
          </p>
        </Reveal>

        <Reveal className="mt-9">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {metrics.map(([title, range, caption]) => (
              <div key={title} className="rounded-card bg-graphite p-5 text-dark-text">
                <p className="bg-spectral bg-clip-text text-[19px] font-bold leading-[1.15] tracking-[-0.01em] text-transparent sm:text-[20px]">
                  {title}
                </p>
                {range && (
                  <p className="mt-3 text-[14px] font-semibold leading-tight">
                    <span className="text-dark-muted">{range[0]}</span>
                    <span className="mx-1.5 text-signal">&rarr;</span>
                    <span className="text-white">{range[1]}</span>
                  </p>
                )}
                <p className="mt-2 text-[12.5px] leading-[1.5] text-dark-muted">{caption}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] italic text-muted">
            Pilot targets vary by operator volume, data availability, risk policy, automation permissions, jurisdiction, and degree of integration.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
