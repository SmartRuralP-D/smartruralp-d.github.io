import { ArrowUpRight } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'

export function ContactSection() {
    return (
        <section id="contato" className="contact-section">
            <div className="container contact-inner">
                <div>
                    <SectionLabel>07 / CONTATO</SectionLabel>
                    <h2>
                        Vamos conversar sobre
                        <br />
                        <em>a sua operação?</em>
                    </h2>
                </div>
                <div className="contact-copy">
                    <p>Conheça as soluções SmartRural para acompanhar sua produção.</p>
                    <a className="contact-link" href="mailto:contato@smartrural.com.br">
                        Fale conosco <ArrowUpRight aria-hidden="true" />
                    </a>
                    <small>Contato provisório · canal a confirmar</small>
                </div>
            </div>
        </section>
    )
}
