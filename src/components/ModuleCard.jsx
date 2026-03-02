import { motion, AnimatePresence } from 'framer-motion'

function GradeBar({ note }) {
  if (note === null) return null
  const pct = Math.min((note / 20) * 100, 100)
  const ok  = note >= 10

  return (
    <div className="mt-3 space-y-1.5">
      {/* Bar */}
      <div className="h-px w-full bg-outline overflow-hidden">
        <div
          className={`h-full bar-fill ${ok ? 'bg-r' : 'bg-muted'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {/* Score */}
      <div className="flex items-center justify-between">
        <span className={`font-mono text-xs tracking-wider ${ok ? 'text-r' : 'text-muted'}`}>
          {note.toFixed(2)} <span className="text-muted/50">/ 20</span>
        </span>
        <span className={`font-mono text-[9px] tracking-[2px] uppercase px-2 py-0.5 border
          ${ok
            ? 'text-r border-r/30 bg-r/5'
            : 'text-muted border-outline bg-surface'
          }`}>
          {ok ? 'OK' : note === 0 ? '—' : 'KO'}
        </span>
      </div>
    </div>
  )
}

const FIELDS = [
  { key: 'cc1',  label: 'CC 1'     },
  { key: 'cc2',  label: 'CC 2'     },
  { key: 'tp',   label: 'TP / Proj' },
  { key: 'exam', label: 'Examen'   },
]

export default function ModuleCard({ module, grades, onChange, note, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group p-4 bg-ink border border-outline hover:border-muted transition-colors duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h4 className="font-ui text-[0.9rem] font-medium text-body leading-snug group-hover:text-white transition-colors">
          {module.name}
        </h4>
        <span className="shrink-0 font-mono text-[9px] tracking-widest text-muted border border-outline px-2 py-0.5 mt-0.5">
          {module.credits} cr
        </span>
      </div>

      {/* Inputs */}
      {module.type === 'full' ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {FIELDS.map(({ key, label }) => (
            <div key={key}>
              <label className="block font-mono text-[9px] tracking-[2px] uppercase text-muted mb-1.5">
                {label}
              </label>
              <input
                type="number" step="0.01" min="0" max="20"
                placeholder="—"
                value={grades[key] ?? ''}
                onChange={e => {
                  const val = e.target.value
                  if (val !== '' && (parseFloat(val) < 0 || parseFloat(val) > 20)) return
                  onChange(key, val)
                }}
                className="grade-input text-center"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-[140px]">
          <label className="block font-mono text-[9px] tracking-[2px] uppercase text-muted mb-1.5">
            Note finale
          </label>
          <input
            type="number" step="0.01" min="0" max="20"
            placeholder="—"
            value={grades.final ?? ''}
            onChange={e => {
              const val = e.target.value
              if (val !== '' && (parseFloat(val) < 0 || parseFloat(val) > 20)) return
              onChange('final', val)
            }}
            className="grade-input text-center"
          />
        </div>
      )}

      <AnimatePresence>
        {note !== null && (
          <motion.div
            key={note}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GradeBar note={note} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
