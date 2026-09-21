import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

import { Brand } from '@/components/site/brand'
import { navigation } from '@/content/landing'
import { cn } from '@/lib/utils'

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
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 border-b transition',
                scrolled ? 'border-border/90 bg-canvas/88 shadow-header backdrop-blur-lg' : 'border-transparent bg-canvas/72'
            )}
        >
            <div className="mx-auto flex min-h-21 w-[min(calc(100%-4rem),77.5rem)] items-center justify-between gap-8">
                <Brand />
                <nav className="ml-auto flex items-center gap-[clamp(22px,3vw,42px)] max-[900px]:hidden" aria-label="Navegação principal">
                    {navigation.map(({ label, href }) => (
                        <a className="text-[0.8125rem] font-bold text-text transition hover:text-brand" href={href} key={href}>
                            {label}
                        </a>
                    ))}
                </nav>
                <a
                    className="inline-flex items-center gap-2 text-[0.8125rem] font-bold text-text transition hover:text-brand max-[900px]:hidden"
                    href="#contato"
                >
                    Contato <ArrowUpRight className="size-3.75 text-brand" aria-hidden="true" />
                </a>
                <button
                    className="hidden size-10.5 items-center justify-center rounded-control border border-border bg-transparent text-ink max-[900px]:inline-flex"
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? <X className="size-4.75" aria-hidden="true" /> : <Menu className="size-4.75" aria-hidden="true" />}
                </button>
            </div>
            {menuOpen && (
                <nav
                    id="mobile-navigation"
                    className="grid gap-5 border-t border-border bg-canvas px-8 py-5.5 pb-7 text-[1.0625rem] font-bold min-[901px]:hidden"
                    aria-label="Navegação móvel"
                >
                    {navigation.map(({ label, href }) => (
                        <a className="flex items-center justify-between" href={href} onClick={closeMenu} key={href}>
                            {label}
                        </a>
                    ))}
                    <a href="#contato" onClick={closeMenu} className="flex items-center gap-2">
                        Fale com a SmartRural <ArrowUpRight aria-hidden="true" />
                    </a>
                </nav>
            )}
        </header>
    )
}
