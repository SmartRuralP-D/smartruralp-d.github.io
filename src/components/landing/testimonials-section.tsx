import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { testimonials } from "@/content/landing";

import { SectionLabel } from "@/components/site/section-label";

export function TestimonialsSection() {
  const [testimonial, setTestimonial] = useState(0);
  const activeTestimonial = testimonials[testimonial] ?? testimonials[0]!;

  return (
    <section id="relatos" className="testimonials-section section-block">
      <div className="container">
        <div className="testimonials-heading">
          <SectionLabel>05 / RELATOS</SectionLabel>
          <h2>
            Feita para quem está <em>no campo.</em>
          </h2>
        </div>
        <div className="testimonial-feature">
          <div className="testimonial-portrait">
            <img
              src={activeTestimonial.image}
              alt={`Foto de ${activeTestimonial.name}`}
              width={128}
              height={128}
            />
            <span>Relato real</span>
          </div>
          <div className="testimonial-quote">
            <blockquote>“{activeTestimonial.quote}”</blockquote>
            <p>{activeTestimonial.name}</p>
            <span>{activeTestimonial.role}</span>
          </div>
          <div className="testimonial-controls">
            <button
              type="button"
              onClick={() =>
                setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)
              }
              aria-label="Relato anterior"
            >
              <ArrowRight className="rotate-180" aria-hidden="true" />
            </button>
            <span>
              {String(testimonial + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}
              aria-label="Próximo relato"
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="testimonial-people" aria-label="Selecionar relato">
          {testimonials.map((item, index) => (
            <button
              type="button"
              className={index === testimonial ? "active" : ""}
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
  );
}
