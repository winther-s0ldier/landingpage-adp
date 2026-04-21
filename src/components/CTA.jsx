import { useState, useEffect } from 'react'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000').replace(/\/$/, '')

export default function CTA() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')
    const [message, setMessage] = useState('')
    const [toastVisible, setToastVisible] = useState(false)
    const [toastFading, setToastFading] = useState(false)

    useEffect(() => {
        if (!message) return
        setToastVisible(true)
        setToastFading(false)
        const fadeTimer = setTimeout(() => setToastFading(true), 2600)
        const hideTimer = setTimeout(() => { setToastVisible(false); setMessage('') }, 3200)
        return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer) }
    }, [message])

    async function handleSubmit(e) {
        e.preventDefault()
        const normalizedName = name.trim()
        const normalizedEmail = email.trim().toLowerCase()
        if (!normalizedName) { setStatus('error'); setMessage('Please enter your name.'); return }
        if (!normalizedEmail || !normalizedEmail.includes('@')) { setStatus('error'); setMessage('Please enter a valid email address.'); return }
        setStatus('loading'); setMessage('')
        try {
            const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: normalizedName, email: normalizedEmail }),
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
            setStatus('success')
            setMessage("You're on the list! Our team will reach out soon.")
            setName(''); setEmail('')
        } catch (error) {
            setStatus('error')
            setMessage(error.message || 'Something went wrong. Please try again.')
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center py-24 lg:py-40 px-6" id="cta">

            {/* Heading */}
            <div className="text-center max-w-3xl">
                <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-tight tracking-[-0.02em] text-[var(--color-text-1)]">
                    Stop writing SQL.{' '}<br />
                    <span
                        className="italic font-['DM_Serif_Display',serif] font-normal"
                        style={{ WebkitTextStroke: '2px var(--color-orange)', color: 'transparent' }}
                    >
                        Start getting answers.
                    </span>
                </h2>
                <p className="mt-6 text-lg md:text-xl leading-relaxed text-[var(--color-text-2)]">
                    Join the waitlist for a lighter, faster way to turn product data into executive decisions.
                </p>
            </div>

            {/*
                Glass card — matches reference section styles exactly:
                max-width: 400px, border: 2px solid rgba(255,255,255,0.5),
                border-radius: 20px, backdrop-filter: blur(55px), padding: 2rem 3rem
            */}
            <section style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                marginTop: '3.5rem',
                backgroundColor: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px',
                backdropFilter: 'blur(55px)',
                WebkitBackdropFilter: 'blur(55px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem 3rem',
            }}>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>

                    {/*
                        inputbox — matches reference:
                        position: relative, margin: 30px 0,
                        border-bottom: 2px solid, max-width: 310px
                    */}
                    <div style={{ position: 'relative', margin: '30px 0', borderBottom: '2px solid var(--color-orange)' }}>
                        <svg
                            style={{ position: 'absolute', right: '8px', top: '20px', width: '18px', height: '18px', color: 'var(--color-text-2)' }}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <input
                            id="cta-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="peer"
                            style={{
                                width: '100%',
                                height: '60px',
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                fontSize: '1rem',
                                padding: '0 35px 0 5px',
                                color: 'var(--color-text-1)',
                                fontFamily: 'inherit',
                            }}
                        />
                        {/*
                            Label — matches reference:
                            position: absolute, top: 50%, left: 5px, transform: translateY(-50%)
                            On focus/valid: top: -5px
                        */}
                        <label
                            htmlFor="cta-name"
                            className="
                                absolute left-[5px] top-1/2 -translate-y-1/2
                                text-base text-[var(--color-text-2)]
                                pointer-events-none
                                transition-all duration-500
                                peer-focus:top-[-5px] peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-[var(--color-orange)]
                                peer-valid:top-[-5px] peer-valid:translate-y-0 peer-valid:text-xs
                            "
                        >
                            Full Name
                        </label>
                    </div>

                    <div style={{ position: 'relative', margin: '30px 0', borderBottom: '2px solid var(--color-orange)' }}>
                        <svg
                            style={{ position: 'absolute', right: '8px', top: '20px', width: '18px', height: '18px', color: 'var(--color-text-2)' }}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input
                            id="cta-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="peer"
                            style={{
                                width: '100%',
                                height: '60px',
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                fontSize: '1rem',
                                padding: '0 35px 0 5px',
                                color: 'var(--color-text-1)',
                                fontFamily: 'inherit',
                            }}
                        />
                        <label
                            htmlFor="cta-email"
                            className="
                                absolute left-[5px] top-1/2 -translate-y-1/2
                                text-base text-[var(--color-text-2)]
                                pointer-events-none
                                transition-all duration-500
                                peer-focus:top-[-5px] peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-[var(--color-orange)]
                                peer-valid:top-[-5px] peer-valid:translate-y-0 peer-valid:text-xs
                            "
                        >
                            Email Address
                        </label>
                    </div>

                    {/*
                        Button — matches reference:
                        width: 100%, height: 40px, border-radius: 40px,
                        background-color: white
                    */}
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="flex items-center justify-center gap-2 group hover:bg-[var(--color-orange)] hover:text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                        style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '40px',
                            backgroundColor: 'white',
                            border: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: '600',
                            color: 'var(--color-orange)',
                            marginTop: '35px',
                        }}
                    >
                        {status === 'loading' ? (
                            <>
                                <span className="inline-block w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                Sign Up for Early Access
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </>
                        )}
                    </button>

                </form>
            </section>

            {/* Floating toast popup — fades out after 3s */}
            {toastVisible && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 9999,
                        transition: 'opacity 0.6s ease',
                        opacity: toastFading ? 0 : 1,
                        pointerEvents: 'none',
                    }}
                    className={`px-6 py-4 text-sm font-semibold text-center rounded-2xl shadow-xl border ${
                        status === 'success'
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                            : 'bg-red-50 border-red-200 text-red-700'
                    }`}
                >
                    {message}
                </div>
            )}

            {/* Trust badges — well below the card */}
            <div style={{ marginTop: '2rem' }} className="flex items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-2)] opacity-70">
                <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Free during beta
                </span>
                <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Executive summary included
                </span>
            </div>

        </div>
    )
}
