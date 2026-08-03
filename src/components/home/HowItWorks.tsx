import type { ReactNode } from 'react'
import Reveal from '@/components/ui/Reveal'
import { DocIcon, MailIcon, MicIcon, PenIcon, SearchIcon } from '@/components/ui/icons'

function WindowDots({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'absolute left-[2.48%] top-[3.42%] flex gap-1.5' : 'absolute left-[2.94%] top-[4.34%] flex gap-1.5'}>
      <span className={compact ? 'h-[7px] w-[7px] rounded-full bg-orange/75' : 'h-2 w-2 rounded-full bg-orange/75'} />
      <span className={compact ? 'h-[7px] w-[7px] rounded-full bg-yellow/85' : 'h-2 w-2 rounded-full bg-yellow/85'} />
      <span className={compact ? 'h-[7px] w-[7px] rounded-full bg-green/75' : 'h-2 w-2 rounded-full bg-green/75'} />
    </div>
  )
}

function ProductWindow({
  children,
  label,
  compact = false,
}: {
  children: ReactNode
  label: string
  compact?: boolean
}) {
  return (
    <div
      className={compact
        ? 'relative aspect-[646/438] w-full max-w-[646px] overflow-hidden rounded-window border border-line bg-white shadow-[0_18px_42px_rgba(23,37,31,.11)]'
        : 'relative aspect-[646/438] w-full max-w-[646px] overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_18px_42px_rgba(23,37,31,.11)]'}
      aria-hidden="true"
    >
      <div className={compact ? 'absolute inset-x-0 top-0 h-[9.14%] border-b border-line-soft bg-base' : 'absolute inset-x-0 top-0 h-[10.96%] bg-base'} />
      <WindowDots compact={compact} />
      <span
        className={compact
          ? 'absolute left-[37.8%] top-[2.52%] font-mono text-[7px] uppercase tracking-[0.1em] text-muted sm:text-[8px] lg:text-[9px]'
          : 'absolute left-[10.06%] top-[3.2%] font-mono text-[7px] uppercase tracking-[0.1em] text-muted sm:text-[8px] lg:text-[10px]'}
      >
        {label}
      </span>
      {children}
    </div>
  )
}

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
    <div className="max-w-[348px] pt-1 lg:min-h-[420px] lg:pt-[11px]">
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-green">{index}</p>
      <h2 className="mt-[18px] text-balance font-display text-[38px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[43px] lg:leading-[46px]">
        {title}
      </h2>
      <p className="mt-[18px] max-w-[340px] text-[16px] leading-[1.6] text-muted lg:text-[17px] lg:leading-[26px]">
        {description}
      </p>
      {withRule && <div className="mt-[18px] h-px w-full bg-line-soft" />}
      <p className={withRule ? 'mt-[18px] font-mono text-[10px] tracking-[0.025em] text-muted' : 'mt-[18px] font-mono text-[10px] uppercase tracking-[0.105em] text-green'}>
        {note}
      </p>
    </div>
  )
}

