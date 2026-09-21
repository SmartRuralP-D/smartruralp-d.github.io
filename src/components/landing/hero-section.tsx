import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react'

import { MonitoringVisualCarousel } from '@/components/landing/monitoring-visual'
import { heroMonitoringSlides } from '@/content/landing'

export function HeroSection() {
    return (
        <section id="inicio" className="bg-canvas pt-24 lg:pt-36">
            <div className="page-container">
                <div className="grid items-end gap-9 pb-15.5 grid-cols-[minmax(0,9fr)_minmax(8.75rem,2fr)] max-[900px]:grid-cols-1">
                    <div>
                        <h1 className="mb-7 mt-6 max-w-230 text-[clamp(3.25rem,7.5vw,7.2rem)] font-semibold leading-[.96] tracking-display">
                            Sua solução para monitoramento em <em className="text-brand not-italic">tempo real</em>
                        </h1>
                        <p className="mb-0 max-w-150 text-[clamp(1rem,1.5vw,1.22rem)] leading-[1.65] text-text">
                            A SmartRural ajuda você a acompanhar informações importantes da sua operação de aquicultura e avicultura pelo celular ou computador.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <a
                                className="inline-flex min-h-12.5 items-center justify-center rounded-control bg-brand px-4.5 text-[0.8125rem] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-strong"
                                href="#solucoes"
                            >
                                Conheça nossas soluções <ArrowUpRight className="ml-2.5 size-4.25" aria-hidden="true" />
                            </a>
                            <a
                                className="inline-flex min-h-12.5 items-center justify-center px-0 text-[0.8125rem] font-extrabold text-ink transition hover:-translate-y-0.5 hover:text-brand"
                                href="#contato"
                            >
                                Fale com a SmartRural <ArrowRight className="ml-2.5 size-4.25" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <div className="grid content-end justify-items-start gap-5 pb-1 max-[900px]:hidden">
                        <span className="text-xs font-extrabold tracking-[.08em] text-brand">01</span>
                        <p className="mb-0 max-w-37.5 text-[0.8125rem] leading-normal text-muted">Do campo para perto de quem acompanha a operação.</p>
                        <a
                            className="grid size-11.25 place-items-center rounded-pill border border-border text-brand transition hover:bg-brand hover:text-white"
                            href="#solucoes"
                            aria-label="Conheça as soluções"
                        >
                            <ArrowDownRight className="size-4.5" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <MonitoringVisualCarousel slides={heroMonitoringSlides} />
            </div>
        </section>
    )
}
