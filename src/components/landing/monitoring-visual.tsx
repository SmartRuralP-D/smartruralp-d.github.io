import type { LucideIcon } from 'lucide-react'
import { Droplets, MapPin } from 'lucide-react'

export type MonitoringStatus = {
    label: string
    tone?: 'normal' | 'warning' | 'critical'
}

export type MonitoringMetric = {
    label: string
    value: string
    status?: MonitoringStatus
}

export type MonitoringVisualProps = {
    image: string
    imageAlt: string
    location: string
    category: string
    unitLabel: string
    metrics: readonly MonitoringMetric[]
    unitIcon?: LucideIcon
}

const statusToneClasses = {
    normal: 'bg-[#4bbd7a]',
    warning: 'bg-[#f2b84b]',
    critical: 'bg-[#ef6b6b]'
} as const

export function MonitoringVisual({ image, imageAlt, location, category, unitLabel, metrics, unitIcon: UnitIcon = Droplets }: MonitoringVisualProps) {
    return (
        <div>
            <figure className="relative h-[clamp(400px,53vw,670px)] overflow-hidden bg-inverse">
                <img
                    className="size-full object-cover transition duration-700 hover:scale-[1.025]"
                    src={image}
                    alt={imageAlt}
                    width={1280}
                    height={720}
                    fetchPriority="high"
                />
                <figcaption className="absolute bottom-6 left-7 z-10 flex flex-wrap gap-5.5 text-xs font-bold text-white">
                    <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-[#9ac7ff]" aria-hidden="true" /> {location}
                    </span>
                    <span>{category}</span>
                </figcaption>
                <div className="absolute right-8 top-8 z-10 grid w-[min(16.875rem,34%)] gap-3 rounded-none border-l-[3px] border-brand bg-[rgba(16,19,22,.78)] p-[1.0625rem_1.125rem] text-white backdrop-blur-lg max-[600px]:right-4 max-[600px]:top-4 max-[600px]:w-[min(16.875rem,calc(100%-2rem))]">
                    <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-bold text-[#bdd9ff]">
                        <UnitIcon className="size-3.5" aria-hidden="true" /> {unitLabel}
                    </span>
                    <div className="grid gap-5">
                        {metrics.map((metric) => (
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
        </div>
    )
}
