import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#4036a4] text-white hover:bg-[#574be0] active:scale-[0.98] shadow-sm",
  outline:
    "border-2 border-[#4036a4] text-[#4036a4] hover:bg-[#4036a4] hover:text-white active:scale-[0.98]",
  ghost:
    "text-[#4036a4] hover:bg-[rgba(64,54,164,0.1)] active:scale-[0.98]",
  dark:
    "bg-[#1a1433] border-2 border-[#4036a4] text-white hover:bg-[#2d2560] active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...props
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
