import { asset } from '@/content/landing'

export function AviQualityBrand() {
    return (
        <a className="inline-flex shrink-0 items-center gap-3" href="/aviquality" aria-label="Aviquality — início">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden bg-transparent" aria-hidden="true">
                <img className="h-full w-full object-contain" src={asset('aviquality/aviquality-mark.png')} alt="" width={1254} height={1254} />
            </span>
            <span className="flex flex-col">
                <span className="flex items-center gap-2 text-[1.05rem] font-extrabold leading-none tracking-[-0.04em] text-ink">
                    Aviquality
                    {/* <span className="bg-brand px-1.5 py-0.5 text-[0.5rem] font-extrabold uppercase tracking-[0.12em] text-white">SR</span> */}
                </span>
                <span className="mt-1 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-muted">por SmartRural</span>
            </span>
        </a>
    )
}
