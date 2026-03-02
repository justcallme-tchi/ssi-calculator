import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="relative max-w-5xl mx-auto px-4 pt-16 pb-12"
    >
      {/* Eyebrow */}
      <motion.div variants={item} className="flex items-center gap-3 mb-6">
        <span className="font-mono text-[10px] tracking-[4px] uppercase text-r/80">
          Master SSI — ESST
        </span>
        <span className="h-px flex-1 max-w-[60px] bg-r/30" />
        <span className="font-mono text-[10px] text-muted tracking-wider">
          セキュリティ
        </span>
      </motion.div>

      {/* Main title */}
      <motion.h1
        variants={item}
        data-text="GRADE CALCULATOR"
        className="glitch font-display text-[clamp(3rem,10vw,6rem)] leading-none tracking-wider text-white mb-5"
      >
        GRADE CALCULATOR
      </motion.h1>

      {/* Description */}
      <motion.p variants={item} className="font-ui text-sub text-base max-w-md leading-relaxed mb-8">
        Calcule ta moyenne semestrielle en temps réel selon les règles officielles du Master SSI.
        <span className="text-body/60"> Formule CC × TP × Examen incluse.</span>
      </motion.p>

      {/* Info chips */}
      <motion.div variants={item} className="flex flex-wrap gap-2">
        {[
          { label: '2 semestres', icon: '◈' },
          { label: '9 modules / sem.', icon: '◈' },
          { label: 'Calcul automatique', icon: '◈' },
          { label: '30 crédits ECTS', icon: '◈' },
        ].map(({ label, icon }) => (
          <span
            key={label}
            className="chip border border-outline text-sub hover:border-muted hover:text-body transition-colors duration-200"
          >
            <span className="text-r text-[8px]">{icon}</span>
            {label}
          </span>
        ))}
      </motion.div>

      {/* Tip box */}
      <motion.div
        variants={item}
        className="mt-8 flex gap-4 p-4 border border-outline bg-surface/60 rounded-none"
      >
        <div className="shrink-0 w-px bg-r self-stretch" />
        <div>
          <p className="font-mono text-[10px] tracking-[3px] uppercase text-r mb-2">// Remarques</p>
          <ul className="space-y-1.5">
            <li className="text-sm text-sub leading-snug">
              <span className="text-body">1 seul CC ?</span> — Entrez la même note dans <span className="text-body font-medium">CC1 et CC2</span>.
            </li>
            <li className="text-sm text-sub leading-snug">
              <span className="text-body">Pas de TP/Projet ?</span> — Entrez la note dans <span className="text-body font-medium">CC1, CC2 et TP</span>.
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  )
}
