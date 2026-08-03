import Reveal from '@/components/ui/Reveal'
import CaptureDemo from './demo/CaptureDemo'
import ConnectDemo from './demo/ConnectDemo'
import ProductFrame from './demo/ProductFrame'
import RecallDemo from './demo/RecallDemo'

function FeatureCopy({
  index,
  title,
  description,
  note,
  withRule = false,
}: {
  index: string
  title: string
  description: string
  note: string
  withRule?: boolean
}) {
  return (
    <div className="max-w-[348px] pt-1 lg:pt-[11px] xl:min-h-[420px]">
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-green">{index}</p>
      <h2 className="mt-[18px] text-balance font-display text-[38px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[43px] lg:leading-[46px]">
        {title}
      </h2>
      <p className="mt-[18px] max-w-[340px] text-[16px] leading-[1.6] text-muted lg:text-[17px] lg:leading-[26px]">
        {description}
      </p>
      {withRule ? <div className="mt-[18px] h-px w-full bg-line-soft" /> : null}
      <p className={withRule
        ? 'mt-[18px] font-mono text-[10px] tracking-[0.025em] text-muted'
        : 'mt-[18px] font-mono text-[10px] uppercase tracking-[0.105em] text-green'}>
        {note}
      </p>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="overflow-hidden bg-sage">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-6 py-20 sm:px-8 xl:grid-cols-[348px_minmax(0,646px)] xl:items-center xl:gap-[86px] xl:px-0 xl:py-[110px]">
          <Reveal>
            <FeatureCopy
              index="01 / CAPTURE"
              title="Everything worth keeping, without filing."
              description="Drop in a thought, a voice memo, a link, or an email. Zora keeps the original context intact, without asking you to organize it."
              note="FILTER THE INBOX, THEN OPEN A MEMORY"
            />
          </Reveal>
          <Reveal delay={100} className="flex justify-center xl:justify-end">
            <ProductFrame label="Zora / inbox" className="max-w-[646px]">
              <CaptureDemo />
            </ProductFrame>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-base">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-6 py-20 sm:px-8 xl:grid-cols-[minmax(0,646px)_348px] xl:items-center xl:gap-[86px] xl:px-0 xl:py-[110px]">
          <Reveal className="xl:order-2">
            <FeatureCopy
              index="02 / CONNECT"
              title="Your notes become a living map."
              description="A living memory graph links fragments to people, projects, and ideas — new connections light up as structure emerges on its own."
              note="SELECT A NODE TO TRACE ITS CONNECTION"
              withRule
            />
          </Reveal>
          <Reveal delay={100} className="flex justify-center xl:order-1 xl:justify-start">
            <ProductFrame label="Zora / memory map" className="max-w-[646px]">
              <ConnectDemo />
            </ProductFrame>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-sage">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-6 py-20 sm:px-8 xl:grid-cols-[348px_minmax(0,646px)] xl:items-center xl:gap-[86px] xl:px-0 xl:py-[110px]">
          <Reveal>
            <FeatureCopy
              index="03 / RECALL"
              title="Remember the detail. Keep the source."
              description="Plain-language questions, grounded answers. Every recall cites the original moment."
              note="ASK A QUESTION, THEN OPEN THE CITATION"
              withRule
            />
          </Reveal>
          <Reveal delay={100} className="flex justify-center xl:justify-end">
            <ProductFrame label="Zora / recall" className="max-w-[646px]">
              <RecallDemo />
            </ProductFrame>
          </Reveal>
        </div>
      </section>
    </>
  )
}
