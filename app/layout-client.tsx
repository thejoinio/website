"use client";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ModalProvider } from "@/contexts/modal-context";
import { useEffect, useState } from "react";
import { Preloader } from "./preloader";

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
          <ModalProvider>
              <Navbar />
              <>
                {children}
              </>
              <Toaster />
              <Footer />
            </ModalProvider>
        </>
      )}
    </>
  );
}
