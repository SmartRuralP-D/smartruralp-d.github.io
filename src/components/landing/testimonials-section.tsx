import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'
import { testimonials } from '@/content/landing'

export function TestimonialsSection() {
    const [testimonial, setTestimonial] = useState(0)
    const activeTestimonial = testimonials[testimonial] ?? testimonials[0]!

    return (
        <section id="relatos" className="bg-inverse section-padding text-white">
            <div className="page-container">
                <div>
                    <SectionLabel>05 / RELATOS</SectionLabel>
                    <h2 className="section-heading text-[clamp(2.65rem,13vw,4.3rem)] text-white [&_em]:text-[#9bc7ff]">
                        Feita para quem está <em>no campo.</em>
                    </h2>
                </div>
                <div className="mt-[90px] grid grid-cols-[150px_minmax(0,1fr)_110px] items-end gap-[clamp(28px,6vw,88px)] border-b border-[#353d44] pb-[45px] max-[900px]:grid-cols-1 max-[900px]:items-start max-[900px]:gap-[26px] max-[900px]:mt-[58px] max-[900px]:pb-[30px]">
                    <div className="[&_img]:size-[128px] [&_img]:rounded-full [&_img]:object-cover [&_img]:grayscale [&_span]:mt-[14px] [&_span]:block [&_span]:text-[11px] [&_span]:font-bold [&_span]:text-[#94a1ab] max-[900px]:flex max-[900px]:items-center max-[900px]:gap-[14px] max-[900px]:[&_img]:size-[80px] max-[900px]:[&_span]:mt-0">
                        <img src={activeTestimonial.image} alt={`Foto de ${activeTestimonial.name}`} width={128} height={128} />
                        <span>Relato real</span>
                    </div>
                    <div className="[&_blockquote]:mb-[27px] [&_blockquote]:max-w-[800px] [&_blockquote]:text-[clamp(2.25rem,5vw,5.2rem)] [&_blockquote]:font-medium [&_blockquote]:leading-[1.02] [&_blockquote]:tracking-[-0.06em] [&_p]:mb-[3px] [&_p]:text-[14px] [&_p]:font-extrabold [&_span]:text-[12px] [&_span]:text-[#94a1ab] max-[900px]:[&_blockquote]:mb-[22px] max-[900px]:[&_blockquote]:text-[clamp(2.25rem,12vw,3.8rem)]">
                        <blockquote>“{activeTestimonial.quote}”</blockquote>
                        <p>{activeTestimonial.name}</p>
                        <span>{activeTestimonial.role}</span>
                    </div>
                    <div className="flex items-center justify-end gap-[10px] pb-[3px] text-[11px] font-extrabold text-[#9aa7b0] max-[900px]:justify-start [&_button]:grid [&_button]:size-[34px] [&_button]:place-items-center [&_button]:rounded-full [&_button]:border [&_button]:border-[#4e5962] [&_button]:bg-transparent [&_button]:p-0 [&_button]:text-white [&_button]:transition-colors [&_button:hover]:border-[var(--blue)] [&_button:hover]:bg-[var(--blue)] [&_svg]:size-[15px]">
                        <button
                            type="button"
                            onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)}
                            aria-label="Relato anterior"
                        >
                            <ArrowRight className="rotate-180" aria-hidden="true" />
                        </button>
                        <span>
                            {String(testimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                        </span>
                        <button type="button" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Próximo relato">
                            <ArrowRight aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div
                    className="flex flex-wrap gap-[28px] pt-[32px] max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-x-[15px] max-[900px]:gap-y-[18px] [&_button]:inline-flex [&_button]:items-center [&_button]:gap-[10px] [&_button]:bg-transparent [&_button]:p-0 [&_button]:text-[12px] [&_button]:font-bold [&_button]:text-[#84919a] [&_button]:transition-colors [&_button:hover]:text-white [&_button[aria-pressed=true]]:text-white [&_img]:size-[38px] [&_img]:rounded-full [&_img]:object-cover [&_img]:grayscale [&_img]:opacity-[0.55] [&_button:hover_img]:grayscale-0 [&_button:hover_img]:opacity-100 [&_button[aria-pressed=true]_img]:grayscale-0 [&_button[aria-pressed=true]_img]:opacity-100"
                    aria-label="Selecionar relato"
                >
                    {testimonials.map((item, index) => (
                        <button
                            type="button"
                            className={index === testimonial ? 'text-white' : ''}
                            key={item.name}
                            onClick={() => setTestimonial(index)}
                            aria-label={`Ver relato de ${item.name}`}
                            aria-pressed={index === testimonial}
                        >
                            <img src={item.image} alt="" width={64} height={64} />
                            <span>{item.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
