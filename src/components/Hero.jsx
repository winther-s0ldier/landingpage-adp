import { useEffect, useState, useRef } from 'react'
import DoodleLayer from './DoodleLayer'
import VariableProximity from './VariableProximity'

export default function Hero({ lenisRef }) {
    const [fadeIn, setFadeIn] = useState(false)
    const heroRef = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const ctaClass = [
        'inline-flex min-h-[64px] w-full max-w-[280px]',
        'items-center justify-center rounded-2xl',
        'bg-white px-10 text-[18px] font-bold text-black tracking-tight',
        'shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300',
        'hover:scale-105 hover:bg-[var(--color-cyan)]',
    ].join(' ')

    function scrollToCta() {
        const target = document.querySelector('#cta')
        if (target && lenisRef?.current) {
            lenisRef.current.scrollTo(target, { offset: -40, duration: 1.3 })
        } else if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <section ref={heroRef} className="relative w-full px-6 py-24 sm:px-8 lg:px-10 flex flex-col items-center min-h-screen justify-center bg-transparent">
            <DoodleLayer />
            
            <div className={`relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Interactive Holographic Heading */}
                <div className="w-full">
                    <h1 className="text-[clamp(3.5rem,10vw,5.5rem)] lg:text-[clamp(5rem,8vw,8.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em] flex flex-col items-center">
                        <span className="text-white animate-holographic font-['Outfit',sans-serif] uppercase tracking-[-0.02em]">
                            <VariableProximity
                                label="Growth"
                                fromFontVariationSettings="'wght' 400"
                                toFontVariationSettings="'wght' 900"
                                containerRef={heroRef}
                                radius={100}
                                falloff="gaussian"
                            />
                        </span>
                        <span
                            className="font-['Fraunces',serif] italic animate-stroke-cycle"
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '1.2px var(--color-cyan)',
                                marginTop: '-0.1em',
                                letterSpacing: '-0.02em',
                                filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.25))'
                            }}
                        >
                            <VariableProximity
                                label="OS"
                                fromFontVariationSettings="'wght' 300, 'opsz' 14"
                                toFontVariationSettings="'wght' 900, 'opsz' 144"
                                containerRef={heroRef}
                                radius={100}
                                falloff="gaussian"
                            />
                        </span>
                    </h1>
                </div>

                {/* Physical Spacer */}
                <div className="h-20 sm:h-24 md:h-28 w-full" />

                {/* Restored Compact Paragraph */}
                <p className="mx-auto max-w-2xl text-[1.15rem] leading-relaxed text-[var(--color-text-2)] font-medium">
                    Adopshun is a B2B intelligence layer helping teams retain customers and accelerate decision-making through automated analysis. Upload any dataset, get an executive report. No SQL. No analysts.
                </p>

                <div className="h-12 w-full" />

                {/* CTA Button */}
                <div className="flex justify-center w-full relative z-20">
                    <button
                        type="button"
                        onClick={scrollToCta}
                        className={ctaClass}
                    >
                        Try Adopshun
                    </button>
                </div>
            </div>
        </section>
    )
}
