const sectionLabelClass = 'm-0 flex items-center gap-2.5 text-brand-strong text-[11px] font-extrabold tracking-[0.12em] leading-[1.2]'

export function SectionLabel({ children }: { children: string }) {
    return (
        <p className={sectionLabelClass}>
            <span className="block size-[7px] rounded-full bg-brand" aria-hidden="true" />
            {children}
        </p>
    )
}
