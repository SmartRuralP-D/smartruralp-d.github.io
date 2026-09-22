import { AviQualityBrand } from '@/components/landing/aviquality-brand'
import { AviQualityContactSection } from '@/components/landing/aviquality-contact-section'
import { AviQualityDataFlowSection } from '@/components/landing/aviquality-data-flow-section'
import { AviQualityDevicesSection } from '@/components/landing/aviquality-devices-section'
import { AviQualityHeroSection } from '@/components/landing/aviquality-hero-section'
import { AviQualityManagementSection } from '@/components/landing/aviquality-management-section'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { aviQualityFooterColumns, aviQualityNavigation } from '@/content/aviquality'

export function AviQualityPage() {
    return (
        <div className="overflow-clip bg-canvas text-ink selection:bg-brand selection:text-white">
            <a
                className="fixed left-3 top-3 z-100 translate-y-[-150%] bg-ink px-3.5 py-2.5 text-white transition-transform duration-200 focus:translate-y-0"
                href="#conteudo"
            >
                Ir para o conteúdo
            </a>

            <SiteHeader brand={<AviQualityBrand />} navigationItems={aviQualityNavigation} contactHref="#contato" contactLabel="Contato" />

            <main id="conteudo">
                <AviQualityHeroSection />
                <AviQualityManagementSection />
                <AviQualityDevicesSection />
                <AviQualityDataFlowSection />
                <AviQualityContactSection />
            </main>

            <SiteFooter columns={aviQualityFooterColumns} footerId="sobre" />
        </div>
    )
}
