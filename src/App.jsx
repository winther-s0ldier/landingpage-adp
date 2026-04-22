import { useEffect, useRef } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WhatWeDo from './components/WhatWeDo'
import Pipeline from './components/Pipeline'
import Features from './components/Features'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DoodleLayer from './components/DoodleLayer'
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
            <Toaster
                position="bottom-center"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: 'rgba(255,255,255,0.92)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1px solid rgba(0,0,0,0.08)',
                        borderRadius: '16px',
                        padding: '14px 20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#1a1a2e',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                        maxWidth: '380px',
                    },
                    success: {
                        iconTheme: { primary: '#10b981', secondary: '#fff' },
                    },
                    error: {
                        iconTheme: { primary: '#ef4444', secondary: '#fff' },
                    },
                }}
            />
            {/* Global Fixed Watermark */}
            <div className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden z-[0] w-full px-4">
                <span className="select-none text-[clamp(4rem,18vw,8rem)] md:text-[clamp(8rem,16vw,25rem)] font-black uppercase tracking-[-0.08em] text-[rgba(20,33,61,0.07)] leading-none whitespace-nowrap">
                    ADOPSHUN
                </span>
            </div>

            <Navbar lenisRef={lenisRef} />
            <div className="flex flex-col items-center justify-center w-full gap-24 lg:gap-40 relative z-10">
                <Hero lenisRef={lenisRef} />
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
