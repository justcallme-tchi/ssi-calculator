export const SEMESTERS = [
  {
    id: 's1',
    label: 'Semestre 1',
    shortLabel: 'S1',
    ues: [
      {
        id: 'uef', label: 'UEF', fullLabel: 'Unité Fondamentale', credits: 18,
        modules: [
          { id: 'm1', name: 'Architectures des réseaux',          credits: 4, type: 'full'   },
          { id: 'm2', name: 'Veille tech. & BD avancées',          credits: 4, type: 'full'   },
          { id: 'm3', name: 'Complexité algorithmique',            credits: 4, type: 'full'   },
          { id: 'm4', name: "Systèmes d'exploitation",             credits: 6, type: 'full'   },
        ],
      },
      {
        id: 'uem', label: 'UEM', fullLabel: 'Unité Méthodologie', credits: 9,
        modules: [
          { id: 'm5', name: 'Arithmétique modulaire',              credits: 4, type: 'full'   },
          { id: 'm6', name: 'Intro à la sécurité informatique',    credits: 5, type: 'full'   },
        ],
      },
      {
        id: 'ued', label: 'UED', fullLabel: 'Unité Découverte', credits: 1,
        modules: [
          { id: 'm7', name: 'Aspects juridiques — sécu. info.',    credits: 1, type: 'simple' },
        ],
      },
      {
        id: 'uet', label: 'UET', fullLabel: 'Unité Transversale', credits: 2,
        modules: [
          { id: 'm8', name: 'Anglais 1',                           credits: 1, type: 'simple' },
          { id: 'm9', name: 'Projet transverse',                   credits: 1, type: 'simple' },
        ],
      },
    ],
    calcSemester: ({ uef, uem, ued, uet }) => (uef * 18 + uem * 9 + ued * 1 + uet * 2) / 30,
  },
  {
    id: 's2',
    label: 'Semestre 2',
    shortLabel: 'S2',
    ues: [
      {
        id: 'uef', label: 'UEF', fullLabel: 'Unité Fondamentale', credits: 18,
        modules: [
          { id: 'm1', name: 'Cryptographie et sécurité',           credits: 4, type: 'full'   },
          { id: 'm2', name: 'Admin. & tuning bases de données',     credits: 6, type: 'full'   },
          { id: 'm3', name: 'Sécurité réseaux',                    credits: 4, type: 'full'   },
          { id: 'm4', name: 'Sécurité système',                    credits: 4, type: 'full'   },
        ],
      },
      {
        id: 'uem', label: 'UEM', fullLabel: 'Unité Méthodologie', credits: 9,
        modules: [
          { id: 'm5', name: 'Sécurité réseaux sans fil',           credits: 4, type: 'full'   },
          { id: 'm6', name: 'Algorithmique réparti',               credits: 4, type: 'full'   },
          { id: 'm7', name: "Politiques de contrôle d'accès",      credits: 1, type: 'simple' },
        ],
      },
      {
        id: 'ued', label: 'UED', fullLabel: 'Unité Découverte', credits: 2,
        modules: [
          { id: 'm8', name: 'Sûreté & fiabilité du logiciel',      credits: 2, type: 'full'   },
        ],
      },
      {
        id: 'uet', label: 'UET', fullLabel: 'Unité Transversale', credits: 1,
        modules: [
          { id: 'm9', name: 'Anglais 2',                           credits: 1, type: 'simple' },
        ],
      },
    ],
    calcSemester: ({ uef, uem, ued, uet }) => (uef * 18 + uem * 9 + ued * 2 + uet * 1) / 30,
  },
]
