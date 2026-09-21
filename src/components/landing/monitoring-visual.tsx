import { type FocusEvent, useCallback, useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Droplets, MapPin } from 'lucide-react'

import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export type MonitoringStatus = {
    label: string
    tone?: 'normal' | 'warning' | 'critical'
}

export type MonitoringMetric = {
    label: string
    value: string
    status?: MonitoringStatus
}

export type MonitoringSlide = {
    image: string
    imageAlt: string
    location: string
    category: string
    unitLabel: string
    metrics: readonly MonitoringMetric[]
    unitIcon?: LucideIcon
}

export type MonitoringVisualProps = MonitoringSlide

const statusToneClasses = {
    normal: 'bg-[#4bbd7a]',
    warning: 'bg-[#f2b84b]',
    critical: 'bg-[#ef6b6b]'
} as const

function MonitoringVisualCard({ slide, priority = false }: { slide: MonitoringSlide; priority?: boolean }) {
    const UnitIcon = slide.unitIcon ?? Droplets

    return (
        <figure className="relative h-[clamp(400px,53vw,670px)] overflow-hidden bg-inverse">
            <img
                className="size-full object-cover transition duration-700 hover:scale-[1.025]"
                src={slide.image}
                alt={slide.imageAlt}
                width={1280}
                height={720}
                fetchPriority={priority ? 'high' : 'auto'}
                loading={priority ? undefined : 'lazy'}
            />
            <figcaption className="absolute bottom-6 left-7 z-10 flex flex-wrap gap-5.5 bg-[rgba(16,19,22,.7)] px-3 py-2.5 text-xs font-bold text-white backdrop-blur-[0.4375rem]">
                <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-[#9ac7ff]" aria-hidden="true" /> {slide.location}
                </span>
                <span>{slide.category}</span>
            </figcaption>
            <div className="absolute right-8 top-8 z-10 grid w-[min(16.875rem,34%)] gap-3 rounded-none border-l-[3px] border-brand bg-[rgba(16,19,22,.78)] p-[1.0625rem_1.125rem] text-white backdrop-blur-lg max-[600px]:right-4 max-[600px]:top-4 max-[600px]:w-[min(16.875rem,calc(100%-2rem))]">
                <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-bold text-[#bdd9ff]">
                    <UnitIcon className="size-3.5" aria-hidden="true" /> {slide.unitLabel}
                </span>
                <div className="grid gap-5">
                    {slide.metrics.map((metric) => (
                        <div key={metric.label} className="grid gap-0.5">
                            <span className="text-[0.6875rem] font-bold leading-[1.35] text-white/75">{metric.label}</span>
                            <strong className="text-[1.6875rem] leading-none tracking-[-.04em]">{metric.value}</strong>
                            {metric.status ? (
                                <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-bold text-[#d5e4dc]">
                                    <i className={`size-1.75 rounded-pill ${statusToneClasses[metric.status.tone ?? 'normal']}`} aria-hidden="true" />{' '}
                                    {metric.status.label}
                                </span>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </figure>
    )
}

export function MonitoringVisual(props: MonitoringVisualProps) {
    return <MonitoringVisualCard slide={props} priority />
}

export function MonitoringVisualCarousel({ slides, autoplayInterval = 6000 }: { slides: readonly MonitoringSlide[]; autoplayInterval?: number }) {
    const [api, setApi] = useState<CarouselApi>()
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
    const hasMultipleSlides = slides.length > 1

    const handleApi = useCallback((nextApi: CarouselApi) => {
        setApi(nextApi)
    }, [])

    useEffect(() => {
        if (!api) {
            return
        }

        const updateActiveIndex = () => setActiveIndex(api.selectedScrollSnap())

        updateActiveIndex()
        api.on('select', updateActiveIndex)
        api.on('reInit', updateActiveIndex)

        return () => {
            api.off('select', updateActiveIndex)
            api.off('reInit', updateActiveIndex)
        }
    }, [api])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

        updatePreference()
        mediaQuery.addEventListener('change', updatePreference)

        return () => mediaQuery.removeEventListener('change', updatePreference)
    }, [])

    useEffect(() => {
        if (!api || !hasMultipleSlides || isPaused || prefersReducedMotion) {
            return
        }

        const timer = window.setInterval(() => api.scrollNext(), autoplayInterval)

        return () => window.clearInterval(timer)
    }, [api, autoplayInterval, hasMultipleSlides, isPaused, prefersReducedMotion])

    const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsPaused(false)
        }
    }

    if (slides.length === 0) {
        return null
    }

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={handleBlur}
        >
            <Carousel opts={{ loop: hasMultipleSlides }} setApi={handleApi} aria-label="Monitoramento por localização">
                <CarouselContent className="ml-0">
                    {slides.map((slide, index) => (
                        <CarouselItem key={`${slide.location}-${slide.unitLabel}`} className="pl-0">
                            <MonitoringVisualCard slide={slide} priority={index === 0} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            {hasMultipleSlides ? (
                <div className="mt-4 flex items-center justify-center gap-2" aria-label="Selecionar localização">
                    {slides.map((slide, index) => (
                        <button
                            key={`${slide.location}-${slide.unitLabel}-indicator`}
                            type="button"
                            className="size-2.5 rounded-pill bg-border transition-colors hover:bg-brand data-[active=true]:bg-brand"
                            data-active={activeIndex === index}
                            aria-label={`Ir para ${slide.location}`}
                            aria-current={activeIndex === index ? 'true' : undefined}
                            onClick={() => api?.scrollTo(index)}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    )
}
