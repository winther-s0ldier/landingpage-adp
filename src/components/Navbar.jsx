import { useEffect, useState } from 'react'

const links = [
    { label: 'How it Works', href: '#pipeline' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
]

export default function Navbar({ lenisRef }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
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
        <header className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300">
            <div className={`flex w-full items-center justify-between px-8 py-6 sm:px-16 transition-all duration-300 ${scrolled ? 'bg-[#02020a]/90 backdrop-blur-xl py-4 shadow-none border-0' : 'bg-transparent'}`}>
                <div className="flex flex-1 justify-start">
                    <a href="/" className="flex items-center">
                        <img 
                            src="/logo-t.png" 
                            alt="ADOPSHUN" 
                            className="h-11 w-auto transition-all duration-300 hover:scale-105 brightness-150"
                        />
                    </a>
                </div>

                <nav className="hidden lg:flex items-center justify-center gap-14">
                    {links.map((l) => (
                        <button
                            key={l.href}
                            onClick={() => scrollTo(l.href)}
                            className="text-[13px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-0"
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
