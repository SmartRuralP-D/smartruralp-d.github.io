import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  Droplets,
  FileText,
  Gauge,
  History,
  MapPin,
  Menu,
  Monitor,
  Radio,
  SlidersHorizontal,
  Smartphone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import poultryPlaceholder from "@/assets/poultry-placeholder.jpg";

const asset = (file: string) => `/assets/smartrural/${file}`;

const media = {
  mark: asset("logo-grande.png"),
  wordmark: asset("smartrural-nome.png"),
  hero: asset("feira-nova-4.jpg"),
  pondWide: asset("feira-nova-1.jpg"),
  pondDetail: asset("feira-nova-2.jpg"),
  pondPeople: asset("feira-nova-3.jpg"),
  workshop: asset("feira-nova-5.jpg"),
  gathering: asset("feira-nova-6.jpg"),
  sensor: asset("prototipo-1.png"),
  sensorInWater: asset("fotos-1.jpg"),
  webDashboard: asset("web-dashboard.png"),
  webChart: asset("web-chart.png"),
  mobileDashboard: asset("mobile-dashboard.jpeg"),
};

const testimonials = [
  {
    name: "Sr. Neném",
    role: "Produtor",
    quote: "Muito bom ver a tecnologia chegar a minha fazenda.",
    image: asset("nenem.png"),
  },
  {
    name: "Gilmar Aguiar",
    role: "Profissional de aquicultura",
    quote: "Achei muito prático e simples de ser utilizado.",
    image: asset("gilmar.png"),
  },
  {
    name: "Amom Nascimento",
    role: "Profissional de aquicultura",
    quote: "Esta tecnologia traz maior facilidade no monitoramento de viveiros de aquicultura.",
    image: asset("amom.png"),
  },
  {
    name: "Emerson Oliveira",
    role: "Profissional do campo",
    quote: "Ver tecnologias deste tipo alcançando fazendas como a minha é de alto valor.",
    image: asset("emerson.png"),
  },
];

const partners = [
  "c-1.png",
  "c-2.png",
  "c-3.png",
  "c-4.png",
  "c-5.png",
  "c-6.png",
  "c-7.png",
  "c-8.png",
];

