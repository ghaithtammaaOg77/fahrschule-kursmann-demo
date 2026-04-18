'use client'

import { useEffect } from 'react'

export default function ScrollRevealInit() {
  useEffect(() => {
    const revealClasses = ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Once revealed, stop observing
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const observe = () => {
      revealClasses.forEach((cls) => {
        document.querySelectorAll(`.${cls}`).forEach((el) => {
          observer.observe(el)
        })
      })
    }

    observe()

    // Re-observe on DOM changes (for dynamically loaded content)
    const mutationObserver = new MutationObserver(observe)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
