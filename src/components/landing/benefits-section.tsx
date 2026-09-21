import * as React from 'react'
import { Fragment } from 'react'
import { ArrowRight, ArrowUpRight, CalendarDays, Radio, Smartphone } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'
import { operationBenefits } from '@/content/landing'

const flowSteps: Array<[React.ElementType, string, string]> = [
    [Radio, 'No campo', 'Sensores acompanham informações importantes.'],
    [CalendarDays, 'Na SmartRural', 'Essas informações são organizadas.'],
    [Smartphone, 'No celular ou computador', 'Você acompanha sua operação.']
]

export function BenefitsSection() {
    return (
        <section id="operacao" className="bg-canvas section-padding">
            <div className="page-container">
                <div className="grid gap-[34px] min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] min-[901px]:items-start">
                    <div>
                        <SectionLabel>03 / NO DIA A DIA</SectionLabel>
                        <h2 className="section-heading">
                            Informação que ajuda a <em>acompanhar.</em>
                        </h2>
                    </div>
                    <p className="max-w-[390px] text-[15px] leading-[1.7] text-text min-[901px]:mb-1 min-[901px]:ml-auto">
                        O mais importante não é a tecnologia por trás. É conseguir ver, entender e agir sobre o que acontece na operação.
                    </p>
                </div>
                <div className="mt-[clamp(53px,8vw,104px)] border-t border-ink">
                    {operationBenefits.map(({ number, title, copy, icon: Icon }) => (
                        <article
                            className="grid min-h-[104px] grid-cols-[58px_48px_minmax(150px,1.1fr)_minmax(240px,1.2fr)_20px] items-center gap-[22px] border-b border-border transition-[padding,background] duration-180 hover:bg-surface hover:px-[15px] max-[640px]:min-h-[116px] max-[640px]:grid-cols-[34px_38px_1fr_16px] max-[640px]:gap-[10px] max-[640px]:hover:px-[5px]"
                            key={number}
                        >
                            <span className="text-muted max-[640px]:self-start max-[640px]:pt-[3px] max-[640px]:text-[10px]">{number}</span>
                            <div className="grid h-[38px] w-[38px] place-items-center rounded-pill border border-[#bdd5f5] text-brand max-[640px]:h-[34px] max-[640px]:w-[34px]">
                                <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
                            </div>
                            <h3 className="m-0 text-[19px] tracking-[-.04em] max-[640px]:self-end max-[640px]:text-base">{title}</h3>
                            <p className="m-0 max-w-[360px] text-[13px] leading-[1.55] text-text max-[640px]:col-span-2 max-[640px]:row-start-2 max-[640px]:self-start max-[640px]:pr-[5px] max-[640px]:text-xs">
                                {copy}
                            </p>
                            <ArrowUpRight className="h-[17px] w-[17px] text-brand max-[640px]:col-start-4 max-[640px]:row-start-1" aria-hidden="true" />
                        </article>
                    ))}
                </div>
                <div
                    className="mt-[54px] grid gap-[17px] bg-surface p-[22px] min-[641px]:mt-[75px] min-[641px]:grid-cols-[1fr_30px_1fr_30px_1fr] min-[641px]:gap-[26px] min-[641px]:p-8"
                    aria-label="Como a informação chega até você"
                >
                    {flowSteps.map(([Icon, label, text], i) => (
                        <Fragment key={label as string}>
                            <div className="grid grid-cols-[40px_1fr] items-center gap-x-3">
                                <span className="row-span-2 grid h-[38px] w-[38px] place-items-center rounded-pill border border-[#bdd5f5] text-brand">
                                    <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
                                </span>
                                <small className="text-[10px] font-extrabold uppercase tracking-[.1em] text-brand-strong">{label as string}</small>
                                <strong className="mt-[3px] text-[13px] leading-[1.45]">{text as string}</strong>
                            </div>
                            {i < 2 && (
                                <ArrowRight className="h-[17px] w-[17px] text-brand max-[640px]:justify-self-center max-[640px]:rotate-90" aria-hidden="true" />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}
