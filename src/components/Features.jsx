import ScrollStack, { ScrollStackItem } from './ScrollStack'

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
                <div style={{ marginBottom: '8rem' }} className="w-full flex flex-col items-center">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-orange)]">Platform capabilities</p>
                    <h2 className="mt-6 text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-text-1)]">
                        30+ analyses. <br />
                        <span className="font-['DM_Serif_Display',serif] font-normal italic text-[var(--color-gold)]">Zero setup.</span>
                    </h2>
                    <p style={{ marginTop: '3rem' }} className="mx-auto max-w-2xl text-[1.15rem] leading-relaxed text-[var(--color-text-2)]">
                        From distribution profiling to sequential pattern mining — each analysis is selected, executed, and validated automatically based on your dataset.
                    </p>
                </div>

                <div className="w-full relative mx-auto max-w-5xl">
                    <ScrollStack 
                        useWindowScroll={true} 
                        itemScale={0.04} 
                        baseScale={0.88} 
                        stackPosition="15%"
                        blurAmount={1.5}
                        className="overflow-visible !h-auto"
                        rotationAmount={0}
                    >
                        {features.map((feature, idx) => (
                            <ScrollStackItem key={feature.title}>
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <span className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 min-w-[2rem] sm:min-w-[2.5rem] rounded-full bg-[#f26a3d]/10 text-[#f26a3d] font-black text-base sm:text-lg">
                                        {idx + 1}
                                    </span>
                                    <p className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-3)]">{feature.eyebrow}</p>
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-[2.75rem] font-semibold leading-[1.2] sm:leading-[1.1] tracking-[-0.04em] text-[var(--color-text-1)] max-w-2xl text-left">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 sm:mt-5 text-[0.95rem] sm:text-[1.15rem] leading-relaxed text-[var(--color-text-2)] max-w-2xl text-left font-medium">
                                    {feature.body}
                                </p>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>
            </div>
        </section>
    )
}
