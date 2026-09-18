import { Droplets } from "lucide-react";

import { solutions } from "@/content/landing";

import { SectionLabel } from "@/components/site/section-label";
import { TextLink } from "@/components/site/text-link";

export function SolutionsSection() {
  const aquaculture = solutions.aquaculture;
  const aviculture = solutions.aviculture;

  return (
    <section id="solucoes" className="solutions-section section-block">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <SectionLabel>01 / ÁREAS DE ATUAÇÃO</SectionLabel>
            <h2>
              Conheça nossas <em>soluções</em>
            </h2>
          </div>
          <p>
            A SmartRural acompanha diferentes realidades do campo. A tecnologia se adapta à
            operação, não o contrário.
          </p>
        </div>

        <div className="solutions-layout">
          <article className="solution-feature">
            <div className="solution-feature-image">
              <img
                src={aquaculture.image}
                alt={aquaculture.imageAlt}
                width={1280}
                height={720}
                loading="lazy"
              />
              <span className="image-note">
                <Droplets aria-hidden="true" /> {aquaculture.imageNote}
              </span>
            </div>
            <div className="solution-feature-copy">
              <div>
                <span className="solution-number">{aquaculture.number}</span>
                <h3>{aquaculture.title}</h3>
              </div>
              <p>{aquaculture.copy}</p>
              <TextLink href={aquaculture.linkHref}>{aquaculture.linkLabel}</TextLink>
            </div>
          </article>

          <article className="solution-secondary">
            <div className="solution-secondary-image">
              <img
                src={aviculture.image}
                alt={aviculture.imageAlt}
                width={1536}
                height={1024}
                loading="lazy"
              />
              <span className="placeholder-tag">{aviculture.imageNote}</span>
            </div>
            <div className="solution-secondary-copy">
              <span className="solution-number">{aviculture.number}</span>
              <h3>{aviculture.title}</h3>
              <p>{aviculture.copy}</p>
              <TextLink href={aviculture.linkHref}>{aviculture.linkLabel}</TextLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
