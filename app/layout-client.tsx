"use client";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import JoinUs from "@/components/join-us";
import { Toaster } from "@/components/ui/toaster";
import { ModalProvider } from "@/contexts/modal-context";
import { Presale } from "@/components/presale"
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
              <Presale />
              <Toaster />
              <JoinUs />
              <Footer />
            </ModalProvider>
        </>
      )}
    </>
  );
}
