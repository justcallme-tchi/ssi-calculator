# SSI · Grade Calculator

Calculateur de notes — **Master SSI**, Sécurité des Systèmes Informatiques — ESST  
Built with **React 18 + Vite + Tailwind CSS + Framer Motion**

---

## Getting Started

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build in /dist
```

---

## Deploy to Vercel

**Option A — Drag & drop**  
Run `npm run build`, then drag the `/dist` folder to [vercel.com/new](https://vercel.com/new)

**Option B — GitHub (recommended)**
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import repo
3. Framework auto-detected as **Vite** → click **Deploy** 🚀

No extra config needed.

---

## Grade Formula

**Full module** (CC1, CC2, TP, Examen):
```
moyCC   = (CC1 + CC2) / 2
moyCCTP = (moyCC × 2 + TP × 3) / 5
note    = (moyCCTP × 2 + Exam × 3) / 5
```

**Semester average:**  
S1: `(UEF×18 + UEM×9 + UED×1 + UET×2) / 30`  
S2: `(UEF×18 + UEM×9 + UED×2 + UET×1) / 30`

---

Made with ♥ by [Tchi](https://chaima-dev.vercel.app/)
