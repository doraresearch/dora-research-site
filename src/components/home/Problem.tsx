import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

export default function Problem() {
  return (
    <section className="bg-base py-20 sm:py-24">
      <Container>
        <Reveal className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Eyebrow className="mb-3">The state of iGaming operations</Eyebrow>
            <h2 className="text-[28px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[46px]">
              Gaming operators are digitally native. Their operations are not.
            </h2>
            <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
          </div>
          <div className="space-y-4 text-[17px] leading-[1.7] text-body">
            <p>Most iGaming operators still depend on fragmented tools, outsourced services, manual workflows, and large operational teams across CRM, support, compliance, fraud, payments, affiliates, reporting, QA, and trading.</p>
            <p className="font-semibold text-ink">DORA rebuilds these workflows around AI-native operational systems that carry context, coordinate tasks, interact with enterprise systems, and execute under human-governed oversight.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
