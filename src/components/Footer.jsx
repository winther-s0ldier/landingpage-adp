import MagneticButton from './MagneticButton'

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] px-6 py-12 sm:px-8 lg:px-10">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 items-center justify-center text-center">
                <div className="flex flex-wrap justify-center gap-6">
                    <MagneticButton className="text-sm font-semibold text-[var(--color-text-2)] hover:text-[var(--color-orange)] transition-colors">Twitter</MagneticButton>
                    <MagneticButton className="text-sm font-semibold text-[var(--color-text-2)] hover:text-[var(--color-orange)] transition-colors">LinkedIn</MagneticButton>
                    <MagneticButton className="text-sm font-semibold text-[var(--color-text-2)] hover:text-[var(--color-orange)] transition-colors">GitHub</MagneticButton>
                </div>
                <p className="text-sm text-[var(--color-text-3)]">© {new Date().getFullYear()} ADOPSHUN. All rights reserved.</p>
            </div>
        </footer>
    )
}
