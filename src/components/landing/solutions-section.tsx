import { ArrowUpRight, Bird, Check, Waves } from 'lucide-react'

import { solutions } from '@/content/landing'
import { cn } from '@/lib/utils'

type Solution = (typeof solutions)[keyof typeof solutions]

const solutionIcons = {
    aquatic: Waves,
    aviquality: Bird
} as const

type SolutionCardProps = {
    id: keyof typeof solutionIcons
    solution: Solution
}

function SolutionCard({ id, solution }: SolutionCardProps) {
    const Icon = solutionIcons[id]
    const isDark = solution.tone === 'dark'

    return (
        <article
            className={cn(
                'group flex min-h-105 flex-col justify-between border border-border p-6.5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card sm:p-8.5 lg:min-h-120 lg:p-10',
                isDark ? 'bg-inverse text-white' : 'bg-white text-ink'
            )}
        >
            <div>
                <div className="flex items-start justify-between gap-6">
                    <div className={cn('grid size-12 place-items-center border', isDark ? 'border-[#46505a] text-[#9bc7ff]' : 'border-brand/25 text-brand')}>
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <span className={cn('text-xs font-extrabold tracking-[0.12em]', isDark ? 'text-[#9bc7ff]' : 'text-brand')}>{solution.number}</span>
                </div>

                <p className={cn('mt-10 text-xs font-extrabold uppercase tracking-[0.14em]', isDark ? 'text-[#9bc7ff]' : 'text-brand')}>{solution.eyebrow}</p>
                <h3 className="mt-2 text-[clamp(2.2rem,4vw,3.5rem)] leading-none tracking-[-0.05em]">{solution.title}</h3>
                <p className={cn('mt-6 max-w-[35rem] text-sm leading-[1.75]', isDark ? 'text-[#c1cad1]' : 'text-text')}>{solution.copy}</p>
            </div>

            <div className="mt-10">
                <ul className={cn('grid gap-3 border-t pt-5 text-xs font-bold sm:grid-cols-3', isDark ? 'border-[#46505a]' : 'border-border')}>
                    {solution.capabilities.map((capability) => (
                        <li className="flex items-start gap-2" key={capability}>
                            <Check className={cn('mt-0.5 size-3.5 shrink-0', isDark ? 'text-[#9bc7ff]' : 'text-brand')} aria-hidden="true" />
                            <span>{capability}</span>
                        </li>
                    ))}
                </ul>
                <a
                    className={cn(
                        'group/link mt-7 inline-flex items-center gap-2.5 text-xs font-extrabold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                        isDark ? 'text-white hover:text-[#9bc7ff]' : 'text-brand-strong hover:text-brand'
                    )}
                    href={solution.linkHref}
                >
                    {solution.linkLabel}
                    <ArrowUpRight
                        className="size-3.75 transition-transform duration-200 group-hover/link:-translate-y-0.75 group-hover/link:translate-x-0.75"
                        aria-hidden="true"
                    />
                </a>
            </div>
        </article>
    )
}

export function SolutionsSection() {
    return (
        <section id="solucoes" className="bg-surface section-padding">
            <div className="page-container">
                <div className="grid gap-8.5 content:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] content:items-end">
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand">Duas frentes, uma plataforma</p>
                        <h2 className="section-heading">
                            Soluções feitas para o <em>campo.</em>
                        </h2>
                    </div>
                    <p className="max-w-100 text-[0.9375rem] leading-[1.7] text-text content:mb-1 content:ml-auto">
                        Escolha a orientação que combina com a sua operação. Aquatic e Aviquality organizam os dados essenciais para acompanhar a produção com
                        mais clareza e segurança.
                    </p>
                </div>

                <div className="mt-[clamp(54px,8vw,104px)] grid gap-5.5 lg:grid-cols-2">
                    <SolutionCard id="aquatic" solution={solutions.aquatic} />
                    <SolutionCard id="aviquality" solution={solutions.aviquality} />
                </div>
            </div>
        </section>
    )
}
