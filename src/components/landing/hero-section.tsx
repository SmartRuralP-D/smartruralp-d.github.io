import { ArrowDownRight, ArrowRight, ArrowUpRight, Droplets, MapPin } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'
import { media } from '@/content/landing'

export function HeroSection() {
    return (
        <section id="inicio" className="bg-canvas pt-[164px]">
            <div className="page-container">
                <div className="grid items-end gap-9 pb-[62px] [grid-template-columns:minmax(0,9fr)_minmax(140px,2fr)] max-[900px]:grid-cols-1">
                    <div>
                        <SectionLabel>TECNOLOGIA APLICADA AO CAMPO</SectionLabel>
                        <h1 className="mb-7 mt-6 max-w-[920px] text-[clamp(3.25rem,7.5vw,7.2rem)] font-semibold leading-[.96] tracking-[-.055em]">
                            Sua solução para monitoramento em <em className="text-brand not-italic">tempo real</em>
                        </h1>
                        <p className="mb-0 max-w-[600px] text-[clamp(1rem,1.5vw,1.22rem)] leading-[1.65] text-text">
                            A SmartRural ajuda você a acompanhar informações importantes da sua operação de aquicultura e avicultura pelo celular ou computador.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <a
                                className="inline-flex min-h-[50px] items-center justify-center rounded-control bg-brand px-[18px] text-[13px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-strong"
                                href="#solucoes"
                            >
                                Conheça nossas soluções <ArrowUpRight className="ml-2.5 size-[17px]" aria-hidden="true" />
                            </a>
                            <a
                                className="inline-flex min-h-[50px] items-center justify-center px-0 text-[13px] font-extrabold text-ink transition hover:-translate-y-0.5 hover:text-brand"
                                href="#contato"
                            >
                                Fale com a SmartRural <ArrowRight className="ml-2.5 size-[17px]" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <div className="grid content-end justify-items-start gap-5 pb-1 max-[900px]:hidden">
                        <span className="text-xs font-extrabold tracking-[.08em] text-brand">01</span>
                        <p className="mb-0 max-w-[150px] text-[13px] leading-[1.5] text-muted">Do campo para perto de quem acompanha a operação.</p>
                        <a
                            className="grid size-[45px] place-items-center rounded-pill border border-border text-brand transition hover:bg-brand hover:text-white"
                            href="#solucoes"
                            aria-label="Conheça as soluções"
                        >
                            <ArrowDownRight className="size-[18px]" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <figure className="relative h-[clamp(400px,53vw,670px)] overflow-hidden bg-inverse">
                    <img
                        className="size-full object-cover transition duration-700 hover:scale-[1.025]"
                        src={media.hero}
                        alt="Viveiro de aquicultura com aeradores em funcionamento"
                        width={1280}
                        height={720}
                        fetchPriority="high"
                    />
                    <figcaption className="absolute bottom-6 left-7 z-10 flex flex-wrap gap-[22px] text-xs font-bold text-white">
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="size-3.5 text-[#9ac7ff]" aria-hidden="true" /> Feira Nova, PE
                        </span>
                        <span>Aquicultura</span>
                    </figcaption>
                    <div className="absolute right-8 top-8 z-10 grid w-[min(270px,34%)] gap-2 rounded-none border-l-[3px] border-brand bg-[rgba(16,19,22,.78)] p-[17px_18px] text-white backdrop-blur-lg max-[600px]:right-4 max-[600px]:top-4">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#bdd9ff]">
                            <Droplets className="size-3.5" aria-hidden="true" /> Viveiro 04
                        </span>
                        <strong className="grid gap-0.5 text-sm leading-[1.35]">
                            Temperatura da água <b className="text-[27px] tracking-[-.04em]">28°C</b>
                        </strong>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#d5e4dc]">
                            <i className="size-[7px] rounded-pill bg-[#4bbd7a]" aria-hidden="true" /> Normal
                        </span>
                    </div>
                </figure>
                <div className="flex items-center justify-between gap-5 pt-[18px] text-xs text-muted">
                    <span>Uma mesma base para diferentes contextos rurais</span>
                    <div className="flex gap-[25px]">
                        <span className="inline-flex items-center gap-1.5 font-bold text-text">
                            <i className="size-[7px] rounded-pill bg-[#4bbd7a]" aria-hidden="true" /> Aquicultura
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-text">
                            <i className="size-[7px] rounded-pill bg-[#4bbd7a]" aria-hidden="true" /> Avicultura
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
