import { motion } from 'framer-motion'
import ModuleCard from './ModuleCard'

const UE_COLORS = {
  uef: 'border-r/60',
  uem: 'border-r/30',
  ued: 'border-muted',
  uet: 'border-muted',
}

export default function UESection({ ue, semId, grades, setField, moduleNotes, ueNote, idx }) {
  const ok = ueNote >= 10
  const hasData = Object.values(moduleNotes[ue.id] || {}).some(n => n !== null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="mb-6 section-card"
    >
      {/* UE Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-outline bg-surface/50">
        <div className="flex items-center gap-3">
          <span className={`w-1 self-stretch bg-r/70 rounded-sm`} />
          <div>
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-r/80">
              {ue.label}
            </span>
            <span className="mx-2 text-muted/40 font-mono text-xs">—</span>
            <span className="font-ui text-sm text-sub">
              {ue.fullLabel}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {hasData && (
            <motion.span
              key={ueNote.toFixed(2)}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              className={`font-mono text-sm font-bold ${ok ? 'text-r' : 'text-muted'}`}
              style={ok ? { textShadow: '0 0 12px rgba(255,0,34,0.4)' } : {}}
            >
              {ueNote.toFixed(2)}
            </motion.span>
          )}
          <span className="chip border border-outline text-muted text-[10px]">
            {ue.credits} cr
          </span>
        </div>
      </div>

      {/* Modules grid */}
      <div className="p-4 grid gap-3 md:grid-cols-2">
        {ue.modules.map((mod, i) => (
          <div key={mod.id} className={ue.modules.length === 1 ? 'md:col-span-2' : ''}>
            <ModuleCard
              module={mod}
              index={i}
              grades={grades[ue.id][mod.id]}
              onChange={(field, val) => setField(semId, ue.id, mod.id, field, val)}
              note={moduleNotes[ue.id]?.[mod.id] ?? null}
            />
          </div>
        ))}
      </div>

      {/* UE footer avg */}
      {hasData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mx-4 mb-4 flex items-center justify-between px-4 py-2.5
            border font-mono text-sm
            ${ok
              ? 'border-r/30 bg-r/5 text-r'
              : 'border-outline bg-surface text-sub'
            }`}
        >
          <span className="text-[10px] tracking-[3px] uppercase opacity-60">
            Moyenne {ue.label}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold">{ueNote.toFixed(2)}</span>
            <span className="text-[9px] tracking-widest uppercase opacity-50">/&nbsp;20</span>
            <span className={`text-[9px] tracking-widest uppercase border px-2 py-0.5
              ${ok ? 'border-r/30 text-r/80' : 'border-outline text-muted/60'}`}>
              {ok ? 'Validée' : 'Non validée'}
            </span>
          </div>
        </motion.div>
      )}
    </motion.section>
  )
}
