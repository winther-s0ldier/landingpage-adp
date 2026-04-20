const features = [
    {
        eyebrow: 'Behavioural analytics',
        title: 'Funnel, friction, dropout, survival — automatically.',
        body: 'Adopshun detects session boundaries, maps user journeys, scores friction events, and runs Kaplan-Meier survival curves — all without a single line of configuration. It picks the right analyses based on your data shape.',
    },
    {
        eyebrow: 'Statistical rigour',
        title: 'Every claim is confidence-scored.',
        body: 'P-values, effect sizes, Bonferroni correction, and reliability tiers (strong, suggestive, tentative) on every finding. An adversarial critic layer catches overconfidence before anything reaches the report.',
    },
    {
        eyebrow: 'Connectors',
        title: 'GA4-native from day one.',
        body: 'Connect a property and pull event data straight into the pipeline. No brittle export steps, no CSV scavenger hunt before analysis starts.',
    },
    {
        eyebrow: 'Executive synthesis',
        title: 'Reports that read like a strategist wrote them.',
        body: 'Cross-metric connections, severity-ranked insights, action roadmaps with timeline buckets, and a conversational narrative — delivered as one interactive report, not a wall of charts.',
    },
]

export default function Features() {
    return (
        <section className="w-full flex flex-col items-center justify-center px-6 py-20 sm:px-8 lg:px-10 lg:py-28" id="features">
            <div className="w-full max-w-4xl flex flex-col items-center text-center">
                <div className="mb-20 w-full flex flex-col items-center">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-orange)]">Platform capabilities</p>
                    <h2 className="mt-6 text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-text-1)]">
                        30+ analyses. <br />
                        <span className="font-['DM_Serif_Display',serif] font-normal italic text-[var(--color-gold)]">Zero setup.</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-[1.15rem] leading-relaxed text-[var(--color-text-2)]">
                        From distribution profiling to sequential pattern mining — each analysis is selected, executed, and validated automatically based on your dataset.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-20">
                    {features.map((feature) => (
                        <article key={feature.title} className="flex flex-col items-center px-4">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-3)] mb-4">{feature.eyebrow}</p>
                            <h3 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--color-text-1)] max-w-2xl">
                                {feature.title}
                            </h3>
                            <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-2)] max-w-xl">{feature.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
