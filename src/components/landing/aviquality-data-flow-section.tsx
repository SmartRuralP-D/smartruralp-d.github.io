import { Check, FileChartColumn, LineChart, Monitor } from 'lucide-react'

import { aviQualityMedia, aviQualitySectionLabels, informationBenefits } from '@/content/aviquality'

export function AviQualityDataFlowSection() {
    return (
        <section id="evidencia" className="bg-inverse section-padding text-white">
            <div className="page-container">
                <div className="grid items-end gap-8.5 content:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] content:items-end">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ac7ff]">{aviQualitySectionLabels.data}</span>
                        <h2 className="section-heading text-white">
                            O que acontece no aviário chega até você como <em className="text-[#8fbcff]">informação.</em>
                        </h2>
                    </div>
                    <p className="mb-1 max-w-97.5 text-[0.9375rem] leading-[1.7] content:mb-1 content:ml-auto text-[#b0bac2]">
                        O valor do acompanhamento aparece quando o ambiente, o dispositivo e o sistema contam a mesma história — com dados que podem ser
                        consultados e comparados.
                    </p>
                </div>

                <div className="mt-[clamp(54px,8vw,104px)] grid gap-6 min-[1001px]:grid-cols-[minmax(0,1.25fr)_minmax(20rem,.75fr)] min-[1001px]:items-start">
                    <figure className="m-0 overflow-hidden border border-[#4b5660] bg-[#f7f9fa] shadow-[0_1.625rem_3.125rem_rgba(0,0,0,.25)]">
                        <div className="flex items-center justify-between bg-inverse-soft px-4 py-3 text-[0.6875rem] font-extrabold text-[#d6e1ea]">
                            <span className="inline-flex items-center gap-2">
                                <Monitor className="size-3.5 text-[#9bc7ff]" aria-hidden="true" /> Plataforma web
                            </span>
                            <span className="text-[#9bc7ff]">visão da operação</span>
                        </div>
                        <img
                            className="block h-auto w-full"
                            src={aviQualityMedia.webDashboard}
                            alt="Tela da plataforma web SmartRural com a visão geral de várias unidades"
                            width={1857}
                            height={959}
                            loading="lazy"
                        />
                        <figcaption className="border-t border-[#dce2e8] px-4 py-3 text-xs leading-[1.55] text-[#41505e]">
                            O sistema reúne as unidades para que a equipe enxergue a operação em um só lugar.
                        </figcaption>
                    </figure>

                    <figure className="m-0 overflow-hidden border border-[#4b5660] bg-[#f7f9fa] shadow-[0_1.625rem_3.125rem_rgba(0,0,0,.25)]">
                        <div className="flex items-center justify-between bg-inverse-soft px-4 py-3 text-[0.6875rem] font-extrabold text-[#d6e1ea]">
                            <span className="inline-flex items-center gap-2">
                                <LineChart className="size-3.5 text-[#9bc7ff]" aria-hidden="true" /> Análise temporal
                            </span>
                            <span className="text-[#9bc7ff]">últimas 24 horas</span>
                        </div>
                        <img
                            className="block h-auto w-full"
                            src={aviQualityMedia.smartGraph}
                            alt="Gráfico de análise temporal da temperatura do ar na plataforma SmartRural"
                            width={2048}
                            height={1152}
                            loading="lazy"
                        />
                        <figcaption className="border-t border-[#dce2e8] px-4 py-3 text-xs leading-[1.55] text-[#41505e]">
                            O histórico ajuda a perceber variações, comparar períodos e decidir quando uma condição merece atenção.
                        </figcaption>
                    </figure>
                </div>

                <div className="mt-10 border-t border-[#343b42] pt-8">
                    <div className="grid gap-7 min-[801px]:grid-cols-[minmax(13rem,.8fr)_minmax(0,2fr)] min-[1001px]:gap-14">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ac7ff]">O que essa informação permite</span>
                            <p className="mt-4 max-w-[18rem] text-sm leading-[1.65] text-[#b0bac2]">
                                A plataforma não substitui o manejo. Ela dá contexto para a equipe acompanhar a criação com mais clareza.
                            </p>
                        </div>
                        <div className="grid border-t border-[#343b42] min-[601px]:grid-cols-2">
                            {informationBenefits.map((benefit) => (
                                <div key={benefit.number} className="flex gap-3 border-b border-[#343b42] py-5 min-[601px]:even:pl-7">
                                    <span className="text-xs text-[#9ac7ff]">{benefit.number}</span>
                                    <div>
                                        <h3 className="m-0 text-sm font-bold text-white">{benefit.title}</h3>
                                        <p className="m-0 mt-2 text-xs leading-[1.6] text-[#b0bac2]">{benefit.copy}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold text-[#d6e1ea]">
                    {['No aviário', 'No dashboard', 'No histórico da operação'].map((label) => (
                        <span key={label} className="inline-flex items-center gap-2">
                            <Check className="size-3.75 text-[#9bc7ff]" aria-hidden="true" /> {label}
                        </span>
                    ))}
                    <span className="inline-flex items-center gap-2">
                        <FileChartColumn className="size-3.75" aria-hidden="true" /> informação que pode ser consultada
                        <Check className="size-3.75 text-[#9bc7ff]" aria-hidden="true" />
                    </span>
                </div>
            </div>
        </section>
    )
}
