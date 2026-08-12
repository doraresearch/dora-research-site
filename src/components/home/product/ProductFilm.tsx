import { useState } from 'react'
import { workdayChapters } from '@/content/home'

export default function ProductFilm() {
  const [activeId, setActiveId] = useState<(typeof workdayChapters)[number]['id']>('risk')
  const activeIndex = workdayChapters.findIndex((chapter) => chapter.id === activeId)
  const active = workdayChapters[activeIndex]

  const onChapterKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()

    let nextIndex = index
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + workdayChapters.length) % workdayChapters.length
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % workdayChapters.length
    }
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = workdayChapters.length - 1

    const next = workdayChapters[nextIndex]
    setActiveId(next.id)
    requestAnimationFrame(() => document.getElementById(`workday-tab-${next.id}`)?.focus())
  }

  return (
    <div className="h-[428px] overflow-hidden rounded-[14px] border border-control bg-canvas lg:h-[700px] lg:rounded-[20px]">
      <div className="flex h-14 items-center justify-between border-b border-line bg-surface px-4 lg:h-[72px] lg:px-6">
        <div>
          <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-secondary">
            Zora · Living brief
          </p>
          <p className="mt-0.5 text-[14px] font-semibold leading-5 text-ink lg:text-[16px] lg:leading-[22px]">
            Can Atlas still ship Friday?
          </p>
        </div>
        <span className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-action">
          Atlas · Live
        </span>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-[216px_minmax(0,1fr)] lg:gap-6 lg:p-6">
        <div
          role="tablist"
          aria-label="Atlas workday moments"
          className="grid grid-cols-4 gap-2 lg:grid-cols-1 lg:content-start"
        >
          {workdayChapters.map((chapter, index) => {
            const selected = chapter.id === activeId
            return (
              <button
                key={chapter.id}
                id={`workday-tab-${chapter.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="workday-brief"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(chapter.id)}
                onKeyDown={(event) => onChapterKeyDown(event, index)}
                className={`min-h-[54px] rounded-sm border px-2 py-2 text-left transition-colors duration-160 lg:min-h-[92px] lg:px-4 lg:py-4 ${
                  selected
                    ? 'border-action bg-selected text-ink'
                    : 'border-line bg-surface text-secondary hover:border-control hover:text-ink'
                }`}
              >
                <span className="block font-mono text-[11px] leading-4">{chapter.time}</span>
                <span className="mt-1 block font-mono text-[10px] font-medium uppercase leading-4 tracking-[0.08em] lg:text-[11px]">
                  {chapter.label === 'Dependency' ? 'Dep.' : chapter.label}
                </span>
              </button>
            )
          })}
        </div>

        <article
          id="workday-brief"
          role="tabpanel"
          aria-labelledby={`workday-tab-${active.id}`}
          className={`flex min-h-[250px] flex-col rounded-[10px] border bg-surface p-4 lg:min-h-[576px] lg:p-8 ${
            active.tone === 'risk' ? 'border-risk' : 'border-line'
          }`}
        >
          <p
            className={`font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] ${
              active.tone === 'risk' ? 'text-risk' : 'text-action'
            }`}
          >
            {active.eyebrow}
          </p>
          <h3 className="mt-4 max-w-[720px] text-[16px] font-semibold leading-[22px] tracking-[-0.015em] text-ink lg:mt-8 lg:text-[40px] lg:leading-[44px] lg:tracking-[-0.025em]">
            {active.title}
          </h3>
          <p className="mt-3 max-w-[680px] text-[14px] leading-5 text-secondary lg:mt-5 lg:text-[18px] lg:leading-7">
            {active.body}
          </p>

          <div
            className={`mt-4 rounded-sm border p-3 text-[14px] font-medium leading-5 text-ink lg:mt-8 lg:p-4 lg:text-[16px] ${
              active.tone === 'risk' ? 'border-risk bg-risk-tint' : 'border-action bg-context'
            }`}
          >
            {active.decision}
          </div>

          <div className="mt-auto pt-4 lg:pt-6">
            <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-action">
              <span className="lg:hidden">{active.sources.length} sources attached</span>
              <span className="hidden lg:inline">Evidence attached · {active.sources.length} sources</span>
            </p>
            <div className="mt-3 hidden overflow-hidden rounded-sm border border-line lg:block">
              {active.evidence.map(([source, time, detail], index) => (
                <div
                  key={`${source}-${time}`}
                  className={`grid h-12 grid-cols-[112px_64px_minmax(0,1fr)] items-center bg-canvas px-4 text-[13px] text-secondary ${
                    index < active.evidence.length - 1 ? 'border-b border-line' : ''
                  }`}
                >
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-action">
                    {source}
                  </span>
                  <span className="font-mono text-[11px]">{time}</span>
                  <span className="truncate text-ink">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
