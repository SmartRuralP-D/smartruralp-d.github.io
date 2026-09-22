import { ArrowUpRight } from 'lucide-react'

const WHATSAPP_NUMBER = '5581986362260'
const WHATSAPP_MESSAGE = encodeURIComponent('Olá SmartRural! Gostaria de conversar sobre o AviQuality para a minha produção avícola.')

export function AviQualityContactSection() {
    return (
        <section id="contato" className="bg-brand text-white">
            <div className="page-container grid grid-cols-[minmax(0,1fr)_minmax(230px,1.2fr)] items-center gap-48 py-25 max-[900px]:grid-cols-1 max-[900px]:items-start max-[900px]:gap-10 max-[900px]:min-h-142.5 max-[900px]:py-21.25">
                <div>
                    <h2 className="text-[clamp(3.3rem,7.4vw,7.4rem)] leading-[0.94] max-[900px]:mt-4.25 max-[900px]:text-[clamp(3.15rem,15vw,5rem)]">
                        Vamos conversar sobre
                        <br />
                        <em className="font-normal italic">a sua produção?</em>
                    </h2>
                </div>
                <div>
                    <p className="mb-8 max-w-75 text-3xl font-semibold leading-[1.6] text-white">
                        Entenda como levar o acompanhamento automático para a rotina do seu aviário.
                    </p>
                    <a
                        className="inline-flex w-fit items-center gap-2 border-b-2 border-white pb-3 text-lg font-extrabold transition-opacity hover:opacity-80"
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
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
