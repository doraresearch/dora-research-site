import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const shifts: [string, string][] = [
  ['From headcount to systems', 'High-volume work no longer has to scale linearly with team size.'],
  ['From variance to control', 'Policy, documentation, escalation, and follow-through can be applied consistently.'],
  ['From isolated decisions to connected intelligence', 'Signals across functions can be linked before action is taken.'],
]

export default function ParadigmShift() {
  return (
    <section id="why-now" className="bg-base py-16 sm:py-20">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3">Why now</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            The operating model is <span className="font-serif font-normal italic">changing</span>.
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          <p className="mt-5 max-w-[72ch] text-[16.5px] leading-[1.7] text-body">
            The first wave of AI assisted human teams. The next wave performs bounded operational work: gathering context, reasoning across tools, coordinating actions, applying policy, and learning from outcomes.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {shifts.map(([title, copy]) => (
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
