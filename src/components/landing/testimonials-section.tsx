import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'
import { testimonials } from '@/content/landing'

export function TestimonialsSection() {
    const [testimonial, setTestimonial] = useState(0)
    const activeTestimonial = testimonials[testimonial] ?? testimonials[0]!
    const testimonialControlClass =
        'grid size-[34px] place-items-center rounded-pill border border-[#4e5962] bg-transparent p-0 text-white transition-colors hover:border-brand hover:bg-brand'

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
                    <div className="max-[900px]:flex max-[900px]:items-center max-[900px]:gap-[14px]">
                        <img
                            className="size-[128px] rounded-pill object-cover grayscale max-[900px]:size-[80px]"
                            src={activeTestimonial.image}
                            alt={`Foto de ${activeTestimonial.name}`}
                            width={128}
                            height={128}
                        />
                        <span className="mt-[14px] block text-[11px] font-bold text-[#94a1ab] max-[900px]:mt-0">Relato real</span>
                    </div>
                    <div>
                        <blockquote className="mb-[27px] max-w-[800px] text-[clamp(2.25rem,5vw,5.2rem)] font-medium leading-[1.02] tracking-[-0.06em] max-[900px]:mb-[22px] max-[900px]:text-[clamp(2.25rem,12vw,3.8rem)]">
                            “{activeTestimonial.quote}”
                        </blockquote>
                        <p className="mb-[3px] text-[14px] font-extrabold">{activeTestimonial.name}</p>
                        <span className="text-[12px] text-[#94a1ab]">{activeTestimonial.role}</span>
                    </div>
                    <div className="flex items-center justify-end gap-[10px] pb-[3px] text-[11px] font-extrabold text-[#9aa7b0] max-[900px]:justify-start">
                        <button
                            className={testimonialControlClass}
                            type="button"
                            onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)}
                            aria-label="Relato anterior"
                        >
                            <ArrowRight className="size-[15px] rotate-180" aria-hidden="true" />
                        </button>
                        <span>
                            {String(testimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                        </span>
                        <button
                            className={testimonialControlClass}
                            type="button"
                            onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}
                            aria-label="Próximo relato"
                        >
                            <ArrowRight className="size-[15px]" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div
                    className="flex flex-wrap gap-[28px] pt-[32px] max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-x-[15px] max-[900px]:gap-y-[18px]"
                    aria-label="Selecionar relato"
                >
                    {testimonials.map((item, index) => (
                        <button
                            type="button"
                            className={`group inline-flex items-center gap-[10px] bg-transparent p-0 text-[12px] font-bold text-[#84919a] transition-colors hover:text-white ${index === testimonial ? 'text-white' : ''}`}
                            key={item.name}
                            onClick={() => setTestimonial(index)}
                            aria-label={`Ver relato de ${item.name}`}
                            aria-pressed={index === testimonial}
                        >
                            <img
                                className="size-[38px] rounded-pill object-cover grayscale opacity-[0.55] transition-[filter,opacity] group-hover:grayscale-0 group-hover:opacity-100 group-aria-pressed:grayscale-0 group-aria-pressed:opacity-100"
                                src={item.image}
                                alt=""
                                width={64}
                                height={64}
                            />
                            <span>{item.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
