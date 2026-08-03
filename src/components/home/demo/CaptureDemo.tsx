import { useState } from 'react'
import { DocIcon, MailIcon, MicIcon, PenIcon } from '@/components/ui/icons'
import { memoryItems } from './data'
import type { MemoryKind } from './data'

type MemoryFilter = 'all' | MemoryKind

const filters: { id: MemoryFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'voice', label: 'Voice' },
  { id: 'email', label: 'Email' },
  { id: 'document', label: 'Docs' },
  { id: 'note', label: 'Notes' },
]

function MemoryIcon({ kind, className = '' }: { kind: MemoryKind; className?: string }) {
  if (kind === 'voice') return <MicIcon className={className} />
  if (kind === 'email') return <MailIcon className={className} />
  if (kind === 'document') return <DocIcon className={className} />
  return <PenIcon className={className} />
}

export default function CaptureDemo({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<MemoryFilter>('all')
  const [selectedId, setSelectedId] = useState(memoryItems[0].id)
  const filteredItems = filter === 'all' ? memoryItems : memoryItems.filter((item) => item.kind === filter)
  const visibleItems = compact ? filteredItems.slice(0, 3) : filteredItems
  const selected = visibleItems.find((item) => item.id === selectedId) ?? visibleItems[0]

  function selectFilter(nextFilter: MemoryFilter) {
    const nextItems = nextFilter === 'all'
      ? memoryItems
      : memoryItems.filter((item) => item.kind === nextFilter)

    setFilter(nextFilter)
    const nextVisibleItems = compact ? nextItems.slice(0, 3) : nextItems
    if (!nextVisibleItems.some((item) => item.id === selectedId)) setSelectedId(nextVisibleItems[0].id)
  }

  return (
    <div className={compact ? 'bg-white p-3 sm:p-4' : 'bg-white p-4 sm:p-5'}>
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line-soft pb-3">
        <div>
          <p className="font-display text-[20px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[22px]">Inbox</p>
          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted sm:text-[9px]">
            Original context preserved
          </p>
        </div>
        <div className="flex max-w-full gap-1 overflow-x-auto pb-0.5" aria-label="Filter captured memories">
          {filters.map((item) => {
            const isActive = item.id === filter
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => selectFilter(item.id)}
                className={isActive
                  ? 'shrink-0 rounded-full bg-green px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.06em] text-white transition-colors motion-reduce:transition-none sm:text-[9px]'
                  : 'shrink-0 rounded-full border border-line bg-base px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.06em] text-muted transition-colors hover:border-green/50 hover:text-ink motion-reduce:transition-none sm:text-[9px]'}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)]">
        <div className="space-y-2" aria-label="Captured memories">
          {visibleItems.map((item) => {
            const isSelected = item.id === selected.id
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(item.id)}
                className={isSelected
                  ? 'flex w-full items-center gap-3 rounded-[12px] border border-green/50 bg-sage/70 p-3 text-left shadow-[inset_3px_0_0_#3D8B68] transition-colors motion-reduce:transition-none'
                  : 'flex w-full items-center gap-3 rounded-[12px] border border-line-soft bg-white p-3 text-left transition-colors hover:border-line-graph hover:bg-base motion-reduce:transition-none'}
              >
                <span className={isSelected
                  ? 'grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-white text-green'
                  : 'grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-base text-muted'}>
                  <MemoryIcon kind={item.kind} className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[11px] font-semibold leading-tight text-ink sm:text-[12px]">
                    {item.title}
                  </span>
                  <span className="mt-1 block truncate font-mono text-[8px] tracking-[0.02em] text-muted sm:text-[9px]">
                    {item.meta}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div
          className="flex min-h-[210px] flex-col rounded-[14px] border border-line bg-base p-4 sm:min-h-0"
          aria-live="polite"
          aria-label="Selected memory details"
        >
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-green/[.09] text-green">
              <MemoryIcon kind={selected.kind} className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[8px] uppercase tracking-[0.09em] text-green sm:text-[9px]">
                {selected.kindLabel}
              </p>
              <p className="mt-1 text-[14px] font-semibold leading-tight text-ink sm:text-[15px]">{selected.title}</p>
            </div>
          </div>

          <p className="mt-4 text-[12px] leading-[1.55] text-ink sm:text-[13px]">{selected.summary}</p>

          <div className="mt-4 border-t border-line-soft pt-3">
            <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted">Original source</p>
            <p className="mt-1 text-[10px] leading-relaxed text-muted sm:text-[11px]">{selected.source}</p>
            <p className="mt-1 font-mono text-[8px] text-muted">{selected.captured}</p>
          </div>

          {compact ? null : (
            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {selected.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line bg-white px-2 py-1 font-mono text-[8px] text-green">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
