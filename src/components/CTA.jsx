import { useState } from 'react'

export default function CTA() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        if (!email || !email.includes('@')) return

        // Read existing waitlist from localStorage
        const existing = JSON.parse(localStorage.getItem('adopshun_waitlist') || '[]')

        // Prevent duplicates
        if (existing.some((entry) => entry.email === email)) {
            setSubmitted(true)
            setEmail('')
            return
        }

        // Add new entry with timestamp
        existing.push({ email, date: new Date().toISOString() })
        localStorage.setItem('adopshun_waitlist', JSON.stringify(existing))

        setSubmitted(true)
        setEmail('')

        // Reset after 4 seconds
        setTimeout(() => setSubmitted(false), 4000)
    }
    function downloadWaitlist() {
        const existing = localStorage.getItem('adopshun_waitlist') || '[]'
        const blob = new Blob([existing], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `adopshun_waitlist_${new Date().toISOString().split('T')[0]}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    return (
        <section className="px-6 py-20 lg:py-32 flex flex-col items-center justify-center w-full" id="cta">
            <div className="mx-auto w-full max-w-5xl">
                <div className="relative text-center w-full flex flex-col items-center">
                    <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(242,106,61,0.1),transparent_70%)]" />
                    <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(216,142,97,0.06),transparent_70%)]" />

                    <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
                        <div className="flex flex-col items-center mb-10">
                            <p 
                                className="text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--color-orange)] cursor-default select-none"
                                onDoubleClick={downloadWaitlist}
                                title="Double-click to export waitlist"
                            >
                                Private beta now open
                            </p>
                        </div>
                        
                        <h2 className="text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-text-1)]">
                            Stop writing SQL. <br />
                            <span className="font-['DM_Serif_Display',serif] font-normal italic text-[var(--color-gold)]">Start getting answers.</span>
                        </h2>
                        
                        <p className="mt-8 text-xl leading-relaxed text-[var(--color-text-2)] max-w-xl">
                            Join the waitlist for a lighter, faster way to turn product data into executive decisions.
                        </p>

                        <form className="mt-12 mx-auto w-full max-w-xl group relative" onSubmit={handleSubmit}>
                            <div className="flex h-[56px] w-full items-stretch rounded-lg border border-[rgba(20,33,61,0.15)] bg-white overflow-hidden shadow-sm transition-all focus-within:border-[var(--color-orange)] focus-within:shadow-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="min-w-0 flex-1 bg-transparent px-8 text-[15px] text-[var(--color-text-1)] outline-none placeholder:text-[var(--color-text-3)]"
                                />
                                <button
                                    type="submit"
                                    className="shrink-0 inline-flex items-center justify-center whitespace-nowrap bg-[var(--color-orange)] px-10 text-[14px] font-bold text-white tracking-wide transition-all duration-300 hover:bg-[#e05a2d]"
                                >
                                    Early Access
                                </button>
                            </div>

                            {/* Success feedback */}
                            {submitted && (
                                <div className="mt-4 text-[14px] font-semibold text-[#2a9d55] animate-pulse">
                                    ✓ You're on the list! We'll be in touch.
                                </div>
                            )}
                        </form>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-2)]">
                                <svg className="w-4 h-4 text-[#2a9d55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                                Free during beta
                            </span>
                            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--color-text-2)]">
                                <svg className="w-4 h-4 text-[#2a9d55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                                Executive summary included
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
