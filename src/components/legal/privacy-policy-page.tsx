import { ArrowLeft } from 'lucide-react'

import { Brand } from '@/components/site/brand'

export function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-surface text-ink">
            <header className="border-b border-border bg-white/80 backdrop-blur-md">
                <div className="page-container flex min-h-21 items-center justify-between gap-6">
                    <Brand href="/" />
                    <a className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-strong transition-all duration-200 hover:gap-3" href="/">
                        <ArrowLeft className="size-4" aria-hidden="true" />
                        Back to SmartRural
                    </a>
                </div>
            </header>

            <main className="py-16 lg:py-32">
                <div className="page-container">
                    <article className="border border-border bg-white p-7 shadow-card lg:grid lg:grid-cols-7 lg:gap-16 lg:p-20">
                        <div className="mb-12 flex h-fit items-start gap-0 lg:col-span-2 lg:sticky lg:top-8 lg:mb-0">
                            <h1>Privacy Policy</h1>
                        </div>

                        <div className="max-w-2xl font-sans text-base leading-7 text-text lg:col-span-5">
                            <p className="mb-4 text-lg leading-7 lg:text-xl">
                                This Privacy Policy describes how we collect, use, and handle your personal information when you use our OAuth2 service.
                            </p>

                            <section className="mt-12 border-t border-border pt-7">
                                <h2 className="mb-3 text-base leading-5">Information We Collect</h2>
                                <p className="mb-4">When you use our OAuth2 service, we may collect the following information:</p>
                                <ul className="grid gap-2 pl-5">
                                    <li>Your name</li>
                                    <li>Your email address</li>
                                    <li>Any additional information you provide during the authorization process</li>
                                </ul>
                            </section>

                            <section className="mt-12 border-t border-border pt-7">
                                <h2 className="mb-3 text-base leading-5">How We Use Your Information</h2>
                                <p className="mb-4">We use the information collected during the OAuth2 process to:</p>
                                <ul className="grid gap-2 pl-5">
                                    <li>Verify your identity</li>
                                    <li>Provide access to the requested resources</li>
                                    <li>Facilitate the authorization and authentication process</li>
                                </ul>
                            </section>

                            <section className="mt-12 border-t border-border pt-7">
                                <h2 className="mb-3 text-base leading-5">Information Sharing and Disclosure</h2>
                                <p className="mb-4">
                                    We do not share or disclose your personal information obtained through the OAuth2 process, except in the following cases:
                                </p>
                                <ul className="grid gap-2 pl-5">
                                    <li>With your explicit consent</li>
                                    <li>To comply with legal obligations or respond to lawful requests from public authorities</li>
                                    <li>To protect our rights, privacy, safety, or property, and that of our users</li>
                                    <li>
                                        In the event of a merger, acquisition, or any form of sale of some or all of our assets, in which case your personal
                                        information may be transferred to the acquiring entity
                                    </li>
                                </ul>
                            </section>

                            <section className="mt-12 border-t border-border pt-7">
                                <h2 className="mb-3 text-base leading-5">Data Security</h2>
                                <p className="mb-4">
                                    We take appropriate technical and organizational measures to protect your personal information and ensure its
                                    confidentiality and integrity.
                                </p>
                            </section>

                            <section className="mt-12 border-t border-border pt-7">
                                <h2 className="mb-3 text-base leading-5">Changes to this Privacy Policy</h2>
                                <p className="mb-4">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page and the &quot;Last
                                    Updated&quot; date at the top will be revised accordingly.
                                </p>
                            </section>

                            <section className="mt-12 border-t border-border pt-7">
                                <h2 className="mb-3 text-base leading-5">Contact Us</h2>
                                <p className="mb-4">
                                    If you have any questions about this Privacy Policy, please contact us at{' '}
                                    <a className="font-bold text-brand-strong underline" href="mailto:suporte@smartrural.com.br">
                                        suporte@smartrural.com.br
                                    </a>
                                    .
                                </p>
                            </section>

                            <p className="mt-12 border-t border-border pt-5 text-xs font-bold tracking-wide text-muted">Last Updated: 2026-09-21</p>
                        </div>
                    </article>
                </div>
            </main>

            <footer className="bg-inverse py-6 text-xs text-white/60">
                <div className="page-container flex justify-between gap-5">
                    <span>SmartRural</span>
                    <a href="mailto:suporte@smartrural.com.br">suporte@smartrural.com.br</a>
                </div>
            </footer>
        </div>
    )
}
