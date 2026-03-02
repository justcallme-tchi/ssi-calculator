import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ semAvg }) {
  const has = semAvg > 0
  const ok  = semAvg >= 10

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline bg-ink/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-r flex items-center justify-center">
            <span className="text-r font-mono text-xs font-bold">S</span>
          </div>
          <span className="font-mono text-xs tracking-[3px] uppercase text-body">
            SSI<span className="text-muted mx-1.5">/</span>
            <span className="text-sub">Calc</span>
          </span>
        </div>

        {/* Live average pill */}
        <AnimatePresence>
          {has && (
            <motion.div
              key="avg"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className={`flex items-center gap-2.5 px-3 py-1.5 border font-mono text-sm
                ${ok
                  ? 'border-r/40 bg-r/5 text-r'
                  : 'border-outline bg-surface text-sub'
                }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${ok ? 'bg-r animate-pulse2' : 'bg-muted'}`} />
              <span className="text-xs tracking-wider">{semAvg.toFixed(2)}</span>
              <span className={`text-[10px] tracking-widest uppercase ${ok ? 'text-r/70' : 'text-muted'}`}>
                {ok ? 'validé' : 'en cours'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
