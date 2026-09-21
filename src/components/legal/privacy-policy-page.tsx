import { ArrowLeft, ShieldCheck } from 'lucide-react'

import { Brand } from '@/components/site/brand'

export function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_86%_8%,rgba(33,128,246,0.12),transparent_28rem),var(--surface)] text-ink">
            <header className="border-b border-border bg-white/80 backdrop-blur-md">
                <div className="page-container flex min-h-[5.25rem] items-center justify-between gap-6">
                    <Brand href="/" />
                    <a
                        className="inline-flex items-center gap-2 text-brand-strong text-xs font-extrabold transition-[gap] duration-200 hover:gap-3 [&_svg]:size-4"
                        href="/"
                    >
                        <ArrowLeft aria-hidden="true" />
                        Back to SmartRural
                    </a>
                </div>
            </header>

            <main className="py-[clamp(64px,10vw,132px)] pb-[6.875rem]">
                <div className="page-container">
                    <div className="flex items-end justify-between gap-[1.875rem] pb-[1.875rem] max-[900px]:block">
                        <div className="inline-flex items-center gap-2 text-[0.6875rem] font-extrabold uppercase tracking-[0.12em] text-brand-strong [&_svg]:size-[1.125rem]">
                            <ShieldCheck aria-hidden="true" />
                            SmartRural · Legal
                        </div>
                        <p className="m-0 max-w-[15.625rem] text-right text-[0.8125rem] leading-[1.6] text-muted max-[900px]:mt-4 max-[900px]:text-left">
                            A clear view of how information is handled.
                        </p>
                    </div>

                    <article className="grid grid-cols-[minmax(190px,0.6fr)_minmax(0,1.4fr)] gap-[clamp(32px,7vw,110px)] border border-[rgba(221,226,230,0.9)] bg-white p-[clamp(30px,6vw,78px)] shadow-[0_1.75rem_4.375rem_rgba(21,23,25,0.08)] max-[900px]:block max-[900px]:px-[1.375rem] max-[900px]:pb-[2.125rem] max-[900px]:pt-7">
                        <div className="sticky top-8 flex h-fit items-start gap-5 max-[900px]:static max-[900px]:mb-12">
                            <div>
                                <h1>Privacy Policy</h1>
                            </div>
                        </div>

                        <div className="max-w-[42.5rem] font-sans text-base leading-[1.75] text-text [&>p:first-child]:mt-0 [&>p:first-child]:text-[clamp(1.15rem,2vw,1.45rem)] [&_section]:mt-[2.875rem] [&_section]:border-t [&_section]:border-[var(--border)] [&_section]:pt-[1.8125rem] [&_h2]:mb-[0.8125rem] [&_h2]:text-[1.05rem] [&_h2]:leading-[1.35] [&_p]:mb-[0.9375rem] [&_ul]:grid [&_ul]:gap-[0.5625rem] [&_ul]:pl-[1.3125rem] [&_a]:font-bold [&_a]:text-[var(--blue-dark)] [&_a]:underline">
                            <p>This Privacy Policy describes how we collect, use, and handle your personal information when you use our OAuth2 service.</p>

                            <section>
                                <h2>Information We Collect</h2>
                                <p>When you use our OAuth2 service, we may collect the following information:</p>
                                <ul>
                                    <li>Your name</li>
                                    <li>Your email address</li>
                                    <li>Any additional information you provide during the authorization process</li>
                                </ul>
                            </section>

                            <section>
                                <h2>How We Use Your Information</h2>
                                <p>We use the information collected during the OAuth2 process to:</p>
                                <ul>
                                    <li>Verify your identity</li>
                                    <li>Provide access to the requested resources</li>
                                    <li>Facilitate the authorization and authentication process</li>
                                </ul>
                            </section>

                            <section>
                                <h2>Information Sharing and Disclosure</h2>
                                <p>We do not share or disclose your personal information obtained through the OAuth2 process, except in the following cases:</p>
                                <ul>
                                    <li>With your explicit consent</li>
                                    <li>To comply with legal obligations or respond to lawful requests from public authorities</li>
                                    <li>To protect our rights, privacy, safety, or property, and that of our users</li>
                                    <li>
                                        In the event of a merger, acquisition, or any form of sale of some or all of our assets, in which case your personal
                                        information may be transferred to the acquiring entity
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2>Data Security</h2>
                                <p>
                                    We take appropriate technical and organizational measures to protect your personal information and ensure its
                                    confidentiality and integrity.
                                </p>
                            </section>

                            <section>
                                <h2>Changes to this Privacy Policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page and the &quot;Last
                                    Updated&quot; date at the top will be revised accordingly.
                                </p>
                            </section>

                            <section>
                                <h2>Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us at{' '}
                                    <a href="mailto:suporte@smartrural.com.br">suporte@smartrural.com.br</a>.
                                </p>
                            </section>

                            <p className="!mt-12 border-t border-border pt-5 text-xs font-bold tracking-[0.04em] text-muted">Last Updated: 2023-06-29</p>
                        </div>
                    </article>
                </div>
            </main>

            <footer className="bg-inverse py-6 text-[0.6875rem] text-white/60">
                <div className="page-container flex justify-between gap-5">
                    <span>SmartRural</span>
                    <a href="mailto:suporte@smartrural.com.br">suporte@smartrural.com.br</a>
                </div>
            </footer>
        </div>
    )
}
