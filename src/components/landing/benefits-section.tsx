import { ArrowRight, ArrowUpRight, CalendarDays, Radio, Smartphone } from "lucide-react";

import { operationBenefits } from "@/content/landing";

import { SectionLabel } from "@/components/site/section-label";

export function BenefitsSection() {
  return (
    <section id="operacao" className="benefits-section section-block">
      <div className="container">
        <div className="section-heading section-heading-split benefits-heading">
          <div>
            <SectionLabel>03 / NO DIA A DIA</SectionLabel>
            <h2>
              Informação que ajuda a <em>acompanhar.</em>
            </h2>
          </div>
          <p>
            O mais importante não é a tecnologia por trás. É conseguir ver, entender e agir sobre o
            que acontece na operação.
          </p>
        </div>

        <div className="benefits-list">
          {operationBenefits.map(({ number, title, copy, icon: Icon }) => (
            <article className="benefit-row" key={number}>
              <span className="benefit-number">{number}</span>
              <div className="benefit-icon">
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight className="benefit-arrow" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="simple-flow" aria-label="Como a informação chega até você">
          <div>
            <span className="flow-icon">
              <Radio aria-hidden="true" />
            </span>
            <small>No campo</small>
            <strong>Sensores acompanham informações importantes.</strong>
          </div>
          <ArrowRight aria-hidden="true" />
          <div>
            <span className="flow-icon">
              <CalendarDays aria-hidden="true" />
            </span>
            <small>Na SmartRural</small>
            <strong>Essas informações são organizadas.</strong>
          </div>
          <ArrowRight aria-hidden="true" />
          <div>
            <span className="flow-icon">
              <Smartphone aria-hidden="true" />
            </span>
            <small>No celular ou computador</small>
            <strong>Você acompanha sua operação.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
