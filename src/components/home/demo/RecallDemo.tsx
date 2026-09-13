import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { SearchIcon } from '@/components/ui/icons'
import { matchRecallResult, recallResults } from './data'
import type { ConnectionNode, RecallResult } from './data'

export default function RecallDemo({
  compact = false,
  focusNodeId,
}: {
  compact?: boolean
  focusNodeId?: ConnectionNode['id']
}) {
  const inputId = useId()
  const [query, setQuery] = useState(recallResults[0].question)
  const [result, setResult] = useState<RecallResult | null>(recallResults[0])
  const [selectedSourceId, setSelectedSourceId] = useState('')
  const [followUpPrepared, setFollowUpPrepared] = useState(false)
  const selectedSource = result?.sources.find((source) => source.id === selectedSourceId)
    ?? result?.sources.find((source) => source.nodeId === focusNodeId)
    ?? result?.sources[0]

  function runQuery(nextQuery: string) {
    const nextResult = matchRecallResult(nextQuery)
    setQuery(nextQuery)
    setResult(nextResult)
    setSelectedSourceId('')
    setFollowUpPrepared(false)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    runQuery(query)
  }

  return (
    <div className={compact ? 'bg-white p-3 sm:p-4' : 'bg-white p-4 sm:p-5'}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-green">
            15:10 · Decision
          </p>
          <p className="mt-1 font-display text-[18px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[20px]">
            Source-grounded release brief
          </p>
        </div>
        <p className="shrink-0 text-right font-mono text-[10px] uppercase leading-[1.4] tracking-[0.04em] text-muted">
          5 original sources<br />go / no-go 15:30
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-3 flex items-center gap-2">
        <label htmlFor={inputId} className="sr-only">Ask a source-grounded question about the Atlas release</label>
        <div className="relative min-w-0 flex-1">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green" />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask what changed or what ships…"
            className="h-11 w-full rounded-[10px] border border-line bg-base pl-10 pr-4 text-[11px] text-ink outline-none placeholder:text-muted/70 focus:border-green sm:text-[12px]"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-[10px] bg-green px-4 text-[11px] font-semibold text-white transition-colors hover:bg-green-deep motion-reduce:transition-none sm:px-5 sm:text-[12px]"
        >
          Build brief
        </button>
      </form>

      <div className="mt-2 flex max-w-full gap-1.5 overflow-x-auto pb-1" aria-label="Example Atlas release questions">
        {recallResults.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === result?.id}
            onClick={() => runQuery(item.question)}
            className={item.id === result?.id
              ? 'min-h-11 shrink-0 border-b-2 border-green px-2.5 font-mono text-[10px] text-green transition-colors motion-reduce:transition-none'
              : 'min-h-11 shrink-0 border-b-2 border-transparent px-2.5 font-mono text-[10px] text-muted transition-colors hover:border-line hover:text-ink motion-reduce:transition-none'}
          >
            {item.question}
          </button>
        ))}
      </div>

      <div className="mt-3" aria-live="polite">
        {result ? (
          followUpPrepared ? (
            <div className="border-l-2 border-green bg-sage/70 p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-green">Prepared from the release brief</p>
                  <p className="mt-1 text-[14px] font-semibold text-ink sm:text-[15px]">Friday beta plan · ready to review</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">Owner · Elena</span>
              </div>
              <p className="mt-4 text-[12px] leading-[1.6] text-ink sm:text-[13px]">{result.followUp}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-green/20 pt-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-green">
                  Scope, dependencies, owners, and evidence preserved
                </p>
                <button
                  type="button"
                  onClick={() => setFollowUpPrepared(false)}
                  className="min-h-11 px-3 text-[10px] font-semibold text-green transition-colors hover:text-green-deep motion-reduce:transition-none"
                >
                  Back to brief
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="border-l-2 border-green bg-sage/65 p-3.5 sm:p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-green">Release answer</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-green">Guarded yes</p>
                </div>
                <p className="mt-2 text-[12px] font-semibold leading-[1.48] text-ink sm:text-[14px]">
                  {result.recommendation}
                </p>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1.08fr_.92fr]">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Release gates</p>
                  <div className="mt-1 divide-y divide-line-soft border-y border-line-soft">
                    {(compact ? result.conditions.slice(0, 3) : result.conditions).map((condition) => (
                      <div key={`${result.id}-${condition.function}`} className="grid grid-cols-[82px_1fr] gap-2 py-2">
                        <p className={condition.function === 'reliability' || condition.function === 'security'
                          ? 'font-mono text-[10px] uppercase tracking-[0.04em] text-orange'
                          : 'font-mono text-[10px] uppercase tracking-[0.04em] text-green'}
                        >
                          {condition.functionLabel}
                        </p>
                        <p className="text-[11px] leading-[1.45] text-ink">{condition.text}</p>
                      </div>
                    ))}
                  </div>
                  {compact && result.conditions.length > 3 ? (
                    <p className="mt-1.5 font-mono text-[10px] text-muted">+ {result.conditions.length - 3} connected condition</p>
                  ) : null}
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Next moves</p>
                  <div className="mt-1 divide-y divide-line-soft border-y border-line-soft">
                    {(compact ? result.nextActions.slice(0, 3) : result.nextActions).map((action) => (
                      <div key={`${result.id}-${action.owner}`} className="grid grid-cols-[1fr_auto] gap-2 py-2">
                        <div>
                          <p className="text-[11px] font-semibold text-ink">{action.action}</p>
                          <p className="mt-0.5 font-mono text-[10px] text-muted">{action.owner}</p>
                        </div>
                        <p className="font-mono text-[10px] text-orange">{action.due}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                  Evidence · select an original moment
                </p>
                <div className="mt-1 flex max-w-full overflow-x-auto border-y border-line-soft" aria-label="Sources for this decision brief">
                  {result.sources.map((source) => {
                    const active = source.id === selectedSource?.id
                    return (
                      <button
                        key={source.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSelectedSourceId(source.id)}
                        className={active
                          ? 'min-h-11 shrink-0 border-b-2 border-green bg-sage/45 px-3 text-left transition-colors motion-reduce:transition-none'
                          : 'min-h-11 shrink-0 border-b-2 border-transparent px-3 text-left transition-colors hover:bg-base motion-reduce:transition-none'}
                      >
                        <span className="block font-mono text-[10px] uppercase tracking-[0.04em] text-green">{source.functionLabel}</span>
                        <span className="mt-0.5 block text-[11px] font-semibold text-ink">{source.label}</span>
                      </button>
                    )
                  })}
                </div>
                {selectedSource ? (
                  <div className="mt-2 border border-line-soft bg-base px-3 py-2.5">
                    <p className="text-[11px] font-semibold text-ink">{selectedSource.title}</p>
                    <blockquote className="mt-1.5 border-l-2 border-yellow pl-3 text-[11px] italic leading-[1.5] text-muted">
                      {selectedSource.excerpt}
                    </blockquote>
                  </div>
                ) : null}
              </div>

              <div className="mt-3 flex justify-end border-t border-line-soft pt-3">
                <button
                  type="button"
                  onClick={() => setFollowUpPrepared(true)}
                  className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-green px-4 text-[10px] font-semibold text-white transition-colors hover:bg-green-deep motion-reduce:transition-none sm:text-[11px]"
                >
                  Prepare release plan
                </button>
              </div>
            </>
          )
        ) : (
          <div className="border-l-2 border-line bg-base p-4">
            <p className="text-[12px] font-semibold text-ink">No supported answer in this example release.</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted">
              Try asking what changed, why audit logs moved up, whether Atlas can still ship, or what needs attention next.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
