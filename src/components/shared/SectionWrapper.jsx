export default function SectionWrapper({ children, className = '', surface = 'default' }) {
  const bg = surface === 'card' ? 'bg-card' : 'bg-paper'

  return (
    <div className={`${bg} border-t border-border ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        {children}
      </div>
    </div>
  )
}
