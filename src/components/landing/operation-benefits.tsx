import { ArrowUpRight } from 'lucide-react'

import { operationBenefits } from '@/content/landing'

type OperationBenefit = (typeof operationBenefits)[number]

function OperationBenefitItem({ number, title, copy, icon: Icon }: OperationBenefit) {
    return (
        <article
            className="grid min-h-26 grid-cols-[58px_48px_minmax(150px,1.1fr)_minmax(240px,1.2fr)_20px] items-center gap-5.5 border-b border-border transition-[padding,background] duration-180 hover:bg-surface hover:px-3.75 max-[640px]:min-h-29 max-[640px]:grid-cols-[34px_38px_minmax(0,1fr)_16px] max-[640px]:gap-2.5 max-[640px]:py-4 max-[640px]:hover:px-1.25"
            key={number}
        >
            <span className="text-muted max-[640px]:self-start max-[640px]:pt-0.75 max-[640px]:text-[0.625rem]">{number}</span>
            <div className="grid h-9.5 w-9.5 place-items-center rounded-pill border border-[#bdd5f5] text-brand max-[640px]:h-8.5 max-[640px]:w-8.5">
                <Icon className="h-4.25 w-4.25" aria-hidden="true" />
            </div>
            <h3 className="m-0 min-w-0 text-[1.1875rem] tracking-[-.04em] max-[640px]:self-start max-[640px]:pt-0.5 max-[640px]:text-base">{title}</h3>
            <p className="m-0 max-w-90 text-[0.8125rem] leading-[1.55] text-text max-[640px]:col-span-2 max-[640px]:col-start-2 max-[640px]:row-start-2 max-[640px]:self-start max-[640px]:pr-1.25 max-[640px]:text-xs">
                {copy}
            </p>
            <ArrowUpRight className="h-4.25 w-4.25 text-brand max-[640px]:col-start-4 max-[640px]:row-start-1" aria-hidden="true" />
        </article>
    )
}

export function OperationBenefits() {
    return (
        <div className="mt-[clamp(53px,8vw,104px)] border-t border-ink">
            {operationBenefits.map((benefit) => (
                <OperationBenefitItem key={benefit.number} {...benefit} />
            ))}
        </div>
    )
}
