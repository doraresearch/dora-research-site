import { useId, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import CaptureDemo from './CaptureDemo'
import ConnectDemo from './ConnectDemo'
import ProductFrame from './ProductFrame'
import RecallDemo from './RecallDemo'

type Stage = 'capture' | 'connect' | 'recall'

const stages: { id: Stage; index: string; label: string }[] = [
  { id: 'capture', index: '01', label: 'Capture' },
  { id: 'connect', index: '02', label: 'Connect' },
  { id: 'recall', index: '03', label: 'Recall' },
]

function StageContent({ stage }: { stage: Stage }) {
  if (stage === 'capture') return <CaptureDemo compact />
  if (stage === 'connect') return <ConnectDemo compact />
  return <RecallDemo compact />
}

export default function InteractiveWorkspace() {
  const [stage, setStage] = useState<Stage>('capture')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const workspaceId = useId().replace(/:/g, '')
  const activeIndex = stages.findIndex((item) => item.id === stage)

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % stages.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + stages.length) % stages.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = stages.length - 1
    else return

    event.preventDefault()
    setStage(stages[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <ProductFrame label="Zora / memory workspace">
      <div className="grid grid-cols-3 border-b border-line-soft bg-white" role="tablist" aria-label="Explore how Zora works">
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
              onClick={() => setStage(item.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={active
                ? 'relative flex items-center justify-center gap-2 bg-sage/60 px-2 py-3 text-green transition-colors motion-reduce:transition-none'
                : 'relative flex items-center justify-center gap-2 bg-white px-2 py-3 text-muted transition-colors hover:bg-base hover:text-ink motion-reduce:transition-none'}
            >
              <span className="font-mono text-[8px] tracking-[0.06em] sm:text-[9px]">{item.index}</span>
              <span className="text-[11px] font-semibold sm:text-[12px]">{item.label}</span>
              {active ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green" aria-hidden="true" /> : null}
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
            <StageContent stage={item.id} />
          </div>
        )
      })}

      <div className="flex items-center justify-between border-t border-line-soft bg-base px-4 py-2.5">
        <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted">
          Interactive example · no account needed
        </p>
        <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-green">
          {activeIndex + 1} / {stages.length}
        </p>
      </div>
    </ProductFrame>
  )
}
