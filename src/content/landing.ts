import type { LucideIcon } from 'lucide-react'
import { Bell, FileText, Gauge, History, SlidersHorizontal } from 'lucide-react'

import type { MonitoringSlide } from '@/components/landing/monitoring-visual'

export const asset = (file: string) => `/assets/smartrural/${file}`

export const media = {
    mark: asset('logo-grande.png'),
    wordmark: asset('smartrural-nome.png'),
    hero: asset('feira-nova-4.jpg'),
    pondWide: asset('feira-nova-1.jpg'),
    pondDetail: asset('feira-nova-2.jpg'),
    pondPeople: asset('feira-nova-3.jpg'),
    workshop: asset('feira-nova-5.jpg'),
    gathering: asset('feira-nova-6.jpg'),
    sensor: asset('prototipo-1.png'),
    sensorInWater: asset('fotos-1.jpg'),
    webDashboard: asset('web-dashboard.png'),
    webChart: asset('web-chart.png'),
    mobileDashboard: asset('mobile-dashboard.jpeg'),
    aviculture: asset('aviculture.jpeg')
} as const

export const navigation = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Plataforma', href: '#plataforma' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#sobre' }
] as const

const heroMonitoringMetrics = [
    {
        label: 'Temperatura da água',
        value: {
            initial: 28,
            min: 27.4,
            max: 28.6,
            step: 0.1,
            intervalMs: 5000,
            unit: '°C',
            decimals: 1,
            statusRules: [
                { max: 27.5, status: { label: 'Crítico', tone: 'critical' as const } },
                { max: 27.8, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 27.9, max: 28.1, status: { label: 'Normal', tone: 'normal' as const } },
                { min: 28.2, max: 28.5, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 28.6, status: { label: 'Crítico', tone: 'critical' as const } }
            ]
        }
    },
    {
        label: 'Oxigênio dissolvido',
        value: {
            initial: 6.8,
            min: 6.4,
            max: 7.2,
            step: 0.1,
            intervalMs: 5000,
            unit: 'mg/L',
            decimals: 1,
            statusRules: [
                { max: 6.4, status: { label: 'Crítico', tone: 'critical' as const } },
                { max: 6.6, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 6.7, max: 6.9, status: { label: 'Normal', tone: 'normal' as const } },
                { min: 7, max: 7.1, status: { label: 'Atenção', tone: 'warning' as const } },
                { min: 7.2, status: { label: 'Crítico', tone: 'critical' as const } }
            ]
        }
    }
]

export const heroMonitoringSlides = [
    {
        image: media.hero,
        imageAlt: 'Viveiro de aquicultura com aeradores em funcionamento',
        location: 'Feira Nova, PE',
        category: 'Aquicultura',
        unitLabel: 'Viveiro 04',
        metrics: heroMonitoringMetrics
    },
    {
        image: media.hero,
        imageAlt: 'Viveiro de aquicultura com aeradores em funcionamento',
        location: 'Feira Nova, PE',
        category: 'Aquicultura',
        unitLabel: 'Viveiro 04',
        metrics: heroMonitoringMetrics
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
            { label: 'Sobre', href: '#sobre' },
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
