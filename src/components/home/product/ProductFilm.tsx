import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type RefObject } from 'react'
import Logo from '@/components/Logo'
import { workdayChapters, type WorkdayChapter } from '@/content/home'

const TOTAL_SECONDS = 52
const CHAPTER_SECONDS = 13

type ChapterId = WorkdayChapter['id']
type StoryStep = {
  eyebrow: string
  title: string
  detail: string
  tone?: 'signal' | 'risk' | 'success'
}

const storySteps = {
  scope: [
    { eyebrow: 'Customer · 08:04', title: 'Enterprise SSO', detail: 'Required for the design partner' },
    { eyebrow: 'Planning · 08:12', title: 'Scope narrowed', detail: 'Export stays outside the beta', tone: 'signal' },
    { eyebrow: 'Linear · 08:14', title: 'History added', detail: 'Read-only audit trail moves in' },
    { eyebrow: 'Release gate', title: 'Friday beta', detail: 'Customer outcome stays intact' },
  ],
  dependency: [
    { eyebrow: 'Scope · 08:12', title: 'History moves in', detail: 'Authentication path changes' },
    { eyebrow: 'Linear · 08:26', title: 'SDK-418', detail: 'External dependency found', tone: 'signal' },
    { eyebrow: 'GitHub · 08:31', title: 'PR #8421', detail: 'Mobile integration opened' },
    { eyebrow: 'Release gate', title: 'Mobile blocked', detail: 'Web remains independent', tone: 'risk' },
  ],
  risk: [
    { eyebrow: 'Linear · 08:26', title: 'SDK-418', detail: 'Mobile is blocked' },
    { eyebrow: 'GitHub · 10:44', title: 'Checks failing', detail: 'Release gate stays closed', tone: 'risk' },
    { eyebrow: 'Datadog · 11:32', title: 'Errors · 2.8%', detail: 'Auth signal is moving up', tone: 'risk' },
    { eyebrow: 'Deadline · 13:00', title: 'Go / no-go', detail: 'Decision now needs attention', tone: 'risk' },
  ],
  decision: [
    { eyebrow: 'Decision · 15:30', title: 'Web beta', detail: 'Ship Friday', tone: 'success' },
    { eyebrow: 'Decision · 15:30', title: 'Mobile', detail: 'Hold for SDK-418', tone: 'risk' },
    { eyebrow: 'Linear · 15:32', title: 'Owners updated', detail: 'Dates and gates recorded' },
    { eyebrow: 'Zora · 15:35', title: 'Why attached', detail: 'Evidence trail stays intact', tone: 'signal' },
  ],
} as const satisfies Record<ChapterId, ReadonlyArray<StoryStep>>

function formatTime(value: number) {
  const seconds = Math.max(0, Math.min(TOTAL_SECONDS, Math.floor(value)))
  return `00:${String(seconds).padStart(2, '0')}`
}

function chapterIndexAt(value: number) {
  return Math.min(workdayChapters.length - 1, Math.floor(value / CHAPTER_SECONDS))
}

