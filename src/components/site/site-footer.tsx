import { Brand } from '@/components/site/brand'
import { footerColumns } from '@/content/landing'
import { cn } from '@/lib/utils'

export function SiteFooter() {
    return (
        <footer id="sobre" className={cn('bg-inverse text-[#dbe3e8]')}>
            <div className="mx-auto w-[min(calc(100%-4rem),77.5rem)]">
                <div className="grid gap-[2.1875rem] py-20 pb-[4.625rem] [grid-template-columns:2.2fr_repeat(4,1fr)] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
                    <div>
                        <Brand inverted />
                        <p className="mt-[1.375rem] max-w-[13.75rem] text-[0.8125rem] leading-[1.6] text-[#87949d]">
                            Tecnologia para acompanhamento de operações rurais.
                        </p>
                    </div>
                    {footerColumns.map(({ title, links }) => (
                        <div className="grid justify-items-start content-start gap-[0.6875rem]" key={title}>
                            <h2 className="m-0 mb-[0.5625rem] text-[0.6875rem] font-extrabold uppercase tracking-[.1em] text-[#87949d]">{title}</h2>
                            {links.map(({ label, href }) => (
                                <a className="text-[0.8125rem] transition hover:text-[#9bc7ff]" href={href} key={label}>
                                    {label}
                                </a>
                            ))}
                        </div>
                    ))}
                    <div className="grid justify-items-start content-start gap-[0.6875rem]">
                        <h2 className="m-0 mb-[0.5625rem] text-[0.6875rem] font-extrabold uppercase tracking-[.1em] text-[#87949d]">Redes sociais</h2>
                        <span className="text-[0.8125rem]">Instagram ↗</span>
                        <span className="text-[0.8125rem]">LinkedIn ↗</span>
                        <span className="text-[0.8125rem]">YouTube ↗</span>
                    </div>
                </div>
                <div className="flex justify-between gap-5 border-t border-[#30383f] py-5 pb-[1.5625rem] text-[0.6875rem] text-[#87949d]">
                    <span>Recife, Pernambuco · Brasil</span>
                    <span>© 2026 SmartRural</span>
                </div>
            </div>
        </footer>
    )
}
