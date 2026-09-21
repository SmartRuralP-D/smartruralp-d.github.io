import { type FocusEvent, useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Droplets, MapPin } from 'lucide-react'

import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export type MonitoringStatus = {
    label: string
    tone?: 'normal' | 'warning' | 'critical'
}

export type MonitoringStatusRule = {
    min?: number
    max?: number
    status: MonitoringStatus
}

export type MonitoringMetricValue = {
    initial: number
    min: number
    max: number
    step: number
    intervalMs: number
    unit: string
    decimals?: number
    statusRules?: readonly MonitoringStatusRule[]
}

export type MonitoringMetric = {
    label: string
    value: string | MonitoringMetricValue
    status?: MonitoringStatus
}

export type MonitoringSlide = {
    image: string
    imageAlt: string
    deviceImage: string
    deviceImageAlt: string
    location: string
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

function resolveMetricStatus(metric: MonitoringMetric, value: number) {
    if (typeof metric.value === 'string') {
        return metric.status
    }

    return (
        metric.value.statusRules?.find((rule) => (rule.min === undefined || value >= rule.min) && (rule.max === undefined || value <= rule.max))?.status ??
        metric.status
    )
}

function formatMetricNumber(value: number, config: MonitoringMetricValue) {
    const decimals = config.decimals ?? 0
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value)
}

function getMetricUnitSeparator(unit: string) {
    return unit.startsWith('°') || unit.startsWith('%') ? '' : ' '
}

function roundMetricValue(value: number, config: MonitoringMetricValue) {
    const precision = 10 ** (config.decimals ?? 0)

    return Math.round(value * precision) / precision
}

function useMetricSimulation(config: MonitoringMetricValue | undefined, active: boolean, paused: boolean, reducedMotion: boolean) {
    const [value, setValue] = useState(config ? roundMetricValue(config.initial, config) : 0)
    const [direction, setDirection] = useState<1 | -1>(1)

    useEffect(() => {
        setValue(config ? roundMetricValue(config.initial, config) : 0)
        setDirection(1)
    }, [config])

    useEffect(() => {
        if (!config || !active || paused || reducedMotion) {
            return
        }

        const timer = window.setInterval(() => {
            setValue((currentValue) => {
                const step = Math.abs(config.step)
                const canIncrease = currentValue < config.max
                const canDecrease = currentValue > config.min
                let delta = Math.random() < 0.5 ? -step : step

                if (!canIncrease) {
                    delta = -step
                } else if (!canDecrease) {
                    delta = step
                }

                const nextValue = roundMetricValue(Math.min(config.max, Math.max(config.min, currentValue + delta)), config)

                if (nextValue !== currentValue) {
                    setDirection(nextValue > currentValue ? 1 : -1)
                }

                return nextValue
            })
        }, config.intervalMs)

        return () => window.clearInterval(timer)
    }, [active, config, paused, reducedMotion])

    return { value, direction }
}

function AnimatedMetricNumber({
    value,
    config,
    direction,
    reducedMotion
}: {
    value: number
    config: MonitoringMetricValue
    direction: 1 | -1
    reducedMotion: boolean
}) {
    const formattedNumber = formatMetricNumber(value, config)
    const previousNumber = useRef(formattedNumber)
    const unitSeparator = getMetricUnitSeparator(config.unit)

    useEffect(() => {
        previousNumber.current = formattedNumber
    }, [formattedNumber])

    return (
        <strong
            className="inline-flex text-[1.6875rem] leading-none tracking-[-.04em] tabular-nums max-[600px]:text-[1.375rem]"
            aria-label={`${formattedNumber}${unitSeparator}${config.unit}`}
        >
            <span className="inline-flex">
                {Array.from(formattedNumber).map((character, index) => {
                    const characterChanged = previousNumber.current[index] !== character
                    const characterKey = `${index}-${character}`

                    if (!characterChanged || reducedMotion) {
                        return (
                            <span key={characterKey} className="inline-block h-[1em] overflow-hidden">
                                <span className="inline-block">{character}</span>
                            </span>
                        )
                    }

                    return (
                        <span key={`${index}-slot`} className="inline-block h-[1em] overflow-hidden">
                            <AnimatePresence initial={false} mode="popLayout">
                                <motion.span
                                    key={characterKey}
                                    initial={{ opacity: 0, y: direction > 0 ? '0.75em' : '-0.75em' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: direction > 0 ? '-0.75em' : '0.75em' }}
                                    transition={{ duration: 0.28, ease: 'easeOut' }}
                                    className="inline-block"
                                >
                                    {character}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    )
                })}
            </span>
            <span>
                {unitSeparator}
                {config.unit}
            </span>
        </strong>
    )
}

