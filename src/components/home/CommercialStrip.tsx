import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const cells: [string, string][] = [
  ['Deploy across', 'Support · KYC · Payments · Risk · VIP · Compliance · Reporting'],
  ['Start with', 'One workflow — scoped, permissioned, approved'],
  ['Measure', 'Review time · throughput · escalation quality · cost-to-serve'],
  ['Control', 'Approvals · permissions · audit logs · playbooks'],
]

export default function CommercialStrip() {
  return (
    <section className="bg-base pb-14 pt-4 sm:pb-16">
      <Container>
        <Reveal>
          <div className="border-b border-line pb-1">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-0">
              {cells.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex-1 sm:px-5 ${i < cells.length - 1 ? 'sm:border-r sm:border-line' : ''} ${i === 0 ? 'sm:pl-0' : ''} ${i === cells.length - 1 ? 'sm:pr-0' : ''}`}
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-deep-signal">{label}</p>
                  <p className="mt-1.5 text-[15px] font-medium leading-[1.5] text-ink">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
