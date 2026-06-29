'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 800,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-10'
      case 'down':
        return '-translate-y-10'
      case 'left':
        return 'translate-x-10'
      case 'right':
        return '-translate-x-10'
      default:
        return 'scale-95'
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.215,0.61,0.355,1)] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getDirectionClass(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
