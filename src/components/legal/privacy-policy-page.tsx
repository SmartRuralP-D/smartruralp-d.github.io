import { ArrowLeft, ShieldCheck } from 'lucide-react'

import { Brand } from '@/components/site/brand'

export function PrivacyPolicyPage() {
    return (
        <div className="privacy-page">
            <header className="privacy-header">
                <div className="container privacy-header-inner">
                    <Brand href="/" />
                    <a className="privacy-back-link" href="/">
                        <ArrowLeft aria-hidden="true" />
                        Back to SmartRural
                    </a>
                </div>
            </header>

            <main className="privacy-main">
                <div className="container">
                    <div className="privacy-hero">
                        <div className="privacy-kicker">
                            <ShieldCheck aria-hidden="true" />
                            SmartRural · Legal
                        </div>
                        <p className="privacy-hero-note">A clear view of how information is handled.</p>
                    </div>

                    <article className="privacy-card">
                        <div className="privacy-card-heading">
                            <span className="privacy-card-index" aria-hidden="true" />
                            <div>
                                <h1>Privacy Policy</h1>
                            </div>
                        </div>

                        <div className="privacy-content">
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

                            <p className="privacy-last-updated">Last Updated: 2023-06-29</p>
                        </div>
                    </article>
                </div>
            </main>

            <footer className="privacy-footer">
                <div className="container">
                    <span>SmartRural</span>
                    <a href="mailto:suporte@smartrural.com.br">suporte@smartrural.com.br</a>
                </div>
            </footer>
        </div>
    )
}