function CaptureSurface() {
  return (
    <ProductWindow label="Zora / inbox" compact>
      <aside className="absolute bottom-0 left-0 top-[9.14%] hidden w-[20.44%] border-r border-line-soft bg-base p-[2.2%] sm:block">
        <div className="font-display text-[12px] font-bold text-ink sm:text-[14px] lg:text-[17px]">Zora</div>
        <div className="mt-[22%] space-y-[9%] font-mono text-[6px] tracking-[0.04em] text-muted sm:text-[7px] lg:text-[9px]">
          <div className="rounded-md bg-green/[.09] px-[10%] py-[7%] text-green">
            Inbox <span className="float-right">12</span>
          </div>
          <div className="px-[10%]">All memories</div>
          <div className="px-[10%]">People</div>
          <div className="px-[10%]">Projects</div>
        </div>
        <div className="absolute bottom-[7.5%] left-[14%] flex items-center gap-1.5 font-mono text-[6px] tracking-[0.04em] text-muted sm:text-[7px] lg:text-[8px]">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          Capturing
        </div>
      </aside>

      <div className="absolute bottom-0 left-0 top-[9.14%] w-full bg-white sm:left-[20.44%] sm:w-[79.56%]">
        <div className="absolute left-[5.45%] top-[5.78%]">
          <p className="font-display text-[15px] font-bold tracking-[-0.02em] text-ink sm:text-[18px] lg:text-[24px]">Inbox</p>
          <p className="mt-0.5 font-mono text-[6px] uppercase tracking-[0.07em] text-muted sm:text-[7px] lg:text-[8px]">Today / newest first</p>
        </div>
        <span className="absolute right-[12.5%] top-[6.28%] rounded-full bg-green/[.09] px-[2%] py-[1.1%] font-mono text-[6px] text-green sm:text-[7px] lg:text-[8px]">
          12 new
        </span>
        <SearchIcon className="absolute right-[5.1%] top-[6.8%] h-3 w-3 text-green sm:h-3.5 sm:w-3.5 lg:h-[18px] lg:w-[18px]" />
        <div className="absolute left-[5.45%] top-[22.11%] h-px w-[89.1%] bg-line-soft" />

        <div className="absolute left-[5.45%] top-[27.14%] flex h-[19.1%] w-[89.1%] items-center gap-[3.2%] rounded-[10px] border border-line-soft bg-base px-[3.5%]">
          <div className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-md bg-green/[.09] text-green max-sm:h-6 max-sm:w-6">
            <MicIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[8px] font-semibold text-ink sm:text-[10px] lg:text-[12px]">Voice memo</p>
            <p className="mt-0.5 truncate text-[7px] text-muted sm:text-[8px] lg:text-[10px]">Maya · train platform</p>
          </div>
          <span className="ml-auto font-mono text-[6px] text-green sm:text-[7px] lg:text-[9px]">0:47</span>
        </div>

        <div className="absolute left-[5.45%] top-[49.25%] flex h-[18.09%] w-[89.1%] items-center gap-[3.2%] rounded-[10px] border border-line-soft bg-white px-[3.5%]">
          <div className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-md bg-yellow/35 text-ink max-sm:h-6 max-sm:w-6">
            <MailIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[8px] font-semibold text-ink sm:text-[10px] lg:text-[12px]">Lease renewal terms</p>
            <p className="mt-0.5 truncate text-[7px] text-muted sm:text-[8px] lg:text-[10px]">Landlord · 8:14 AM</p>
          </div>
          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-yellow" />
        </div>

        <div className="absolute left-[5.45%] top-[70.85%] grid h-[23.12%] w-[89.1%] grid-cols-2 gap-[3.5%]">
          <div className="rounded-[10px] border border-line-soft bg-white p-[6.4%]">
            <div className="flex items-center gap-1.5 text-green">
              <DocIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="truncate text-[7px] font-semibold text-ink sm:text-[9px] lg:text-[11px]">Reading highlight</span>
            </div>
            <p className="mt-[9%] text-[6px] leading-[1.4] text-muted sm:text-[8px] lg:text-[10px]">“The art of noticing is the art of remembering.”</p>
          </div>
          <div className="rounded-[10px] border border-line-soft bg-base p-[6.4%]">
            <div className="flex items-center gap-1.5 text-green">
              <PenIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="truncate text-[7px] font-semibold text-ink sm:text-[9px] lg:text-[11px]">A thought from the train</span>
            </div>
            <p className="mt-[9%] text-[6px] leading-[1.4] text-muted sm:text-[8px] lg:text-[10px]">Don’t lose the small details. They become the story later.</p>
          </div>
        </div>
        <p className="absolute bottom-[1.4%] left-[5.45%] font-mono text-[5px] uppercase tracking-[0.05em] text-green sm:text-[6px] lg:text-[8px]">
          Captured automatically · no folders required
        </p>
      </div>
    </ProductWindow>
  )
}

