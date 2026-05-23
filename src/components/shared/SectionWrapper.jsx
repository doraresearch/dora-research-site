export default function SectionWrapper({ children, className = '', surface = 'default' }) {
  const bg = surface === 'card' ? 'bg-surface' : 'bg-transparent'

  return (
    <div className={`${bg} border-t border-line ${className}`}>
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        {children}
      </div>
    </div>
  )
}
