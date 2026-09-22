import { type MouseEvent, useState } from 'react'

import { aviQualityMedia } from '@/content/aviquality'

export function AviQualitySmartTag({ interactive = true }: { interactive?: boolean }) {
    const [rotateX, setRotateX] = useState(-12)
    const [rotateY, setRotateY] = useState(18)

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!interactive) return
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left - rect.width / 2
        const y = event.clientY - rect.top - rect.height / 2
        setRotateY(Math.max(-24, Math.min(24, (x / (rect.width / 2)) * 18)))
        setRotateX(Math.max(-20, Math.min(20, (-y / (rect.height / 2)) * 18)))
    }

    const resetRotation = () => {
        setRotateX(-12)
        setRotateY(18)
    }

    return (
        <div className="relative flex select-none flex-col items-center">
            <div
                className="relative flex aspect-square w-full max-w-[20rem] items-center justify-center [perspective:1000px]"
                onMouseMove={handleMouseMove}
                onMouseLeave={resetRotation}
                aria-label="Visualização 3D de uma Smart Tag"
            >
                <div className="absolute bottom-3 h-7 w-40 rounded-full bg-black/35 blur-xl" aria-hidden="true" />
                <div
                    className="relative transition-transform duration-150 ease-out [transform-style:preserve-3d]"
                    style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
                >
                    <div
                        className="relative flex h-[14rem] w-[14rem] flex-col items-center justify-between overflow-hidden rounded-[1.35rem] border border-[#33383e] bg-[#151719] p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,.65),inset_0_1px_1px_rgba(255,255,255,.22)] [transform:translateZ(14px)] sm:h-[15rem] sm:w-[15rem]"
                        style={{
                            backgroundImage: `url('${aviQualityMedia.smartTagSurface}'), linear-gradient(135deg, #1b1d20, #0f1113)`,
                            backgroundBlendMode: 'soft-light, normal',
                            backgroundSize: '100% 100%, 100% 100%'
                        }}
                    >
                        <div
                            className="pointer-events-none absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.8) .55px, transparent .7px)', backgroundSize: '4px 4px' }}
                        />
                        <img
                            className="relative z-10 -mt-1 h-auto w-[9rem] drop-shadow-[0_1px_2px_rgba(0,0,0,.8)] sm:w-[9.75rem]"
                            src={aviQualityMedia.smartTagMark}
                            alt=""
                        />
                        <div className="relative z-10 flex size-[3.35rem] items-center justify-center rounded-full border border-white/10 bg-[#080a0c] shadow-[inset_0_3px_7px_rgba(0,0,0,.9)]">
                            <div className="size-8 rounded-full border border-black bg-[#050608]" />
                        </div>
                        <img
                            className="relative z-10 -mb-1 h-auto w-[12.25rem] drop-shadow-[0_1px_2px_rgba(0,0,0,.8)] sm:w-[13rem]"
                            src={aviQualityMedia.smartTagWordmark}
                            alt=""
                        />
                        <span className="absolute left-2 top-2 size-1.5 rounded-full bg-white/15" aria-hidden="true" />
                        <span className="absolute right-2 top-2 size-1.5 rounded-full bg-white/15" aria-hidden="true" />
                        <span className="absolute bottom-2 left-2 size-1.5 rounded-full bg-white/15" aria-hidden="true" />
                        <span className="absolute bottom-2 right-2 size-1.5 rounded-full bg-white/15" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 -z-10 rounded-[1.35rem] border border-[#24282d] bg-[#090b0d] [transform:translateZ(-12px)]" />
                    <div className="absolute inset-0 -z-20 rounded-[1.35rem] bg-[#060708] shadow-2xl [transform:translateZ(-24px)]" />
                </div>
            </div>
            <span className="mt-1 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#9ac7ff]">Smart Tag · visualização 3D</span>
        </div>
    )
}
