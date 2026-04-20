import { useEffect, useState } from 'react'

const links = [
    { label: 'How it Works', href: '#pipeline' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
]

export default function Navbar({ lenisRef }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    function scrollTo(href) {
        const target = document.querySelector(href)
        if (target && lenisRef?.current) {
            lenisRef.current.scrollTo(target, { offset: -80, duration: 1.3 })
        } else if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <header className="absolute inset-x-0 top-0 z-50 bg-transparent transition-all duration-300">
            <div className="flex w-full items-center justify-between px-6 py-8 sm:px-10">
                <div className="flex flex-1 justify-start">
                    <a href="/" className="flex items-center">
                        <img 
                            src="/logo-t.png" 
                            alt="ADOPSHUN" 
                            className="h-14 w-auto transition-transform duration-300 hover:scale-105"
                        />
                    </a>
                </div>

                <nav className="hidden lg:flex flex-1 items-center justify-center gap-10">
                    {links.map((l) => (
                        <button
                            key={l.href}
                            onClick={() => scrollTo(l.href)}
                            className="text-sm font-semibold text-[var(--color-text-2)] hover:text-[var(--color-text-1)] transition-colors duration-200 cursor-pointer bg-transparent border-0"
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>

                <div className="flex flex-1 justify-end" />
            </div>
        </header>
    )
}
