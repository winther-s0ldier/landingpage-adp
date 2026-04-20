import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WhatWeDo from './components/WhatWeDo'
import Pipeline from './components/Pipeline'
import Features from './components/Features'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    let lenis = null
    let rafId = null

    async function setupAnimations() {
      const { default: Lenis } = await import('@studio-freight/lenis')

      if (cancelled) {
        return
      }

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
      })
      lenisRef.current = lenis

      const raf = (time) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)
    }

    setupAnimations()

    return () => {
      cancelled = true
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      if (lenis) {
        lenis.destroy()
      }
      lenisRef.current = null
    }
  }, [])

    return (
        <main className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text-1)] w-full overflow-x-hidden flex flex-col items-center">
            {/* Global Fixed Watermark */}
            <div className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden z-[0] w-full px-4">
                <span className="select-none text-[clamp(8rem,16vw,25rem)] font-black uppercase tracking-[-0.08em] text-[rgba(20,33,61,0.07)] leading-none whitespace-nowrap">
                    ADOPSHUN
                </span>
            </div>

            <Navbar lenisRef={lenisRef} />
            <div className="flex flex-col items-center justify-center w-full gap-24 lg:gap-40 relative z-10">
                <Hero />
                <Marquee />
                <WhatWeDo />
                <Pipeline />
                <Features />
                <FAQ />
                <CTA />
                <Footer />
            </div>
        </main>
    )
}
