import { LoadingIndicator } from "@/assets/svg";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  variant?: "text" | "outlined" | "primary" | "white" | "dark";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  onClick?: () => void;
  onBlur?: () => void;
  loading?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  fullWidth = false,
  href,
  variant = "primary",
  type = "button",
  ariaLabel,
  onClick,
  onBlur,
  loading = false,
}) => {
  const variantStyles = {
    text: "border-none outline-transparent bg-transparent",
    primary:
      "gradient-border-button text-white bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,rgba(137,64,255,0.20)_103.66%)] hover:bg-[linear-gradient(98deg,#8AE5CF_6.1%,#7C3AE7_103.66%)] outline-transparent focus:outline-black disabled:cursor-not-allowed disabled:opacity-50",
    white:
      "gradient-border-button text-black bg-white hover:bg-[linear-gradient(98deg,#8AE5CF_6.1%,#7C3AE7_103.66%)] font-medium outline-transparent focus:outline-black disabled:cursor-not-allowed",
    dark:
      "gradient-border-button text-white bg-[#121010] hover:bg-[linear-gradient(98deg,#8AE5CF_6.1%,#7C3AE7_103.66%)] font-medium outline-transparent focus:outline-black disabled:cursor-not-allowed disabled:opacity-50",
    outlined:
      "border outline-transparent focus:outline-primary border-primary hover:border-primary/80 text-primary bg-transparent",
  };
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
      className={`${className} ${fullWidth ? "w-full" : "w-fit"} ${
        variantStyles[variant]
      } py-[11.25px] px-[22.5px] rounded-full transition-colors duration-1000 ease-in-out`}
    >
      {href ? (
        <Link href={href}>{loading ? <LoadingIndicator /> : children}</Link>
      ) : (
        <>{loading ? <LoadingIndicator /> : children}</>
      )}
    </button>
  );
};
