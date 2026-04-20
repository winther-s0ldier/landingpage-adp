import { useEffect, useState } from 'react'
import MagneticButton from './MagneticButton'

export default function Hero() {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const ctaClass = [
        'inline-flex min-h-[64px] w-full max-w-[300px]',
        'items-center justify-center rounded-2xl',
        'bg-[#0a1128] px-12 text-[18px] font-bold text-white tracking-wide',
        'shadow-2xl transition-all duration-300',
        'hover:scale-105 hover:bg-[var(--color-orange)]',
        'border border-white/10',
    ].join(' ')

    return (
        <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-8 lg:px-10 lg:pb-32 lg:pt-40 flex flex-col items-center min-h-[90vh] justify-center">
            {/* Background elements */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,106,61,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(216,142,97,0.05),transparent_30%)]" />

            <div className={`relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Badge (Placeholder) */}
                <div
                    className="hero-copy inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm"
                    style={{ animationDelay: '0.1s' }}
                />

                {/* Main Heading */}
                <div className="mt-10 w-full mb-12 lg:mb-20">
                    <h1 className="text-[clamp(3.25rem,12vw,4.5rem)] md:text-[clamp(4.5rem,11vw,9.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] flex flex-col items-center gap-2">
                        <span className="hero-word block text-[var(--color-text-1)]" style={{ animationDelay: '0.2s' }}>
                            Product
                        </span>
                        <span
                            className="hero-word block font-['DM_Serif_Display',serif] font-normal italic"
                            style={{
                                animationDelay: '0.3s',
                                color: 'transparent',
                                WebkitTextStroke: '2px var(--color-orange)',
                            }}
                        >
                            Adoption
                        </span>
                        <span className="hero-word block text-[var(--color-text-1)] pb-[0.2em]" style={{ animationDelay: '0.4s' }}>
                            Simplified.
                        </span>
                    </h1>
                </div>

                {/* Hard physical spacers to forcibly clear descenders */}
                <div className="w-full min-h-[60px] flex-shrink-0" />
                <div className="w-full min-h-[60px] flex-shrink-0" />

                {/* Subtitle */}
                <p
                    className="hero-copy max-w-2xl text-lg leading-relaxed text-[var(--color-text-2)] sm:text-xl md:text-[22px]"
                    style={{ animationDelay: '0.6s' }}
                >
                    Adopshun is a B2B intelligence layer helping teams retain customers and accelerate decision-making through automated analysis. Upload any dataset, get an executive report. No SQL. No analysts.
                </p>

                {/* CTA Button */}
                <div
                    className="hero-copy mt-12 mb-4 flex justify-center w-full relative z-20"
                    style={{ animationDelay: '0.8s' }}
                >
                    <a
                        href="http://13.235.24.63:8000/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={ctaClass}
                    >
                        <span className="text-white brightness-200">Try Adopshun</span>
                    </a>
                </div>
            </div>
        </section>
    )
}