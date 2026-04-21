const stats = [
    { value: '30+', label: 'analysis types' },
    { value: '< 10 min', label: 'upload to report' },
    { value: '0', label: 'lines of SQL' },
]

const highlights = [
    'Funnel analysis, dropout detection, friction scoring, survival curves, sequential pattern mining, cohort retention — all selected and run automatically based on your data shape.',
    'Every finding is confidence-scored with p-values, effect sizes, and reliability tiers. An adversarial critic catches unsupported claims before they reach your report.',
    'The final report includes interactive charts, severity-ranked insights, cross-metric connections, and an action roadmap — ready for leadership in minutes, not weeks.',
]

export default function WhatWeDo() {
    return (
        <section className="w-full flex flex-col items-center justify-center px-6 py-24 sm:px-8 lg:px-10 lg:py-32" id="about">
            <div className="w-full max-w-5xl flex flex-col items-center text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-orange)]">What we do</p>
                <h2 className="mt-6 text-[clamp(3.5rem,7vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-text-1)]">
                    Your data, <br className="hidden sm:block" />
                    <span className="font-['DM_Serif_Display',serif] font-normal italic text-[var(--color-gold)]">fully analyzed</span>{' '}
                    in minutes.
                </h2>
                <div style={{ marginTop: '4rem' }} className="flex flex-col items-center gap-6">
                    <p className="max-w-2xl text-[clamp(1.15rem,1.5vw,1.35rem)] leading-relaxed text-[var(--color-text-2)]">
                        Adopshun is a dedicated B2B intelligence layer designed to accelerate internal analysis pipelines. Most product teams do not need more dashboards; they need a system that can read raw data, understand what matters, and return a clear strategic narrative with evidence behind it.
                    </p>
                    <p className="max-w-2xl text-[1.15rem] leading-relaxed text-[var(--color-text-2)] font-medium">
                        We collapse the slow loop of data exports and analyst requests into one coordinated AI workflow — speeding up decision-making cycles from weeks to minutes.
                    </p>
                </div>

                {/* Vertical Divider Line */}
                <div style={{ margin: '6rem 0' }} className="h-16 w-px bg-gradient-to-b from-[var(--color-border)] to-transparent" />

                <div className="w-full">
                    <div className="grid gap-10 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)] border-y border-[var(--color-border)] py-12">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center pt-8 sm:pt-0">
                                <div className="text-6xl font-extrabold tracking-[-0.05em] text-[var(--color-text-1)]">{stat.value}</div>
                                <div className="mt-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-2)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 grid gap-10 lg:grid-cols-3 text-center">
                        {highlights.map((item, index) => (
                            <div key={item} className="flex flex-col items-center">
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                                    0{index + 1}
                                </div>
                                <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-text-1)] border-t border-[var(--color-border)] pt-4 w-full">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
