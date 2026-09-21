import { ArrowUpRight } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'

export function ContactSection() {
    return (
        <section id="contato" className="bg-brand text-white">
            <div className="page-container grid min-h-[560px] grid-cols-[minmax(0,7fr)_minmax(230px,4fr)] items-end gap-[40px] py-[100px] max-[900px]:min-h-[570px] max-[900px]:py-[85px]">
                <div className="[&_p]:text-[#d5e7ff] [&_p_span]:bg-canvas">
                    <SectionLabel>07 / CONTATO</SectionLabel>
                    <h2 className="mt-[23px] text-[clamp(3.3rem,7.4vw,7.4rem)] leading-[0.94] max-[900px]:mt-[17px] max-[900px]:text-[clamp(3.15rem,15vw,5rem)]">
                        Vamos conversar sobre
                        <br />
                        <em>a sua operação?</em>
                    </h2>
                </div>
                <div className="pb-[7px] max-[900px]:pb-0">
                    <p className="mb-[32px] max-w-[300px] text-[16px] leading-[1.6] text-[#e3efff]">
                        Conheça as soluções SmartRural para acompanhar sua produção.
                    </p>
                    <a className="block w-fit border-b border-white/70 pb-[10px] text-[16px] font-extrabold" href="mailto:contato@smartrural.com.br">
                        Fale conosco <ArrowUpRight aria-hidden="true" />
                    </a>
                    <small className="mt-[17px] block text-[10px] text-[#cae1ff]">Contato provisório · canal a confirmar</small>
                </div>
            </div>
        </section>
    )
}
