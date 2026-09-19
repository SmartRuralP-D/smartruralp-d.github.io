import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

import { Brand } from '@/components/site/brand'
import { navigation } from '@/content/landing'

export function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
            <div className="container header-inner">
                <Brand />
                <nav className="desktop-nav" aria-label="Navegação principal">
                    {navigation.map(({ label, href }) => (
                        <a href={href} key={href}>
                            {label}
                        </a>
                    ))}
                </nav>
                <a className="header-cta" href="#contato">
                    Contato <ArrowUpRight aria-hidden="true" />
                </a>
                <button
                    className="menu-toggle"
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </div>
            {menuOpen && (
                <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel">
                    {navigation.map(({ label, href }) => (
                        <a href={href} onClick={closeMenu} key={href}>
                            {label}
                        </a>
                    ))}
                    <a href="#contato" onClick={closeMenu}>
                        Fale com a SmartRural <ArrowUpRight aria-hidden="true" />
                    </a>
                </nav>
            )}
        </header>
    )
}
