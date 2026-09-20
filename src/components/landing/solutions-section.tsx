import { Droplets } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'
import { TextLink } from '@/components/site/text-link'
import { solutions } from '@/content/landing'

export function SolutionsSection() {
    const aquaculture = solutions.aquaculture
    const aviculture = solutions.aviculture

    return (
        <section id="solucoes" className="bg-[var(--surface)] py-[clamp(86px,11vw,160px)]">
            <div className="mx-auto w-[min(calc(100%_-_64px),1240px)] max-[640px]:w-[min(calc(100%_-_40px),1240px)]">
                <div className="grid gap-[34px] min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] min-[901px]:items-end">
                    <div>
                        <SectionLabel>01 / ÁREAS DE ATUAÇÃO</SectionLabel>
                        <h2 className="mt-5 max-w-[800px] text-[clamp(2.65rem,5vw,5.4rem)] leading-[.99]">
                            Conheça nossas <em>soluções</em>
                        </h2>
                    </div>
                    <p className="max-w-[390px] text-[15px] leading-[1.7] text-[var(--text)] min-[901px]:mb-1 min-[901px]:ml-auto">
                        A SmartRural acompanha diferentes realidades do campo. A tecnologia se adapta à operação, não o contrário.
                    </p>
                </div>

                <div className="mt-[clamp(54px,8vw,108px)] grid items-start gap-[clamp(34px,6vw,90px)] min-[901px]:grid-cols-[minmax(0,1.45fr)_minmax(270px,.8fr)]">
                    <article className="group">
                        <div className="relative aspect-[1.57] overflow-hidden bg-[var(--dark)]">
                            <img
                                className="h-full w-full object-cover transition-transform duration-650 ease-[cubic-bezier(.2,.75,.25,1)] group-hover:scale-[1.035]"
                                src={aquaculture.image}
                                alt={aquaculture.imageAlt}
                                width={1280}
                                height={720}
                                loading="lazy"
                            />
                            <span className="absolute bottom-[17px] left-[18px] z-[2] inline-flex items-center gap-[7px] bg-[rgba(16,19,22,.7)] px-[10px] py-2 text-[11px] font-bold text-white backdrop-blur-[7px]">
                                <Droplets className="h-[13px] w-[13px] text-[#9ac7ff]" aria-hidden="true" /> {aquaculture.imageNote}
                            </span>
                        </div>
                        <div className="grid gap-[26px] border-t border-[var(--ink)] pt-6 min-[901px]:grid-cols-[1fr_1fr_.7fr] min-[901px]:items-end max-[640px]:gap-[13px] max-[640px]:pt-[18px]">
                            <div>
                                <span className="text-[12px] text-[var(--blue)]">{aquaculture.number}</span>
                                <h3 className="mt-[7px] text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{aquaculture.title}</h3>
                            </div>
                            <p className="m-0 text-[14px] leading-[1.65] text-[var(--text)]">{aquaculture.copy}</p>
                            <TextLink href={aquaculture.linkHref}>{aquaculture.linkLabel}</TextLink>
                        </div>
                    </article>

                    <article className="group pt-[clamp(0px,5vw,80px)] max-[900px]:grid max-[900px]:grid-cols-[minmax(0,1fr)_minmax(240px,.8fr)] max-[900px]:items-end max-[900px]:gap-[25px] max-[640px]:block">
                        <div className="relative aspect-[.94] overflow-hidden bg-[var(--dark)] max-[640px]:aspect-[1.05]">
                            <img
                                className="h-full w-full object-cover transition-transform duration-650 ease-[cubic-bezier(.2,.75,.25,1)] group-hover:scale-[1.035]"
                                src={aviculture.image}
                                alt={aviculture.imageAlt}
                                width={261}
                                height={193}
                                loading="lazy"
                            />
                            <span className="absolute bottom-[17px] left-[18px] z-[2] bg-[rgba(16,19,22,.7)] px-[10px] py-2 text-[11px] font-bold text-white">
                                {aviculture.imageNote}
                            </span>
                        </div>
                        <div className="border-t border-[var(--ink)] pt-[22px] max-[900px]:border-t-0 max-[900px]:pt-0 max-[640px]:border-t max-[640px]:pt-[18px]">
                            <span className="text-[12px] text-[var(--blue)]">{aviculture.number}</span>
                            <h3 className="mt-[7px] text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{aviculture.title}</h3>
                            <p className="m-0 text-[14px] leading-[1.65] text-[var(--text)]">{aviculture.copy}</p>
                            <TextLink href={aviculture.linkHref}>{aviculture.linkLabel}</TextLink>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
