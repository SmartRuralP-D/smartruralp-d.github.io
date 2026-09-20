import { media } from '@/content/landing'

export function Brand({ inverted = false, href = '#inicio' }: { inverted?: boolean; href?: string }) {
    return (
        <a className="inline-flex shrink-0 items-center gap-[7px]" href={href} aria-label="SmartRural — início">
            <img className={`h-[22px] w-[38px] object-contain ${inverted ? 'brightness-0 invert' : ''}`} src={media.mark} alt="" width={281} height={127} />
            <img
                className={`h-auto w-[142px] object-contain ${inverted ? 'brightness-0 invert' : ''}`}
                src={media.wordmark}
                alt="SmartRural"
                width={915}
                height={86}
            />
        </a>
    )
}
