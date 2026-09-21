import { Droplets } from 'lucide-react'

import { TextLink } from '@/components/site/text-link'
import { solutions } from '@/content/landing'
import { cn } from '@/lib/utils'

type Solution = (typeof solutions)[keyof typeof solutions]

type SolutionCardProps = {
    solution: Solution
    articleClassName?: string
    imageClassName: string
    detailsClassName: string
    headingClassName?: string
    imageWidth: number
    imageHeight: number
    showWaterIcon?: boolean
}

type SolutionImageProps = {
    solution: Solution
    className: string
    imageWidth: number
    imageHeight: number
    showWaterIcon?: boolean
}

type SolutionDetailsProps = {
    solution: Solution
    className: string
    headingClassName?: string | undefined
}

function SolutionImage({ solution, className, imageWidth, imageHeight, showWaterIcon = false }: SolutionImageProps) {
    return (
        <div className={cn('relative overflow-hidden bg-inverse', className)}>
            <img
                className="h-full w-full object-cover transition-transform duration-650 ease-[cubic-bezier(.2,.75,.25,1)] group-hover:scale-[1.035]"
                src={solution.image}
                alt={solution.imageAlt}
                width={imageWidth}
                height={imageHeight}
                loading="lazy"
            />
            <span
                className={cn(
                    'absolute bottom-4.25 left-4.5 z-2 bg-[rgba(16,19,22,.7)] px-2.5 py-2 text-[0.6875rem] font-bold text-white',
                    showWaterIcon && 'inline-flex items-center gap-1.75 backdrop-blur-[0.4375rem]'
                )}
            >
                {showWaterIcon ? (
                    <>
                        <Droplets className="h-3.25 w-3.25 text-[#9ac7ff]" aria-hidden="true" /> {solution.imageNote}
                    </>
                ) : (
                    solution.imageNote
                )}
            </span>
        </div>
    )
}

function SolutionDetails({ solution, className, headingClassName }: SolutionDetailsProps) {
    return (
        <div className={cn('border-t border-ink pt-6 max-[640px]:grid max-[640px]:gap-3.25 max-[640px]:pt-4.5', className)}>
            <div>
                <span className="text-xs text-brand">{solution.number}</span>
                <h3 className={cn('mt-1.75 text-[clamp(1.8rem,3vw,2.6rem)] leading-none', headingClassName)}>{solution.title}</h3>
            </div>
            <div className="grid max-[640px]:gap-3.25">
                <p className="m-0 text-sm leading-[1.65] text-text">{solution.copy}</p>
                <TextLink href={solution.linkHref}>{solution.linkLabel}</TextLink>
            </div>
        </div>
    )
}

function SolutionCard({
    solution,
    articleClassName,
    imageClassName,
    detailsClassName,
    headingClassName,
    imageWidth,
    imageHeight,
    showWaterIcon = false
}: SolutionCardProps) {
    return (
        <article className={cn('group', articleClassName)}>
            <SolutionImage solution={solution} className={imageClassName} imageWidth={imageWidth} imageHeight={imageHeight} showWaterIcon={showWaterIcon} />
            <SolutionDetails solution={solution} className={detailsClassName} headingClassName={headingClassName} />
        </article>
    )
}

export function SolutionsSection() {
    return (
        <section id="solucoes" className="bg-surface section-padding">
            <div className="page-container">
                <div>
                    <h2 className="section-heading">
                        Conheça nossas <em>soluções</em>
                    </h2>
                </div>

                <div className="mt-[clamp(54px,8vw,108px)] grid items-start gap-[clamp(34px,6vw,90px)] min-[901px]:grid-cols-[minmax(0,1.45fr)_minmax(270px,.8fr)]">
                    <SolutionCard
                        solution={solutions.aquaculture}
                        imageClassName="aspect-[1.57]"
                        detailsClassName="grid gap-6.5 min-[901px]:grid-cols-[1fr_1fr] min-[901px]:items-end"
                        imageWidth={1280}
                        imageHeight={720}
                        showWaterIcon
                    />

                    <SolutionCard
                        solution={solutions.aviculture}
                        articleClassName="pt-[clamp(0px,5vw,80px)] max-[900px]:grid max-[900px]:grid-cols-[minmax(0,1fr)_minmax(240px,.8fr)] max-[900px]:items-end max-[900px]:gap-6.25 max-[640px]:block"
                        imageClassName="aspect-[.94] max-[640px]:aspect-[1.05]"
                        detailsClassName="pt-5.5 max-[900px]:border-t-0 max-[900px]:pt-0 max-[640px]:border-t"
                        headingClassName="mb-3 max-[640px]:mb-0"
                        imageWidth={261}
                        imageHeight={193}
                    />
                </div>
            </div>
        </section>
    )
}
