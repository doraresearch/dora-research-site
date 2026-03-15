const steps = [
  { label: 'Context', sub: 'State & memory' },
  { label: 'Reasoning', sub: 'Interpret & analyze' },
  { label: 'Planning', sub: 'Sequence & strategy' },
  { label: 'Execution', sub: 'Action & output' },
  { label: 'Feedback', sub: 'Verify & adapt' },
]

export default function ExecutionDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-start md:justify-center gap-0 min-w-max md:min-w-0 py-4">
        {steps.map((step, i) => (
          <div key={step.label} className="contents">
            <div className="flex flex-col items-center">
              <div className="w-28 md:w-32 bg-white border border-black/[0.1] rounded-xl px-4 py-3 flex flex-col items-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-black/[0.2] hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)] transition-all duration-200">
                <span className="text-[10px] text-[#6B7280] font-mono mb-1.5">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xs font-semibold text-[#111111] tracking-wide">{step.label}</span>
                <span className="text-[10px] text-[#9CA3AF] mt-1 text-center leading-tight">{step.sub}</span>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center mx-1 mb-1">
                <div className="w-5 md:w-8 h-px bg-black/[0.12]" />
                <svg width="5" height="8" viewBox="0 0 6 10" fill="none" className="flex-shrink-0">
                  <path d="M1 1L5 5L1 9" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
