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
      className="border-y border-line bg-base"
    >
      <div className="mx-auto flex min-h-[86px] max-w-[1080px] flex-wrap items-center justify-center gap-x-5 gap-y-2.5 px-6 py-5 font-mono text-[10px] uppercase tracking-[0.04em] text-green sm:px-8 lg:px-0 lg:text-[11px]">
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
      </div>
    </section>
  )
}
