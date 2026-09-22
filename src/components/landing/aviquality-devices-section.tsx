import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

import { aviQualityMedia, aviQualitySectionLabels } from '@/content/aviquality'

export function AviQualityDevicesSection() {
    return (
        <section id="produto" className="bg-canvas section-padding">
            <div className="page-container">
                <div className="grid items-end gap-8.5 content:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] content:items-end">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{aviQualitySectionLabels.product}</span>
                        <h2 className="section-heading">
                            Antes de aparecer no dashboard, o AviQuality está <em>no aviário.</em>
                        </h2>
                    </div>
                    <p className="mb-1 max-w-100 text-[0.9375rem] leading-[1.7] text-text">
                        A evidência começa no lugar onde o dado nasce: o dispositivo instalado e convivendo com a rotina da criação.
                    </p>
                </div>

                <div className="mt-[clamp(54px,8vw,104px)] grid items-start gap-8 min-[901px]:grid-cols-[minmax(0,1.55fr)_minmax(0,.72fr)] min-[901px]:gap-[clamp(34px,6vw,90px)]">
                    <figure>
                        <div className="relative overflow-hidden bg-inverse">
                            <img
                                className="h-[clamp(24rem,48vw,38rem)] w-full object-cover object-center"
                                src={aviQualityMedia.hero}
                                alt="Dispositivo AviQuality instalado no corredor de um aviário"
                                width={1536}
                                height={1024}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-inverse/75 via-transparent to-transparent" />
                            <figcaption className="absolute bottom-5 left-5 max-w-[22rem] bg-[rgba(16,19,22,.76)] px-3.5 py-3 text-sm leading-[1.5] text-white backdrop-blur-[0.4375rem]">
                                <span className="block text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#9ac7ff]">Instalação real</span>
                                <span className="mt-1 block text-white/85">O dispositivo acompanha a operação a partir do próprio ambiente produtivo.</span>
                            </figcaption>
                        </div>
                        <div className="mt-5 flex items-center justify-between border-t border-ink pt-4 text-xs font-bold text-text">
                            <span>Produto no lugar onde a criação acontece</span>
                            <ArrowDownRight className="size-4 text-brand" aria-hidden="true" />
                        </div>
                    </figure>

                    <figure className="pt-[clamp(0px,5vw,80px)]">
                        <div className="overflow-hidden bg-surface">
                            <img
                                className="h-[clamp(22rem,52vw,36rem)] w-full object-cover object-center"
                                src={aviQualityMedia.fieldDetail}
                                alt="Dispositivo AviQuality instalado próximo às aves"
                                width={899}
                                height={1599}
                                loading="lazy"
                            />
                        </div>
                        <figcaption className="mt-5 border-t border-border pt-5">
                            <span className="text-xs text-brand">02</span>
                            <p className="mt-2 max-w-[18rem] text-sm leading-[1.65] text-text">
                                O acompanhamento ganha sentido quando o produto está próximo da realidade que precisa ser observada.
                            </p>
                            <a
                                className="mt-4 inline-flex items-center gap-2 text-[0.8125rem] font-extrabold text-ink transition hover:text-brand"
                                href="#evidencia"
                            >
                                Ver a informação que chega <ArrowUpRight className="size-4 text-brand" aria-hidden="true" />
                            </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}
