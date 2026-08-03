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
  dark = false,
}: {
  index: string
  title: string
  description: string
  note: string
  withRule?: boolean
  dark?: boolean
}) {
  return (
    <div className="max-w-[348px] pt-1 lg:pt-[11px] xl:min-h-[420px]">
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-green">{index}</p>
      <h2 className={`mt-[18px] text-balance font-display text-[38px] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[43px] lg:leading-[46px] ${dark ? 'text-base' : 'text-ink'}`}>
        {title}
      </h2>
      <p className={`mt-[18px] max-w-[340px] text-[16px] leading-[1.6] lg:text-[17px] lg:leading-[26px] ${dark ? 'text-base/65' : 'text-muted'}`}>
        {description}
      </p>
      {withRule ? <div className={`mt-[18px] h-px w-full ${dark ? 'bg-base/15' : 'bg-line-soft'}`} /> : null}
      <p className={withRule
        ? `mt-[18px] font-mono text-[10px] tracking-[0.025em] ${dark ? 'text-base/55' : 'text-muted'}`
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
              index="01 / ORGANIZE"
              title="Zora keeps up while your team builds."
              description="Product reviews, engineering standups, decisions, documents, tickets, roadmap changes, and signals from technical systems become one continuous stream of context. Zora preserves what changed, who decided, and why — without manual filing."
              note="OPEN A SIGNAL TO SEE WHAT IT CHANGED"
            />
          </Reveal>
          <Reveal delay={100} className="flex justify-center xl:justify-end">
            <ProductFrame label="Zora / build context" className="max-w-[646px]">
              <CaptureDemo />
            </ProductFrame>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-ink">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-6 py-20 sm:px-8 xl:grid-cols-[minmax(0,646px)_348px] xl:items-center xl:gap-[86px] xl:px-0 xl:py-[110px]">
          <Reveal className="xl:order-2">
            <FeatureCopy
              index="02 / CONNECT"
              title="Product intent, connected to technical reality."
              description="Zora links roadmap decisions to tickets, dependencies, incidents, architecture constraints, and release risk — so the reason behind the work stays attached as implementation changes."
              note="SELECT A SIGNAL TO TRACE ITS DEPENDENCIES"
              withRule
              dark
            />
          </Reveal>
          <Reveal delay={100} className="flex justify-center xl:order-1 xl:justify-start">
            <ProductFrame label="Zora / delivery context" className="max-w-[646px]">
              <ConnectDemo />
            </ProductFrame>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-base">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-6 py-20 sm:px-8 xl:grid-cols-[348px_minmax(0,646px)] xl:items-center xl:gap-[86px] xl:px-0 xl:py-[110px]">
          <Reveal>
            <FeatureCopy
              index="03 / DECIDE"
              title="See what matters now — and what comes next."
              description="Zora brings forward the priorities, dependencies, and risks that need attention now, with the decisions and evidence that explain why — before they turn into delivery surprises."
              note="OPEN A PRIORITY, THEN TRACE THE WHY"
              withRule
            />
          </Reveal>
          <Reveal delay={100} className="flex justify-center xl:justify-end">
            <ProductFrame label="Zora / priority brief" className="max-w-[646px]">
              <RecallDemo />
            </ProductFrame>
          </Reveal>
        </div>
      </section>
    </>
  )
}
