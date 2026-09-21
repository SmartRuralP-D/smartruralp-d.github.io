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
                <div className="grid gap-8.5 min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] min-[901px]:items-start">
                    <div>
                        <SectionLabel>03 / NO DIA A DIA</SectionLabel>
                        <h2 className="section-heading">
                            Informação que ajuda a <em>acompanhar.</em>
                        </h2>
                    </div>
                    <p className="max-w-97.5 text-[0.9375rem] leading-[1.7] text-text min-[901px]:mb-1 min-[901px]:ml-auto">
                        O mais importante não é a tecnologia por trás. É conseguir ver, entender e agir sobre o que acontece na operação.
                    </p>
                </div>
                <div className="mt-[clamp(53px,8vw,104px)] border-t border-ink">
                    {operationBenefits.map(({ number, title, copy, icon: Icon }) => (
                        <article
                            className="grid min-h-26 grid-cols-[58px_48px_minmax(150px,1.1fr)_minmax(240px,1.2fr)_20px] items-center gap-5.5 border-b border-border transition-[padding,background] duration-180 hover:bg-surface hover:px-3.75 max-[640px]:min-h-29 max-[640px]:grid-cols-[34px_38px_1fr_16px] max-[640px]:gap-2.5 max-[640px]:hover:px-1.25"
                            key={number}
                        >
                            <span className="text-muted max-[640px]:self-start max-[640px]:pt-0.75 max-[640px]:text-[0.625rem]">{number}</span>
                            <div className="grid h-9.5 w-9.5 place-items-center rounded-pill border border-[#bdd5f5] text-brand max-[640px]:h-8.5 max-[640px]:w-8.5">
                                <Icon className="h-4.25 w-4.25" aria-hidden="true" />
                            </div>
                            <h3 className="m-0 text-[1.1875rem] tracking-[-.04em] max-[640px]:self-end max-[640px]:text-base">{title}</h3>
                            <p className="m-0 max-w-90 text-[0.8125rem] leading-[1.55] text-tex_t max-[640px]:col-span-2 max-[640px]:row-start-2 max-[640px]:self-start max-[640px]:pr-1.25 max-[640px]:text-xs">
                                {copy}
                            </p>
                            <ArrowUpRight className="h-4.25 w-4.25 text-brand max-[640px]:col-start-4 max-[640px]:row-start-1" aria-hidden="true" />
                        </article>
                    ))}
                </div>
                <div
                    className="mt-13.5 grid gap-4.25 bg-surface p-5.5 min-[641px]:mt-18.75 min-[641px]:grid-cols-[1fr_30px_1fr_30px_1fr] min-[641px]:gap-6.5 min-[641px]:p-8"
                    aria-label="Como a informação chega até você"
                >
                    {flowSteps.map(([Icon, label, text], i) => (
                        <Fragment key={label as string}>
                            <div className="grid grid-cols-[40px_1fr] items-center gap-x-3">
                                <span className="row-span-2 grid h-9.5 w-9.5 place-items-center rounded-pill border border-[#bdd5f5] text-brand">
                                    <Icon className="h-4.25 w-4.25" aria-hidden="true" />
                                </span>
                                <small className="text-[0.625rem] font-extrabold uppercase tracking-widest text-brand-strong">{label as string}</small>
                                <strong className="mt-0.75 text-[0.8125rem] leading-[1.45]">{text as string}</strong>
                            </div>
                            {i < 2 && (
                                <ArrowRight className="h-4.25 w-4.25 text-brand max-[640px]:justify-self-center max-[640px]:rotate-90" aria-hidden="true" />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}
