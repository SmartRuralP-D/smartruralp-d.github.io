import { SectionLabel } from '@/components/site/section-label'
import { asset, partners } from '@/content/landing'

export function PartnersSection() {
    return (
        <section id="parceiros" className="bg-[var(--warm)] py-[clamp(92px,11vw,160px)]">
            <div className="mx-auto w-[min(calc(100%-64px),1240px)]">
                <div className="[&_h2]:mt-[16px] [&_h2]:text-[clamp(2.65rem,13vw,4.3rem)]">
                    <div>
                        <SectionLabel>06 / PARCEIROS</SectionLabel>
                        <h2>
                            Construída em <em>colaboração.</em>
                        </h2>
                    </div>
                    <p>A SmartRural cresce junto de instituições, produtores e pessoas que conhecem os desafios do campo.</p>
                </div>
                <div className="mt-[75px] grid grid-cols-4 border-l border-t border-[var(--border)] max-[900px]:mt-[52px] max-[900px]:grid-cols-2">
                    {partners.map((partner) => (
                        <div
                            className="grid min-h-[152px] place-items-center border-b border-r border-[var(--border)] p-[25px] max-[900px]:min-h-[110px] max-[900px]:p-[13px] [&_img]:h-[88px] [&_img]:w-[min(100%,190px)] [&_img]:object-contain [&_img]:grayscale [&_img]:opacity-[0.74] [&_img]:transition-[filter,opacity] [&:hover_img]:grayscale-0 [&:hover_img]:opacity-100 max-[900px]:[&_img]:h-[65px]"
                            key={partner}
                        >
                            <img src={asset(partner)} alt="Logo de parceiro institucional da SmartRural" width={512} height={350} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
