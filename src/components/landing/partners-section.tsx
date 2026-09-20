import { SectionLabel } from '@/components/site/section-label'
import { asset, partners } from '@/content/landing'

export function PartnersSection() {
    return (
        <section id="parceiros" className="partners-section section-block">
            <div className="container">
                <div className="partners-intro">
                    <div>
                        <SectionLabel>06 / PARCEIROS</SectionLabel>
                        <h2>
                            Construída em <em>colaboração.</em>
                        </h2>
                    </div>
                    <p>A SmartRural cresce junto de instituições, produtores e pessoas que conhecem os desafios do campo.</p>
                </div>
                <div className="partner-list">
                    {partners.map((partner) => (
                        <div className="partner-logo" key={partner}>
                            <img src={asset(partner)} alt="Logo de parceiro institucional da SmartRural" width={512} height={350} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
