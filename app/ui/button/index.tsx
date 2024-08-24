import React from "react";
import { LoadingIndicator } from "@/app/assets/svg";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button";
  disabled?: boolean;
  variant?:
    | "text"
    | "ordinary"
    | "outlined"
    | "shaped"
    | "shaped-disabled"
    | "shaped-enabled"
    | "shaped-white"
    | "shaped-gradient"
    | "shaped-gradient-outline";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  variant = "shaped",
  type = "button",
  onClick,
  loading,
}) => {
  const variantStyles = {
    outlined: "bg-transparent border border-grey-200",
    shaped:
      "bg-transparent hover:scale-95 active:scale-100 transition duration-200 h-10",
    "shaped-disabled":
      "bg-transparent text-[rgba(102,102,102,0.80)] cursor-not-allowed h-10 min-w-[170px]",
    "shaped-enabled":
      "h-10",
    "shaped-gradient":
      "bg-transparent hover:scale-95 active:scale-100 transition duration-200",
    "shaped-gradient-outline":
      "bg-transparent hover:scale-95 active:scale-100 transition duration-200",
    "shaped-white":
      "text-[#04141D] font-semibold text-[23px] hover:scale-95 active:scale-100 transition duration-200",
    primary: "bg-primary-500 text-white",
    text: "bg-transparent border-none text-[#F2E6E0] hover:text-hoverPrimary",
    ordinary:
      "bg-transparent border-none scale-100 !px-0 hover:scale-90 active:scale-100 transition duration-200",
  };

  const variantSpecificStyles =
    variant === "shaped"
      ? {
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=%22156%22 height=%2240%22 viewBox=%220 0 156 40%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath id=%22Vector%22 d=%22M24.7946 1.25H131.233C133.212 1.25 135.141 1.86798 136.752 3.01765L150.868 13.0932C156.332 16.9934 156.137 25.1766 150.493 28.812L136.638 37.7365C135.104 38.7246 133.318 39.25 131.494 39.25H24.7946C22.8917 39.25 21.0326 38.6785 19.4583 37.6096L5.4662 28.1096C-0.085371 24.3404 -0.085371 16.1596 5.4662 12.3904L19.4583 2.89038C21.0326 1.82147 22.8917 1.25 24.7946 1.25Z%22 stroke=%22%23FCFCFC%22/%3E%3C/svg%3E')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }
      : variant === "shaped-disabled"
        ? {
            backgroundImage: "url('/shaped-enabled.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            filter:
              "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }
      : variant === "shaped-enabled"
        ? {
            backgroundImage: "url('/shaped-enabled.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            filter:
              "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }
        : variant === "shaped-gradient"
          ? {
              backgroundImage: "url('/shaped-gradient.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }
          : variant === "shaped-gradient-outline"
            ? {
                backgroundImage: "url('/shaped-gradient-outline.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }
            : variant === "shaped-white"
              ? {
                  backgroundImage: "url('/shaped-white.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }
              : {};

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={`${className} ${variantStyles[variant]} h-10 text-sm md:text-base px-[14px] md:px-6 items-center justify-center flex font-medium disabled:cursor-not-allowed relative overflow-hidden`}
      style={variantSpecificStyles}
    >
      {loading ? <LoadingIndicator /> : children}
    </button>
  );
};
