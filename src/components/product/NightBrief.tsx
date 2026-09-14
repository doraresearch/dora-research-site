import { useId, useState } from 'react'
import type { KeyboardEvent } from 'react'
import ZoraMark from '@/components/ZoraMark'
import { BRIEF_DATE, briefs, type Brief, type FollowUp } from '@/content/briefs'

type NightBriefProps = {
  variant?: 'full' | 'compact'
  titleLevel?: 2 | 3
  active?: Brief['id']
  onChange?: (id: Brief['id']) => void
  className?: string
}

// The product's reference frame (DESIGN.md §9): the strip, the brief, the evidence rail, the transcript.
// The brief arrives whole in one cut. Life is in the dialogue after it: an answer the reader asked for
// arrives in a 160 ms fade; nothing fades on first paint.
export default function NightBrief({ variant = 'full', titleLevel = 3, active, onChange, className = '' }: NightBriefProps) {
  const [internal, setInternal] = useState<Brief['id']>('night')
  const baseId = useId().replace(/:/g, '')
  const current = active ?? internal
  const brief = briefs.find((b) => b.id === current) ?? briefs[0]
  const Title = titleLevel === 2 ? 'h2' : 'h3'
  const Part = titleLevel === 2 ? 'h3' : 'h4'

  const select = (id: Brief['id']) => {
    if (id === current) return
    setInternal(id)
    onChange?.(id)
  }

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (index + (e.key === 'ArrowRight' ? 1 : -1) + briefs.length) % briefs.length
    select(briefs[next].id)
    document.getElementById(`${baseId}-tab-${briefs[next].id}`)?.focus()
  }

  return (
    <div data-register="night" className={`border border-nline bg-night text-npaper ${className}`}>
      <div className="flex h-11 items-center justify-between gap-4 border-b border-nline px-4 md:px-5">
        <span className="flex items-center gap-2.5 text-[14px] font-medium leading-5">
          <ZoraMark size={24} tone="night" />
          Zora
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
          <span className="sr-only">watching</span>
        </span>
        <div role="tablist" aria-label="Zora’s three questions" className="flex h-11 gap-1">
          {briefs.map((b, i) => {
            const selected = b.id === current
            return (
              <button
                key={b.id}
                id={`${baseId}-tab-${b.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(b.id)}
                onKeyDown={(e) => onTabKey(e, i)}
                className={`h-11 whitespace-nowrap border-b px-2 text-[14px] font-medium leading-5 transition-colors duration-120 ease-house md:px-2.5 ${
                  selected ? 'border-npaper text-npaper' : 'border-transparent text-ash hover:text-npaper'
                }`}
              >
                {b.tab}
              </button>
            )
          })}
        </div>
        <span className="timecode hidden text-ash lg:inline">
          Compiled 06:00 · {BRIEF_DATE} · demo
        </span>
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${brief.id}`}>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="border-b border-nline px-5 pb-6 pt-6 md:px-8 md:pt-7 lg:border-b-0 lg:border-r">
            <p className="timecode text-ash">{brief.header}</p>
            <Title className="mt-3 max-w-[24em] text-[24px] font-medium leading-[30px] tracking-[-0.02em] md:text-[30px] md:leading-[36px]">
              {brief.title}
            </Title>
            {brief.sections.map((s, i) => (
              <div key={s.label} className="mt-6 grid grid-cols-[34px_minmax(0,1fr)] gap-3">
                <span className="provenance pt-1.5 text-ash">0{i + 1}</span>
                <div>
                  <Part className="z-section">{s.label}</Part>
                  <p className="mt-2 max-w-[62ch] text-[16px] leading-[26px]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="px-5 py-5 md:px-6" aria-label="Evidence">
            <p className="timecode text-ash">Evidence · {brief.evidence.length} records</p>
            <ol className="mt-3">
              {brief.evidence.map((ev) => (
                <li key={`${ev.source}-${ev.time}-${ev.record.slice(0, 12)}`} className="border-t border-nline py-2.5">
                  <p className="provenance text-ash">
                    <span className="text-npaper">{ev.source}</span> · {ev.time} · {ev.owner}
                  </p>
                  <p className="mt-1 text-[13px] leading-[18px]">{ev.record}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        {variant === 'full' ? <Dialogue key={brief.id} baseId={baseId} followups={brief.followups} /> : null}
      </div>
    </div>
  )
}

// Keyed by brief, so a view change resets the dialogue and only answers the reader opened animate in.
function Dialogue({ baseId, followups }: { baseId: string; followups: FollowUp[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const [asked, setAsked] = useState(false)

  return (
    <div className="border-t border-nline px-5 pb-6 pt-5 md:px-8">
      <p className="timecode text-ash">Questions</p>
      <ul className="mt-2">
        {followups.map((f, i) => {
          const isOpen = open === i
          return (
            <li key={f.q} className="border-b border-nline">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${baseId}-answer-${i}`}
                onClick={() => {
                  setAsked(true)
                  setOpen(isOpen ? null : i)
                }}
                className="grid w-full grid-cols-[56px_minmax(0,1fr)] gap-4 py-2.5 text-left text-[16px] leading-[26px] transition-colors duration-120 ease-house hover:bg-raised"
              >
                <span className="timecode pt-1.5 text-ash">CTO</span>
                <span>{f.q}</span>
              </button>
              {isOpen ? (
                <div id={`${baseId}-answer-${i}`} className={`grid grid-cols-[56px_minmax(0,1fr)] gap-4 pb-4 pt-1 ${asked ? 'animate-arrive' : ''}`}>
                  <span className="timecode pt-1.5 text-ash">Zora</span>
                  <p className="max-w-[62ch] text-[16px] leading-[26px]">{f.a}</p>
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
