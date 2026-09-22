import type { LucideIcon } from 'lucide-react'
import { Bell, FileText, Gauge, History, SlidersHorizontal } from 'lucide-react'

import type { MonitoringSlide } from '@/components/landing/monitoring-visual'

export const asset = (file: string) => `/assets/smartrural/${file}`

export const media = {
    mark: asset('logo-grande.png'),
    wordmark: asset('smartrural-nome.png'),
    heroAquaculture: asset('feira-nova-4.jpg'),
    heroAviculture: asset('aviculture-ufrpe.png'),
    pondWide: asset('feira-nova-1.jpg'),
    aquacultureDevice: asset('aquaculture-device.png'),
    aviqualityDevice: asset('aviquality-device.png'),
    sensorInWater: asset('fotos-1.jpg'),
    webDashboard: asset('web-dashboard.png'),
    webChart: asset('web-chart.png'),
    mobileDashboard: asset('mobile-dashboard.jpeg'),
    aviculture: asset('aviculture-1.jpeg'),
    portfolio1: asset('depaq.jpg'),
    portfolio2: asset('feira-nova-6.jpg'),
    portfolio3: asset('feira-nova-5.jpg'),
    portfolio4: asset('avicultura-carlos.jpeg'),
    portfolio5: asset('cbsoft.jpg'),
    portfolio6: asset('jepex.jpg')
} as const

export type PortfolioItem = {
    image: string
    imageAlt: string
    caption: string
}

export const portfolioItems = [
    {
        image: media.portfolio1,
        imageAlt: 'Instalação de sensores em viveiro de aquicultura',
        caption: 'Acompanhamento em tempo real'
    },
    {
        image: media.portfolio2,
        imageAlt: 'Encontro de apresentação da SmartRural no campo',
        caption: 'Pesquisa aplicada e pessoas'
    },
    {
        image: media.portfolio5,
        imageAlt: 'Apresentação da SmartRural no CBSoft 2026',
        caption: 'Tecnologia e inovação em software'
    },
    {
        image: media.portfolio3,
        imageAlt: 'Apresentação sobre aquicultura em Feira Nova',
        caption: 'Conhecimento que chega à operação'
    },
    {
        image: media.portfolio6,
        imageAlt: 'Apresentação da SmartRural no Jepex 2026',
        caption: 'Pesquisa aplicada e inovação em tecnologia'
    }
] satisfies readonly PortfolioItem[]

export const navigation = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Plataforma', href: '#plataforma' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#sobre' }
] as const

const aquacultureHeroMonitoringMetrics = [
    {
        label: 'Temperatura da água',
        value: {
            initial: 28,
            min: 18,
            max: 39,
            step: 0.5,
            intervalMs: 5000,
            unit: '°C',
            decimals: 1,
            statusRules: [
                { max: 19, status: { label: 'Crítico', tone: 'critical' as const } },
                { max: 24.5, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 25, max: 32, status: { label: 'Normal', tone: 'normal' as const } },
                { min: 32.5, max: 37.5, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 38, status: { label: 'Crítico', tone: 'critical' as const } }
            ]
        },
        status: { label: 'Normal', tone: 'normal' as const }
    },
    {
        label: 'Oxigênio dissolvido',
        value: {
            initial: 6.8,
            min: 1,
            max: 10,
            step: 0.5,
            intervalMs: 10000,
            unit: 'mg/L',
            decimals: 1,
            statusRules: [
                { max: 2.5, status: { label: 'Crítico', tone: 'critical' as const } },
                { max: 5.5, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 6, max: 8, status: { label: 'Normal', tone: 'normal' as const } },
                { min: 8.5, status: { label: 'Atenção', tone: 'warning' as const } }
            ]
        },
        status: { label: 'Normal', tone: 'normal' as const }
    }
]

const avicultureHeroMonitoringMetrics = [
    {
        label: 'Temperatura do ambiente',
        value: {
            initial: 28,
            min: 18,
            max: 39,
            step: 0.5,
            intervalMs: 5000,
            unit: '°C',
            decimals: 1,
            statusRules: [
                { max: 19, status: { label: 'Crítico', tone: 'critical' as const } },
                { max: 24.5, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 25, max: 32, status: { label: 'Normal', tone: 'normal' as const } },
                { min: 32.5, max: 37.5, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 38, status: { label: 'Crítico', tone: 'critical' as const } }
            ]
        },
        status: { label: 'Normal', tone: 'normal' as const }
    },
    {
        label: 'Umidade do ambiente',
        value: {
            initial: 65,
            min: 30,
            max: 90,
            step: 1,
            intervalMs: 10000,
            unit: '%',
            statusRules: [
                { max: 35, status: { label: 'Crítico', tone: 'critical' as const } },
                { max: 50, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 55, max: 75, status: { label: 'Normal', tone: 'normal' as const } },
                { min: 80, status: { label: 'Atenção', tone: 'warning' as const } }
            ]
        },
        status: { label: 'Normal', tone: 'normal' as const }
    },
    {
        label: 'Luminosidade do ambiente',
        value: {
            initial: 350,
            min: 0,
            max: 1000,
            step: 10,
            intervalMs: 15000,
            unit: 'lux',
            statusRules: [
                { max: 50, status: { label: 'Crítico', tone: 'critical' as const } },
                { max: 200, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 250, max: 600, status: { label: 'Normal', tone: 'normal' as const } },
                { min: 650, status: { label: 'Atenção', tone: 'warning' as const } }
            ]
        },
        status: { label: 'Normal', tone: 'normal' as const }
    }
]

