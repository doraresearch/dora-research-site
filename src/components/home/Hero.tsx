import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import CinematicMedia, { type CinematicMediaSources } from './media/CinematicMedia'

const heroMedia: CinematicMediaSources = {
  desktop: {
    poster: '/media/zora-hero-loop-desktop.jpg',
    webm: '/media/zora-hero-loop-desktop.webm',
    mp4: '/media/zora-hero-loop-desktop.mp4',
  },
  mobile: {
    poster: '/media/zora-hero-loop-mobile.jpg',
    webm: '/media/zora-hero-loop-mobile.webm',
    mp4: '/media/zora-hero-loop-mobile.mp4',
  },
}

export default function Hero() {
  return (
    <section id="zora" className="relative h-[760px] overflow-hidden bg-[#0d1511] lg:h-[clamp(760px,100svh,900px)] xl:h-[900px]">
      <CinematicMedia
        className="absolute inset-0 h-full w-full"
        controls
        loop
        label="Zora workday film"
        priority
        sources={heroMedia}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,21,16,0.08)_0%,rgba(12,21,16,0.12)_38%,rgba(12,21,16,0.88)_100%)] lg:bg-[linear-gradient(90deg,rgba(12,21,16,0.74)_0%,rgba(12,21,16,0.46)_44%,rgba(12,21,16,0.1)_72%),linear-gradient(180deg,rgba(12,21,16,0.04)_0%,rgba(12,21,16,0.08)_52%,rgba(12,21,16,0.76)_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex h-full items-end pb-9">
        <div className="w-full text-inverse">
          <p className="font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em]">
            Zora by DORA Research
          </p>
          <h1 className="mt-5 max-w-[720px] text-[44px] font-semibold leading-[46px] tracking-[-0.035em] lg:text-[60px] lg:leading-[62px] lg:tracking-[-0.04em] xl:text-[72px] xl:leading-[72px] xl:tracking-[-0.045em]">
            <span className="block">Work moves.</span>
            <span className="block">Zora remembers.</span>
          </h1>
          <p className="mt-[18px] max-w-[680px] text-[16px] leading-[26px] lg:mt-5 lg:text-[18px] lg:leading-7 lg:tracking-[-0.005em] xl:text-[20px] xl:leading-[30px] xl:tracking-[-0.01em]">
            A second brain for work that connects meetings, decisions, tickets, documents, code, and
            system signals—then brings forward what needs attention.
          </p>
          <p className="mt-5 font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em]">
            Starting with product + technology
          </p>
          <div className="mt-[26px] flex items-center gap-4 lg:mt-5">
            <Button href="#waitlist">
              <span>Request private beta</span>
              <img src="/zora-arrow-right.svg" alt="" className="h-[8.5px] w-[10.5px]" />
            </Button>
            <Button href="#workday" variant="media" className="hidden lg:inline-flex">
              <span>Watch one workday</span>
              <img src="/zora-arrow-right.svg" alt="" className="h-[8.5px] w-[10.5px]" />
            </Button>
          </div>
        </div>

        <p className="absolute bottom-[52px] right-8 hidden font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-inverse xl:block">
          Scroll to follow one Atlas release
        </p>
      </Container>
    </section>
  )
}
