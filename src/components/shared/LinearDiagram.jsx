export default function LinearDiagram({ steps }) {
  return (
    <div className="flex items-center gap-0 flex-wrap gap-y-3">
      {steps.map((step, i) => (
        <div key={step} className="contents">
          <div className="flex items-center justify-center border border-line bg-base px-4 py-2 transition-colors duration-150 hover:border-line-strong">
            <span className="font-mono text-[11px] text-ink tracking-[0.08em] uppercase whitespace-nowrap font-medium">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center mx-2">
              <div className="h-px w-4 bg-line-strong" />
              <svg width="5" height="8" viewBox="0 0 6 10" fill="none">
                <path d="M1 1L5 5L1 9" stroke="#AEB7C2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
