import { createFileRoute } from '@tanstack/react-router'

import { AviQualityPage } from '@/components/landing/aviquality-page'

export const Route = createFileRoute('/aviquality')({
    head: () => ({
        meta: [
            { title: 'AviQuality | Monitoramento para Avicultura — SmartRural' },
            {
                name: 'description',
                content: 'Monitoramento automático para acompanhar sua produção avícola em tempo real. Conheça o Aviquality e as SmartTags da SmartRural.'
            },
            { property: 'og:title', content: 'AviQuality | Monitoramento para Avicultura — SmartRural' },
            { property: 'og:description', content: 'Monitoramento automático para acompanhar sua produção avícola em tempo real.' },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' }
        ],
        links: [{ rel: 'canonical', href: 'https://www.smartrural.com.br/aviquality' }]
    }),
    component: AviQualityPage
})
