export function SectionLabel({ children }: { children: string }) {
    return (
        <p className="m-0 flex items-center gap-[10px] text-[var(--blue-dark)] text-[11px] font-extrabold tracking-[0.12em] leading-[1.2]">
            <span className="block size-[7px] rounded-full bg-[var(--blue)]" aria-hidden="true" />
            {children}
        </p>
    )
}
