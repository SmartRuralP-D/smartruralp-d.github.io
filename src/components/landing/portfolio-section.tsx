import { MapPin } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'
import { media } from '@/content/landing'

export function PortfolioSection() {
    return (
        <section id="portfolio" className="bg-surface section-padding">
            <div className="page-container">
                <div className="grid items-end gap-[2.125rem] min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] max-[900px]:grid-cols-1">
                    <div>
                        <SectionLabel>04 / PORTFÓLIO</SectionLabel>
                        <h2 className="section-heading">
                            SmartRural <em>em campo.</em>
                        </h2>
                    </div>
                    <p className="mb-1 ml-auto max-w-[24.375rem] text-[0.9375rem] leading-[1.7] text-text max-[900px]:ml-0 max-[640px]:text-sm">
                        A tecnologia ganha sentido quando está instalada, observada e utilizada no ambiente produtivo.
                    </p>
                </div>

                <div className="mt-[clamp(58px,8vw,105px)] grid items-start gap-[clamp(30px,6vw,82px)] min-[901px]:grid-cols-[minmax(0,1.6fr)_minmax(260px,.72fr)] max-[900px]:grid-cols-1 max-[640px]:mt-[3.4375rem] max-[640px]:gap-[2.625rem]">
                    <figure className="relative">
                        <img
                            className="aspect-[1.18] w-full object-cover max-[640px]:aspect-[.94]"
                            src={media.pondPeople}
                            alt="Pessoa observando um viveiro com sensor flutuante"
                            width={1280}
                            height={720}
                            loading="lazy"
                        />
                        <figcaption className="absolute bottom-[0.9375rem] right-[0.9375rem] flex items-center gap-[0.4375rem] bg-[rgba(16,19,22,.72)] px-2.5 py-2 text-[0.6875rem] font-bold text-white max-[640px]:bottom-[0.625rem] max-[640px]:right-[0.625rem]">
                            <MapPin className="h-[0.875rem] w-[0.875rem] text-[#9ac7ff]" aria-hidden="true" /> Feira Nova, Pernambuco
                        </figcaption>
                    </figure>
                    <div className="grid gap-[2.8125rem] pt-[3.125rem] max-[900px]:grid-cols-2 max-[900px]:gap-[2.8125rem] max-[900px]:pt-0 max-[640px]:grid-cols-[1fr_.85fr] max-[640px]:gap-5">
                        <figure>
                            <img
                                className="aspect-[1.1] w-full object-cover max-[640px]:aspect-[.95]"
                                src={media.sensorInWater}
                                alt="Sensor flutuante SmartRural instalado em um viveiro"
                                width={1308}
                                height={750}
                                loading="lazy"
                            />
                            <figcaption className="mt-3 flex items-center gap-[0.4375rem] text-[0.6875rem] font-bold text-text">
                                Equipamento instalado na água
                            </figcaption>
                        </figure>
                        <div className="grid grid-cols-[90px_1fr] items-center gap-[1.125rem] border-t border-ink pt-6 max-[900px]:grid-cols-1 max-[900px]:border-t-0 max-[900px]:pt-0 max-[640px]:block">
                            <img
                                className="h-[4.5rem] w-[5.625rem] object-contain mix-blend-multiply max-[900px]:h-[6.875rem] max-[900px]:w-full max-[640px]:h-[5.625rem]"
                                src={media.sensor}
                                alt="Protótipo de sensor flutuante SmartRural"
                                width={2760}
                                height={2104}
                                loading="lazy"
                            />
                            <span className="text-[0.8125rem] font-bold leading-[1.5] text-text max-[640px]:mt-2.5 max-[640px]:block max-[640px]:text-xs">
                                Produto desenvolvido para estar perto da operação.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-[4.5rem] grid grid-cols-3 gap-6 max-[640px]:mt-[4.5rem]">
                    <figure>
                        <img
                            className="aspect-[1.32] w-full object-cover"
                            src={media.pondDetail}
                            alt="Aerador em um viveiro de aquicultura"
                            width={1280}
                            height={720}
                            loading="lazy"
                        />
                        <figcaption className="mt-3 flex items-center gap-[0.4375rem] text-[0.6875rem] font-bold text-text">
                            Condições reais da produção
                        </figcaption>
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
                        <figcaption className="mt-3 flex items-center gap-[0.4375rem] text-[0.6875rem] font-bold text-text">
                            Pesquisa aplicada e pessoas
                        </figcaption>
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
                        <figcaption className="mt-3 flex items-center gap-[0.4375rem] text-[0.6875rem] font-bold text-text">
                            Conhecimento que chega à operação
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}
