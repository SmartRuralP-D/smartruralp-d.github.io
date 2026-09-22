import { Bell, Check, Monitor, Smartphone } from 'lucide-react'
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
        <PlatformFrame className="absolute right-0 top-0 w-[83%] overflow-hidden max-md:relative max-md:order-1 max-md:right-auto max-md:top-auto max-md:w-full max-phone:right-auto max-phone:w-full">
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
        <div className="absolute left-[2%] top-[16%] z-3 w-[min(13.75rem,19%)] max-content:w-[min(10.9375rem,22%)] max-md:relative max-md:order-2 max-md:left-auto max-md:top-auto max-md:w-[min(13.75rem,42%)] max-phone:left-auto max-phone:top-auto max-phone:w-[min(13.75rem,42%)]">
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
            <span className="mt-3.25 inline-flex items-center gap-1.75 text-[0.6875rem] font-extrabold text-[#aebac4] max-phone:mt-2 max-phone:text-[0.625rem]">
                <Smartphone className="h-3.5 w-3.5 shrink-0 text-[#9bc7ff]" aria-hidden="true" /> Aplicativo mobile
            </span>
        </div>
    )
}

function PlatformWhatsappFrame() {
    return (
        <div className="absolute bottom-0 right-0 z-3 w-[min(13.75rem,19%)] max-content:right-0 max-content:w-[min(10.9375rem,22%)] max-md:relative max-md:order-2 max-md:right-auto max-md:bottom-auto max-md:w-[min(13.75rem,42%)] max-phone:right-auto max-phone:bottom-auto max-phone:w-[min(13.75rem,42%)]">
            <PlatformFrame className="rounded-[1.0625rem] p-1.75">
                <img
                    className="w-full rounded-[0.6875rem]"
                    src={media.whatsappAlert}
                    alt="Alertas de monitoramento SmartRural recebidos pelo WhatsApp"
                    width={1170}
                    height={2292}
                    loading="lazy"
                />
            </PlatformFrame>
            <span className="mt-3.25 inline-flex items-center gap-1.75 text-[0.6875rem] font-extrabold text-[#aebac4] max-phone:mt-2 max-phone:text-[0.625rem]">
                <Bell className="h-3.5 w-3.5 shrink-0 text-[#9bc7ff]" aria-hidden="true" /> Alertas via WhatsApp
            </span>
        </div>
    )
}

function PlatformShowcase() {
    return (
        <div className="relative mt-[clamp(54px,8vw,104px)] min-h-150 max-content:h-108 max-content:min-h-0 max-md:flex max-md:flex-wrap max-md:items-start max-md:justify-center max-md:gap-x-5 max-md:gap-y-4 max-md:h-auto max-md:min-h-0 max-phone:h-auto">
            <PlatformBrowserFrame />
            <PlatformMobileFrame />
            <PlatformWhatsappFrame />
        </div>
    )
}

function PlatformAccessList() {
    return (
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-[#343b42] pt-7 text-xs font-bold text-[#d6e1ea] max-phone:gap-x-6 max-phone:pt-5 max-phone:text-[0.6875rem]">
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
                <div className="grid gap-8.5 content:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] content:items-end">
                    <div>
                        <h2 className="section-heading text-white">
                            Uma única visão da <em className="text-[#8fbcff]">sua operação.</em>
                        </h2>
                    </div>
                    <p className="max-w-97.5 text-[0.9375rem] leading-[1.7] text-[#b0bac2] content:mb-1 content:ml-auto">
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
