const items = [
  'On-device memory store',
  'End-to-end encrypted',
  'Your data trains nothing',
  'Export or erase anytime',
]

export default function TrustStrip() {
  return (
    <section
      id="privacy"
      className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 whitespace-nowrap border-y border-line bg-base px-8 py-7 font-mono text-[11px] uppercase tracking-[0.1em] text-green"
    >
      {items.map((item, i) => (
        <span key={item} className="contents">
          {i > 0 && (
            <span className="opacity-40" aria-hidden="true">
              ·
            </span>
          )}
          <span>{item}</span>
        </span>
      ))}
    </section>
  )
}
