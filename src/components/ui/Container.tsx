import type { ReactNode } from 'react'

export default function Container({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <div id={id} className={`mx-auto w-full max-w-rail px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}
