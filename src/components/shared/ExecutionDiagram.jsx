const steps = [
  { label: 'Context', sub: 'State & memory' },
  { label: 'Reasoning', sub: 'Interpret & analyze' },
  { label: 'Planning', sub: 'Sequence & strategy' },
  { label: 'Execution', sub: 'Action & output' },
  { label: 'Feedback', sub: 'Verify & adapt' },
]

const roman = ['I', 'II', 'III', 'IV', 'V']

export default function ExecutionDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-start md:justify-center gap-0 min-w-max md:min-w-0 py-4">
        {steps.map((step, i) => (
          <div key={step.label} className="contents">
            <div className="flex flex-col items-center">
              <div className="flex w-28 flex-col items-center border border-line-strong bg-base px-4 py-4 transition-colors duration-150 hover:bg-surface md:w-32">
                <span className="mb-2 font-mono text-[10px] font-medium tracking-[0.12em] text-deep-signal">{roman[i]}</span>
                <span className="text-xs font-medium text-ink tracking-wide">{step.label}</span>
                <span className="mt-1 text-center font-mono text-[9px] uppercase leading-tight tracking-[0.12em] text-muted">{step.sub}</span>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center mx-1">
                <div className="h-px w-5 bg-line-strong md:w-8" />
                <svg width="5" height="8" viewBox="0 0 6 10" fill="none" className="flex-shrink-0">
                  <path d="M1 1L5 5L1 9" stroke="#AEB7C2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
