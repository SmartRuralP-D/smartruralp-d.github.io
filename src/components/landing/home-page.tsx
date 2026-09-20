import { BenefitsSection } from '@/components/landing/benefits-section'
import { ContactSection } from '@/components/landing/contact-section'
import { HeroSection } from '@/components/landing/hero-section'
import { PartnersSection } from '@/components/landing/partners-section'
import { PlatformSection } from '@/components/landing/platform-section'
import { PortfolioSection } from '@/components/landing/portfolio-section'
import { SolutionsSection } from '@/components/landing/solutions-section'
import { TestimonialsSection } from '@/components/landing/testimonials-section'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export function HomePage() {
    return (
        <div className="overflow-clip bg-white">
            <a
                className="fixed left-3 top-3 z-[100] -translate-y-[150%] bg-[var(--ink)] px-[14px] py-[10px] text-white transition-transform duration-200 focus:translate-y-0"
                href="#conteudo"
            >
                Ir para o conteúdo
            </a>

            <SiteHeader />

            <main id="conteudo">
                <HeroSection />
                <SolutionsSection />
                <PlatformSection />
                <BenefitsSection />
                <PortfolioSection />
                <TestimonialsSection />
                <PartnersSection />
                <ContactSection />
            </main>

            <SiteFooter />
        </div>
    )
}
