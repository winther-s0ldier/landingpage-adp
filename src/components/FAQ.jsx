import { useState } from 'react'

const faqs = [
    {
        q: 'Do I need to know Python or SQL to use this?',
        a: 'No. The platform handles profiling, analysis planning, code execution, validation, and reporting automatically. Upload a CSV or connect GA4 — you get an executive-ready report without writing a single query.',
    },
    {
        q: 'What kinds of analysis does it run?',
        a: 'Over 30 types — including funnel analysis, cohort retention, RFM segmentation, anomaly detection, survival curves, sequential pattern mining, friction detection, dropout analysis, trend decomposition, user segmentation, and more. The system selects the right ones based on your data shape.',
    },
    {
        q: 'How secure is my data?',
        a: 'The platform processes data through controlled pipelines with quality gates at every stage. Enterprise deployments can keep the entire workflow within your own infrastructure.',
    },
    {
        q: 'How do I know I can trust the results?',
        a: 'Every finding is confidence-scored with p-values, effect sizes, and reliability tiers (strong, suggestive, tentative). An adversarial critic layer reviews the synthesis for unsupported claims before the report is delivered.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(-1)

    return (
        <section className="w-full flex flex-col items-center justify-center px-6 py-20 sm:px-8 lg:px-10 lg:py-28" id="faq">
            <div className="w-full max-w-3xl flex flex-col items-center text-center">
                <div className="text-center w-full flex flex-col items-center">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-orange)]">Questions</p>
                    <h2 className="mt-6 text-[clamp(3.5rem,7vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-text-1)]">
                        Frequently <span className="font-['DM_Serif_Display',serif] font-normal italic text-[var(--color-gold)]">asked.</span>
                    </h2>
                </div>

                {/* Hard physical spacer to permanently clear the 'y' descender */}
                <div className="w-full min-h-[40px] sm:min-h-[60px] flex-shrink-0" />

                <div className="w-full flex flex-col border-t border-[var(--color-border)]">
                    {faqs.map((faq, index) => {
                        const open = openIndex === index;
                        return (
                            <div key={faq.q} className="border-b border-[var(--color-border)]">
                                <button
                                    className="flex w-full items-center justify-between gap-4 py-8 text-left group"
                                    onClick={() => setOpenIndex(open ? -1 : index)}
                                >
                                    <span className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text-1)] transition-colors group-hover:text-[var(--color-orange)]">
                                        {faq.q}
                                    </span>
                                    <span className={`text-2xl font-light text-[var(--color-orange)] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
                                        +
                                    </span>
                                </button>
                                <div className={`grid transition-all duration-300 ease-[var(--ease-out)] ${open ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-lg leading-relaxed text-[var(--color-text-2)] pr-8">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
