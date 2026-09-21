const sectionLabelClass = 'm-0 flex items-center gap-2.5 text-brand-strong text-[0.6875rem] font-extrabold tracking-[0.12em] leading-[1.2]'

export function SectionLabel({ children }: { children: string }) {
    return (
        <p className={sectionLabelClass}>
            <span className="block size-[0.4375rem] rounded-pill bg-brand" aria-hidden="true" />
            {children}
        </p>
    )
}
