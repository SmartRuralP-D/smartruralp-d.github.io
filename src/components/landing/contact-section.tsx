import { ArrowUpRight } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'

export function ContactSection() {
    return (
        <section id="contato" className="bg-[var(--blue)] text-white">
            <div className="mx-auto w-[min(calc(100%-64px),1240px)] grid min-h-[560px] grid-cols-[minmax(0,7fr)_minmax(230px,4fr)] items-end gap-[40px] py-[100px] max-[900px]:min-h-[570px] max-[900px]:py-[85px]">
                <div className="[&_p]:text-[#d5e7ff] [&_p_span]:bg-white">
                    <SectionLabel>07 / CONTATO</SectionLabel>
                    <h2 className="mt-[23px] text-[clamp(3.3rem,7.4vw,7.4rem)] leading-[0.94] max-[900px]:mt-[17px] max-[900px]:text-[clamp(3.15rem,15vw,5rem)]">
                        Vamos conversar sobre
                        <br />
                        <em>a sua operação?</em>
                    </h2>
                </div>
                <div className="pb-[7px] max-[900px]:pb-0 [&_p]:mb-[32px] [&_p]:max-w-[300px] [&_p]:text-[16px] [&_p]:leading-[1.6] [&_p]:text-[#e3efff] [&_a]:block [&_a]:w-fit [&_a]:border-b [&_a]:border-white/70 [&_a]:pb-[10px] [&_a]:text-[16px] [&_a]:font-extrabold [&_small]:mt-[17px] [&_small]:block [&_small]:text-[10px] [&_small]:text-[#cae1ff]">
                    <p>Conheça as soluções SmartRural para acompanhar sua produção.</p>
                    <a className="block w-fit border-b border-white/70 pb-[10px] text-[16px] font-extrabold" href="mailto:contato@smartrural.com.br">
                        Fale conosco <ArrowUpRight aria-hidden="true" />
                    </a>
                    <small>Contato provisório · canal a confirmar</small>
                </div>
            </div>
        </section>
    )
}
