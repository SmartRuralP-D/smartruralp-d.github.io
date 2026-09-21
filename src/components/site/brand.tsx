import { media } from '@/content/landing'
import { cn } from '@/lib/utils'

export function Brand({ inverted = false, href = '#inicio' }: { inverted?: boolean; href?: string }) {
    const imageClass = cn('object-contain', inverted && 'brightness-0 invert')

    return (
        <a className="inline-flex shrink-0 items-center" href={href} aria-label="SmartRural — início">
            <img className={cn(imageClass, 'h-auto w-35.5')} src={media.wordmark} alt="SmartRural" width={915} height={86} />
        </a>
    )
}
