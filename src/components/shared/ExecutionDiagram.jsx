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
              <div className="w-28 md:w-32 bg-paper border border-border-strong px-4 py-4 flex flex-col items-center transition-colors duration-200 hover:bg-card">
                <span className="font-mono text-[10px] text-ochre tracking-[0.16em] mb-2 font-medium">{roman[i]}</span>
                <span className="text-xs font-medium text-ink tracking-wide">{step.label}</span>
                <span className="font-mono text-[9px] text-ink-muted mt-1 tracking-wider text-center leading-tight uppercase">{step.sub}</span>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center mx-1">
                <div className="w-5 md:w-8 h-px bg-border-strong" />
                <svg width="5" height="8" viewBox="0 0 6 10" fill="none" className="flex-shrink-0">
                  <path d="M1 1L5 5L1 9" stroke="rgba(10,10,10,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