export const heroMonitoringSlides = [
    {
        image: media.heroAquaculture,
        imageAlt: 'Viveiro de aquicultura com aeradores em funcionamento',
        deviceImage: media.aquacultureDevice,
        deviceImageAlt: 'Dispositivo SmartRural para monitoramento de viveiros',
        location: 'Feira Nova, PE',
        unitLabel: 'Viveiro 04',
        metrics: aquacultureHeroMonitoringMetrics
    },
    {
        image: media.heroAviculture,
        imageAlt: 'Viveiro de avicultura com galinheiras e equipamentos',
        deviceImage: media.aviqualityDevice,
        deviceImageAlt: 'Dispositivo SmartRural para monitoramento de viveiros',
        location: 'UFRPE, PE',
        unitLabel: 'Viveiro de poedeiras',
        metrics: avicultureHeroMonitoringMetrics
    }
] satisfies readonly MonitoringSlide[]

export const solutions = {
    aquaculture: {
        number: '01',
        title: 'Aquicultura',
        image: media.pondWide,
        imageAlt: 'Viveiro de aquicultura com aeradores e paisagem rural',
        imageNote: 'Água em movimento',
        copy: 'Acompanhe viveiros, condições da água, equipamentos e informações da produção em um só lugar.',
        linkLabel: 'Conheça a solução',
        linkHref: '#plataforma'
    },
    aviculture: {
        number: '02',
        title: 'Avicultura',
        image: media.aviculture,
        imageAlt: 'Aviário com aves e equipamentos de produção',
        imageNote: 'Operação avícola',
        copy: 'Uma base preparada para acompanhar ambiente, ventilação, temperatura, umidade e equipamentos de aviários.',
        linkLabel: 'Conversar sobre a operação',
        linkHref: '#contato'
    }
} as const

export const platformAccess = ['No celular', 'No computador', 'No ritmo da operação'] as const

export const footerColumns = [
    {
        title: 'Soluções',
        links: [
            { label: 'Aquicultura', href: '#solucoes' },
            { label: 'Avicultura', href: '#solucoes' }
        ]
    },
    {
        title: 'Plataforma',
        links: [
            { label: 'Aplicativo', href: '#plataforma' },
            { label: 'Plataforma web', href: '#plataforma' }
        ]
    },
    {
        title: 'Empresa',
        links: [
            { label: 'Sobre', href: '#conteudo' },
            { label: 'Portfólio', href: '#portfolio' },
            { label: 'Contato', href: '#contato' },
            { label: 'Política de privacidade', href: '/privacy-policy' }
        ]
    }
] as const

export const testimonials = [
    {
        name: 'Sr. Neném',
        role: 'Produtor',
        quote: 'Muito bom ver a tecnologia chegar a minha fazenda.',
        image: asset('nenem.png')
    },
    {
        name: 'Gilmar Aguiar',
        role: 'Profissional de aquicultura',
        quote: 'Achei muito prático e simples de ser utilizado.',
        image: asset('gilmar.png')
    },
    {
        name: 'Amom Nascimento',
        role: 'Profissional de aquicultura',
        quote: 'Esta tecnologia traz maior facilidade no monitoramento de viveiros de aquicultura.',
        image: asset('amom.png')
    },
    {
        name: 'Emerson Oliveira',
        role: 'Profissional do campo',
        quote: 'Ver tecnologias deste tipo alcançando fazendas como a minha é de alto valor.',
        image: asset('emerson.png')
    }
] as const

export const partners = ['c-1.png', 'c-2.png', 'c-3.png', 'c-4.png', 'c-5.png', 'c-6.png', 'c-7.png', 'c-8.png'] as const

export const operationBenefits: ReadonlyArray<{
    number: string
    title: string
    copy: string
    icon: LucideIcon
}> = [
    {
        number: '01',
        title: 'Acompanhar',
        copy: 'Veja as condições atuais das suas unidades e o que está acontecendo na operação.',
        icon: Gauge
    },
    {
        number: '02',
        title: 'Receber avisos',
        copy: 'Saiba quando alguma condição precisar de atenção, no tempo certo para agir.',
        icon: Bell
    },
    {
        number: '03',
        title: 'Consultar o histórico',
        copy: 'Entenda como as informações mudaram ao longo do tempo.',
        icon: History
    },
    {
        number: '04',
        title: 'Acompanhar equipamentos',
        copy: 'Confira informações de aeradores, sensores e outros equipamentos monitorados.',
        icon: SlidersHorizontal
    },
    {
        number: '05',
        title: 'Ver relatórios',
        copy: 'Acesse informações consolidadas para acompanhar a rotina da operação.',
        icon: FileText
    }
]
