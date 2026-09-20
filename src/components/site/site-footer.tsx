import { Brand } from '@/components/site/brand'
import { footerColumns } from '@/content/landing'

export function SiteFooter() {
    return (
        <footer id="sobre" className="bg-[var(--dark)] text-[#dbe3e8]">
            <div className="mx-auto w-[min(calc(100%-64px),1240px)]">
                <div className="grid gap-[35px] py-20 pb-[74px] [grid-template-columns:2.2fr_repeat(4,1fr)] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
                    <div>
                        <Brand inverted />
                        <p className="mt-[22px] max-w-[220px] text-[13px] leading-[1.6] text-[#87949d]">Tecnologia para acompanhamento de operações rurais.</p>
                    </div>
                    {footerColumns.map(({ title, links }) => (
                        <div className="grid justify-items-start content-start gap-[11px]" key={title}>
                            <h2 className="m-0 mb-[9px] text-[11px] font-extrabold uppercase tracking-[.1em] text-[#87949d]">{title}</h2>
                            {links.map(({ label, href }) => (
                                <a className="text-[13px] transition hover:text-[#9bc7ff]" href={href} key={label}>
                                    {label}
                                </a>
                            ))}
                        </div>
                    ))}
                    <div className="grid justify-items-start content-start gap-[11px]">
                        <h2 className="m-0 mb-[9px] text-[11px] font-extrabold uppercase tracking-[.1em] text-[#87949d]">Redes sociais</h2>
                        <span className="text-[13px]">Instagram ↗</span>
                        <span className="text-[13px]">LinkedIn ↗</span>
                        <span className="text-[13px]">YouTube ↗</span>
                    </div>
                </div>
                <div className="flex justify-between gap-5 border-t border-[#30383f] py-5 pb-[25px] text-[11px] text-[#87949d]">
                    <span>Recife, Pernambuco · Brasil</span>
                    <span>© 2026 SmartRural</span>
                </div>
            </div>
        </footer>
    )
}
