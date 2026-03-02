import { motion } from 'framer-motion'
import { SEMESTERS } from '../data/semesters'

export default function Tabs({ active, onChange }) {
  return (
    <nav className="flex bg-cyber-bg border-b border-cyber-border">
      {SEMESTERS.map((sem, i) => {
        const isActive = active === i
        return (
          <button
            key={sem.id}
            onClick={() => onChange(i)}
            className={`
              relative flex-1 py-5 font-mono text-sm tracking-[3px] uppercase
              transition-all duration-300 border-none outline-none
              ${isActive
                ? 'text-cyber-red bg-cyber-bg2'
                : 'text-cyber-gray hover:text-white hover:bg-cyber-red/5'}
            `}
          >
            {/* Active indicator line */}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyber-red shadow-red-glow"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}

            <span className="flex items-center justify-center gap-2">
              <span className={`transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                &gt;&nbsp;
              </span>
              {sem.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
