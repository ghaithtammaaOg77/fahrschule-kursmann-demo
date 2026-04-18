'use client'

import { useEffect, useRef, useState } from 'react'

interface StatItem {
  value: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Schüler erfolgreich' },
  { value: 15, suffix: '', label: 'Jahre Erfahrung' },
  { value: 98, suffix: '%', label: 'Erfolgsquote' },
  { value: 7, suffix: '', label: 'Führerscheinklassen' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} aria-label={`${target}${suffix}`}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-bg/80 backdrop-blur-sm px-6 py-5 text-center"
        >
          <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-1 tabular-nums">
            <Counter target={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-muted text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
