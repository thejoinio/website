import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const gilroy = localFont({
  src: [
    {
      path: "./Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Gilroy-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});
