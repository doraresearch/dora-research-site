import Hero from '@/components/home/Hero'
import Problem from '@/components/home/Problem'
import Platform from '@/components/home/Platform'
import Trust from '@/components/home/Trust'
import Capabilities from '@/components/home/Capabilities'
import ClosingCTA from '@/components/home/ClosingCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-24 bg-gradient-to-b from-dark to-white" />
      <Problem />
      <Platform />
      <Trust />
      <Capabilities />
      <ClosingCTA />
    </>
  )
}
