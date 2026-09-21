import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { MonitoringVisualCarousel } from '@/components/landing/monitoring-visual'
import { heroMonitoringSlides } from '@/content/landing'

const AUTO_PLAY_INTERVAL = 30000 // 30 seconds

export function HeroSection() {
    return (
        <section id="inicio" className="bg-canvas pt-24 lg:pt-36 mb-5">
            <div className="page-container">
                <div className="grid items-end gap-9 pb-15.5 grid-cols-[minmax(0,9fr)_minmax(8.75rem,2fr)] max-[900px]:grid-cols-1">
                    <div>
                        <h1 className="mb-7 mt-6 max-w-230 text-[clamp(3.25rem,7.5vw,7.2rem)] font-semibold leading-[.96] tracking-display">
                            Sua solução para <em className="text-brand not-italic">monitoramento inteligente</em> em tempo real
                        </h1>
                        <p className="mb-0 max-w-150 text-[clamp(1rem,1.5vw,1.22rem)] leading-[1.65] text-text">
                            A SmartRural ajuda você a acompanhar informações importantes da sua operação pelo celular ou computador.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <a
                                className="inline-flex min-h-12.5 items-center justify-center rounded-control bg-brand px-4.5 text-[0.8125rem] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-strong"
                                href="#solucoes"
                            >
                                Conheça nossas soluções <ArrowUpRight className="ml-2.5 size-4.25" aria-hidden="true" />
                            </a>
                            <a
                                className="inline-flex min-h-12.5 items-center justify-center px-0 text-[0.8125rem] font-extrabold text-ink transition hover:translate-x-0.5 hover:text-brand"
                                href="#contato"
                            >
                                Fale com a SmartRural <ArrowRight className="ml-2.5 size-4.25" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
                <MonitoringVisualCarousel slides={heroMonitoringSlides} autoplayInterval={AUTO_PLAY_INTERVAL} />
            </div>
        </section>
    )
}
