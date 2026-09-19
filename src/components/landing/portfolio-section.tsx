import { MapPin } from "lucide-react";

import { media } from "@/content/landing";

import { SectionLabel } from "@/components/site/section-label";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio-section section-block">
      <div className="container">
        <div className="portfolio-heading">
          <div>
            <SectionLabel>04 / PORTFÓLIO</SectionLabel>
            <h2>
              SmartRural <em>em campo.</em>
            </h2>
          </div>
          <p>
            A tecnologia ganha sentido quando está instalada, observada e utilizada no ambiente
            produtivo.
          </p>
        </div>

        <div className="portfolio-editorial">
          <figure className="portfolio-main-image">
            <img
              src={media.pondPeople}
              alt="Pessoa observando um viveiro com sensor flutuante"
              width={1280}
              height={720}
              loading="lazy"
            />
            <figcaption>
              <MapPin aria-hidden="true" /> Feira Nova, Pernambuco
            </figcaption>
          </figure>
          <div className="portfolio-side">
            <figure>
              <img
                src={media.sensorInWater}
                alt="Sensor flutuante SmartRural instalado em um viveiro"
                width={1308}
                height={750}
                loading="lazy"
              />
              <figcaption>Equipamento instalado na água</figcaption>
            </figure>
            <div className="portfolio-note">
              <img
                src={media.sensor}
                alt="Protótipo de sensor flutuante SmartRural"
                width={2760}
                height={2104}
                loading="lazy"
              />
              <span>Produto desenvolvido para estar perto da operação.</span>
            </div>
          </div>
        </div>

        <div className="portfolio-rail">
          <figure>
            <img
              src={media.pondDetail}
              alt="Aerador em um viveiro de aquicultura"
              width={1280}
              height={720}
              loading="lazy"
            />
            <figcaption>Condições reais da produção</figcaption>
          </figure>
          <figure>
            <img
              src={media.gathering}
              alt="Encontro de apresentação da SmartRural no campo"
              width={1280}
              height={720}
              loading="lazy"
            />
            <figcaption>Pesquisa aplicada e pessoas</figcaption>
          </figure>
          <figure>
            <img
              src={media.workshop}
              alt="Apresentação sobre aquicultura em Feira Nova"
              width={1280}
              height={720}
              loading="lazy"
            />
            <figcaption>Conhecimento que chega à operação</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
