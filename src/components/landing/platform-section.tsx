import { Check, Monitor, Smartphone } from "lucide-react";

import { media, platformAccess } from "@/content/landing";

import { SectionLabel } from "@/components/site/section-label";

export function PlatformSection() {
  return (
    <section id="plataforma" className="platform-section section-block">
      <div className="container">
        <div className="platform-intro">
          <div>
            <SectionLabel>02 / PLATAFORMA SMARTRURAL</SectionLabel>
            <h2>
              Uma única visão da <em>sua operação.</em>
            </h2>
          </div>
          <p>
            Aplicativo e plataforma web fazem parte do mesmo ecossistema. Acesse as condições
            atuais, avisos, histórico e relatórios de onde estiver.
          </p>
        </div>

        <div className="platform-stage">
          <div className="platform-web">
            <div className="screen-label">
              <Monitor aria-hidden="true" /> Plataforma web
            </div>
            <img
              src={media.webDashboard}
              alt="Tela real da visão geral da plataforma web SmartRural"
              width={1857}
              height={959}
              loading="lazy"
            />
          </div>
          <div className="platform-app">
            <div className="phone-frame">
              <img
                src={media.mobileDashboard}
                alt="Tela real do aplicativo SmartRural com resumo da operação"
                width={788}
                height={1600}
                loading="lazy"
              />
            </div>
            <span className="screen-label">
              <Smartphone aria-hidden="true" /> Aplicativo mobile
            </span>
          </div>
          <div className="platform-chart">
            <img
              src={media.webChart}
              alt="Tela real de histórico e gráfico da plataforma web SmartRural"
              width={1854}
              height={914}
              loading="lazy"
            />
            <span>Consulte o histórico</span>
          </div>
        </div>

        <div className="platform-access">
          {platformAccess.map((label) => (
            <span key={label}>
              <Check aria-hidden="true" /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
