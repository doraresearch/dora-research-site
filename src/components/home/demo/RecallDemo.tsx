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
          <p className="font-display text-[20px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[22px]">
            15:10 decision brief
          </p>
          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted sm:text-[9px]">
            Prepared for the 15:30 Atlas go / no-go
          </p>
        </div>
        <p className="shrink-0 font-mono text-[8px] uppercase tracking-[0.08em] text-green sm:text-[9px]">
          5 sources · release context
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
            className="h-11 w-full rounded-full border border-line bg-base pl-10 pr-4 text-[11px] text-ink outline-none placeholder:text-muted/70 focus:border-green sm:text-[12px]"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-green px-4 text-[11px] font-semibold text-white transition-colors hover:bg-green-deep motion-reduce:transition-none sm:px-5 sm:text-[12px]"
        >
          Build brief
        </button>
      </form>

      <div className="mt-2 flex max-w-full gap-1.5 overflow-x-auto pb-1" aria-label="Example Atlas release questions">
        {recallResults.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => runQuery(item.question)}
            className="min-h-11 shrink-0 border-b border-line px-2.5 font-mono text-[7px] text-muted transition-colors hover:border-green hover:text-ink motion-reduce:transition-none sm:text-[8px]"
          >
            {item.question}
          </button>
        ))}
      </div>

      <div className="mt-3" aria-live="polite">
        {result ? (
          followUpPrepared ? (
            <div className="border-l-2 border-green bg-sage p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-green">Prepared from the release brief</p>
                  <p className="mt-1 text-[14px] font-semibold text-ink sm:text-[15px]">Friday beta plan · ready to review</p>
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.06em] text-muted">Owner · Elena</span>
              </div>
              <p className="mt-4 text-[12px] leading-[1.6] text-ink sm:text-[13px]">{result.followUp}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-green/20 pt-3">
                <p className="font-mono text-[8px] uppercase tracking-[0.07em] text-green">
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
              <div className="border-l-2 border-green bg-sage p-3.5 sm:p-4">
                <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-green">Release answer</p>
                <p className="mt-2 text-[12px] font-semibold leading-[1.48] text-ink sm:text-[14px]">
                  {result.recommendation}
                </p>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1.08fr_.92fr]">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted">Release gates</p>
                  <div className="mt-1 divide-y divide-line-soft border-y border-line-soft">
                    {(compact ? result.conditions.slice(0, 3) : result.conditions).map((condition) => (
                      <div key={`${result.id}-${condition.function}`} className="grid grid-cols-[82px_1fr] gap-2 py-2">
                        <p className="font-mono text-[7px] uppercase tracking-[0.06em] text-green sm:text-[8px]">
                          {condition.functionLabel}
                        </p>
                        <p className="text-[9px] leading-[1.45] text-ink sm:text-[10px]">{condition.text}</p>
                      </div>
                    ))}
                  </div>
                  {compact && result.conditions.length > 3 ? (
                    <p className="mt-1.5 font-mono text-[7px] text-muted">+ {result.conditions.length - 3} connected condition</p>
                  ) : null}
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted">Next moves</p>
                  <div className="mt-1 divide-y divide-line-soft border-y border-line-soft">
                    {(compact ? result.nextActions.slice(0, 2) : result.nextActions).map((action) => (
                      <div key={`${result.id}-${action.owner}`} className="grid grid-cols-[1fr_auto] gap-2 py-2">
                        <div>
                          <p className="text-[9px] font-semibold text-ink sm:text-[10px]">{action.action}</p>
                          <p className="mt-0.5 font-mono text-[7px] text-muted">{action.owner}</p>
                        </div>
                        <p className="font-mono text-[8px] text-orange">{action.due}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted">
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
                        <span className="block font-mono text-[7px] uppercase tracking-[0.06em] text-green">{source.functionLabel}</span>
                        <span className="mt-0.5 block text-[8px] font-semibold text-ink sm:text-[9px]">{source.label}</span>
                      </button>
                    )
                  })}
                </div>
                {selectedSource ? (
                  <blockquote className="mt-2 border-l-2 border-yellow pl-3 text-[9px] italic leading-[1.5] text-muted sm:text-[10px]">
                    {selectedSource.excerpt}
                  </blockquote>
                ) : null}
              </div>

              <div className="mt-3 flex justify-end border-t border-line-soft pt-3">
                <button
                  type="button"
                  onClick={() => setFollowUpPrepared(true)}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-green px-4 text-[10px] font-semibold text-white transition-colors hover:bg-green-deep motion-reduce:transition-none sm:text-[11px]"
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