function MemoryCard({
  className,
  label,
  title,
  detail,
  orange = false,
  featured = false,
}: {
  className: string
  label: string
  title: string
  detail: string
  orange?: boolean
  featured?: boolean
}) {
  const surfaceClass = featured
    ? 'border-[1.5px] border-orange rounded-[10px] bg-white shadow-[0_2px_5px_rgba(23,37,31,.08)]'
    : 'border border-line rounded-[8px] bg-white shadow-[0_2px_5px_rgba(23,37,31,.08)]'
  const labelClass = orange ? 'text-orange' : 'text-green'

  return (
    <div className={['absolute flex flex-col overflow-hidden p-[1.85%]', surfaceClass, className].join(' ')}>
      <p className={['truncate font-mono text-[5px] tracking-[0.02em] sm:text-[6px] lg:text-[8px]', labelClass].join(' ')}>{label}</p>
      <p className={featured ? 'mt-[2%] truncate text-[9px] font-semibold text-ink sm:text-[11px] lg:text-[15px]' : 'mt-[2%] truncate text-[7px] font-semibold text-ink sm:text-[9px] lg:text-[11px]'}>
        {title}
      </p>
      <p className={featured ? 'mt-[1%] truncate text-[6px] text-muted sm:text-[8px] lg:text-[10px]' : 'mt-[1%] truncate text-[5px] text-muted sm:text-[7px] lg:text-[9px]'}>
        {detail}
      </p>
    </div>
  )
}

function ConnectSurface() {
  return (
    <ProductWindow label="Memory map">
      <div className="absolute bottom-0 left-0 top-[10.96%] w-full bg-[#fbfcf9]" />
      <img
        src="/images/zora-connect-evidence-links.svg"
        alt=""
        className="absolute bottom-0 left-0 top-[10.96%] h-[89.04%] w-full"
      />
      <p className="absolute left-[3.72%] top-[14.84%] text-[9px] font-semibold text-ink sm:text-[11px] lg:text-[14px]">Connected context</p>
      <p className="absolute right-[4.18%] top-[15.07%] font-mono text-[6px] tracking-[0.03em] text-muted sm:text-[8px] lg:text-[10px]">12 LINKED PIECES</p>

      <MemoryCard
        className="left-[35.45%] top-[48.86%] h-[17.81%] w-[28.48%]"
        label="PENDING DECISION"
        title="Lease renewal"
        detail="Oct 1 · 3 sources"
        orange
        featured
      />
      <MemoryCard
        className="left-[8.36%] top-[28.54%] h-[13.93%] w-[25.39%]"
        label="VOICE MEMO"
        title="Call landlord Tuesday"
        detail="0:42 · yesterday"
      />
      <MemoryCard
        className="left-[66.41%] top-[28.54%] h-[13.93%] w-[25.39%]"
        label="BUILDING NOTICE"
        title="Rent increase"
        detail="PDF · 2 pages"
      />
      <MemoryCard
        className="left-[8.51%] top-[72.83%] h-[14.16%] w-[26.63%]"
        label="LEASE AGREEMENT"
        title="Clause 4.2"
        detail="3-year term"
      />
      <MemoryCard
        className="left-[65.63%] top-[72.83%] h-[14.16%] w-[27.24%]"
        label="EMAIL FROM LANDLORD"
        title="Would you like to renew?"
        detail="received today"
        orange
      />
    </ProductWindow>
  )
}

function RecallSource({
  className,
  label,
  title,
  orange = false,
}: {
  className: string
  label: string
  title: string
  orange?: boolean
}) {
  return (
    <div className={['absolute overflow-hidden rounded-[8px] border border-line bg-white p-[1.75%]', className].join(' ')}>
      <p className={orange ? 'truncate font-mono text-[5px] tracking-[0.02em] text-orange sm:text-[6px] lg:text-[8px]' : 'truncate font-mono text-[5px] tracking-[0.02em] text-green sm:text-[6px] lg:text-[8px]'}>
        {label}
      </p>
      <p className="mt-[3%] truncate text-[6px] font-semibold text-ink sm:text-[8px] lg:text-[10px]">{title}</p>
    </div>
  )
}

