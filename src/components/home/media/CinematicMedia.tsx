import { useEffect, useRef, useState } from 'react'

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean }
}

type CinematicMediaProps = {
  className?: string
  controls?: boolean
  loop?: boolean
  label: string
  priority?: boolean
  sources: CinematicMediaSources
}

export type CinematicMediaSources = {
  desktop: {
    poster: string
    webm: string
    mp4: string
  }
  mobile: {
    poster: string
    webm: string
    mp4: string
  }
}

const compactMediaQuery = '(max-width: 1023px)'

export default function CinematicMedia({
  className = '',
  controls = false,
  loop = false,
  label,
  priority = false,
  sources,
}: CinematicMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isIntersectingRef = useRef(false)
  const userPausedRef = useRef(false)
  const [motionAllowed, setMotionAllowed] = useState(false)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true
    const updateMotionPreference = () => setMotionAllowed(!reducedMotionQuery.matches && !saveData)

    updateMotionPreference()
    reducedMotionQuery.addEventListener('change', updateMotionPreference)

    return () => reducedMotionQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !motionAllowed) return

    const syncPlayback = () => {
      if (document.hidden || !isIntersectingRef.current || userPausedRef.current) {
        video.pause()
        return
      }

      void video.play().catch(() => setPlaying(false))
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting
        syncPlayback()
      },
      { threshold: 0.2 },
    )

    observer.observe(video)
    document.addEventListener('visibilitychange', syncPlayback)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', syncPlayback)
      video.pause()
    }
  }, [motionAllowed])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      userPausedRef.current = false
      void video.play().catch(() => setPlaying(false))
      return
    }

    userPausedRef.current = true
    video.pause()
  }

  return (
    <div className={`overflow-hidden bg-[#0d1511] ${className}`} data-cinematic-media>
      <picture aria-hidden="true" className="absolute inset-0 block h-full w-full">
        <source media={compactMediaQuery} srcSet={sources.mobile.poster} />
        <img
          src={sources.desktop.poster}
          alt=""
          className="h-full w-full object-cover"
          width={1440}
          height={900}
          decoding="async"
          loading={priority ? 'eager' : 'lazy'}
        />
      </picture>

      {motionAllowed ? (
        <video
          ref={videoRef}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          playsInline
          loop={loop}
          preload={priority ? 'metadata' : 'none'}
          onCanPlay={() => setReady(true)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <source media={compactMediaQuery} src={sources.mobile.webm} type="video/webm" />
          <source media={compactMediaQuery} src={sources.mobile.mp4} type="video/mp4" />
          <source src={sources.desktop.webm} type="video/webm" />
          <source src={sources.desktop.mp4} type="video/mp4" />
        </video>
      ) : null}

      {controls && motionAllowed ? (
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute right-6 top-[80px] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[#0c1510]/55 backdrop-blur-sm transition-colors duration-160 hover:bg-[#0c1510]/75 lg:right-20"
          aria-label={`${playing ? 'Pause' : 'Play'} ${label}`}
        >
          <img
            src={playing ? '/zora-media-pause.svg' : '/zora-media-play.svg'}
            alt=""
            className="h-5 w-5"
          />
        </button>
      ) : null}
    </div>
  )
}
