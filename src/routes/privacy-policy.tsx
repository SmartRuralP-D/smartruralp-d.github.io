import { createFileRoute } from '@tanstack/react-router'

import { PrivacyPolicyPage } from '@/components/legal/privacy-policy-page'

export const Route = createFileRoute('/privacy-policy')({
    head: () => ({
        meta: [
            { title: 'Privacy Policy | SmartRural' },
            {
                name: 'description',
                content: 'SmartRural Privacy Policy describing how personal information is collected, used, and handled through the OAuth2 service.'
            }
        ]
    }),
    component: PrivacyPolicyPage
})
