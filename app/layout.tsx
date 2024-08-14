import type { Metadata } from "next";
import { gilroy } from "@/app/fonts";
import "./globals.css";
import LayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: "JOIN - One For All",
  description:
    "Unite and Play: Connect with Others, Transform Gaming into Rewards, and Earn Every Step of the Way with Blockchain-Powered Security and Innovation!",
  openGraph: {
    title: "JOIN - One For All",
    description:
      "Unite and Play: Connect with Others, Transform Gaming into Rewards, and Earn Every Step of the Way with Blockchain-Powered Security and Innovation!",
    url: "https://thejoin.io",
    images: ["https://thejoin.io/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JOIN - One For All",
    description:
      "Unite and Play: Connect with Others, Transform Gaming into Rewards, and Earn Every Step of the Way with Blockchain-Powered Security and Innovation!",
    creator: "@Dev_Rahmlad",
    images: ["https://thejoin.io/og.png"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroy.className} bg-background text-whitePrimary`}
        suppressHydrationWarning={true}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
