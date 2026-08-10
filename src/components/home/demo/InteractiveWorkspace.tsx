import { useId, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import CaptureDemo from './CaptureDemo'
import ConnectDemo from './ConnectDemo'
import ProductFrame from './ProductFrame'
import RecallDemo from './RecallDemo'
import type { ConnectionNode, WorkFunction } from './data'

type Stage = 'brief' | 'context' | 'decide'

const stages: { id: Stage; index: string; label: string }[] = [
  { id: 'brief', index: '08:40', label: 'Brief' },
  { id: 'context', index: '11:20', label: 'Context' },
  { id: 'decide', index: '15:10', label: 'Decision' },
]

function StageContent({
  stage,
  focusNodeId,
  onFocusNodeChange,
}: {
  stage: Stage
  focusNodeId: ConnectionNode['id']
  onFocusNodeChange: (nodeId: ConnectionNode['id']) => void
}) {
  if (stage === 'brief') {
    return (
      <CaptureDemo
        compact
        selectedId={focusNodeId === 'commitment' ? 'reliability' : focusNodeId}
        onFocusNodeChange={(nodeId: WorkFunction) => onFocusNodeChange(nodeId)}
      />
    )
  }
  if (stage === 'context') {
    return (
      <ConnectDemo
        compact
        selectedId={focusNodeId}
        onSelectedIdChange={onFocusNodeChange}
      />
    )
  }
  return <RecallDemo compact focusNodeId={focusNodeId} />
}

export default function InteractiveWorkspace() {
  const [stage, setStage] = useState<Stage>('brief')
  const [focusNodeId, setFocusNodeId] = useState<ConnectionNode['id']>('reliability')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const workspaceId = useId().replace(/:/g, '')
  const activeIndex = stages.findIndex((item) => item.id === stage)

  function selectStage(nextStage: Stage) {
    setStage(nextStage)
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % stages.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + stages.length) % stages.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = stages.length - 1
    else return

    event.preventDefault()
    selectStage(stages[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  function advanceStage() {
    selectStage(stages[(activeIndex + 1) % stages.length].id)
  }

  return (
    <ProductFrame label="Zora / Atlas release">
      <div className="flex items-center justify-between gap-4 border-b border-line-soft bg-sage/40 px-3.5 py-3 sm:px-4">
        <div>
          <p className="font-display text-[15px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[17px]">
            Friday private beta
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.07em] text-muted">
            Atlas · release intelligence
          </p>
        </div>
        <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
          Today · 08:40
        </p>
      </div>

      <div
        className="grid grid-cols-3 gap-1 border-b border-line-soft bg-white p-1.5"
        role="tablist"
        aria-label="Explore the Atlas release brief"
      >
        {stages.map((item, index) => {
          const active = item.id === stage
          const tabId = `${workspaceId}-${item.id}-tab`
          const panelId = `${workspaceId}-${item.id}-panel`
          return (
            <button
              key={item.id}
              ref={(node) => { tabRefs.current[index] = node }}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={panelId}
              tabIndex={active ? 0 : -1}
              onClick={() => selectStage(item.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={active
                ? 'relative flex min-h-11 items-center justify-center gap-1.5 rounded-[8px] bg-green px-1.5 py-2 text-white transition-colors motion-reduce:transition-none sm:gap-2 sm:px-2'
                : 'relative flex min-h-11 items-center justify-center gap-1.5 rounded-[8px] bg-white px-1.5 py-2 text-muted transition-colors hover:bg-base hover:text-ink motion-reduce:transition-none sm:gap-2 sm:px-2'}
            >
              <span className="font-mono text-[10px] tracking-[0.04em] sm:tracking-[0.06em]">{item.index}</span>
              <span className="text-[11px] font-semibold sm:text-[12px]">{item.label}</span>
            </button>
          )
        })}
      </div>

      {stages.map((item) => {
        const active = item.id === stage
        return (
          <div
            key={item.id}
            id={`${workspaceId}-${item.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${workspaceId}-${item.id}-tab`}
            tabIndex={active ? 0 : -1}
            hidden={!active}
            className={active ? 'motion-safe:animate-fade-up' : undefined}
          >
            <StageContent
              stage={item.id}
              focusNodeId={focusNodeId}
              onFocusNodeChange={setFocusNodeId}
            />
          </div>
        )
      })}

      <div className="flex items-center justify-between gap-3 border-t border-line-soft bg-base px-3.5 py-2.5 sm:px-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
          Example · product + technology
        </p>
        <button
          type="button"
          onClick={advanceStage}
          className="inline-flex min-h-11 items-center gap-1.5 px-1 font-mono text-[10px] uppercase tracking-[0.06em] text-green transition-colors hover:text-green-deep motion-reduce:transition-none"
          aria-label={`${activeIndex === stages.length - 1 ? 'Return to' : 'Continue to'} ${stages[(activeIndex + 1) % stages.length].label}`}
        >
          {activeIndex === stages.length - 1 ? 'Back to Brief' : `Next · ${stages[activeIndex + 1].label}`}
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </ProductFrame>
  )
}
