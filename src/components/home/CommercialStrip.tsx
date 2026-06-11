import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const cells: [string, string][] = [
  ['Deploy agents across', 'Support · KYC · Payments · Risk · VIP · Compliance · Reporting'],
  ['Start with', 'One workflow — scoped, permissioned, approved'],
  ['Measure', 'Review time · throughput · escalation quality · cost-to-serve'],
  ['Control', 'Approvals · permissions · audit logs · playbooks'],
]

export default function CommercialStrip() {
  return (
    <section className="bg-base pb-14 pt-4 sm:pb-16">
      <Container>
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {cells.map(([label, value]) => (
              <div key={label} className="bg-white p-5">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-deep-signal">{label}</p>
                <p className="mt-2 text-[13.5px] font-medium leading-[1.55] text-ink">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
