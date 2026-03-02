import { motion } from 'framer-motion'
import { SEMESTERS } from '../data/semesters'

export default function SemesterTabs({ active, onChange, results }) {
  return (
    <div className="max-w-5xl mx-auto px-4 mb-8">
      <div className="flex gap-0 border border-outline overflow-hidden">
        {SEMESTERS.map((sem, i) => {
          const avg = results[sem.id]?.semAvg ?? 0
          const isActive = active === i
          const hasData  = avg > 0
          const ok       = avg >= 10

          return (
            <button
              key={sem.id}
              onClick={() => onChange(i)}
              className={`relative flex-1 flex items-center justify-between gap-4
                px-5 py-4 text-left transition-all duration-300 group
                ${isActive ? 'bg-card' : 'bg-surface hover:bg-card/60'}
              `}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="tabLine"
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-r"
                  style={{ boxShadow: '0 0 12px rgba(255,0,34,0.5)' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}

              <div className="pl-1">
                <p className={`font-mono text-[10px] tracking-[3px] uppercase mb-1 transition-colors
                  ${isActive ? 'text-r' : 'text-muted group-hover:text-sub'}`}>
                  {i === 0 ? '01' : '02'}
                </p>
                <p className={`font-ui font-semibold text-base transition-colors
                  ${isActive ? 'text-white' : 'text-sub group-hover:text-body'}`}>
                  {sem.label}
                </p>
              </div>

              {/* Live avg badge */}
              {hasData ? (
                <motion.div
                  key={avg.toFixed(2)}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`shrink-0 text-right`}
                >
                  <p className={`font-mono text-xl font-bold leading-none
                    ${ok ? 'text-r' : 'text-muted'}`}
                    style={ok ? { textShadow: '0 0 20px rgba(255,0,34,0.4)' } : {}}>
                    {avg.toFixed(2)}
                  </p>
                  <p className={`font-mono text-[9px] tracking-widest mt-1 uppercase
                    ${ok ? 'text-r/60' : 'text-muted/60'}`}>
                    / 20
                  </p>
                </motion.div>
              ) : (
                <span className="font-mono text-[10px] text-muted/40 tracking-widest">—</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
