import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

const notList = ['Not a chatbot', 'Not a BPO', 'Not another casino operator', 'Not an automation agency']

export default function Category() {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container>
        <Reveal className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Eyebrow className="mb-3">The category</Eyebrow>
            <h2 className="text-[28px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[42px]">
              An AI deployment company for <span className="font-serif font-normal italic">iGaming</span>.
            </h2>
            <span className="mt-4 block h-[3px] w-16 rounded bg-spectral" aria-hidden="true" />
            <div className="mt-6 flex flex-wrap gap-2">
              {notList.map((label) => (
                <span
                  key={label}
                  className="rounded-pill border border-line bg-white px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-[17px] leading-[1.7] text-body">
            <p>DORA is not a chatbot, BPO provider, casino operator, or generic automation agency.</p>
            <p className="font-semibold text-ink">
              We deploy AI-native operational systems directly into gaming environments — starting with bounded workflows where ROI can be measured quickly, and expanding as trust, accuracy, and operational value are proven.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
