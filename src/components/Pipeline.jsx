const steps = [
    {
        num: '01',
        title: 'Profile & Classify',
        desc: 'Auto-detects column semantics, data types, and dataset category. Flags null spikes, duplicates, and mixed-type columns before any analysis begins.',
    },
    {
        num: '02',
        title: 'Plan the Analysis',
        desc: 'Builds a dependency-aware DAG of 30+ possible analyses — from funnel drop-offs and cohort retention to anomaly detection and sequential pattern mining — selecting only what matters for your data.',
    },
    {
        num: '03',
        title: 'Execute in Parallel',
        desc: 'Runs distribution, correlation, trend, survival, RFM, friction detection, user segmentation, and more — all concurrently with statistical confidence scoring on every result.',
    },
    {
        num: '04',
        title: 'Validate & Critique',
        desc: 'An adversarial review layer checks every claim for unsupported conclusions, contradictions, and overconfidence. Weak results get flagged or rerun automatically.',
    },
    {
        num: '05',
        title: 'Synthesize Insights',
        desc: 'Cross-references findings across all analyses, surfaces causal connections, and produces a reliability-scored narrative with cited evidence — not raw output.',
    },
    {
        num: '06',
        title: 'Deliver the Report',
        desc: 'Packages interactive charts, executive summaries, severity-ranked findings, and an action roadmap into a single report leadership can circulate immediately.',
    },
]

export default function Pipeline() {
    return (
        <section className="w-full flex flex-col items-center justify-center px-6 py-20 sm:px-8 lg:px-10 lg:py-28" id="pipeline">
            <div className="w-full max-w-4xl flex flex-col items-center text-center">
                <div className="text-center mb-20 w-full flex flex-col items-center">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-orange)]">The flow</p>
                    <h2 className="mt-6 text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-text-1)]">
                        Upload to insight. <br className="hidden sm:block" />
                        <span className="font-['DM_Serif_Display',serif] font-normal italic text-[var(--color-gold)]">Fully automated.</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-[1.15rem] leading-relaxed text-[var(--color-text-2)]">
                        Every stage is orchestrated, validated, and trustworthy. From raw CSV to executive-ready report — no SQL, no analyst queue, no fragmented tooling.
                    </p>
                </div>

                <div className="relative mx-auto mt-12 w-full max-w-2xl px-4 sm:px-8">
                    {/* Continuous vertical line running exactly down the center of the number circles */}
                    <div className="absolute left-[44px] sm:left-[64px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-[var(--color-border-accent)] to-transparent opacity-60" />

                    <div className="flex flex-col relative z-10 w-full gap-4">
                        {steps.map((step, idx) => (
                            <article key={step.num} className="relative flex items-center gap-6 sm:gap-10 p-6 sm:p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm transition-all duration-500 hover:shadow-md hover:scale-[1.01] hover:bg-white group text-left">
                                {/* Connector numbering dot */}
                                <div className="flex-shrink-0 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-4 border-[#fffdf8] bg-white text-[13px] sm:text-[15px] font-bold text-[var(--color-orange)] shadow-lg shadow-[rgba(242,106,61,0.15)] transition-all duration-500 group-hover:scale-110 bg-white relative z-20">
                                    {step.num}
                                </div>
                                
                                <div className="flex flex-col pt-1 sm:pt-2 flex-1">
                                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[var(--color-text-1)]">{step.title}</h3>
                                    <p className="mt-3 text-[16px] sm:text-[17px] leading-relaxed text-[var(--color-text-2)]">{step.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
