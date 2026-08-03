import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { SearchIcon } from '@/components/ui/icons'
import { matchRecallResult, recallResults } from './data'
import type { RecallResult } from './data'

export default function RecallDemo({ compact = false }: { compact?: boolean }) {
  const inputId = useId()
  const [query, setQuery] = useState(recallResults[0].question)
  const [result, setResult] = useState<RecallResult | null>(recallResults[0])
  const [selectedSourceId, setSelectedSourceId] = useState(recallResults[0].sources[0].id)
  const selectedSource = result?.sources.find((source) => source.id === selectedSourceId) ?? result?.sources[0]

  function runQuery(nextQuery: string) {
    const nextResult = matchRecallResult(nextQuery)
    setQuery(nextQuery)
    setResult(nextResult)
    setSelectedSourceId(nextResult?.sources[0].id ?? '')
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    runQuery(query)
  }

  return (
    <div className={compact ? 'bg-white p-3 sm:p-4' : 'bg-white p-4 sm:p-5'}>
      <div>
        <p className="font-display text-[20px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[22px]">
          Ask your memory
        </p>
        <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted sm:text-[9px]">
          This demo searches the example sources below
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-3 flex items-center gap-2">
        <label htmlFor={inputId} className="sr-only">Ask a question about the example memory set</label>
        <div className="relative min-w-0 flex-1">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green" />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask about the renewal…"
            className="h-11 w-full rounded-full border border-line bg-base pl-10 pr-4 text-[12px] text-ink outline-none placeholder:text-muted/70 focus:border-green sm:text-[13px]"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-green px-4 text-[11px] font-semibold text-white transition-colors hover:bg-green-deep motion-reduce:transition-none sm:px-5 sm:text-[12px]"
        >
          Recall
        </button>
      </form>

      <div className="mt-2 flex max-w-full gap-1.5 overflow-x-auto pb-1" aria-label="Example questions">
        {recallResults.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => runQuery(item.question)}
            className="shrink-0 rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[7px] text-muted transition-colors hover:border-green/50 hover:text-ink motion-reduce:transition-none sm:text-[8px]"
          >
            {item.question}
          </button>
        ))}
      </div>

      <div className="mt-3" aria-live="polite">
        {result ? (
          <>
            <div className="rounded-[14px] border border-[#cad6c7] bg-sage p-3.5 sm:p-4">
              <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-green">Source-backed answer</p>
              <p className="mt-2 text-[13px] font-semibold leading-[1.45] text-ink sm:text-[15px]">
                {result.answer}
              </p>
            </div>

            <div className="mt-3">
              <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted">
                Sources · {result.sources.length} original moments
              </p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {result.sources.map((source, index) => {
                  const active = source.id === selectedSource?.id
                  return (
                    <button
                      key={source.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelectedSourceId(source.id)}
                      className={active
                        ? 'rounded-[10px] border border-green bg-sage/50 p-2.5 text-left shadow-[inset_3px_0_0_#3D8B68] transition-colors motion-reduce:transition-none'
                        : 'rounded-[10px] border border-line bg-white p-2.5 text-left transition-colors hover:border-green/50 motion-reduce:transition-none'}
                    >
                      <span className="block font-mono text-[7px] uppercase tracking-[0.06em] text-green">
                        [{index + 1}] {source.label}
                      </span>
                      <span className="mt-1 block truncate text-[10px] font-semibold text-ink sm:text-[11px]">
                        {source.title}
                      </span>
                    </button>
                  )
                })}
              </div>
              {selectedSource ? (
                <blockquote className={compact
                  ? 'mt-2 border-l-2 border-yellow pl-3 text-[10px] italic leading-[1.5] text-muted sm:text-[11px]'
                  : 'mt-3 border-l-2 border-yellow pl-3 text-[11px] italic leading-[1.55] text-muted sm:text-[12px]'}>
                  {selectedSource.excerpt}
                </blockquote>
              ) : null}
            </div>
          </>
        ) : (
          <div className="rounded-[14px] border border-line bg-base p-4">
            <p className="text-[12px] font-semibold text-ink">No matching moment in this example memory set.</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted">
              Try asking about the renewal decision, the reply date, or your next step.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
