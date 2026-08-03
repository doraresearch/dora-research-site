import { useState } from 'react'
import { workMoments } from './data'
import type { SignalKind, WorkFunction } from './data'

type SignalFilter = 'all' | SignalKind

const filters: { id: SignalFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'priority', label: 'Priorities' },
  { id: 'risk', label: 'Risks' },
  { id: 'deadline', label: 'Deadlines' },
]

export default function CaptureDemo({
  compact = false,
  onFocusNodeChange,
}: {
  compact?: boolean
  onFocusNodeChange?: (nodeId: WorkFunction) => void
}) {
  const [filter, setFilter] = useState<SignalFilter>('all')
  const [selectedId, setSelectedId] = useState(
    workMoments.find((item) => item.nodeId === 'reliability')?.id ?? workMoments[0].id,
  )
  const filteredItems = filter === 'all'
    ? workMoments
    : workMoments.filter((item) => item.signalKinds.includes(filter))
  const visibleItems = compact ? filteredItems.slice(0, 3) : filteredItems
  const selected = visibleItems.find((item) => item.id === selectedId) ?? visibleItems[0]

  function selectItem(item: (typeof workMoments)[number]) {
    setSelectedId(item.id)
    onFocusNodeChange?.(item.nodeId)
  }

  function selectFilter(nextFilter: SignalFilter) {
    const nextItems = nextFilter === 'all'
      ? workMoments
      : workMoments.filter((item) => item.signalKinds.includes(nextFilter))
    const nextVisibleItems = compact ? nextItems.slice(0, 3) : nextItems

    setFilter(nextFilter)
    if (!nextVisibleItems.some((item) => item.id === selectedId)) selectItem(nextVisibleItems[0])
  }

  return (
    <div className={compact ? 'bg-white p-3 sm:p-4' : 'bg-white p-4 sm:p-5'}>
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line-soft pb-3">
        <div>
          <p className="font-display text-[20px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[22px]">
            08:40 release brief
          </p>
          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted sm:text-[9px]">
            After the Atlas product + engineering stand-up
          </p>
        </div>
        <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-green sm:text-[9px]">
          5 signals · product + tech
        </p>
      </div>

      <div className="mt-3 flex max-w-full gap-1 overflow-x-auto pb-1" aria-label="Filter the workday brief">
        {filters.map((item) => {
          const isActive = item.id === filter
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => selectFilter(item.id)}
              className={isActive
                ? 'min-h-11 shrink-0 rounded-full bg-green px-3 font-mono text-[8px] uppercase tracking-[0.06em] text-white transition-colors motion-reduce:transition-none sm:text-[9px]'
                : 'min-h-11 shrink-0 rounded-full border border-line bg-base px-3 font-mono text-[8px] uppercase tracking-[0.06em] text-muted transition-colors hover:border-green/50 hover:text-ink motion-reduce:transition-none sm:text-[9px]'}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <div className="mt-2 grid gap-3 sm:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)]">
        <div className="space-y-1" aria-label="Product and technology priorities in the release brief">
          {visibleItems.map((item) => {
            const isSelected = item.id === selected.id
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => selectItem(item)}
                className={isSelected
                  ? 'flex min-h-14 w-full items-center gap-3 border-l-2 border-green bg-sage/70 px-3 py-2.5 text-left transition-colors motion-reduce:transition-none'
                  : 'flex min-h-14 w-full items-center gap-3 border-l-2 border-transparent px-3 py-2.5 text-left transition-colors hover:border-line-graph hover:bg-base motion-reduce:transition-none'}
              >
                <span className={isSelected
                  ? 'grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-white font-mono text-[8px] font-medium text-green'
                  : 'grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-base font-mono text-[8px] font-medium text-muted'}
                  aria-hidden="true"
                >
                  {item.sourceMark}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[10px] font-semibold leading-tight text-ink sm:text-[11px]">
                    {item.title}
                  </span>
                  <span className="mt-1 block truncate font-mono text-[7px] tracking-[0.02em] text-muted sm:text-[8px]">
                    {item.functionLabel} · {item.meta}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div
          className="flex min-h-[230px] flex-col rounded-[14px] border border-line bg-base p-4 sm:min-h-0"
          aria-live="polite"
          aria-label="Why this workday signal matters"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-mono text-[8px] uppercase tracking-[0.09em] text-green sm:text-[9px]">
                {selected.functionLabel} · {selected.sourceApp}
              </p>
              <p className="mt-1 text-[13px] font-semibold leading-tight text-ink sm:text-[14px]">{selected.title}</p>
            </div>
            <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.06em] text-orange">
              {selected.signalKinds[0]}
            </span>
          </div>

          <p className="mt-3 text-[11px] leading-[1.5] text-ink sm:text-[12px]">{selected.summary}</p>

          <blockquote className="mt-3 border-l-2 border-yellow pl-3 text-[10px] italic leading-[1.5] text-muted sm:text-[11px]">
            {selected.evidence}
          </blockquote>

          <div className="mt-auto grid grid-cols-2 gap-3 border-t border-line-soft pt-3">
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[0.08em] text-muted">Owner</p>
              <p className="mt-1 text-[9px] font-semibold text-ink sm:text-[10px]">{selected.owner}</p>
            </div>
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[0.08em] text-muted">Timing</p>
              <p className="mt-1 text-[9px] font-semibold text-ink sm:text-[10px]">{selected.due}</p>
            </div>
          </div>

          {compact ? null : (
            <p className="mt-3 font-mono text-[8px] tracking-[0.02em] text-muted">
              Captured from {selected.sourceApp} · {selected.captured}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
