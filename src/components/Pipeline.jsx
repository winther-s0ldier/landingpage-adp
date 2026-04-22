import ChromaGrid from './ChromaGrid';

const steps = [
    {
        num: '01',
        title: 'Profile & Classify',
        desc: 'Auto-detects column semantics, data types, and core dataset categories. It strictly flags null spikes, massive duplicates, and mixed-type columns, sanitizing the architecture entirely before any computational analysis begins.',
        borderColor: '#a855f7',
        gradient: 'linear-gradient(145deg, rgba(168, 85, 247, 0.15), #0a0a0a)',
    },
    {
        num: '02',
        title: 'Plan the Analysis',
        desc: 'Builds a dependency-aware DAG of 30+ possible analyses — from funnel drop-offs and cohort retention to anomaly detection and sequential pattern mining — selecting only what matters for your data.',
        borderColor: '#c084fc',
        gradient: 'linear-gradient(180deg, rgba(192, 132, 252, 0.15), #0a0a0a)',
    },
    {
        num: '03',
        title: 'Execute in Parallel',
        desc: 'Runs distribution mapping, correlation plotting, survival curves, RFM cuts, and friction detection concurrently across the architecture — appending rigorous statistical confidence scoring and p-values to every computed result.',
        borderColor: '#7c3aed',
        gradient: 'linear-gradient(210deg, rgba(124, 58, 237, 0.15), #0a0a0a)',
    },
    {
        num: '04',
        title: 'Validate & Critique',
        desc: 'An aggressive adversarial review layer systematically checks every generated claim for unsupported conclusions, logical contradictions, or computational overconfidence. Weak mathematical results immediately get flagged or silently rerun automatically.',
        borderColor: '#a855f7',
        gradient: 'linear-gradient(165deg, rgba(168, 85, 247, 0.15), #0a0a0a)',
    },
    {
        num: '05',
        title: 'Synthesize Insights',
        desc: 'Cross-references hidden structural findings across all pipeline stages, surfaces deep causal connections between metrics, and synthesizes a highly reliability-scored final narrative backed by explicitly cited numerical evidence.',
        borderColor: '#c084fc',
        gradient: 'linear-gradient(135deg, rgba(192, 132, 252, 0.15), #0a0a0a)',
    },
    {
        num: '06',
        title: 'Deliver the Report',
        desc: 'Packages dynamic interactive charts, dense executive summaries, severity-ranked operational findings, and a deterministic action roadmap into a single cohesive report that leadership can absorb and circulate immediately.',
        borderColor: '#7c3aed',
        gradient: 'linear-gradient(195deg, rgba(124, 58, 237, 0.15), #0a0a0a)',
    },
]

export default function Pipeline() {
    return (
        <section className="w-full flex flex-col items-center justify-center px-6 py-20 sm:px-8 lg:px-10 lg:py-28" id="pipeline">
            <div className="w-full flex flex-col items-center text-center">
                <div style={{ marginBottom: '8rem' }} className="text-center w-full flex flex-col items-center">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-orange)]">The flow</p>
                    <h2 className="mt-6 text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-text-1)]">
                        Upload to insight. <br className="hidden sm:block" />
                        <span className="font-['DM_Serif_Display',serif] font-normal italic text-[var(--color-gold)]">Fully automated.</span>
                    </h2>
                    <p style={{ marginTop: '3rem' }} className="mx-auto max-w-2xl text-[1.15rem] leading-relaxed text-[var(--color-text-2)]">
                        Every stage is orchestrated, validated, and trustworthy. From raw CSV to executive-ready report — no SQL, no analyst queue, no fragmented tooling.
                    </p>
                </div>

                <div className="w-full mt-8">
                    <ChromaGrid 
                        items={steps}
                        columns={3}
                        rows={2}
                        radius={400}
                        damping={0.45}
                        fadeOut={0.6}
                    />
                </div>
            </div>
        </section>
    )
}
