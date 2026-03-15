export default function LinearDiagram({ steps }) {
  return (
    <div className="flex items-center gap-0 flex-wrap gap-y-3">
      {steps.map((step, i) => (
        <div key={step} className="contents">
          <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-[#F9FAFB] border border-black/[0.08] hover:border-black/[0.14] transition-colors duration-200">
            <span className="text-xs font-medium text-[#111111] tracking-wide whitespace-nowrap">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center mx-2">
              <div className="w-4 h-px bg-black/[0.12]" />
              <svg width="5" height="8" viewBox="0 0 6 10" fill="none">
                <path d="M1 1L5 5L1 9" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
