import type { LucideIcon } from 'lucide-react'
import { Bell, FileText, Gauge, History, SlidersHorizontal } from 'lucide-react'

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
