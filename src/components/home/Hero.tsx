import Container from '@/components/ui/Container'
import WaitlistForm from '@/components/ui/WaitlistForm'

function AppWindow() {
  return (
    <div className="overflow-hidden rounded-window border border-line bg-sage shadow-[0_24px_60px_rgba(23,37,31,.12)]">
      <img
        src="/images/zora-memory-workspace.png"
        alt="Zora memory workspace linking a voice memo, lease agreement, building notice, and landlord email to source-backed evidence."
        className="block h-auto w-full"
        decoding="async"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="zora" className="relative overflow-hidden bg-base">
      <Container className="grid items-center gap-12 py-24 lg:grid-cols-[1fr_1.05fr] lg:pb-28">
        <div className="animate-fade-up">
          <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-green">
            Zora · by DORA Research
          </p>
          <h1 className="mt-6 text-balance font-display text-[44px] font-bold leading-[1.02] tracking-[-0.03em] text-ink lg:text-[64px]">
            Ask your memory anything.
          </h1>
          <p className="mt-6 max-w-[44ch] text-[18px] leading-[1.6] text-muted">
            Zora remembers everything you capture and understands how it fits together. One question
            retrieves the note, the source, and the context — even from years ago.
          </p>
          <div className="mt-9">
            <WaitlistForm />
          </div>
          <p className="mt-3.5 font-mono text-[11px] tracking-[0.08em] text-muted">
            Private beta · Fall 2026 · macOS + iOS first
          </p>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '160ms' }}>
          <AppWindow />
        </div>
      </Container>
    </section>
  )
}
