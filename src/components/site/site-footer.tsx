import { Brand } from '@/components/site/brand'
import { footerColumns } from '@/content/landing'

export function SiteFooter() {
    return (
        <footer id="sobre" className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand-block">
                        <Brand inverted />
                        <p>Tecnologia para acompanhamento de operações rurais.</p>
                    </div>
                    {footerColumns.map(({ title, links }) => (
                        <div className="footer-column" key={title}>
                            <h2>{title}</h2>
                            {links.map(({ label, href }) => (
                                <a href={href} key={label}>
                                    {label}
                                </a>
                            ))}
                        </div>
                    ))}
                    <div className="footer-column footer-social">
                        <h2>Redes sociais</h2>
                        <span>Instagram ↗</span>
                        <span>LinkedIn ↗</span>
                        <span>YouTube ↗</span>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>Recife, Pernambuco · Brasil</span>
                    <span>© 2026 SmartRural</span>
                </div>
            </div>
        </footer>
    )
}
