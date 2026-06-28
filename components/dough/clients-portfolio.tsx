'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const CLIENTS = [
  { en: "Barn's", ar: "بارنز" },
  { en: "Kufta", ar: "كوفتا" },
  { en: "El Dahan", ar: "الدهان" },
  { en: "Town Team", ar: "تاون تيم" },
  { en: "Madghout Dajaj", ar: "مضغوط دجاج" },
  { en: "Tant", ar: "طنط" },
  { en: "Qasr El Kababgi", ar: "قصر الكبابجي" },
  { en: "Tito's", ar: "تيتوز" },
  { en: "Takhmeesa", ar: "تخميسة" },
  { en: "Shrimp", ar: "شريمب" },
  { en: "El Anfoshy", ar: "الأنفوشي" },
  { en: "Akleh", ar: "أكلة" },
  { en: "Bebek", ar: "بيبيك" },
  { en: "El Rahawy", ar: "الرهاوي" },
  { en: "Shawerma El Reem", ar: "شاورما الريم" },
]

interface GridItem {
  index: string
  title: string
  src: string
  slides: string[]
  spanClass: string
  heightClass: string
}

const GRID_ITEMS: GridItem[] = [
  {
    index: "01",
    title: "Photography",
    src: "/photography image.png",
    slides: [
      "/photography1.png",
      "/photography2.png",
      "/photography3.png",
      "/photography4.png"
    ],
    spanClass: "col-span-1",
    heightClass: "h-[380px]"
  },
  {
    index: "02",
    title: "Grids",
    src: "/grids image (2).png",
    slides: ["/grids image (2).png"],
    spanClass: "col-span-1",
    heightClass: "h-[380px]"
  },
  {
    index: "03",
    title: "CGI",
    src: "/CGI.png",
    slides: ["/CGI.png"],
    spanClass: "col-span-1 md:col-span-2",
    heightClass: "min-h-[450px] h-[480px] md:h-[600px]"
  },
  {
    index: "04",
    title: "Packaging Design",
    src: "/Packaging-design.png",
    slides: ["/Packaging-design.png"],
    spanClass: "col-span-1",
    heightClass: "h-[380px]"
  },
  {
    index: "05",
    title: "Portable Event Booth",
    src: "/portable-event-booth.png",
    slides: ["/portable-event-booth.png"],
    spanClass: "col-span-1",
    heightClass: "h-[380px]"
  }
]

export function ClientsPortfolio() {
  const [activeSlides, setActiveSlides] = useState<string[] | null>(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [sliderTitle, setSliderTitle] = useState('')
  const [sliderIndex, setSliderIndex] = useState('')

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!activeSlides) return
    setActiveSlideIndex((prev) => (prev === 0 ? activeSlides.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!activeSlides) return
    setActiveSlideIndex((prev) => (prev === activeSlides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="portfolio" className="bg-cream py-20 text-navy md:py-28">
      {/* 05. clients — marquee ticker */}
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Clients
        </h2>
        <p className="mt-4 text-lg text-navy/70">They asked we shaped</p>
      </div>

      <div className="relative mt-10 flex overflow-hidden border-y border-navy/15 py-6">
        <div className="flex shrink-0 animate-marquee items-center">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <span
              key={`${client.en}-${i}`}
              className="mx-10 inline-flex items-center gap-3 font-display text-4xl font-bold lowercase text-navy/80 sm:text-6xl"
            >
              <span>{client.en}</span>
              <span className="font-arabic text-2xl font-medium text-navy/40">({client.ar})</span>
              <span className="mx-8 text-blob">✳</span>
            </span>
          ))}
        </div>
        {/* duplicate track for seamless loop */}
        <div
          className="flex shrink-0 animate-marquee items-center"
          aria-hidden="true"
        >
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <span
              key={`dup-${client.en}-${i}`}
              className="mx-10 inline-flex items-center gap-3 font-display text-4xl font-bold lowercase text-navy/80 sm:text-6xl"
            >
              <span>{client.en}</span>
              <span className="font-arabic text-2xl font-medium text-navy/40">({client.ar})</span>
              <span className="mx-8 text-blob">✳</span>
            </span>
          ))}
        </div>
      </div>

      {/* 06. portfolio — editorial grid showcase */}
      <div className="mx-auto mt-24 max-w-7xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Portfolio
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-navy/10 bg-navy/5 grid grid-cols-1 md:grid-cols-2 gap-1">
          {GRID_ITEMS.map((item) => (
            <div
              key={item.index}
              onClick={() => {
                setActiveSlides(item.slides)
                setActiveSlideIndex(0)
                setSliderTitle(item.title)
                setSliderIndex(item.index)
              }}
              className={`group relative overflow-hidden bg-[#F5F3FA] cursor-pointer ${item.spanClass} ${item.heightClass}`}
            >
              {/* Background Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Centered Overlay & Text Reveal */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 text-cream">
                <span className="font-mono text-xs uppercase tracking-widest text-blob/90 mb-3">
                  {item.index}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight max-w-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Slider Modal */}
      {activeSlides && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 p-6 sm:p-10 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setActiveSlides(null)}
        >
          {/* Top Bar: Title & Close Button */}
          <div className="flex items-center justify-between text-cream z-10">
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-blob/90">{sliderIndex}</span>
              <h3 className="font-display text-xl font-bold tracking-tight lowercase">{sliderTitle}</h3>
            </div>
            <button
              onClick={() => setActiveSlides(null)}
              className="rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/25 transition-colors"
              aria-label="Close slider"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Main Slider Area */}
          <div className="relative flex-1 flex items-center justify-center py-6">
            {/* Previous Button */}
            {activeSlides.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-10 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/25 transition-colors backdrop-blur"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-6" />
              </button>
            )}

            {/* Center Active Image */}
            <div
              className="relative w-full h-[60vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeSlides[activeSlideIndex]}
                alt={`${sliderTitle} slide ${activeSlideIndex + 1}`}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            {activeSlides.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-10 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/25 transition-colors backdrop-blur"
                aria-label="Next slide"
              >
                <ChevronRight className="size-6" />
              </button>
            )}
          </div>

          {/* Bottom Bar: Indicators & Counter */}
          <div className="flex flex-col items-center gap-4 text-cream z-10">
            {activeSlides.length > 1 && (
              <div className="flex gap-2">
                {activeSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveSlideIndex(idx)
                    }}
                    className={`size-2 rounded-full transition-all ${
                      idx === activeSlideIndex ? 'bg-blob w-6' : 'bg-cream/30'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
            <span className="font-mono text-xs text-cream/60">
              {activeSlideIndex + 1} / {activeSlides.length}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
