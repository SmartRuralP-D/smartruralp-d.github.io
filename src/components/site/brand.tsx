import { media } from '@/content/landing'

export function Brand({ inverted = false, href = '#inicio' }: { inverted?: boolean; href?: string }) {
    return (
        <a className={`brand ${inverted ? 'brand-inverted' : ''}`} href={href} aria-label="SmartRural — início">
            <img src={media.mark} alt="" width={281} height={127} />
            <img src={media.wordmark} alt="SmartRural" width={918} height={84} />
        </a>
    )
}
