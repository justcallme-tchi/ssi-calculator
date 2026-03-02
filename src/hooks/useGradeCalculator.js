import { useState, useCallback, useMemo } from 'react'
import { SEMESTERS } from '../data/semesters'

const v = (x) => parseFloat(x) || 0

export function calcFullModule({ cc1, cc2, tp, exam }) {
  const hasAny = [cc1, cc2, tp, exam].some(x => x !== '' && x !== undefined)
  if (!hasAny) return null
  const moyCC   = (v(cc1) + v(cc2)) / 2
  const moyCCTP = (moyCC * 2 + v(tp) * 3) / 5
  return (moyCCTP * 2 + v(exam) * 3) / 5
}

export function calcSimpleModule({ final: f }) {
  if (f === '' || f === undefined) return null
  return v(f)
}

function calcModuleNote(mod, g) {
  return mod.type === 'full' ? calcFullModule(g) : calcSimpleModule(g)
}

function calcUENote(modules, ueGrades) {
  let weighted = 0, credits = 0, hasAny = false
  for (const mod of modules) {
    const note = calcModuleNote(mod, ueGrades[mod.id] || {})
    if (note !== null) {
      weighted += note * mod.credits
      hasAny = true
    }
    credits += mod.credits
  }
  return hasAny ? weighted / credits : 0
}

function buildInitial() {
  const s = {}
  for (const sem of SEMESTERS) {
    s[sem.id] = {}
    for (const ue of sem.ues) {
      s[sem.id][ue.id] = {}
      for (const mod of ue.modules) {
        s[sem.id][ue.id][mod.id] =
          mod.type === 'full'
            ? { cc1: '', cc2: '', tp: '', exam: '' }
            : { final: '' }
      }
    }
  }
  return s
}

export function useGradeCalculator() {
  const [grades, setGrades] = useState(buildInitial)

  const setField = useCallback((semId, ueId, modId, field, val) => {
    setGrades(prev => ({
      ...prev,
      [semId]: {
        ...prev[semId],
        [ueId]: {
          ...prev[semId][ueId],
          [modId]: { ...prev[semId][ueId][modId], [field]: val },
        },
      },
    }))
  }, [])

  const results = useMemo(() => {
    const out = {}
    for (const sem of SEMESTERS) {
      const semGrades = grades[sem.id]
      const moduleNotes = {}
      const ueNotes = {}

      for (const ue of sem.ues) {
        moduleNotes[ue.id] = {}
        for (const mod of ue.modules) {
          moduleNotes[ue.id][mod.id] = calcModuleNote(mod, semGrades[ue.id][mod.id])
        }
        ueNotes[ue.id] = calcUENote(ue.modules, semGrades[ue.id])
      }

      out[sem.id] = {
        moduleNotes,
        ueNotes,
        semAvg: sem.calcSemester(ueNotes),
      }
    }
    return out
  }, [grades])

  return { grades, setField, results }
}
