import { useRef, useState } from 'react'
import Container from '@/components/ui/Container'
import { capabilities } from '@/content/home'
import EnterpriseWorkspace from './product/EnterpriseWorkspace'

const initialCapability = 2

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(initialCapability)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeCapability = capabilities[activeIndex]

  const selectCapability = (index: number, moveFocus = false) => {
    setActiveIndex(index)
    if (moveFocus) {
      tabRefs.current[index]?.focus()
      tabRefs.current[index]?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    }
  }

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % capabilities.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + capabilities.length) % capabilities.length
    if (event.key === 'ArrowDown') nextIndex = (index + 1) % capabilities.length
    if (event.key === 'ArrowUp') nextIndex = (index - 1 + capabilities.length) % capabilities.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = capabilities.length - 1

    if (nextIndex !== null) {
      event.preventDefault()
      selectCapability(nextIndex, true)
    }
  }

  return (
    <section id="how-it-works" aria-labelledby="capabilities-heading" className="bg-canvas">
      <Container className="min-h-[1180px] border-t border-line pb-20 pt-12 lg:min-h-[1120px] lg:pb-24 lg:pt-[68px] xl:min-h-[1200px] xl:pb-28">
        <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-action">
          From activity to usable memory
        </p>
        <h2 id="capabilities-heading" className="mt-5 max-w-[920px] text-[38px] font-semibold leading-[42px] tracking-[-0.025em] text-ink lg:text-[46px] lg:leading-[50px] lg:tracking-[-0.03em] xl:text-[52px] xl:leading-[56px] xl:tracking-[-0.035em]">
          <span className="xl:hidden">Zora turns activity into usable memory.</span>
          <span className="hidden xl:inline">Zora remembers, connects, anticipates, and proves.</span>
        </h2>
        <p className="mt-5 max-w-[760px] text-[16px] leading-[26px] text-secondary lg:text-[18px] lg:leading-7 xl:text-[20px] xl:leading-[30px]">
          Four views of the same Atlas release.
        </p>

        <div className="mt-[50px] xl:mt-[64px]">
          <div
            role="tablist"
            aria-label="How Zora works"
            className="grid grid-cols-4 overflow-hidden rounded-t-[14px] border border-b-0 border-line bg-surface lg:rounded-t-[18px]"
          >
            {capabilities.map((capability, index) => {
              const selected = index === activeIndex
              return (
                <button
                  key={capability.proof}
                  ref={(node) => { tabRefs.current[index] = node }}
                  type="button"
                  role="tab"
                  id={`capability-tab-${capability.proof}`}
                  aria-controls="capability-workspace-panel"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectCapability(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`relative min-h-16 border-r border-line px-2.5 py-2.5 text-left transition-colors duration-160 last:border-r-0 motion-reduce:transition-none sm:min-h-[72px] sm:px-4 lg:grid lg:grid-cols-[36px_minmax(0,1fr)] lg:content-center lg:px-5 ${
                    selected
                      ? 'bg-selected text-action after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-action'
                      : 'bg-surface text-ink hover:bg-canvas'
                  }`}
                >
                  <span className="block font-mono text-[9px] font-medium leading-[14px] tracking-[0.08em] text-secondary lg:text-[10px]">
                    {capability.number}
                  </span>
                  <span className="mt-1.5 block text-[10px] font-semibold uppercase leading-4 tracking-[-0.01em] sm:text-[12px] lg:mt-0 lg:text-[14px] lg:leading-5">
                    {capability.label}
                  </span>
                  <span className="col-start-2 hidden truncate text-[11px] font-normal leading-4 tracking-normal text-secondary xl:block">
                    {capability.description}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id="capability-workspace-panel"
            aria-labelledby={`capability-tab-${activeCapability.proof}`}
            tabIndex={0}
            className="outline-none"
          >
            <EnterpriseWorkspace view={activeCapability.proof} />
          </div>
        </div>
      </Container>
    </section>
  )
}
