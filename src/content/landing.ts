import type { LucideIcon } from 'lucide-react'
import { Bell, FileText, Gauge, History, SlidersHorizontal } from 'lucide-react'

import aviculture from '@/assets/smartrural/aviculture.jpeg'
import fotos1 from '@/assets/smartrural/fotos-1.jpg'
import feiraNova1 from '@/assets/smartrural/fotos-feira-nova-1.jpg'
import feiraNova2 from '@/assets/smartrural/fotos-feira-nova-2.jpg'
import feiraNova3 from '@/assets/smartrural/fotos-feira-nova-3.jpg'
import feiraNova4 from '@/assets/smartrural/fotos-feira-nova-4.jpg'
import feiraNova5 from '@/assets/smartrural/fotos-feira-nova-5.jpg'
import feiraNova6 from '@/assets/smartrural/fotos-feira-nova-6.jpg'
import logoGrande from '@/assets/smartrural/logo-grande.png'
import mobileDashboard from '@/assets/smartrural/mobile-dashboard.jpeg'
import parceiro1 from '@/assets/smartrural/parceiros-c-1.png'
import parceiro2 from '@/assets/smartrural/parceiros-c-2.png'
import parceiro3 from '@/assets/smartrural/parceiros-c-3.png'
import parceiro4 from '@/assets/smartrural/parceiros-c-4.png'
import parceiro5 from '@/assets/smartrural/parceiros-c-5.png'
import parceiro6 from '@/assets/smartrural/parceiros-c-6.png'
import parceiro7 from '@/assets/smartrural/parceiros-c-7.png'
import parceiro8 from '@/assets/smartrural/parceiros-c-8.png'
import prototipo1 from '@/assets/smartrural/prototipo-1.png'
import relatoAmom from '@/assets/smartrural/relatos-amom.png'
import relatoEmerson from '@/assets/smartrural/relatos-emerson.png'
import relatoGilmar from '@/assets/smartrural/relatos-gilmar.png'
import relatoNenem from '@/assets/smartrural/relatos-nenem.png'
import smartruralNome from '@/assets/smartrural/smartrural-nome.png'
import webChart from '@/assets/smartrural/web-chart.png'
import webDashboard from '@/assets/smartrural/web-dashboard.png'

export const media = {
    mark: logoGrande,
    wordmark: smartruralNome,
    hero: feiraNova4,
    pondWide: feiraNova1,
    pondDetail: feiraNova2,
    pondPeople: feiraNova3,
    workshop: feiraNova5,
    gathering: feiraNova6,
    sensor: prototipo1,
    sensorInWater: fotos1,
    webDashboard,
    webChart,
    mobileDashboard,
    aviculture
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
        image: relatoNenem
    },
    {
        name: 'Gilmar Aguiar',
        role: 'Profissional de aquicultura',
        quote: 'Achei muito prático e simples de ser utilizado.',
        image: relatoGilmar
    },
    {
        name: 'Amom Nascimento',
        role: 'Profissional de aquicultura',
        quote: 'Esta tecnologia traz maior facilidade no monitoramento de viveiros de aquicultura.',
        image: relatoAmom
    },
    {
        name: 'Emerson Oliveira',
        role: 'Profissional do campo',
        quote: 'Ver tecnologias deste tipo alcançando fazendas como a minha é de alto valor.',
        image: relatoEmerson
    }
] as const

export const partners = [parceiro1, parceiro2, parceiro3, parceiro4, parceiro5, parceiro6, parceiro7, parceiro8] as const

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
