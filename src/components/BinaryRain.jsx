import { useEffect, useRef } from 'react'

const CHARS = '01アイウエオカキクケコサシスセソ01010110100011'

export default function BinaryRain() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let drops = [], raf

    const init = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.floor(canvas.width / 18)
      drops = Array.from({ length: cols }, () => Math.random() * -80)
    }

    const tick = () => {
      ctx.fillStyle = 'rgba(5,5,5,0.055)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      drops.forEach((y, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)]
        const bright = Math.random() > 0.96
        ctx.globalAlpha  = bright ? 0.9 : Math.random() * 0.3 + 0.05
        ctx.fillStyle    = bright ? '#fff' : '#ff0022'
        ctx.font         = `${bright ? 'bold ' : ''}12px "Share Tech Mono", monospace`
        ctx.fillText(ch, i * 18, y * 16)
        if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i] += 0.4
      })
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }

    init()
    tick()
    const onResize = () => init()
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={ref} className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.06 }} />
}
