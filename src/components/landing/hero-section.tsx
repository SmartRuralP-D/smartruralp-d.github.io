import { ArrowDownRight, ArrowRight, ArrowUpRight, Droplets, MapPin } from "lucide-react";

import { media } from "@/content/landing";

import { SectionLabel } from "@/components/site/section-label";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-intro">
          <div className="hero-copy">
            <SectionLabel>TECNOLOGIA APLICADA AO CAMPO</SectionLabel>
            <h1>
              Sua solução para monitoramento em <em>tempo real</em>
            </h1>
            <p>
              A SmartRural ajuda você a acompanhar informações importantes da sua operação de
              aquicultura e avicultura pelo celular ou computador.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#solucoes">
                Conheça nossas soluções <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="button button-quiet" href="#contato">
                Fale com a SmartRural <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-aside">
            <span className="hero-aside-number">01</span>
            <p>Do campo para perto de quem acompanha a operação.</p>
            <a href="#solucoes" aria-label="Conheça as soluções">
              <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className="hero-photo">
          <img
            src={media.hero}
            alt="Viveiro de aquicultura com aeradores em funcionamento"
            width={1280}
            height={720}
            fetchPriority="high"
          />
          <figcaption className="hero-caption">
            <span>
              <MapPin aria-hidden="true" /> Feira Nova, PE
            </span>
            <span>Aquicultura</span>
          </figcaption>
          <div className="hero-status" aria-label="Exemplo de informação acompanhada">
            <span className="status-kicker">
              <Droplets aria-hidden="true" /> Viveiro 04
            </span>
            <strong>
              Temperatura da água <b>28°C</b>
            </strong>
            <span className="status-normal">
              <i aria-hidden="true" /> Normal
            </span>
          </div>
        </figure>

        <div className="hero-bottomline">
          <span>Uma mesma base para diferentes contextos rurais</span>
          <div>
            <span>
              <i aria-hidden="true" /> Aquicultura
            </span>
            <span>
              <i aria-hidden="true" /> Avicultura
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
