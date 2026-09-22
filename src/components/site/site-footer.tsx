import type { ReactNode } from 'react'

import { Brand } from '@/components/site/brand'
import { footerColumns } from '@/content/landing'
import { cn } from '@/lib/utils'

export function SiteFooter({
    brand = <Brand inverted />,
    description = 'Tecnologia para acompanhamento de operações rurais.',
    columns = footerColumns,
    footerId = 'sobre'
}: {
    brand?: ReactNode
    description?: string
    columns?: readonly { title: string; links: readonly { label: string; href: string }[] }[]
    footerId?: string
}) {
    return (
        <footer id={footerId} className={cn('bg-inverse text-[#dbe3e8]')}>
            <div className="mx-auto w-[min(calc(100%-4rem),77.5rem)]">
                <div className="grid gap-8.75 py-20 pb-18.5 grid-cols-[2.2fr_repeat(4,1fr)] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
                    <div>
                        {brand}
                        <p className="mt-5.5 max-w-55 text-[0.8125rem] leading-[1.6] text-[#87949d]">{description}</p>
                    </div>
                    {columns.map(({ title, links }) => (
                        <div className="grid justify-items-start content-start gap-2.75" key={title}>
                            <h2 className="m-0 mb-2.25 text-[0.6875rem] font-extrabold uppercase tracking-widest text-[#87949d]">{title}</h2>
                            {links.map(({ label, href }) => (
                                <a className="text-[0.8125rem] transition hover:text-[#9bc7ff]" href={href} key={label}>
                                    {label}
                                </a>
                            ))}
                        </div>
                    ))}
                    <div className="grid justify-items-start content-start gap-2.75">
                        <h2 className="m-0 mb-2.25 text-[0.6875rem] font-extrabold uppercase tracking-widest text-[#87949d]">Redes sociais</h2>
                        <a
                            className="text-[0.8125rem] transition hover:text-[#9bc7ff]! hover:underline! hover:decoration-[#9bc7ff]"
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram ↗
                        </a>
                    </div>
                </div>
                <div className="flex justify-between gap-5 border-t border-[#30383f] py-5 pb-6.25 text-[0.6875rem] text-[#87949d]">
                    <span>Recife, Pernambuco · Brasil</span>
                    <span>© 2026 SmartRural</span>
                </div>
            </div>
        </footer>
    )
}
