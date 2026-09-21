import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { SectionLabel } from '@/components/site/section-label'
import { testimonials } from '@/content/landing'

export function TestimonialsSection() {
    const [testimonial, setTestimonial] = useState(0)
    const activeTestimonial = testimonials[testimonial] ?? testimonials[0]!
    const testimonialControlClass =
        'grid size-[2.125rem] place-items-center rounded-pill border border-[#4e5962] bg-transparent p-0 text-white transition-colors hover:border-brand hover:bg-brand'

    return (
        <section id="relatos" className="bg-inverse section-padding text-white">
            <div className="page-container">
                <div>
                    <SectionLabel>05 / RELATOS</SectionLabel>
                    <h2 className="section-heading text-[clamp(2.65rem,13vw,4.3rem)] text-white [&_em]:text-[#9bc7ff]">
                        Feita para quem está <em>no campo.</em>
                    </h2>
                </div>
                <div className="mt-[5.625rem] grid grid-cols-[150px_minmax(0,1fr)_110px] items-end gap-[clamp(28px,6vw,88px)] border-b border-[#353d44] pb-[2.8125rem] max-[900px]:grid-cols-1 max-[900px]:items-start max-[900px]:gap-[1.625rem] max-[900px]:mt-[3.625rem] max-[900px]:pb-[1.875rem]">
                    <div className="max-[900px]:flex max-[900px]:items-center max-[900px]:gap-[0.875rem]">
                        <img
                            className="size-32 rounded-pill object-cover grayscale max-[900px]:size-20"
                            src={activeTestimonial.image}
                            alt={`Foto de ${activeTestimonial.name}`}
                            width={128}
                            height={128}
                        />
                        <span className="mt-[0.875rem] block text-[0.6875rem] font-bold text-[#94a1ab] max-[900px]:mt-0">Relato real</span>
                    </div>
                    <div>
                        <blockquote className="mb-[1.6875rem] max-w-[50rem] text-[clamp(2.25rem,5vw,5.2rem)] font-medium leading-[1.02] tracking-[-0.06em] max-[900px]:mb-[1.375rem] max-[900px]:text-[clamp(2.25rem,12vw,3.8rem)]">
                            “{activeTestimonial.quote}”
                        </blockquote>
                        <p className="mb-[0.1875rem] text-sm font-extrabold">{activeTestimonial.name}</p>
                        <span className="text-xs text-[#94a1ab]">{activeTestimonial.role}</span>
                    </div>
                    <div className="flex items-center justify-end gap-[0.625rem] pb-[0.1875rem] text-[0.6875rem] font-extrabold text-[#9aa7b0] max-[900px]:justify-start">
                        <button
                            className={testimonialControlClass}
                            type="button"
                            onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)}
                            aria-label="Relato anterior"
                        >
                            <ArrowRight className="size-[0.9375rem] rotate-180" aria-hidden="true" />
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
                            <ArrowRight className="size-[0.9375rem]" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div
                    className="flex flex-wrap gap-7 pt-8 max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-x-[0.9375rem] max-[900px]:gap-y-[1.125rem]"
                    aria-label="Selecionar relato"
                >
                    {testimonials.map((item, index) => (
                        <button
                            type="button"
                            className={`group inline-flex items-center gap-[0.625rem] bg-transparent p-0 text-xs font-bold text-[#84919a] transition-colors hover:text-white ${index === testimonial ? 'text-white' : ''}`}
                            key={item.name}
                            onClick={() => setTestimonial(index)}
                            aria-label={`Ver relato de ${item.name}`}
                            aria-pressed={index === testimonial}
                        >
                            <img
                                className="size-[2.375rem] rounded-pill object-cover grayscale opacity-[0.55] transition-[filter,opacity] group-hover:grayscale-0 group-hover:opacity-100 group-aria-pressed:grayscale-0 group-aria-pressed:opacity-100"
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