function MonitoringMetricDisplay({
    metric,
    active,
    paused,
    reducedMotion
}: {
    metric: MonitoringMetric
    active: boolean
    paused: boolean
    reducedMotion: boolean
}) {
    const config = typeof metric.value === 'string' ? undefined : metric.value
    const simulation = useMetricSimulation(config, active, paused, reducedMotion)
    const numericValue = config ? simulation.value : undefined
    const staticValue = typeof metric.value === 'string' ? metric.value : ''
    const status = numericValue === undefined ? metric.status : resolveMetricStatus(metric, numericValue)
    const previousValue = useRef(numericValue)
    const direction = numericValue === undefined || previousValue.current === undefined ? 1 : simulation.direction

    useEffect(() => {
        previousValue.current = numericValue
    }, [numericValue])

    return (
        <div className="grid gap-0.5">
            <span className="md:text-[0.6875rem] font-bold leading-[1.35] text-white/75 text-[0.5625rem]">{metric.label}</span>
            {config ? (
                <AnimatedMetricNumber value={simulation.value} config={config} direction={direction} reducedMotion={reducedMotion} />
            ) : (
                <strong className="md:text-[1.6875rem] leading-none tracking-[-.04em] text-[1.375rem]">{staticValue}</strong>
            )}
            {status ? (
                <span className="inline-flex items-center gap-1.5 md:text-[0.6875rem] font-bold text-[#d5e4dc] text-[0.5625rem]">
                    <i className={`size-1.75 rounded-pill ${statusToneClasses[status.tone ?? 'normal']}`} aria-hidden="true" /> {status.label}
                </span>
            ) : null}
        </div>
    )
}

function MonitoringVisualCard({
    slide,
    priority = false,
    active,
    paused,
    reducedMotion
}: {
    slide: MonitoringSlide
    priority?: boolean
    active: boolean
    paused: boolean
    reducedMotion: boolean
}) {
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
            <figcaption className="absolute bottom-6 left-7 z-10 flex flex-wrap gap-5.5 bg-[rgba(16,19,22,.7)] px-3 py-2.5 text-xs font-bold text-white backdrop-blur-[0.4375rem] max-[600px]:text-[0.6875rem]">
                <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-[#9ac7ff]" aria-hidden="true" /> {slide.location}
                </span>
            </figcaption>
            <div className="absolute left-7 top-8 z-10 w-[min(15rem,31%)] overflow-hidden border-l-[3px] border-brand bg-[rgba(16,19,22,.78)] p-3 text-white backdrop-blur-lg max-[600px]:left-4 max-[600px]:top-4 max-[600px]:w-[min(9rem,38%)] max-[600px]:p-2">
                <img
                    className="h-32 w-full object-contain max-[600px]:h-20"
                    src={slide.deviceImage}
                    alt={slide.deviceImageAlt}
                    width={2760}
                    height={2104}
                    loading="lazy"
                />
                <p className="mb-0 mt-1.5 text-[0.6875rem] font-extrabold tracking-[-.02em] text-white max-[600px]:mt-1 max-[600px]:text-[0.5625rem]">
                    Dispositivo SmartRural
                </p>
            </div>
            <div className="absolute right-8 top-8 z-10 grid w-[min(16.875rem,34%)] gap-3 rounded-none border-l-[3px] border-brand bg-[rgba(16,19,22,.78)] p-[1.0625rem_1.125rem] text-white backdrop-blur-lg max-md:w-1/2 max-[600px]:right-4 max-[600px]:top-4">
                <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-bold text-[#bdd9ff] max-[600px]:text-[0.5625rem]">
                    <UnitIcon className="size-3.5" aria-hidden="true" /> {slide.unitLabel}
                </span>
                <div className="grid gap-5">
                    {slide.metrics.map((metric) => (
                        <MonitoringMetricDisplay key={metric.label} metric={metric} active={active} paused={paused} reducedMotion={reducedMotion} />
                    ))}
                </div>
            </div>
        </figure>
    )
}

export function MonitoringVisual(props: MonitoringVisualProps) {
    return <MonitoringVisualCard slide={props} priority active paused={false} reducedMotion={false} />
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
                            <MonitoringVisualCard
                                slide={slide}
                                priority={index === 0}
                                active={activeIndex === index}
                                paused={isPaused}
                                reducedMotion={prefersReducedMotion}
                            />
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
