import { ArrowDownRight } from 'lucide-react'

import { AviQualitySmartTag } from '@/components/landing/aviquality-smart-tag'
import { aviQualityMedia, aviQualitySectionLabels, managementSteps } from '@/content/aviquality'

export function AviQualityManagementSection() {
    return (
        <section id="virada" className="bg-surface section-padding">
            <div className="page-container">
                <div className="grid items-end gap-8.5 content:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] content:items-end">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{aviQualitySectionLabels.operation}</span>
                        <h2 className="section-heading">
                            O acompanhamento deixa de depender só da visita. <em>Ele passa a fazer parte do sistema.</em>
                        </h2>
                    </div>
                    <p className="mb-1 max-w-100 text-[0.9375rem] leading-[1.7] text-text">
                        O objetivo não é mudar o trabalho de quem está no aviário. É dar contexto para que a equipe perceba melhor o que está acontecendo.
                    </p>
                </div>

                <div className="mt-[clamp(54px,8vw,104px)] grid gap-10 min-[901px]:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] min-[901px]:gap-[clamp(40px,7vw,104px)]">
                    <div className="self-center">
                        <div className="border-y border-border">
                            {managementSteps.map((step) => (
                                <div
                                    key={step.number}
                                    className="grid gap-5 border-b border-border py-7 last:border-b-0 min-[641px]:grid-cols-[2.75rem_minmax(0,1fr)_1.25rem] min-[641px]:items-start"
                                >
                                    <span className="text-xs text-brand">{step.number}</span>
                                    <div>
                                        <h3 className="m-0 text-[clamp(1.25rem,2.2vw,1.7rem)] font-medium leading-[1.1] tracking-[-0.035em] text-ink">
                                            {step.title}
                                        </h3>
                                        <p className="m-0 mt-3 max-w-[28rem] text-sm leading-[1.65] text-text">{step.copy}</p>
                                    </div>
                                    <ArrowDownRight className="hidden size-4 text-brand min-[641px]:block" aria-hidden="true" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <figure className="relative overflow-hidden bg-canvas">
                        <img
                            className="h-[clamp(24rem,48vw,38rem)] w-full object-contain object-center"
                            src={aviQualityMedia.device}
                            alt="Dispositivo AviQuality branco com identificação SmartRural"
                            width={1536}
                            height={1728}
                            loading="lazy"
                        />
                        <figcaption className="absolute bottom-5 left-5 max-w-[19rem] bg-[rgba(16,19,22,.78)] px-3.5 py-3 text-sm leading-[1.5] text-white backdrop-blur-[0.4375rem]">
                            <span className="block text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#9ac7ff]">O produto no centro</span>
                            <span className="mt-1 block text-white/85">AviQuality acompanha informações do ambiente de produção.</span>
                        </figcaption>
                    </figure>
                </div>

                <div className="mt-[clamp(70px,10vw,140px)] grid items-center gap-10 bg-inverse px-7 py-10 text-white min-[901px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[901px]:gap-16 min-[901px]:px-14 min-[901px]:py-14">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9ac7ff]">Apoio no ponto de operação</span>
                        <h3 className="mt-4 text-[clamp(2rem,4vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.05em]">
                            Nem toda informação nasce no sensor.
                        </h3>
                        <p className="mt-5 max-w-[28rem] text-[0.9375rem] leading-[1.7] text-[#b0bac2]">
                            As Smart Tags aproximam o sistema do lugar onde a atividade acontece. Elas complementam o acompanhamento do ambiente com
                            identificação e acesso no campo.
                        </p>
                        <div className="mt-7 border-t border-[#343b42] pt-5 text-xs leading-[1.65] text-[#87949d]">
                            <span className="font-bold uppercase tracking-[0.16em] text-[#9ac7ff]">Modelo do produto</span>
                            <p className="mt-2 max-w-[24rem]">
                                A visualização 3D representa a tag física, com seu monograma, furo central, acabamento texturizado e espessura.
                            </p>
                        </div>
                    </div>
                    <AviQualitySmartTag />
                </div>
            </div>
        </section>
    )
}
