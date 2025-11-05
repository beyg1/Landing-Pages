import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
  width?: "sm" | "md" | "lg" | "xl" | "full";
  height?: "normal" | "screen";
}>;

export default function Section({ id, className, containerClassName, width = "xl", height = "normal", children }: SectionProps) {
  const maxWidthClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-7xl",
    full: "max-w-full",
  }[width];

  const paddingClass = width === "full" ? "px-0" : "px-6 md:px-8";
  
  const heightClass = height === "screen" ? "min-h-screen" : "py-20 md:py-28";

  return (
    <section id={id} className={cn("relative", width === "full" && "w-full", heightClass, className)}>
      <div className={cn("mx-auto h-full", paddingClass, maxWidthClass, containerClassName)}>{children}</div>
    </section>
  );
}
