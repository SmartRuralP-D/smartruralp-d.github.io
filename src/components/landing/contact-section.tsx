import { ArrowUpRight } from 'lucide-react'

export function ContactSection() {
    return (
        <section id="contato" className="bg-brand text-white">
            <div className="page-container grid  grid-cols-[minmax(0,7fr)_minmax(230px,4fr)] items-end gap-10 py-25 max-[900px]:grid-cols-1 max-[900px]:items-start max-[900px]:gap-10 max-[900px]:min-h-142.5 max-[900px]:py-21.25">
                <div className="[&_p]:text-[#d5e7ff] [&_p_span]:bg-canvas">
                    <h2 className="mt-5.75 text-[clamp(3.3rem,7.4vw,7.4rem)] leading-[0.94] max-[900px]:mt-4.25 max-[900px]:text-[clamp(3.15rem,15vw,5rem)]">
                        Vamos conversar sobre
                        <br />
                        <em>a sua operação?</em>
                    </h2>
                </div>
                <div className="pb-1.75 max-[900px]:pb-0">
                    <p className="mb-8 max-w-75 text-base leading-[1.6] text-[#e3efff]">Conheça as soluções SmartRural para acompanhar sua produção.</p>
                    <a
                        className="inline-flex w-fit items-center gap-2 border-b border-white/70 pb-2.5 text-base font-extrabold"
                        href="mailto:contato@smartrural.com.br"
                    >
                        Fale conosco <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}