function RecallSurface() {
  return (
    <ProductWindow label="Recall">
      <div className="absolute left-[4.18%] top-[16.67%] h-[11.64%] w-[91.33%] rounded-[9px] border border-line bg-base" />
      <p className="absolute left-[6.97%] top-[20.32%] text-[8px] text-ink sm:text-[10px] lg:text-[14px]">
        What did I decide about renewing the apartment?
      </p>

      <div className="absolute left-[4.18%] top-[34.02%] h-[32.19%] w-[91.33%] rounded-[12px] border border-[#cad6c7] bg-sage p-[3%]">
        <p className="font-mono text-[6px] tracking-[0.03em] text-green sm:text-[8px] lg:text-[10px]">HERE’S WHAT I FOUND</p>
        <p className="mt-[3.2%] max-w-[540px] text-[11px] font-semibold leading-[1.38] text-ink sm:text-[14px] lg:text-[18px] lg:leading-[25px]">
          You were weighing a one-year renewal against the rent increase — and wanted clarity before deciding.
        </p>
      </div>

      <p className="absolute left-[4.18%] top-[71.92%] font-mono text-[6px] tracking-[0.03em] text-muted sm:text-[8px] lg:text-[10px]">
        SOURCES — 3 ORIGINAL MOMENTS
      </p>
      <RecallSource className="left-[4.18%] top-[79.22%] h-[12.56%] w-[28.95%]" label="VOICE MEMO · YESTERDAY" title="Call landlord Tuesday" />
      <RecallSource className="left-[35.45%] top-[79.22%] h-[12.56%] w-[28.95%]" label="LEASE AGREEMENT" title="Clause 4.2 · 3-year term" />
      <RecallSource className="left-[66.72%] top-[79.22%] h-[12.56%] w-[28.95%]" label="EMAIL · TODAY" title="Rent increase, renewal" orange />
    </ProductWindow>
  )
}

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="overflow-hidden bg-sage">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-6 py-20 sm:px-8 lg:min-h-[660px] lg:grid-cols-[348px_minmax(0,646px)] lg:items-center lg:gap-[86px] lg:px-0 lg:py-[110px]">
          <Reveal>
            <FeatureCopy
              index="01 / CAPTURE"
              title="Everything worth keeping, without filing."
              description="Drop in a thought, a voice memo, a link, or an email. Zora keeps the original context intact, without asking you to organize it."
              note="VOICE · EMAIL · WEB · NOTES"
            />
          </Reveal>
          <Reveal delay={100} className="flex justify-center lg:justify-end">
            <CaptureSurface />
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-base">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-6 py-20 sm:px-8 lg:min-h-[660px] lg:grid-cols-[minmax(0,646px)_348px] lg:items-center lg:gap-[86px] lg:px-0 lg:py-[110px]">
          <Reveal className="lg:order-2">
            <FeatureCopy
              index="02 / CONNECT"
              title="Your notes become a living map."
              description="A living memory graph links fragments to people, projects, and ideas — new connections light up as structure emerges on its own."
              note="THE THREAD APPEARS BEFORE YOU GO LOOKING FOR IT"
              withRule
            />
          </Reveal>
          <Reveal delay={100} className="flex justify-center lg:order-1 lg:justify-start">
            <ConnectSurface />
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-sage">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-6 py-20 sm:px-8 lg:min-h-[660px] lg:grid-cols-[348px_minmax(0,646px)] lg:items-center lg:gap-[86px] lg:px-0 lg:py-[110px]">
          <Reveal>
            <FeatureCopy
              index="03 / RECALL"
              title="Remember the detail. Keep the source."
              description="Plain-language questions, grounded answers. Every recall cites the original moment."
              note="ASK LIKE YOU THINK. VERIFY WHAT YOU FIND."
              withRule
            />
          </Reveal>
          <Reveal delay={100} className="flex justify-center lg:justify-end">
            <RecallSurface />
          </Reveal>
        </div>
      </section>
    </>
  )
}
