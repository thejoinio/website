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
      "bg-transparent text-[rgba(102,102,102,0.80)] cursor-not-allowed h-10 min-w-[170px] mt-1 lg:mt-0",
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
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22152%22 height=%2240%22 viewBox=%220 0 152 40%22 fill=%22none%22%3E%3Cg filter=%22url(%23filter0_dd_359_1258)%22%3E%3Cpath d=%22M124.584 0H27.2828C25.1502 0 23.0736 0.681721 21.3559 1.94562L8.44569 11.4456C3.01477 15.442 3.01477 23.558 8.44569 27.5544L21.3559 37.0544C23.0736 38.3183 25.1502 39 27.2828 39H124.855C126.902 39 128.9 38.3716 130.579 37.1996L143.347 28.2863C148.879 24.4244 149.077 16.3051 143.741 12.1771L130.702 2.09043C128.95 0.735264 126.798 0 124.584 0Z%22 fill=%22%235C4EDE%22 fill-opacity=%220.1%22 shape-rendering=%22crispEdges%22/%3E%3Cpath d=%22M27.2828 0.5H124.584C126.688 0.5 128.732 1.1985 130.396 2.48591L143.435 12.5726C148.505 16.4942 148.316 24.2075 143.06 27.8763L130.293 36.7896C128.698 37.903 126.8 38.5 124.855 38.5H27.2828C25.2569 38.5 23.284 37.8524 21.6523 36.6517L8.74203 27.1517C3.58265 23.3551 3.58265 15.6449 8.74203 11.8483L21.6523 2.34834C23.284 1.14763 25.2569 0.5 27.2828 0.5Z%22 stroke=%22url(%23paint0_linear_359_1258)%22 shape-rendering=%22crispEdges%22/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id=%22filter0_dd_359_1258%22 x=%220.372498%22 y=%220%22 width=%22151.25%22 height=%2247%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22/%3E%3CfeColorMatrix in=%22SourceAlpha%22 type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0%22 result=%22hardAlpha%22/%3E%3CfeOffset dy=%224%22/%3E%3CfeGaussianBlur stdDeviation=%222%22/%3E%3CfeComposite in2=%22hardAlpha%22 operator=%22out%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0%22/%3E%3CfeBlend mode=%22normal%22 in2=%22BackgroundImageFix%22 result=%22effect1_dropShadow_359_1258%22/%3E%3CfeColorMatrix in=%22SourceAlpha%22 type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0%22 result=%22hardAlpha%22/%3E%3CfeOffset dy=%224%22/%3E%3CfeGaussianBlur stdDeviation=%222%22/%3E%3CfeComposite in2=%22hardAlpha%22 operator=%22out%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0%22/%3E%3CfeBlend mode=%22normal%22 in2=%22effect1_dropShadow_359_1258%22 result=%22effect2_dropShadow_359_1258%22/%3E%3CfeBlend mode=%22normal%22 in=%22SourceGraphic%22 in2=%22effect2_dropShadow_359_1258%22 result=%22shape%22/%3E%3C/filter%3E%3ClinearGradient id=%22paint0_linear_359_1258%22 x1=%22-2.5%22 y1=%2238.9321%22 x2=%22156.039%22 y2=%2230.1441%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%23666666%22 stop-opacity=%220.8%22/%3E%3Cstop offset=%221%22 stop-color=%22white%22 stop-opacity=%220.1%22/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E')",
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
