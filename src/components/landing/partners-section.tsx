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
                <div className="mt-[75px] grid grid-cols-4 border-l border-t border-border max-[900px]:mt-[52px] max-[900px]:grid-cols-2">
                    {partners.map((partner) => (
                        <div
                            className="group grid min-h-[152px] place-items-center border-b border-r border-border p-[25px] max-[900px]:min-h-[110px] max-[900px]:p-[13px]"
                            key={partner}
                        >
                            <img
                                className="h-[88px] w-[min(100%,190px)] object-contain grayscale opacity-[0.74] transition-[filter,opacity] group-hover:grayscale-0 group-hover:opacity-100 max-[900px]:h-[65px]"
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
