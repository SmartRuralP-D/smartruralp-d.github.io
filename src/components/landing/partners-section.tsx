import { SectionLabel } from '@/components/site/section-label'
import { asset, partners } from '@/content/landing'

export function PartnersSection() {
    return (
        <section id="parceiros" className="bg-warm section-padding">
            <div className="page-container">
                <div>
                    <div>
                        <SectionLabel>06 / PARCEIROS</SectionLabel>
                        <h2 className="section-heading text-[clamp(2.65rem,13vw,4.3rem)]">
                            Construída em <em>colaboração.</em>
                        </h2>
                    </div>
                    <p>A SmartRural cresce junto de instituições, produtores e pessoas que conhecem os desafios do campo.</p>
                </div>
                <div className="mt-[4.6875rem] grid grid-cols-4 border-l border-t border-border max-[900px]:mt-[3.25rem] max-[900px]:grid-cols-2">
                    {partners.map((partner) => (
                        <div
                            className="group grid min-h-[9.5rem] place-items-center border-b border-r border-border p-[1.5625rem] max-[900px]:min-h-[6.875rem] max-[900px]:p-[0.8125rem]"
                            key={partner}
                        >
                            <img
                                className="h-[5.5rem] w-[min(100%,11.875rem)] object-contain grayscale opacity-[0.74] transition-[filter,opacity] group-hover:grayscale-0 group-hover:opacity-100 max-[900px]:h-[4.0625rem]"
                                src={asset(partner)}
                                alt="Logo de parceiro institucional da SmartRural"
                                width={512}
                                height={350}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
