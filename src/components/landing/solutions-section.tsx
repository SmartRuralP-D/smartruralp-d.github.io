import { Droplets } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'
import { TextLink } from '@/components/site/text-link'
import { solutions } from '@/content/landing'

export function SolutionsSection() {
    const aquaculture = solutions.aquaculture
    const aviculture = solutions.aviculture

    return (
        <section id="solucoes" className="bg-surface section-padding">
            <div className="page-container">
                <div className="grid gap-8.5 min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] min-[901px]:items-end">
                    <div>
                        <SectionLabel>01 / ÁREAS DE ATUAÇÃO</SectionLabel>
                        <h2 className="section-heading">
                            Conheça nossas <em>soluções</em>
                        </h2>
                    </div>
                    <p className="max-w-97.5 text-[0.9375rem] leading-[1.7] text-text min-[901px]:mb-1 min-[901px]:ml-auto">
                        A SmartRural acompanha diferentes realidades do campo. A tecnologia se adapta à operação, não o contrário.
                    </p>
                </div>

                <div className="mt-[clamp(54px,8vw,108px)] grid items-start gap-[clamp(34px,6vw,90px)] min-[901px]:grid-cols-[minmax(0,1.45fr)_minmax(270px,.8fr)]">
                    <article className="group">
                        <div className="relative aspect-[1.57] overflow-hidden bg-inverse">
                            <img
                                className="h-full w-full object-cover transition-transform duration-650 ease-[cubic-bezier(.2,.75,.25,1)] group-hover:scale-[1.035]"
                                src={aquaculture.image}
                                alt={aquaculture.imageAlt}
                                width={1280}
                                height={720}
                                loading="lazy"
                            />
                            <span className="absolute bottom-4.25 left-4.5 z-2 inline-flex items-center gap-1.75 bg-[rgba(16,19,22,.7)] px-2.5 py-2 text-[0.6875rem] font-bold text-white backdrop-blur-[0.4375rem]">
                                <Droplets className="h-3.25 w-3.25 text-[#9ac7ff]" aria-hidden="true" /> {aquaculture.imageNote}
                            </span>
                        </div>
                        <div className="grid gap-6.5 border-t border-ink pt-6 min-[901px]:grid-cols-[1fr_1fr_.7fr] min-[901px]:items-end max-[640px]:gap-3.25 max-[640px]:pt-4.5">
                            <div>
                                <span className="text-xs text-brand">{aquaculture.number}</span>
                                <h3 className="mt-1.75 text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{aquaculture.title}</h3>
                            </div>
                            <p className="m-0 text-sm leading-[1.65] text-text">{aquaculture.copy}</p>
                            <TextLink href={aquaculture.linkHref}>{aquaculture.linkLabel}</TextLink>
                        </div>
                    </article>

                    <article className="group pt-[clamp(0px,5vw,80px)] max-[900px]:grid max-[900px]:grid-cols-[minmax(0,1fr)_minmax(240px,.8fr)] max-[900px]:items-end max-[900px]:gap-6.25 max-[640px]:block">
                        <div className="relative aspect-[.94] overflow-hidden bg-inverse max-[640px]:aspect-[1.05]">
                            <img
                                className="h-full w-full object-cover transition-transform duration-650 ease-[cubic-bezier(.2,.75,.25,1)] group-hover:scale-[1.035]"
                                src={aviculture.image}
                                alt={aviculture.imageAlt}
                                width={261}
                                height={193}
                                loading="lazy"
                            />
                            <span className="absolute bottom-4.25 left-4.5 z-2 bg-[rgba(16,19,22,.7)] px-2.5 py-2 text-[0.6875rem] font-bold text-white">
                                {aviculture.imageNote}
                            </span>
                        </div>
                        <div className="border-t border-ink pt-5.5 max-[900px]:border-t-0 max-[900px]:pt-0 max-[640px]:border-t max-[640px]:pt-4.5">
                            <span className="text-xs text-brand">{aviculture.number}</span>
                            <h3 className="mt-1.75 text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{aviculture.title}</h3>
                            <p className="m-0 text-sm leading-[1.65] text-text">{aviculture.copy}</p>
                            <TextLink href={aviculture.linkHref}>{aviculture.linkLabel}</TextLink>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
