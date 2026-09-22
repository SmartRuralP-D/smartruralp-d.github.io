import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { aviQualityMedia, aviQualitySectionLabels } from '@/content/aviquality'

export function AviQualityHeroSection() {
    return (
        <section id="rotina" className="bg-canvas mb-5 pb-6 pt-24 lg:pt-36">
            <div className="page-container">
                <div className="grid items-end gap-9 pb-15.5 min-[901px]:grid-cols-[minmax(0,8fr)_minmax(15rem,3fr)]">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{aviQualitySectionLabels.overview}</span>
                        <h1 className="mb-7 mt-6 max-w-230 text-[clamp(3.25rem,7.5vw,7.2rem)] font-semibold leading-[.96] tracking-display text-ink">
                            O aviário muda o tempo todo. <em className="text-brand not-italic">Você precisa acompanhar.</em>
                        </h1>
                    </div>
                    <p className="mb-1 max-w-[21rem] text-[clamp(1rem,1.5vw,1.22rem)] leading-[1.65] text-text">
                        O manejo acontece em muitos pontos ao mesmo tempo. Uma conferência pontual nem sempre mostra o que mudou depois.
                    </p>
                </div>

                <figure className="relative overflow-hidden bg-inverse">
                    <img
                        className="h-[clamp(24rem,50vw,39rem)] w-full object-cover object-center"
                        src={aviQualityMedia.operation}
                        alt="Interior de um aviário com fileiras de criação e corredor de operação"
                        width={1920}
                        height={1080}
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse/80 via-transparent to-inverse/5" />
                    <figcaption className="absolute bottom-6 left-7 max-w-[25rem] bg-[rgba(16,19,22,.76)] px-4 py-3 text-sm leading-[1.5] text-white backdrop-blur-[0.4375rem] max-[600px]:bottom-4 max-[600px]:left-4 max-[600px]:right-4 max-[600px]:text-xs">
                        <span className="block text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#9ac7ff]">A realidade do manejo</span>
                        <span className="mt-1 block text-white/85">A operação continua mesmo quando você não está em cada ponto do aviário.</span>
                    </figcaption>
                </figure>

                <div className="flex flex-wrap items-center gap-5 border-b border-border py-8">
                    <a
                        className="inline-flex min-h-[3.125rem] items-center justify-center rounded-control bg-brand px-[1.125rem] text-[0.8125rem] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-strong"
                        href="#virada"
                    >
                        Ver como acompanhar <ArrowUpRight className="ml-2.5 size-4.25" aria-hidden="true" />
                    </a>
                    <a
                        className="inline-flex min-h-[3.125rem] items-center justify-center text-[0.8125rem] font-extrabold text-ink transition hover:translate-x-0.5 hover:text-brand"
                        href="#contato"
                    >
                        Falar sobre a operação <ArrowRight className="ml-2.5 size-4.25" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}