function PlayIcon({ playing }: { playing: boolean }) {
  return playing ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
      <path d="M6.75 5.5v9M13.25 5.5v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
      <path d="m7.25 5.4 7.1 4.6-7.1 4.6V5.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function ReplayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
      <path d="M15.4 7.1A6 6 0 1 0 16 10M15.4 7.1V3.8m0 3.3h-3.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChapterControls({
  activeIndex,
  elapsed,
  onSelect,
  className,
}: {
  activeIndex: number
  elapsed: number
  onSelect: (index: number) => void
  className?: string
}) {
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()

    let nextIndex = index
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + workdayChapters.length) % workdayChapters.length
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % workdayChapters.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = workdayChapters.length - 1

    onSelect(nextIndex)
    const controls = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[data-film-chapter]')
    requestAnimationFrame(() => controls?.[nextIndex]?.focus())
  }

  return (
    <nav className={className} aria-label="Atlas workday chapters">
      {workdayChapters.map((chapter, index) => {
        const active = index === activeIndex
        const complete = elapsed >= chapter.start + CHAPTER_SECONDS
        return (
          <button
            key={chapter.id}
            type="button"
            data-film-chapter={chapter.id}
            aria-current={active ? 'step' : undefined}
            onClick={() => onSelect(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={`relative min-h-12 min-w-0 px-2 py-2 text-left transition-colors duration-160 focus-visible:z-10 motion-reduce:transition-none ${
              active ? 'bg-selected text-ink' : 'bg-surface text-secondary hover:bg-[#F8FAFB] hover:text-ink'
            }`}
          >
            <span className={`absolute inset-x-0 top-0 h-0.5 ${active ? 'bg-action' : complete ? 'bg-[#03F5F2]' : 'bg-transparent'}`} />
            <span className="block font-mono text-[10px] font-medium leading-4 tracking-[0.04em]">{chapter.time}</span>
            <span className="mt-0.5 block truncate text-[11px] font-semibold leading-4 sm:text-[12px]">{chapter.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

function StoryCanvas({
  chapter,
  contextTriggerRef,
  onOpenContext,
}: {
  chapter: WorkdayChapter
  contextTriggerRef: RefObject<HTMLButtonElement>
  onOpenContext: () => void
}) {
  const steps = storySteps[chapter.id]

  return (
    <div data-film-region="primary" className="bg-[#F8FAFB] px-4 py-5 sm:px-5 lg:flex lg:min-h-0 lg:flex-col lg:px-6 lg:py-5 xl:px-7 xl:py-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
        <div>
          <p className="font-mono text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-secondary">Release question</p>
          <p className="mt-0.5 text-[14px] font-semibold leading-5 text-ink">Can Atlas still ship Friday?</p>
        </div>
        <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] font-medium uppercase leading-4 tracking-[0.06em] text-action">
          3 sources
        </span>
      </div>

      <div className="pt-5 lg:pt-4">
        <p className={`font-mono text-[10px] font-medium uppercase leading-4 tracking-[0.08em] ${chapter.tone === 'risk' ? 'text-risk' : 'text-action'}`}>
          {chapter.eyebrow}
        </p>
        <h3 className="mt-2 max-w-[700px] text-[22px] font-semibold leading-[27px] tracking-[-0.025em] text-ink lg:text-[28px] lg:leading-8 lg:tracking-[-0.03em]">
          {chapter.title}
        </h3>
        <p className="mt-2 max-w-[720px] text-[13px] leading-5 text-secondary lg:text-[14px]">{chapter.body}</p>
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-2 lg:mt-4 lg:gap-2.5 xl:grid-cols-4">
        <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-[31px] hidden h-px bg-line xl:block" />
        {steps.map((step, index) => {
          const tone = 'tone' in step ? step.tone : 'neutral'
          return (
            <div
              key={`${chapter.id}-${step.eyebrow}`}
              className={`relative z-[1] min-h-[68px] rounded-[8px] border p-3 lg:min-h-[76px] ${
                tone === 'risk'
                  ? 'border-risk/45 bg-risk-tint'
                  : tone === 'success'
                    ? 'border-success/45 bg-success-tint'
                    : tone === 'signal'
                      ? 'border-action/50 bg-context'
                      : 'border-line bg-surface'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className={`font-mono text-[9px] font-medium uppercase leading-4 tracking-[0.07em] ${tone === 'risk' ? 'text-risk' : tone === 'success' ? 'text-success' : 'text-action'}`}>
                  {step.eyebrow}
                </p>
                <span className={`h-2 w-2 rounded-full border-2 border-[#F8FAFB] ${tone === 'risk' ? 'bg-risk' : tone === 'success' ? 'bg-success' : index <= 1 ? 'bg-[#03F5F2]' : 'bg-action'}`} />
              </div>
              <p className="mt-1 text-[12px] font-semibold leading-4 text-ink lg:text-[13px]">{step.title}</p>
              <p className="mt-0.5 text-[10px] leading-4 text-secondary lg:text-[11px]">{step.detail}</p>
            </div>
          )
        })}
      </div>

      <div className={`mt-5 rounded-[8px] border-l-[3px] px-3.5 py-3 lg:mt-auto ${chapter.tone === 'risk' ? 'border-risk bg-risk-tint' : 'border-action bg-context'}`}>
        <p className="font-mono text-[9px] font-medium uppercase leading-4 tracking-[0.08em] text-secondary">Next attention</p>
        <p className="mt-0.5 text-[12px] font-semibold leading-5 text-ink lg:text-[13px]">{chapter.decision}</p>
      </div>

      <button
        ref={contextTriggerRef}
        type="button"
        onClick={onOpenContext}
        className="mt-3 flex min-h-11 w-full items-center justify-between rounded-[8px] border border-control bg-surface px-3.5 text-left text-[12px] font-semibold text-ink transition-colors duration-160 hover:bg-selected motion-reduce:transition-none lg:hidden"
      >
        <span>View Zora context</span>
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.07em] text-action">{chapter.evidence.length} records →</span>
      </button>
    </div>
  )
}

function ContextInspector({
  chapter,
  selectedEvidenceIndex,
  onSelectEvidence,
  detailId,
  className = '',
  showHeading = true,
}: {
  chapter: WorkdayChapter
  selectedEvidenceIndex: number
  onSelectEvidence: (index: number) => void
  detailId: string
  className?: string
  showHeading?: boolean
}) {
  const evidence = chapter.evidence[selectedEvidenceIndex]

  return (
    <aside data-film-region="inspector" className={`border-t border-line bg-surface px-4 py-5 sm:px-5 lg:min-h-0 lg:border-l lg:border-t-0 lg:px-5 lg:py-5 xl:px-6 ${className}`}>
      {showHeading && (
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-action">Zora context</p>
          <span className="font-mono text-[10px] leading-4 text-secondary">Updated · {chapter.time}</span>
        </div>
      )}

      <div className={`${showHeading ? 'mt-3' : ''} grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-2`}>
        {[
          ['What changed', chapter.changed],
          ['Why it matters', chapter.matters],
          ['What happens next', chapter.decision],
        ].map(([label, value], index) => (
          <div key={label} className={`min-w-0 ${index ? 'border-t border-line pt-2 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-2' : ''}`}>
            <p className="font-mono text-[9px] font-medium uppercase leading-4 tracking-[0.08em] text-secondary">{label}</p>
            <p className="mt-0.5 text-[11px] font-medium leading-4 text-ink xl:text-[12px] xl:leading-[18px]">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-line pt-3 lg:mt-3 lg:pt-2.5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[9px] font-medium uppercase leading-4 tracking-[0.08em] text-secondary">Original evidence</p>
          <span className="font-mono text-[9px] leading-4 text-secondary">{chapter.evidence.length} records</span>
        </div>
        <div className="mt-2 overflow-hidden rounded-[8px] border border-line">
          {chapter.evidence.map((row, index) => {
            const selected = index === selectedEvidenceIndex
            return (
              <button
                key={`${row.source}-${row.time}`}
                type="button"
                data-evidence-source={row.source.toLowerCase()}
                aria-pressed={selected}
                aria-controls={detailId}
                onClick={() => onSelectEvidence(index)}
                className={`relative grid min-h-[52px] w-full grid-cols-[64px_minmax(0,1fr)_42px] items-center gap-2 border-b border-line px-3 text-left last:border-b-0 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus ${
                  selected ? 'bg-context before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-action' : 'bg-surface hover:bg-[#F8FAFB]'
                }`}
              >
                <span className="font-mono text-[9px] font-medium uppercase leading-4 tracking-[0.06em] text-action">{row.source}</span>
                <span className="min-w-0 truncate text-[11px] font-medium leading-4 text-ink">{row.detail}</span>
                <span className="font-mono text-[9px] leading-4 text-secondary">{row.time}</span>
              </button>
            )
          })}
        </div>

        <div id={detailId} aria-live="polite" aria-atomic="true" className="mt-2 rounded-[8px] border border-action/45 bg-context p-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-mono text-[9px] font-medium uppercase leading-4 tracking-[0.07em] text-action">{evidence.source} · {evidence.relationship}</p>
            <span className="font-mono text-[9px] leading-4 text-secondary">{evidence.owner}</span>
          </div>
          <p className="mt-1.5 text-[11px] leading-[17px] text-ink">{evidence.excerpt}</p>
        </div>
      </div>
    </aside>
  )
}

export default function ProductFilm() {
  const rootRef = useRef<HTMLDivElement>(null)
  const contextDialogRef = useRef<HTMLDialogElement>(null)
  const contextTriggerRef = useRef<HTMLButtonElement>(null)
  const [elapsed, setElapsed] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [inView, setInView] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [selectedEvidenceIndex, setSelectedEvidenceIndex] = useState(0)
  const [contextOpen, setContextOpen] = useState(false)

  const activeIndex = chapterIndexAt(elapsed)
  const active = workdayChapters[activeIndex]
  const complete = elapsed >= TOTAL_SECONDS
  const playbackState = complete ? 'complete' : playing ? 'playing' : 'paused'

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      setReducedMotion(query.matches)
      if (query.matches) setPlaying(false)
    }
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const node = rootRef.current
    if (!node || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (!entry.isIntersecting) setPlaying(false)
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) setPlaying(false)
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  useEffect(() => {
    if (!playing || !inView || reducedMotion) return
    let previous = performance.now()
    const timer = window.setInterval(() => {
      const now = performance.now()
      const delta = (now - previous) / 1000
      previous = now
      setElapsed((current) => {
        const next = Math.min(TOTAL_SECONDS, current + delta)
        if (next >= TOTAL_SECONDS) setPlaying(false)
        return next
      })
    }, 100)
    return () => window.clearInterval(timer)
  }, [playing, inView, reducedMotion])

  useEffect(() => {
    setSelectedEvidenceIndex(0)
  }, [activeIndex])

  useEffect(() => {
    const dialog = contextDialogRef.current
    if (!dialog) return
    if (contextOpen && !dialog.open) dialog.showModal()
    if (!contextOpen && dialog.open) dialog.close()
  }, [contextOpen])

  const selectChapter = (index: number) => {
    setPlaying(false)
    setElapsed(workdayChapters[index].start)
    setSelectedEvidenceIndex(0)
  }

  const togglePlayback = () => {
    if (reducedMotion) return
    if (complete) setElapsed(0)
    setPlaying((current) => !current || complete)
  }

  const progressStyle = {
    '--workday-progress': `${(elapsed / TOTAL_SECONDS) * 100}%`,
  } as CSSProperties

  return (
    <div
      ref={rootRef}
      data-product-film
      data-film-state={active.id}
      data-playback-state={playbackState}
      className="overflow-hidden rounded-[14px] border border-[#CBD5D1] bg-surface shadow-[0_24px_70px_-18px_rgba(18,36,29,.16)] lg:h-[720px] lg:rounded-[18px]"
    >
      <div data-film-region="topbar" className="flex h-14 items-center justify-between border-b border-line bg-surface px-4 lg:h-16 lg:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <Logo size={20} />
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-secondary">Zora · Atlas workday</p>
            <p className="truncate text-[12px] font-semibold leading-4 text-ink lg:text-[13px]">Friday release</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#03F5F2] shadow-[0_0_0_3px_rgba(3,245,242,.12)]" />
          <span className="hidden font-mono text-[10px] font-medium uppercase leading-4 tracking-[0.06em] text-action sm:inline">Live memory</span>
          <span className="font-mono text-[10px] leading-4 text-secondary">{formatTime(elapsed)} / 00:52</span>
        </div>
      </div>

      <ChapterControls
        activeIndex={activeIndex}
        elapsed={elapsed}
        onSelect={selectChapter}
        className="grid grid-cols-4 border-b border-line lg:hidden"
      />

      <div className="lg:grid lg:h-[532px] lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_396px]">
        <StoryCanvas chapter={active} contextTriggerRef={contextTriggerRef} onOpenContext={() => { setPlaying(false); setContextOpen(true) }} />
        <ContextInspector
          chapter={active}
          selectedEvidenceIndex={selectedEvidenceIndex}
          onSelectEvidence={(index) => { setPlaying(false); setSelectedEvidenceIndex(index) }}
          detailId="workday-evidence-detail-desktop"
          className="hidden lg:block"
        />
      </div>

      <div data-film-region="playback" className="border-t border-line bg-surface px-4 py-3 lg:h-[124px] lg:border-t-0 lg:px-6 lg:py-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlayback}
            disabled={reducedMotion}
            aria-label={reducedMotion ? 'Timed playback disabled because reduced motion is enabled' : complete ? 'Replay the Atlas workday' : playing ? 'Pause the Atlas workday' : 'Play the Atlas workday'}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-action text-inverse transition-colors duration-160 hover:bg-action-hover disabled:cursor-not-allowed disabled:bg-control motion-reduce:transition-none"
          >
            {complete ? <ReplayIcon /> : <PlayIcon playing={playing} />}
          </button>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[12px] font-semibold leading-4 text-ink">{complete ? 'Replay workday' : playing ? `Following ${active.label.toLowerCase()}` : reducedMotion ? 'Select a chapter' : 'Play one workday'}</p>
              <span className="font-mono text-[10px] leading-4 text-secondary">{formatTime(elapsed)} / 00:52</span>
            </div>
            <input
              type="range"
              min={0}
              max={TOTAL_SECONDS}
              step={0.25}
              value={elapsed}
              onChange={(event) => {
                setPlaying(false)
                setElapsed(Number(event.currentTarget.value))
              }}
              aria-label="Workday playback position"
              aria-valuetext={`${formatTime(elapsed)}, ${active.label}`}
              style={progressStyle}
              className="workday-range mt-0.5 w-full"
            />
          </div>
        </div>
        <ChapterControls
          activeIndex={activeIndex}
          elapsed={elapsed}
          onSelect={selectChapter}
          className="hidden h-12 grid-cols-4 divide-x divide-line border-t border-line lg:grid"
        />
      </div>

      <p className="sr-only" aria-live="polite">{active.time}, {active.label}. {active.title}</p>

      <dialog
        ref={contextDialogRef}
        aria-label="Zora context and original evidence"
        onClose={() => {
          setContextOpen(false)
          requestAnimationFrame(() => contextTriggerRef.current?.focus())
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault()
            event.currentTarget.close()
          }
        }}
        className="workday-context-dialog m-auto max-h-[calc(100svh-48px)] w-[calc(100%-48px)] max-w-[420px] overflow-hidden rounded-[16px] border border-line bg-surface p-0 text-secondary shadow-[0_28px_90px_-18px_rgba(13,21,17,.32)] lg:hidden"
      >
        <div className="flex h-14 items-center justify-between border-b border-line bg-surface px-4">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-action">Zora context</p>
            <p className="text-[12px] font-semibold leading-4 text-ink">{active.label} · updated {active.time}</p>
          </div>
          <button
            type="button"
            aria-label="Close Zora context"
            onClick={() => contextDialogRef.current?.close()}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-canvas text-[22px] leading-none text-ink hover:bg-selected"
          >
            ×
          </button>
        </div>
        <div className="max-h-[calc(100svh-104px)] overflow-y-auto" data-lenis-prevent>
          <ContextInspector
            chapter={active}
            selectedEvidenceIndex={selectedEvidenceIndex}
            onSelectEvidence={(index) => { setPlaying(false); setSelectedEvidenceIndex(index) }}
            detailId="workday-evidence-detail-mobile"
            className="border-0 pt-4"
            showHeading={false}
          />
        </div>
      </dialog>
    </div>
  )
}
