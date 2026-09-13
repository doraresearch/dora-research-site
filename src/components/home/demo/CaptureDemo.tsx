import { useState } from 'react'
import { workMoments } from './data'
import type { WorkFunction } from './data'

const releaseGates = workMoments.filter((item) => (
  item.nodeId === 'engineering'
  || item.nodeId === 'reliability'
  || item.nodeId === 'security'
))

const releaseRole: Record<WorkFunction, string> = {
  product: 'Scope',
  engineering: 'Dependency',
  reliability: 'Risk',
  security: 'Privacy gate',
  research: 'Evidence',
}

export default function CaptureDemo({
  compact = false,
  selectedId: selectedIdProp,
  onFocusNodeChange,
}: {
  compact?: boolean
  selectedId?: WorkFunction
  onFocusNodeChange?: (nodeId: WorkFunction) => void
}) {
  const [internalSelectedId, setInternalSelectedId] = useState<WorkFunction>('reliability')
  const selectedId = selectedIdProp ?? internalSelectedId
  const selected = releaseGates.find((item) => item.nodeId === selectedId) ?? releaseGates[0]

  function selectItem(item: (typeof workMoments)[number]) {
    if (selectedIdProp === undefined) setInternalSelectedId(item.nodeId)
    onFocusNodeChange?.(item.nodeId)
  }

  return (
    <div className={compact ? 'bg-white p-3 sm:p-4' : 'bg-white p-4 sm:p-5'}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-green">
            08:40 · Brief
          </p>
          <p className="mt-1 font-display text-[18px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[20px]">
            Friday release intelligence
          </p>
        </div>
        <p className="shrink-0 text-right font-mono text-[10px] uppercase leading-[1.45] tracking-[0.05em] text-muted">
          5 original sources<br />updated 08:34
        </p>
      </div>

      <section className="mt-3 border border-line-soft bg-base px-3.5 py-3" aria-labelledby="atlas-release-question">
        <p className="font-mono text-[10px] uppercase tracking-[0.07em] text-green">
          Asked across 5 systems
        </p>
        <h3 id="atlas-release-question" className="mt-1 text-[13px] font-semibold leading-tight text-ink sm:text-[15px]">
          Can Atlas still ship Friday?
        </h3>
      </section>

      <div className="mt-2.5 grid gap-2.5 sm:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)]">
        <div>
          <div className="border-l-2 border-green bg-sage/65 px-3.5 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-green">
              Zora brief · grounded in original evidence
            </p>
            <p className="mt-1.5 text-[14px] font-semibold leading-tight text-ink sm:text-[16px]">
              Yes—with three gates.
            </p>
            <p className="mt-1.5 text-[11px] leading-[1.5] text-muted">
              Ship Friday if PR #1842 merges by 13:00, auth p95 returns to baseline at 14:00,
              and actor-IP redaction passes by 15:00.
            </p>
          </div>

          <div className="mt-2 divide-y divide-line-soft border-y border-line-soft" aria-label="Release gates">
            {releaseGates.map((item) => {
              const active = item.id === selected.id
              const isRisk = item.nodeId === 'reliability' || item.nodeId === 'security'
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectItem(item)}
                  className={active
                    ? 'grid min-h-12 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-l-2 border-green bg-sage/50 px-3 py-2 text-left transition-colors motion-reduce:transition-none'
                    : 'grid min-h-12 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-l-2 border-transparent px-3 py-2 text-left transition-colors hover:bg-base motion-reduce:transition-none'}
                >
                  <span className="min-w-0">
                    <span className={isRisk
                      ? 'block font-mono text-[10px] uppercase tracking-[0.06em] text-orange'
                      : 'block font-mono text-[10px] uppercase tracking-[0.06em] text-green'}
                    >
                      {releaseRole[item.nodeId]} · {item.sourceApp}
                    </span>
                    <span className="mt-0.5 block truncate text-[11px] font-semibold text-ink">
                      {item.title}
                    </span>
                  </span>
                  <span className="font-mono text-[10px] text-orange">{item.due}</span>
                </button>
              )
            })}
          </div>
        </div>

        <aside
          className="flex min-h-[210px] flex-col border border-line bg-base p-3.5"
          aria-live="polite"
          aria-label="Selected original source"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-green">
                Original source · {selected.sourceApp}
              </p>
              <p className="mt-1 text-[11px] font-semibold leading-tight text-ink sm:text-[12px]">
                {selected.title}
              </p>
            </div>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] border border-line bg-white font-mono text-[10px] text-muted">
              {selected.sourceMark}
            </span>
          </div>

          <p className="mt-3 text-[11px] leading-[1.5] text-muted">{selected.summary}</p>

          <blockquote className="mt-3 border-l-2 border-yellow pl-3 text-[11px] italic leading-[1.5] text-ink">
            {selected.evidence}
          </blockquote>

          <div className="mt-auto grid grid-cols-2 gap-3 border-t border-line-soft pt-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Owner</p>
              <p className="mt-1 text-[11px] font-semibold text-ink">{selected.owner}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Captured</p>
              <p className="mt-1 text-[11px] font-semibold text-ink">{selected.captured}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
