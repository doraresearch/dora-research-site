export default function LinearDiagram({ steps }) {
  return (
    <div className="flex items-center gap-0 flex-wrap gap-y-3">
      {steps.map((step, i) => (
        <div key={step} className="contents">
          <div className="flex items-center justify-center px-4 py-2 bg-paper border border-border transition-colors duration-200 hover:border-border-strong">
            <span className="font-mono text-[11px] text-ink tracking-[0.08em] uppercase whitespace-nowrap font-medium">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center mx-2">
              <div className="w-4 h-px bg-border-strong" />
              <svg width="5" height="8" viewBox="0 0 6 10" fill="none">
                <path d="M1 1L5 5L1 9" stroke="rgba(10,10,10,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
