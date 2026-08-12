import Container from '@/components/ui/Container'
import { questionLenses } from '@/content/home'
import EvidenceLedgerPreview from './product/EvidenceLedgerPreview'

function QuestionLens({ eyebrow, question }: { eyebrow: string; question: string }) {
  return (
    <article className="h-32 border-t border-line pt-5 lg:h-[180px] lg:pt-7">
      <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-action">
        {eyebrow}
      </p>
      <h3 className="mt-3.5 text-[18px] font-semibold leading-6 tracking-[-0.02em] text-ink lg:mt-[22px] lg:max-w-[370px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-0.025em]">
        {question}
      </h3>
    </article>
  )
}

export default function TraceabilityVision() {
  return (
    <section id="traceability" className="min-h-[1300px] bg-canvas lg:min-h-0 xl:min-h-[1080px]">
      <Container className="border-t border-line pb-[52px] pt-14 lg:pb-20 lg:pt-24">
        <div className="grid gap-0 xl:grid-cols-[416px_minmax(0,1fr)] xl:gap-16">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-action">
              Traceability
            </p>
            <h2 className="mt-5 max-w-[620px] text-[38px] font-semibold leading-[42px] tracking-[-0.025em] text-ink lg:text-[46px] lg:leading-[50px] lg:tracking-[-0.03em] xl:text-[52px] xl:leading-[56px] xl:tracking-[-0.035em]">
              Start with product and technology.
              <br />
              Build memory for work.
            </h2>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[26px] text-secondary xl:mt-16">
              <span className="xl:hidden">
                Product and technology are the first clear application. The larger product is a persistent
                organizational memory for work.
              </span>
              <span className="hidden xl:inline">
                Product and technology are the first clear application. The larger product is a persistent
                organizational memory that helps every team understand what happened, why it matters, and
                what needs attention next.
              </span>
            </p>
          </div>

          <div className="mt-[88px] xl:mt-0">
            <EvidenceLedgerPreview />
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 lg:gap-px xl:mt-[216px]">
          {questionLenses.map((lens) => (
            <QuestionLens key={lens.eyebrow} {...lens} />
          ))}
        </div>
      </Container>
    </section>
  )
}
