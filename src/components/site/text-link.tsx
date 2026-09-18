import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function TextLink({
  children,
  href = "#contato",
  light = false,
}: {
  children: ReactNode;
  href?: string;
  light?: boolean;
}) {
  return (
    <a className={`text-link ${light ? "text-link-light" : ""}`} href={href}>
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}
