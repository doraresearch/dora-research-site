import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const traits: [string, string, string][] = [
  ['01', 'Coverage from day one', 'Players, regulators, and payment partners don’t wait for scale.'],
  ['02', 'A team per function', 'Separate hires, tools, and queues — before volume justifies them.'],
  ['03', 'Headcount scales with volume', 'Routine cases grow linearly. Margins compress as you grow.'],
]

export default function Problem() {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-stage bg-graphite px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-spectral" aria-hidden="true" />

            <Eyebrow chip dark className="mb-4">The problem</Eyebrow>
            <h2 className="mx-auto max-w-[26ch] text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-dark-text sm:text-[36px] lg:text-[42px]">
              Operators build ops teams <span className="font-serif font-normal italic">too early</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-[66ch] text-[15px] leading-[1.7] text-dark-muted sm:text-[15.5px]">
              Operators are expected to build support, KYC, payments, risk, VIP, compliance, and reporting capacity before they have the scale to justify a full operations org. DORA changes that model.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
              {traits.map(([n, title, copy]) => (
                <div key={title} className="flex flex-col items-center">
                  <p className="font-serif text-[52px] italic leading-none tracking-[0.04em] text-dark-muted/70 sm:text-[60px]" aria-hidden="true">
                    {n}
                  </p>
                  <h3 className="mt-5 text-[19px] font-semibold leading-[1.3] tracking-[-0.01em] text-dark-text">{title}</h3>
                  <p className="mt-3 max-w-[32ch] text-[13.5px] leading-[1.6] text-dark-muted">{copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button href="mailto:hello@dorareason.com" variant="signal" arrow>
                Map your AI operations team
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
