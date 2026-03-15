import { motion } from 'framer-motion'

export default function SectionWrapper({ children, className = '', surface = 'default' }) {
  const bg = surface === 'white' ? 'bg-white' : 'bg-[#FAFAFA]'

  return (
    <div className={`${bg} border-t border-black/[0.06] ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-6 py-24 md:py-32"
      >
        {children}
      </motion.div>
    </div>
  )
}
