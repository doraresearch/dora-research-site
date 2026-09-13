import { useId, useState } from 'react'
import Logo from '@/components/Logo'
import { enterpriseRecords, supportedAnswer } from './enterpriseData'

const evidenceRecords = enterpriseRecords.filter((record) => record.id !== 'decision')

function WorkspaceIcon({ kind }: { kind: 'memory' | 'connections' | 'risks' | 'answers' }) {
  if (kind === 'memory') {
    return (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
        <path d="M5.5 4.5h7.25a1.75 1.75 0 0 1 1.75 1.75v8.25H7.25A1.75 1.75 0 0 1 5.5 12.75V4.5Z" stroke="currentColor" strokeWidth="1.35" />
        <path d="M5.5 7H4.25A1.75 1.75 0 0 0 2.5 8.75v6.75h8.25A1.75 1.75 0 0 0 12.5 13.75" stroke="currentColor" strokeWidth="1.35" />
        <path d="M8 8h4M8 10.5h3" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    )
  }

  if (kind === 'connections') {
    return (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
        <circle cx="4.5" cy="5" r="2" stroke="currentColor" strokeWidth="1.35" />
        <circle cx="15.5" cy="5" r="2" stroke="currentColor" strokeWidth="1.35" />
        <circle cx="10" cy="15" r="2" stroke="currentColor" strokeWidth="1.35" />
        <path d="m6.3 5.8 2.75 7.4M13.7 5.8l-2.75 7.4M6.5 5h7" stroke="currentColor" strokeWidth="1.35" />
      </svg>
    )
  }

  if (kind === 'risks') {
    return (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
        <path d="M9.98 3 17 16H3L9.98 3Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
        <path d="M10 7.25v4.25M10 14.1v.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M4 4.5h12v9H9l-3.5 3v-3H4v-9Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      <path d="M7 8h6M7 10.5h4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.25" />
      <path d="m5.2 8.1 1.75 1.75 3.9-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M3.5 8h8.5M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SourceMark({ label }: { label: string }) {
  return (
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] border border-line bg-surface font-mono text-[9px] font-semibold tracking-[0.04em] text-secondary shadow-[0_1px_2px_rgba(13,21,17,0.04)]" aria-hidden="true">
      {label}
    </span>
  )
}

function WorkspaceRail() {
  const items = [
    ['memory', 'Memory'],
    ['connections', 'Connections'],
    ['risks', 'Risks'],
    ['answers', 'Answers'],
  ] as const

  return (
    <aside className="hidden w-[54px] shrink-0 flex-col items-center border-r border-line bg-[#F7F9FA] py-3 sm:flex" aria-label="Workspace sections">
      <ul className="mt-1 flex flex-col gap-1.5">
        {items.map(([kind, label]) => {
          const active = kind === 'answers'
          return (
            <li key={kind}>
              <span
                aria-current={active ? 'page' : undefined}
                className={`flex h-8 w-8 items-center justify-center rounded-[8px] ${active ? 'bg-surface text-action shadow-[0_1px_4px_rgba(13,21,17,0.08)]' : 'text-secondary'}`}
              >
                <WorkspaceIcon kind={kind} />
                <span className="sr-only">{label}</span>
              </span>
            </li>
          )
        })}
      </ul>

      <div className="mt-auto flex flex-col items-center gap-1.5" aria-label="Five connected sources">
        {['LI', 'GH', 'DD', 'CI', 'DV'].map((source, index) => (
          <span
            key={source}
            className={`h-1.5 w-1.5 rounded-full ${index === 2 ? 'bg-[#03F5F2] shadow-[0_0_0_3px_rgba(3,245,242,0.14)]' : 'bg-control/55'}`}
            title={source}
          />
        ))}
      </div>
    </aside>
  )
}

export default function EvidenceLedgerPreview({ className = '' }: { className?: string }) {
  const inspectorId = `evidence-inspector-${useId().replace(/:/g, '')}`
  const [selectedId, setSelectedId] = useState('checks')
  const selectedSource = evidenceRecords.find((source) => source.id === selectedId) ?? evidenceRecords[0]

  return (
    <article
      className={`w-full overflow-hidden rounded-[16px] border border-[#CBD5D1] bg-surface shadow-[0_1px_2px_rgba(13,21,17,0.04),0_20px_54px_rgba(13,21,17,0.10)] sm:h-[560px] lg:h-[520px] ${className}`}
      aria-label="Zora evidence workspace for the Atlas Friday release"
    >
      <header className="flex h-[46px] items-center border-b border-line bg-surface px-3.5 sm:px-4">
        <span className="flex items-center gap-2.5">
          <Logo size={18} />
          <span className="text-[12px] font-semibold tracking-[-0.01em] text-ink">Zora</span>
        </span>
        <span className="mx-3 h-4 w-px bg-line" aria-hidden="true" />
        <span className="min-w-0 truncate text-[11px] text-secondary">
          Atlas <span className="px-1 text-control">/</span> Release brief
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-[#03F5F2] shadow-[0_0_0_3px_rgba(3,245,242,0.12)]" aria-hidden="true" />
          Live
        </span>
      </header>

      <div className="sm:flex sm:h-[calc(100%-46px)]">
        <WorkspaceRail />

        <div className="min-w-0 flex-1 bg-[#F8FAFB]">
          <div className="flex h-11 items-center gap-3 border-b border-line bg-surface px-3.5 sm:px-4">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-context text-action">
              <CheckIcon />
            </span>
            <p className="min-w-0 truncate text-[11px] font-medium text-ink sm:text-[12px]">Can Atlas still ship Friday?</p>
            <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-[0.07em] text-secondary">5 sources</span>
          </div>

          <div className="border-b border-line bg-surface px-3.5 py-3 sm:px-4 lg:py-3.5">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-action">Release answer</p>
              <span className="flex items-center gap-1 font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-success">
                <CheckIcon /> Supported
              </span>
            </div>
            <p className="mt-1.5 text-[15px] font-semibold leading-5 tracking-[-0.015em] text-ink">Yes—with three gates.</p>
            <p className="mt-1 line-clamp-2 max-w-[560px] text-[11px] leading-[16px] text-secondary sm:text-[12px] sm:leading-[17px]">
              {supportedAnswer}
            </p>
          </div>

          <div className="bg-[#F8FAFB] p-2.5 sm:grid sm:h-[366px] sm:grid-cols-[minmax(0,1fr)_194px] sm:gap-2.5 sm:p-3 lg:h-[326px]">
            <section className="overflow-hidden rounded-[10px] border border-line bg-surface" aria-labelledby="evidence-ledger-heading">
              <div className="flex h-9 items-center justify-between border-b border-line px-3">
                <h3 id="evidence-ledger-heading" className="text-[11px] font-semibold text-ink">Evidence ledger</h3>
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-success">5 retained</span>
              </div>
              <div className="hidden h-7 grid-cols-[72px_minmax(0,1fr)_42px] items-center border-b border-line bg-[#FAFBFB] px-3 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-secondary sm:grid">
                <span>Source</span>
                <span>Original record</span>
                <span className="text-right">Time</span>
              </div>

              <div>
                {evidenceRecords.map((source) => {
                  const active = source.id === selectedSource.id

                  return (
                    <button
                      key={source.id}
                      type="button"
                      aria-pressed={active}
                      aria-controls={inspectorId}
                      aria-describedby={active ? inspectorId : undefined}
                      onClick={() => setSelectedId(source.id)}
                      className={`relative grid min-h-[52px] w-full grid-cols-[38px_minmax(0,1fr)_38px] items-center border-b border-line px-2.5 text-left transition-colors duration-160 last:border-b-0 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus motion-reduce:transition-none sm:grid-cols-[72px_minmax(0,1fr)_42px] sm:px-3 lg:min-h-[49px] ${active ? 'bg-context before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-action' : 'bg-surface hover:bg-[#F7F9FA]'}`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-action' : 'bg-control/55'}`} aria-hidden="true" />
                        <span className={`font-mono text-[9px] font-semibold uppercase tracking-[0.05em] sm:text-[10px] ${active ? 'text-action' : 'text-secondary'}`}>
                          {source.mark}
                        </span>
                      </span>
                      <span className="min-w-0 pr-1">
                        <span className={`block truncate text-[10px] leading-4 sm:text-[11px] ${active ? 'font-semibold text-ink' : 'font-medium text-ink'}`}>{source.title}</span>
                        <span className="block truncate text-[9px] leading-3 text-secondary sm:text-[10px]">{source.relationship}</span>
                      </span>
                      <span className="text-right font-mono text-[9px] text-secondary sm:text-[10px]">{source.time}</span>
                    </button>
                  )
                })}
              </div>
            </section>

            <section
              id={inspectorId}
              className="mt-2.5 rounded-[10px] border border-line bg-surface p-3 sm:mt-0 sm:min-h-0"
              aria-labelledby={`${inspectorId}-heading`}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="flex items-center gap-2.5">
                <SourceMark label={selectedSource.mark} />
                <div className="min-w-0">
                  <p className="truncate font-mono text-[9px] font-medium uppercase tracking-[0.07em] text-action">Original record · {selectedSource.source}</p>
                  <h3 id={`${inspectorId}-heading`} className="truncate text-[12px] font-semibold leading-4 text-ink">{selectedSource.title}</h3>
                </div>
              </div>

              <blockquote className="mt-3 border-l-2 border-action pl-2.5 text-[11px] leading-[16px] text-secondary">
                {selectedSource.excerpt}
              </blockquote>

              <dl className="mt-3 grid grid-cols-2 gap-x-2 gap-y-2 border-y border-line py-2.5 lg:grid-cols-1 lg:gap-y-1.5">
                <div className="min-w-0">
                  <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-secondary">Owner</dt>
                  <dd className="mt-0.5 truncate text-[10px] font-medium text-ink">{selectedSource.owner}</dd>
                </div>
                <div className="min-w-0">
                  <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-secondary">Release gate</dt>
                  <dd className="mt-0.5 truncate text-[10px] font-medium text-ink">{selectedSource.due}</dd>
                </div>
              </dl>

              <div className="mt-3">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-secondary">Decision trail</p>
                <ol className="mt-2 space-y-2">
                  <li className="relative flex gap-2.5 text-[9px] leading-3.5 text-secondary before:absolute before:left-[3px] before:top-2.5 before:h-[14px] before:w-px before:bg-line">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-action" aria-hidden="true" />
                    <span><strong className="font-medium text-ink">{selectedSource.time}</strong> captured from {selectedSource.source}</span>
                  </li>
                  <li className="relative flex gap-2.5 text-[9px] leading-3.5 text-secondary before:absolute before:left-[3px] before:top-2.5 before:h-[14px] before:w-px before:bg-line">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-action" aria-hidden="true" />
                    <span>Linked to <strong className="font-medium text-ink">Atlas release</strong></span>
                  </li>
                  <li className="flex gap-2.5 text-[9px] leading-3.5 text-secondary">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#03F5F2]" aria-hidden="true" />
                    <span className="flex min-w-0 flex-1 items-center justify-between gap-2"><span>Source retained</span><ArrowIcon /></span>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
