import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
  width?: "sm" | "md" | "lg" | "xl";
}>;

export default function Section({ id, className, containerClassName, width = "xl", children }: SectionProps) {
  const max = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-7xl",
  }[width];

  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <div className={cn("mx-auto px-6 md:px-8", max, containerClassName)}>{children}</div>
    </section>
  );
}
