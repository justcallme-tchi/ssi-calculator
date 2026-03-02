import { motion } from 'framer-motion'

export default function Remarques() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mx-6 mt-6 border-l-[3px] border-cyber-red bg-[#080000] border border-cyber-border px-5 py-4"
    >
      <p className="font-mono text-[0.75rem] tracking-[3px] uppercase text-cyber-red mb-3">
        // REMARQUES IMPORTANTES
      </p>
      <ul className="space-y-2 list-disc pl-4">
        <li className="font-mono text-[0.8rem] text-cyber-gray leading-relaxed">
          <span className="text-cyber-red font-bold">Un seul CC passé ?</span>
          &nbsp;(fréquent en 1ère année Master) — Entrez votre note CC dans&nbsp;
          <span className="text-cyber-red">CC1 et CC2</span> à la fois.
        </li>
        <li className="font-mono text-[0.8rem] text-cyber-gray leading-relaxed">
          <span className="text-cyber-red font-bold">Un seul CC et pas de TP/Projet ?</span>
          &nbsp;— Entrez votre note CC dans&nbsp;
          <span className="text-cyber-red">CC1, CC2 et TP</span> à la fois.
        </li>
      </ul>
    </motion.div>
  )
}
