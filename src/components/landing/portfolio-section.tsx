import { type PortfolioItem, portfolioItems } from '@/content/landing'

type PortfolioSectionProps = {
    items?: readonly PortfolioItem[]
}

export function PortfolioSection({ items = portfolioItems }: PortfolioSectionProps) {
    return (
        <section id="portfolio" className="bg-surface section-padding">
            <div className="page-container">
                <div className="grid items-end gap-8.5 min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] max-[900px]:grid-cols-1">
                    <div>
                        <h2 className="section-heading">
                            SmartRural <em>em ação.</em>
                        </h2>
                    </div>
                    <p className="mb-1 ml-auto max-w-97.5 text-[0.9375rem] leading-[1.7] text-text max-[900px]:ml-0 max-[640px]:text-sm">
                        Tecnologia, pesquisa e conhecimento aplicados para transformar a rotina no campo.
                    </p>
                </div>

                <div className="mt-[clamp(58px,8vw,105px)] grid grid-cols-3 gap-6 max-[640px]:mt-13.75">
                    {items.map((item) => (
                        <figure key={item.image}>
                            <img className="aspect-[1.32] w-full object-cover" src={item.image} alt={item.imageAlt} width={1280} height={720} loading="lazy" />
                            <figcaption className="mt-3 flex items-center gap-1.75 text-[0.6875rem] font-bold text-text">{item.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
