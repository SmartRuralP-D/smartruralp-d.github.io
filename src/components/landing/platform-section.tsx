import { Check, Monitor, Smartphone } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'

import { media, platformAccess } from '@/content/landing'
import { cn } from '@/lib/utils'

type PlatformFrameProps = ComponentProps<'div'> & {
    children: ReactNode
}

function PlatformFrame({ children, className, ...props }: PlatformFrameProps) {
    return (
        <div className={cn('border border-[#4b5660] bg-[#f7f9fa] shadow-[0_1.625rem_3.125rem_rgba(0,0,0,.25)]', className)} {...props}>
            {children}
        </div>
    )
}

function PlatformBrowserFrame() {
    return (
        <PlatformFrame className="absolute right-0 top-0 w-[83%] overflow-hidden max-[640px]:right-[-8%] max-[640px]:w-[108%]">
            <div className="inline-flex items-center gap-1.75 bg-inverse-soft px-3.5 py-2 text-[0.6875rem] font-extrabold text-[#d6e1ea]">
                <Monitor className="h-3.5 w-3.5 text-[#9bc7ff]" aria-hidden="true" /> Plataforma web
            </div>
            <img
                className="h-auto w-full"
                src={media.webDashboard}
                alt="Tela real da visão geral da plataforma web SmartRural"
                width={1857}
                height={959}
                loading="lazy"
            />
        </PlatformFrame>
    )
}

function PlatformMobileFrame() {
    return (
        <div className="absolute left-[2%] top-[16%] z-3 w-[min(13.75rem,19%)] max-[900px]:w-[min(10.9375rem,22%)] max-[640px]:left-[4%] max-[640px]:top-[25%] max-[640px]:w-[31%]">
            <PlatformFrame className="rounded-[1.0625rem] p-1.75">
                <img
                    className="w-full rounded-[0.6875rem]"
                    src={media.mobileDashboard}
                    alt="Tela real do aplicativo SmartRural com resumo da operação"
                    width={788}
                    height={1600}
                    loading="lazy"
                />
            </PlatformFrame>
            <span className="mt-3.25 inline-flex items-center gap-1.75 text-[0.6875rem] font-extrabold text-[#aebac4] max-[640px]:mt-2 max-[640px]:text-[0.625rem]">
                <Smartphone className="h-3.5 w-3.5 shrink-0 text-[#9bc7ff]" aria-hidden="true" /> Aplicativo mobile
            </span>
        </div>
    )
}

function PlatformHistoryFrame() {
    return (
        <PlatformFrame className="absolute bottom-[3%] left-[16%] z-2 w-[47%] -rotate-2 overflow-hidden max-[900px]:left-[14%] max-[900px]:w-[54%] max-[640px]:bottom-auto max-[640px]:left-[15%] max-[640px]:top-[48%] max-[640px]:w-[78%]">
            <img
                className="h-auto w-full"
                src={media.webChart}
                alt="Tela real de histórico e gráfico da plataforma web SmartRural"
                width={1854}
                height={914}
                loading="lazy"
            />
            <span className="absolute left-3.25 top-3.25 bg-[rgba(16,19,22,.83)] px-2 py-1.5 text-[0.625rem] font-bold max-[640px]:left-2.5 max-[640px]:top-2.5 max-[640px]:px-1.5 max-[640px]:py-1">
                Consulte o histórico
            </span>
        </PlatformFrame>
    )
}

function PlatformShowcase() {
    return (
        <div className="relative mt-[clamp(54px,8vw,104px)] min-h-150 max-[640px]:h-108 max-[640px]:min-h-0 min-[901px]:min-h-167.5">
            <PlatformBrowserFrame />
            <PlatformMobileFrame />
            <PlatformHistoryFrame />
        </div>
    )
}

function PlatformAccessList() {
    return (
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-[#343b42] pt-7 text-xs font-bold text-[#d6e1ea] max-[640px]:gap-x-6 max-[640px]:pt-5 max-[640px]:text-[0.6875rem]">
            {platformAccess.map((label) => (
                <span className="inline-flex items-center gap-2" key={label}>
                    <Check className="h-3.75 w-3.75 text-[#9bc7ff]" aria-hidden="true" /> {label}
                </span>
            ))}
        </div>
    )
}

export function PlatformSection() {
    return (
        <section id="plataforma" className="bg-inverse section-padding text-white">
            <div className="page-container">
                <div className="grid gap-8.5 min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] min-[901px]:items-end">
                    <div>
                        <h2 className="section-heading text-white">
                            Uma única visão da <em className="text-[#8fbcff]">sua operação.</em>
                        </h2>
                    </div>
                    <p className="max-w-97.5 text-[0.9375rem] leading-[1.7] text-[#b0bac2] min-[901px]:mb-1 min-[901px]:ml-auto">
                        Aplicativo e plataforma web fazem parte do mesmo ecossistema. Acesse as condições atuais, avisos, histórico e relatórios de onde
                        estiver.
                    </p>
                </div>
                <PlatformShowcase />
                <PlatformAccessList />
            </div>
        </section>
    )
}
