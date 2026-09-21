import { media } from '@/content/landing'

export function PortfolioSection() {
    return (
        <section id="portfolio" className="bg-surface section-padding">
            <div className="page-container">
                <div className="grid items-end gap-8.5 min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] max-[900px]:grid-cols-1">
                    <div>
                        <h2 className="section-heading">
                            SmartRural <em>em ação.</em>
                        </h2>
                    </div>
                    <p className="mb-1 ml-auto max-w-97.5 text-[0.9375rem] leading-[1.7] text-text max-[900px]:ml-0 max-[640px]:text-sm">
                        Tecnologia, pesquisa e conhecimento aplicados para transformar a rotina no campo.
                    </p>
                </div>

                <div className="mt-[clamp(58px,8vw,105px)] grid grid-cols-3 gap-6 max-[640px]:mt-13.75">
                    <figure>
                        <img
                            className="aspect-[1.32] w-full object-cover"
                            src={media.pondDetail}
                            alt="Aerador em um viveiro de aquicultura"
                            width={1280}
                            height={720}
                            loading="lazy"
                        />
                        <figcaption className="mt-3 flex items-center gap-1.75 text-[0.6875rem] font-bold text-text">Acompanhamento em tempo real</figcaption>
                    </figure>
                    <figure>
                        <img
                            className="aspect-[1.32] w-full object-cover"
                            src={media.gathering}
                            alt="Encontro de apresentação da SmartRural no campo"
                            width={1280}
                            height={720}
                            loading="lazy"
                        />
                        <figcaption className="mt-3 flex items-center gap-1.75 text-[0.6875rem] font-bold text-text">Pesquisa aplicada e pessoas</figcaption>
                    </figure>
                    <figure>
                        <img
                            className="aspect-[1.32] w-full object-cover"
                            src={media.workshop}
                            alt="Apresentação sobre aquicultura em Feira Nova"
                            width={1280}
                            height={720}
                            loading="lazy"
                        />
                        <figcaption className="mt-3 flex items-center gap-1.75 text-[0.6875rem] font-bold text-text">
                            Conhecimento que chega à operação
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}
