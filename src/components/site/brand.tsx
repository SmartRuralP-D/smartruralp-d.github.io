import { media } from "@/content/landing";

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      className={`brand ${inverted ? "brand-inverted" : ""}`}
      href="#inicio"
      aria-label="SmartRural — início"
    >
      <img src={media.mark} alt="" width={281} height={127} />
      <img src={media.wordmark} alt="SmartRural" width={918} height={84} />
    </a>
  );
}
