'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { WaveDivider } from './wave-divider'
import { Blob } from './blob'
import { Logo } from './logo'

export function Hero() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 25
      const y = (e.clientY - window.innerHeight / 2) / 25
      setMouseCoords({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-28 pb-32 text-cream sm:pb-40"
    >
      {/* faint floating blobs in the background with cursor parallax */}
      <div
        style={{ transform: `translate(${mouseCoords.x * -0.6}px, ${mouseCoords.y * -0.6}px)` }}
        className="absolute -left-16 top-32 size-64 pointer-events-none transition-transform duration-700 ease-out"
      >
        <Blob
          variant={1}
          float
          className="size-full bg-cream/5"
        />
      </div>
      
      <div
        style={{ transform: `translate(${mouseCoords.x * 0.8}px, ${mouseCoords.y * 0.8}px)` }}
        className="absolute -right-10 bottom-40 size-72 pointer-events-none transition-transform duration-700 ease-out"
      >
        <Blob
          variant={3}
          float
          className="size-full bg-blob/10"
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <span className="mb-8 rounded-full border border-cream/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cream/70 animate-in fade-in slide-in-from-top-6 duration-1000 ease-out">
          creative agency · est. 2026
        </span>

        <h1 className="leading-[0.82] tracking-tighter animate-in fade-in zoom-in-95 duration-1000 delay-200 fill-mode-both ease-out">
          <Logo className="text-[26vw] sm:text-[20vw] lg:text-[16rem]" />
        </h1>

        <p className="mt-8 text-balance font-display text-xl font-medium lowercase text-cream/80 sm:text-2xl md:text-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 fill-mode-both ease-out">
          where ideas take shapes
        </p>

        {/* central raw textured dough image with cursor parallax */}
        <div 
          style={{ transform: `translate(${mouseCoords.x * 0.3}px, ${mouseCoords.y * 0.3}px)` }}
          className="relative mt-12 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both ease-out transition-transform duration-700 ease-out"
        >
          <Blob variant={2} className="overflow-hidden bg-cream/5 shadow-2xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/dough-hero.png"
                alt="Hands kneading raw dough on a floured surface"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          </Blob>
        </div>
      </div>

      {/* wave transition into the cream "who we are" section */}
      <WaveDivider
        fill="var(--cream)"
        className="absolute inset-x-0 bottom-0"
      />
    </section>
  )
}
