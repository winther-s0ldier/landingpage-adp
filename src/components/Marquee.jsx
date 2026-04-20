const terms = [
    'Funnel Analysis',
    'Cohort Retention',
    'RFM Segmentation',
    'Anomaly Detection',
    'Survival Analysis',
    'Sequential Patterns',
    'Trend Decomposition',
    'Distribution Analysis',
    'Correlation Matrix',
    'User Journeys',
    'Friction Detection',
    'Dropout Analysis',
    'Intervention Triggers',
    'Session Classification',
    'Pareto Analysis',
    'Association Rules',
]

export default function Marquee() {
    return (
        <section className="w-full pb-10">
            <div className="w-full overflow-hidden border-y border-[var(--color-border)] bg-[rgba(255,253,248,0.5)] py-6 shadow-[0_4px_20px_rgba(20,33,61,0.03)] backdrop-blur-sm">
                <div className="marquee-track flex min-w-max items-center gap-12 whitespace-nowrap px-4">
                    {[...terms, ...terms].map((term, i) => (
                        <div key={i} className="flex items-center gap-10">
                            <span className="text-[17px] font-bold tracking-[0.16em] text-[var(--color-text-1)] uppercase">
                                {term}
                            </span>
                            <span className="text-xl font-bold text-[var(--color-orange)] opacity-100">·</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
