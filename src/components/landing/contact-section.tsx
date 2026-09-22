import { ArrowUpRight } from 'lucide-react'

const WHATSAPP_NUMBER = '5581986362260'

export function ContactSection() {
    return (
        <section id="contato" className="bg-brand text-white">
            <div className="page-container grid grid-cols-[minmax(0,1fr)_minmax(230px,1.2fr)] items-center gap-48 py-25 max-[900px]:grid-cols-1 max-[900px]:items-start max-[900px]:gap-10 max-[900px]:min-h-142.5 max-[900px]:py-21.25">
                <div className="[&_p]:text-[#d5e7ff] [&_p_span]:bg-canvas">
                    <h2 className="text-[clamp(3.3rem,7.4vw,7.4rem)] leading-[0.94] max-[900px]:mt-4.25 max-[900px]:text-[clamp(3.15rem,15vw,5rem)]">
                        Vamos conversar sobre
                        <br />
                        <em>a sua operação?</em>
                    </h2>
                </div>
                <div className="pb-1.75 max-[900px]:pb-0">
                    <p className="mb-8 max-w-75 text-3xl font-semibold leading-[1.6] text-white">
                        Conheça as soluções SmartRural para acompanhar sua produção.
                    </p>
                    <a
                        className="inline-flex w-fit items-center gap-2 border-b-2 border-white pb-3 text-lg font-extrabold hover:opacity-80 transition-opacity"
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Fale conosco <ArrowUpRight className="size-5" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}
