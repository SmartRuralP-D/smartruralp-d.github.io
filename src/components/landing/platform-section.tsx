import { Check, Monitor, Smartphone } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'
import { media, platformAccess } from '@/content/landing'

export function PlatformSection() {
    return (
        <section id="plataforma" className="bg-inverse section-padding text-white">
            <div className="page-container">
                <div className="grid gap-[34px] min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] min-[901px]:items-end">
                    <div>
                        <SectionLabel>02 / PLATAFORMA SMARTRURAL</SectionLabel>
                        <h2 className="section-heading text-white">
                            Uma única visão da <em className="text-[#8fbcff]">sua operação.</em>
                        </h2>
                    </div>
                    <p className="max-w-[390px] text-[15px] leading-[1.7] text-[#b0bac2] min-[901px]:mb-1 min-[901px]:ml-auto">
                        Aplicativo e plataforma web fazem parte do mesmo ecossistema. Acesse as condições atuais, avisos, histórico e relatórios de onde
                        estiver.
                    </p>
                </div>
                <div className="relative mt-[clamp(54px,8vw,104px)] min-h-[600px] min-[901px]:min-h-[670px]">
                    <div className="absolute right-0 top-0 w-[83%] overflow-hidden border border-[#4b5660] bg-[#f7f9fa] shadow-[0_26px_50px_rgba(0,0,0,.25)] max-[640px]:-right-[12%] max-[640px]:w-[112%]">
                        <div className="inline-flex items-center gap-[7px] bg-inverse-soft px-[14px] py-2 text-[11px] font-extrabold text-[#d6e1ea]">
                            <Monitor className="h-[14px] w-[14px] text-[#9bc7ff]" aria-hidden="true" /> Plataforma web
                        </div>
                        <img
                            className="h-auto w-full"
                            src={media.webDashboard}
                            alt="Tela real da visão geral da plataforma web SmartRural"
                            width={1857}
                            height={959}
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute left-[2%] top-[16%] z-[3] w-[min(220px,19%)] max-[900px]:w-[min(175px,22%)] max-[640px]:left-0 max-[640px]:top-[33%] max-[640px]:w-[32%]">
                        <div className="rounded-[17px] border border-[#4b5660] bg-[#f7f9fa] p-[7px] shadow-[0_26px_50px_rgba(0,0,0,.25)]">
                            <img
                                className="w-full rounded-[11px]"
                                src={media.mobileDashboard}
                                alt="Tela real do aplicativo SmartRural com resumo da operação"
                                width={788}
                                height={1600}
                                loading="lazy"
                            />
                        </div>
                        <span className="mt-[13px] inline-flex items-center gap-[7px] text-[11px] font-extrabold text-[#aebac4]">
                            <Smartphone className="h-[14px] w-[14px] text-[#9bc7ff]" aria-hidden="true" /> Aplicativo mobile
                        </span>
                    </div>
                    <div className="absolute bottom-[3%] left-[16%] z-[2] w-[47%] rotate-[-2deg] overflow-hidden border border-[#4b5660] bg-[#f7f9fa] shadow-[0_26px_50px_rgba(0,0,0,.25)] max-[900px]:left-[14%] max-[900px]:w-[54%] max-[640px]:bottom-[4%] max-[640px]:left-[18%] max-[640px]:w-[78%]">
                        <img
                            className="h-auto w-full"
                            src={media.webChart}
                            alt="Tela real de histórico e gráfico da plataforma web SmartRural"
                            width={1854}
                            height={914}
                            loading="lazy"
                        />
                        <span className="absolute left-[13px] top-[13px] bg-[rgba(16,19,22,.83)] px-2 py-1.5 text-[10px] font-bold">Consulte o histórico</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-[#343b42] pt-7 text-[12px] font-bold text-[#d6e1ea] max-[640px]:gap-x-6 max-[640px]:pt-5 max-[640px]:text-[11px]">
                    {platformAccess.map((label) => (
                        <span className="inline-flex items-center gap-2" key={label}>
                            <Check className="h-[15px] w-[15px] text-[#9bc7ff]" aria-hidden="true" /> {label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
