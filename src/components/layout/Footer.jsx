export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="font-mono text-[12px] tracking-[0.12em] uppercase text-ink font-medium">
              <span className="text-ochre">§</span>&nbsp;&nbsp;DORA Research
            </p>
            <p className="text-body text-sm mt-4 max-w-xs leading-relaxed">
              An AI research lab focused on systems that operate inside real environments.
            </p>
          </div>
          <div className="max-w-xs text-sm text-body leading-relaxed">
            <p className="text-ink font-medium mb-2">Positioning statement</p>
            <p>This site outlines what we believe, how we think AI systems should be built, and why this direction matters now.</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex items-baseline justify-between">
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-muted">© 2026 DORA Research, Inc.</p>
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-muted">Working paper · 2026.04</p>
        </div>
      </div>
    </footer>
  )
}
