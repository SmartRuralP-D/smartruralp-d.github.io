import { asset, partners } from '@/content/landing'

export function PartnersSection() {
    return (
        <section id="parceiros" className="bg-warm section-padding">
            <div className="page-container">
                <div>
                    <div>
                        <h2 className="section-heading text-[clamp(2.65rem,13vw,4.3rem)]">
                            Construída em <em>colaboração.</em>
                        </h2>
                    </div>
                    <p>A SmartRural cresce junto de instituições, produtores e pessoas que conhecem os desafios do campo.</p>
                </div>
                <div className="mt-18.75 grid grid-cols-4 border-l border-t border-border max-[900px]:mt-13 max-[900px]:grid-cols-2">
                    {partners.map((partner) => (
                        <div
                            className="group grid min-h-38 place-items-center border-b border-r border-border p-6.25 max-[900px]:min-h-27.5 max-[900px]:p-3.25"
                            key={partner}
                        >
                            <img
                                className="h-22 w-[min(100%,11.875rem)] object-contain grayscale opacity-[0.74] transition-[filter,opacity] group-hover:grayscale-0 group-hover:opacity-100 max-[900px]:h-16.25"
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
