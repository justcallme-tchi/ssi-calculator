import { motion } from 'framer-motion'

const LINKS = [
  { key: 'linkedin',  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/justcallme-tchi/', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { key: 'github',    label: 'GitHub',    href: 'https://github.com/justcallme-tchi',           icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/justcallme.tchi/',  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-outline mt-4">
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Portfolio CTA — the main highlight */}
        <motion.a
          href="https://chaima-dev.vercel.app/"
          target="_blank"
          rel="noreferrer"
          whileHover="hover"
          initial="rest"
          className="group block mb-10"
        >
          <div className="relative overflow-hidden border border-outline bg-card hover:border-r/40 transition-all duration-500 p-6 md:p-8"
            style={{ transition: 'box-shadow 0.4s ease, border-color 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 60px rgba(255,0,34,0.06)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            {/* Background sweep on hover */}
            <motion.div
              variants={{
                rest:  { x: '-100%', opacity: 0 },
                hover: { x: '100%',  opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-r/5 to-transparent pointer-events-none"
            />

            <div className="relative flex items-center justify-between gap-6">
              <div>
                <p className="font-mono text-[9px] tracking-[4px] uppercase text-r/70 mb-2">
                  // Développé par
                </p>
                <p className="font-display text-3xl md:text-4xl text-white tracking-widest group-hover:text-r transition-colors duration-300">
                  TCHI
                </p>
                <p className="font-ui text-sub text-sm mt-1 group-hover:text-body transition-colors duration-300">
                  chaima-dev.vercel.app
                </p>
              </div>

              {/* Arrow */}
              <motion.div
                variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="shrink-0 w-10 h-10 border border-outline group-hover:border-r/50 flex items-center justify-center transition-colors duration-300"
              >
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="text-muted group-hover:text-r transition-colors duration-300"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>

            {/* Bottom tag */}
            <div className="relative mt-5 pt-4 border-t border-outline flex flex-wrap gap-2">
              {['Portfolio', 'Projets', 'Contact'].map(tag => (
                <span key={tag} className="font-mono text-[9px] tracking-widest uppercase text-muted/50 border border-outline px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.a>

        {/* Social links */}
        <div className="flex flex-wrap gap-2 mb-8">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -2 }}
              className="btn-ghost"
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-outline">
          <p className="font-mono text-[10px] tracking-[3px] text-muted/50 uppercase">
            Master SSI · ESST · {new Date().getFullYear()}
          </p>
          <p className="font-mono text-[10px] text-muted/30 tracking-widest select-none">
            01001101 01010011 01010011 01001001
          </p>
        </div>
      </div>
    </footer>
  )
}