const operationBenefits = [
  {
    number: "01",
    title: "Acompanhar",
    copy: "Veja as condições atuais das suas unidades e o que está acontecendo na operação.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Receber avisos",
    copy: "Saiba quando alguma condição precisar de atenção, no tempo certo para agir.",
    icon: Bell,
  },
  {
    number: "03",
    title: "Consultar o histórico",
    copy: "Entenda como as informações mudaram ao longo do tempo.",
    icon: History,
  },
  {
    number: "04",
    title: "Acompanhar equipamentos",
    copy: "Confira informações de aeradores, sensores e outros equipamentos monitorados.",
    icon: SlidersHorizontal,
  },
  {
    number: "05",
    title: "Ver relatórios",
    copy: "Acesse informações consolidadas para acompanhar a rotina da operação.",
    icon: FileText,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartRural | Monitoramento para operações rurais" },
      {
        name: "description",
        content:
          "A SmartRural ajuda operações de aquicultura e avicultura a acompanharem suas informações pelo celular e computador.",
      },
      { property: "og:title", content: "SmartRural | Monitoramento para operações rurais" },
      {
        property: "og:description",
        content: "Acompanhe informações importantes da sua operação, onde estiver.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      className={`brand ${inverted ? "brand-inverted" : ""}`}
      href="#inicio"
      aria-label="SmartRural — início"
    >
      <img src={media.mark} alt="" width={281} height={127} />
      <img src={media.wordmark} alt="SmartRural" width={918} height={84} />
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="section-label">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function TextLink({
  children,
  href = "#contato",
  light = false,
}: {
  children: string;
  href?: string;
  light?: boolean;
}) {
  return (
    <a className={`text-link ${light ? "text-link-light" : ""}`} href={href}>
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeTestimonial = testimonials[testimonial] ?? testimonials[0]!;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
            <a href="#plataforma">Plataforma</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#sobre">Sobre</a>
          </nav>
          <a className="header-cta" href="#contato">
            Contato <ArrowUpRight aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel">
            <a href="#solucoes" onClick={() => setMenuOpen(false)}>
              Soluções
            </a>
            <a href="#plataforma" onClick={() => setMenuOpen(false)}>
              Plataforma
            </a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfólio
            </a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              Sobre
            </a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>
              Fale com a SmartRural <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>

      <main id="conteudo">
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
                    src={media.pondWide}
                    alt="Viveiro de aquicultura com aeradores e paisagem rural"
                    width={1280}
                    height={720}
                    loading="lazy"
                  />
                  <span className="image-note">
                    <Droplets aria-hidden="true" /> Água em movimento
                  </span>
                </div>
                <div className="solution-feature-copy">
                  <div>
                    <span className="solution-number">01</span>
                    <h3>Aquicultura</h3>
                  </div>
                  <p>
                    Acompanhe viveiros, condições da água, equipamentos e informações da produção em
                    um só lugar.
                  </p>
                  <TextLink href="#plataforma">Conheça a solução</TextLink>
                </div>
              </article>

              <article className="solution-secondary">
                <div className="solution-secondary-image">
                  <img
                    src={poultryPlaceholder}
                    alt="Placeholder visual de um aviário com aves e equipamentos"
                    width={1536}
                    height={1024}
                    loading="lazy"
                  />
                  <span className="placeholder-tag">Placeholder visual · avicultura</span>
                </div>
                <div className="solution-secondary-copy">
                  <span className="solution-number">02</span>
                  <h3>Avicultura</h3>
                  <p>
                    Uma base preparada para acompanhar ambiente, ventilação, temperatura, umidade e
                    equipamentos de aviários.
                  </p>
                  <TextLink href="#contato">Conversar sobre a operação</TextLink>
                </div>
              </article>
            </div>
          </div>
        </section>

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
              <span>
                <Check aria-hidden="true" /> No celular
              </span>
              <span>
                <Check aria-hidden="true" /> No computador
              </span>
              <span>
                <Check aria-hidden="true" /> No ritmo da operação
              </span>
            </div>
          </div>
        </section>

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
                O mais importante não é a tecnologia por trás. É conseguir ver, entender e agir
                sobre o que acontece na operação.
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

        <section id="parceiros" className="partners-section section-block">
          <div className="container">
            <div className="partners-intro">
              <div>
                <SectionLabel>06 / PARCEIROS</SectionLabel>
                <h2>
                  Construída em <em>colaboração.</em>
                </h2>
              </div>
              <p>
                A SmartRural cresce junto de instituições, produtores e pessoas que conhecem os
                desafios do campo.
              </p>
            </div>
            <div className="partner-list">
              {partners.map((partner) => (
                <div className="partner-logo" key={partner}>
                  <img
                    src={asset(partner)}
                    alt="Logo de parceiro institucional da SmartRural"
                    width={512}
                    height={350}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div className="container contact-inner">
            <div>
              <SectionLabel>07 / CONTATO</SectionLabel>
              <h2>
                Vamos conversar sobre
                <br />
                <em>a sua operação?</em>
              </h2>
            </div>
            <div className="contact-copy">
              <p>Conheça as soluções SmartRural para acompanhar sua produção.</p>
              <a className="contact-link" href="mailto:contato@smartrural.com.br">
                Fale conosco <ArrowUpRight aria-hidden="true" />
              </a>
              <small>Contato provisório · canal a confirmar</small>
            </div>
          </div>
        </section>
      </main>

      <footer id="sobre" className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand-block">
              <Brand inverted />
              <p>Tecnologia para acompanhamento de operações rurais.</p>
            </div>
            <div className="footer-column">
              <h2>Soluções</h2>
              <a href="#solucoes">Aquicultura</a>
              <a href="#solucoes">Avicultura</a>
            </div>
            <div className="footer-column">
              <h2>Plataforma</h2>
              <a href="#plataforma">Aplicativo</a>
              <a href="#plataforma">Plataforma web</a>
            </div>
            <div className="footer-column">
              <h2>Empresa</h2>
              <a href="#sobre">Sobre</a>
              <a href="#portfolio">Portfólio</a>
              <a href="#contato">Contato</a>
            </div>
            <div className="footer-column footer-social">
              <h2>Redes sociais</h2>
              <span>Instagram ↗</span>
              <span>LinkedIn ↗</span>
              <span>YouTube ↗</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Recife, Pernambuco · Brasil</span>
            <span>© 2026 SmartRural</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
