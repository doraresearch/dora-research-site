import type { ReactNode } from 'react'
import useReveal from '@/hooks/useReveal'

// Progressive-enhancement fade-up. Base hidden state is CSS scoped to
// `.js [data-reveal]`, so without JS the content is simply visible.
export default function Reveal({ className = '', children }: { className?: string; children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  )
}
