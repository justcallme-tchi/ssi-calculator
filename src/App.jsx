import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import BinaryRain       from './components/BinaryRain'
import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import SemesterTabs     from './components/SemesterTabs'
import UESection        from './components/UESection'
import SemesterResult   from './components/SemesterResult'
import Footer           from './components/Footer'

import { SEMESTERS }            from './data/semesters'
import { useGradeCalculator }   from './hooks/useGradeCalculator'

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  const { grades, setField, results } = useGradeCalculator()

  const sem     = SEMESTERS[activeTab]
  const semRes  = results[sem.id]
  const semAvg  = semRes?.semAvg ?? 0

  return (
    <div className="relative min-h-screen bg-ink">
      <BinaryRain />

      <div className="relative z-10">
        <Navbar semAvg={semAvg} />

        <main>
          <Hero />

          <div className="max-w-5xl mx-auto">
            <SemesterTabs
              active={activeTab}
              onChange={setActiveTab}
              results={results}
            />

            <div className="px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sem.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  {sem.ues.map((ue, i) => (
                    <UESection
                      key={ue.id}
                      ue={ue}
                      idx={i}
                      semId={sem.id}
                      grades={grades[sem.id]}
                      setField={setField}
                      moduleNotes={semRes.moduleNotes}
                      ueNote={semRes.ueNotes[ue.id]}
                    />
                  ))}

                  <SemesterResult semId={sem.id} semAvg={semAvg} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
