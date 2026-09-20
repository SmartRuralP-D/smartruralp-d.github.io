import { cva } from 'class-variance-authority'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const textLinkVariants = cva(
    'inline-flex items-center justify-self-start gap-[11px] text-[12px] font-extrabold whitespace-nowrap transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    {
        variants: { tone: { default: 'text-brand-strong', light: 'text-white hover:text-white/80' } },
        defaultVariants: { tone: 'default' }
    }
)

export function TextLink({ children, href = '#contato', light = false }: { children: ReactNode; href?: string; light?: boolean }) {
    return (
        <a className={cn(textLinkVariants({ tone: light ? 'light' : 'default', className: 'group' }))} href={href}>
            {children}
            <ArrowUpRight
                className="size-[15px] transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                aria-hidden="true"
            />
        </a>
    )
}
