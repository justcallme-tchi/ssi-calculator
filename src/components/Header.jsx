import { motion } from 'framer-motion'

const cornerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 0.5, transition: { delay: 0.8, duration: 0.6 } },
}

const titleVariants = {
  hidden:  { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const subVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.4, duration: 0.6 } },
}

export default function Header() {
  return (
    <header className="relative bg-cyber-bg border-b-2 border-cyber-red px-8 py-10 text-center overflow-hidden">
      {/* Japanese strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-xs text-cyber-red-dim tracking-[6px] whitespace-nowrap opacity-50 select-none"
      >
        セキュリティ　システム　情報　マスター
      </motion.div>

      {/* Corner labels */}
      {[
        { pos: 'top-2 left-3',  label: 'SYS::INIT'        },
        { pos: 'top-2 right-3', label: 'v2.0.25'           },
        { pos: 'bottom-2 left-3',  label: '01001101 01010011 01010011' },
        { pos: 'bottom-2 right-3', label: 'SECURE_MODE::ON' },
      ].map(({ pos, label }) => (
        <motion.span
          key={label}
          variants={cornerVariants}
          initial="hidden"
          animate="visible"
          className={`absolute ${pos} font-mono text-[0.6rem] text-cyber-red-dim select-none`}
        >
          {label}
        </motion.span>
      ))}

      {/* Main title */}
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="glitch-text font-display text-5xl md:text-6xl tracking-widest text-white mt-4 select-none"
      >
        CALCULATEUR SSI
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={subVariants}
        initial="hidden"
        animate="visible"
        className="font-mono text-cyber-red text-xs tracking-[4px] uppercase mt-3"
      >
        Sécurité des Systèmes Informatiques — ESST
      </motion.p>

      {/* Decorative bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyber-red origin-left shadow-red-glow"
      />
    </header>
  )
}
