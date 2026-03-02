import { motion, AnimatePresence } from 'framer-motion'

export default function SemesterResult({ semId, semAvg }) {
  const ok     = semAvg >= 10
  const semNum = semId === 's1' ? '01' : '02'
  const pct    = Math.min((semAvg / 20) * 100, 100)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${semId}-${ok}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`relative mt-2 mb-8 overflow-hidden border
          ${ok
            ? 'border-r/40 bg-gradient-to-br from-r/5 via-card to-card'
            : 'border-outline bg-card'
          }`}
        style={ok ? { boxShadow: '0 0 60px rgba(255,0,34,0.08), 0 0 120px rgba(255,0,34,0.04)' } : {}}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,0,34,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,34,0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative p-8 md:p-12">
          {/* Status tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className={`w-2 h-2 rounded-full ${ok ? 'bg-r animate-pulse2' : 'bg-muted'}`} />
            <span className="font-mono text-[10px] tracking-[4px] uppercase text-sub">
              Semestre {semNum} — résultat final
            </span>
          </div>

          {/* Big score */}
          <div className="flex items-end gap-6 mb-8">
            <motion.span
              key={semAvg.toFixed(2)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`font-display text-[clamp(4rem,15vw,8rem)] leading-none tracking-widest
                ${ok ? 'text-white' : 'text-muted'}`}
              style={ok ? { textShadow: '0 0 40px rgba(255,0,34,0.3)' } : {}}
            >
              {semAvg.toFixed(2)}
            </motion.span>
            <div className="pb-4">
              <p className="font-mono text-sub text-sm">/ 20</p>
              <p className={`font-mono text-[10px] tracking-[3px] uppercase mt-1
                ${ok ? 'text-r' : 'text-muted'}`}>
                {ok ? '▲ Validé' : '▼ Non validé'}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-px bg-outline">
              <div
                className={`h-full bar-fill ${ok ? 'bg-r' : 'bg-muted/50'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="font-mono text-[9px] text-muted/40">0</span>
              <span className={`font-mono text-[9px] ${ok ? 'text-r/60' : 'text-muted/40'}`}>10 ✓</span>
              <span className="font-mono text-[9px] text-muted/40">20</span>
            </div>
          </div>

          {/* Message */}
          <div className={`border-l-2 pl-4 ${ok ? 'border-r' : 'border-muted/30'}`}>
            {ok ? (
              <p className="font-ui text-white font-medium text-lg leading-relaxed">
                Félicitations 🎉<br />
                <span className="text-sub font-normal text-base">Continue comme ça, tu gères 💀</span>
              </p>
            ) : (
              <p className="font-ui text-sub font-medium text-lg leading-relaxed">
                T'inquiète pas 🤲<br />
                <span className="text-muted font-normal text-base">Incha'Allah tu vas le valider !</span>
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
