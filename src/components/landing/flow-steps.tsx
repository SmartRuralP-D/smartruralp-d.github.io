import { ArrowRight, CalendarDays, Radio, Smartphone } from 'lucide-react'

const flowSteps = [
    { icon: Radio, label: 'No campo', text: 'Sensores acompanham informações importantes.' },
    { icon: CalendarDays, label: 'Na SmartRural', text: 'Essas informações são organizadas.' },
    { icon: Smartphone, label: 'No celular ou computador', text: 'Você acompanha sua operação.' }
] as const

export function FlowSteps() {
    return (
        <div
            className="mt-13.5 grid gap-4.25 bg-surface p-5.5 min-[641px]:mt-18.75 min-[641px]:grid-cols-[1fr_30px_1fr_30px_1fr] min-[641px]:gap-6.5 min-[641px]:p-8"
            aria-label="Como a informação chega até você"
        >
            {flowSteps.map(({ icon: Icon, label, text }, index) => (
                <div key={label} className="contents">
                    <div className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-3">
                        <span className="row-span-2 grid h-9.5 w-9.5 place-items-center rounded-pill border border-[#bdd5f5] text-brand">
                            <Icon className="h-4.25 w-4.25" aria-hidden="true" />
                        </span>
                        <small className="text-[0.625rem] font-extrabold uppercase tracking-widest text-brand-strong">{label}</small>
                        <strong className="mt-0.75 text-[0.8125rem] leading-[1.45]">{text}</strong>
                    </div>
                    {index < flowSteps.length - 1 && (
                        <ArrowRight
                            className="h-4.25 w-4.25 self-center text-brand max-[640px]:ml-3.75 max-[640px]:rotate-90 max-[640px]:justify-self-start"
                            aria-hidden="true"
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
