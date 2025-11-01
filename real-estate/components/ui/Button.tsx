import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

type Common = {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "lg" | "md" | "sm";
};

type ButtonProps = PropsWithChildren<Common & ButtonHTMLAttributes<HTMLButtonElement>>;

type AnchorProps = PropsWithChildren<Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }>;

function baseClasses(variant: NonNullable<Common["variant"]>, size: NonNullable<Common["size"]>) {
  const variants = {
    primary:
      "bg-[var(--accent)] text-[var(--background)] hover:brightness-110 active:brightness-95 shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
    secondary:
      "bg-[color-mix(in_okrgb,var(--accent)_12%,transparent)] text-[var(--foreground)] hover:bg-[color-mix(in_okrgb,var(--accent)_18%,transparent)] border border-[color-mix(in_okrgb,var(--accent)_25%,transparent)]",
    ghost: "bg-transparent text-[var(--foreground)] hover:bg-black/5",
  } as const;

  const sizes = {
    lg: "h-12 px-6 text-base rounded-full",
    md: "h-10 px-5 text-sm rounded-full",
    sm: "h-8 px-4 text-xs rounded-full",
  } as const;

  return cn(
    "inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40",
    variants[variant],
    sizes[size]
  );
}

export function Button({ className, children, variant = "primary", size = "lg", ...props }: ButtonProps) {
  return (
    <button className={cn(baseClasses(variant, size), className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ className, children, variant = "primary", size = "lg", href, ...props }: AnchorProps) {
  return (
    <Link href={href} className={cn(baseClasses(variant, size), className)} {...props}>
      {children}
    </Link>
  );
}
