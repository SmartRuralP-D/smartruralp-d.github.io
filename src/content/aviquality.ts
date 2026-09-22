import { asset, media } from '@/content/landing'

export const aviQualityMedia = {
    hero: asset('aviquality/aviary-device-installed.png'),
    fieldDetail: asset('aviquality/aviary-installation.jpg'),
    operation: asset('aviquality/aviary-operation.png'),
    device: media.aviqualityDevice,
    webDashboard: media.webDashboard,
    smartGraph: asset('aviquality/smartgraph.png'),
    aviQualityMark: asset('aviquality/aviquality-mark.png'),
    smartTagMark: asset('aviquality/smart-tag-sr.png'),
    smartTagWordmark: asset('aviquality/smart-tag-wordmark.png'),
    smartTagSurface: asset('aviquality/smart-tag-surface.png')
} as const

export const aviQualityNavigation = [
    { label: 'A rotina', href: '#rotina' },
    { label: 'A virada', href: '#virada' },
    { label: 'A evidência', href: '#evidencia' }
] as const

export const managementSteps = [
    {
        number: '01',
        title: 'O manejo acontece em muitos pontos',
        copy: 'Ambiente, equipamentos e rotina mudam enquanto a equipe cuida da criação.'
    },
    {
        number: '02',
        title: 'Nem tudo cabe em uma conferência',
        copy: 'Uma visita pontual mostra um momento. A operação precisa ser acompanhada ao longo do dia.'
    },
    {
        number: '03',
        title: 'A informação precisa chegar até você',
        copy: 'É essa passagem do ambiente para o sistema que ajuda a decidir com mais contexto.'
    }
] as const

export const dataFlowSteps = [
    { number: '01', label: 'Ambiente', copy: 'A operação acontece no aviário.' },
    { number: '02', label: 'Dispositivo', copy: 'O AviQuality acompanha o que foi definido para a criação.' },
    { number: '03', label: 'Informação', copy: 'O sistema organiza os dados em dashboard e gráfico.' }
] as const

export const informationBenefits = [
    {
        number: '01',
        title: 'Acompanhar',
        copy: 'Veja o que está acontecendo nas unidades da operação.'
    },
    {
        number: '02',
        title: 'Receber avisos',
        copy: 'Saiba quando uma condição precisar de atenção.'
    },
    {
        number: '03',
        title: 'Consultar o histórico',
        copy: 'Entenda como as informações mudaram ao longo do tempo.'
    },
    {
        number: '04',
        title: 'Ver relatórios',
        copy: 'Acesse informações consolidadas para acompanhar a rotina.'
    }
] as const

export const aviQualityFooterColumns = [
    {
        title: 'AviQuality',
        links: [
            { label: 'A virada', href: '#virada' },
            { label: 'Produto em campo', href: '#produto' },
            { label: 'Da coleta aos dados', href: '#evidencia' }
        ]
    },
    {
        title: 'SmartRural',
        links: [
            { label: 'Soluções', href: '/#solucoes' },
            { label: 'Plataforma', href: '/#plataforma' },
            { label: 'Contato', href: '#contato' }
        ]
    }
] as const
