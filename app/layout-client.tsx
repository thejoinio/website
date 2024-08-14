"use client";
import { Footer } from "@/app/ui/footer";
import { useEffect, useState } from "react";
import { Preloader } from "./ui/preloader";
import { Toaster } from "@/components/ui/toaster";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {children}
          <Toaster />
          <Footer />
        </>
      )}
    </>
  );
}
