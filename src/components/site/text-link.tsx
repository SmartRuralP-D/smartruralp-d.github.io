import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function TextLink({ children, href = '#contato', light = false }: { children: ReactNode; href?: string; light?: boolean }) {
    return (
        <a
            className={`inline-flex items-center justify-self-start gap-[11px] text-[var(--blue-dark)] text-[12px] font-extrabold whitespace-nowrap ${light ? 'text-white' : ''}`}
            href={href}
        >
            {children}
            <ArrowUpRight className="size-[15px] transition-transform duration-200 hover:translate-x-[3px] hover:-translate-y-[3px]" aria-hidden="true" />
        </a>
    )
}
