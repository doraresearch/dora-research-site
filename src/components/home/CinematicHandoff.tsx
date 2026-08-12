import Container from '@/components/ui/Container'
import CinematicMedia, { type CinematicMediaSources } from './media/CinematicMedia'

const handoffMedia: CinematicMediaSources = {
  desktop: {
    poster: '/media/zora-handoff-loop-desktop.jpg',
    webm: '/media/zora-handoff-loop-desktop.webm',
    mp4: '/media/zora-handoff-loop-desktop.mp4',
  },
  mobile: {
    poster: '/media/zora-handoff-loop-mobile.jpg',
    webm: '/media/zora-handoff-loop-mobile.webm',
    mp4: '/media/zora-handoff-loop-mobile.mp4',
  },
}

export default function CinematicHandoff() {
  return (
    <section className="relative h-[520px] overflow-hidden bg-[#0d1511] lg:h-[640px] xl:h-[720px]">
      <CinematicMedia
        className="absolute inset-0 h-full w-full"
        controls
        loop
        label="afternoon go or no-go film"
        sources={handoffMedia}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,21,16,0.24)_0%,rgba(12,21,16,0.34)_44%,rgba(12,21,16,0.9)_100%)]"
        aria-hidden="true"
      />
      <Container className="relative z-10 flex h-full items-end pb-12 lg:pb-16 xl:pb-[74px]">
        <div className="text-inverse">
          <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em]">
            Afternoon go / no-go
          </p>
          <h2 className="mt-5 max-w-[820px] text-[40px] font-normal leading-[44px] tracking-[-0.025em] lg:text-[54px] lg:leading-[58px] lg:tracking-[-0.03em] xl:text-[64px] xl:leading-[68px] xl:tracking-[-0.035em]">
            <span className="lg:hidden">
              By the time
              <br />
              you ask, Zora
              <br />
              already knows.
            </span>
            <span className="hidden lg:inline">
              By the time you ask,
              <br />
              Zora already knows.
            </span>
          </h2>
        </div>
      </Container>
    </section>
  )
}
