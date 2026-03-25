import type { Metadata, Viewport } from "next";
import { CartProvider } from "@/context/CartContext";
import BottomNav from "@/components/BottomNav";
import FloatingCart from "@/components/FloatingCart";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIME AID — End Hunger, One Order at a Time",
  description: "Every order automatically contributes to ending food insecurity.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#09090B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh bg-bg text-white antialiased">
        <CartProvider>
          <main className="pb-36">{children}</main>
          <FloatingCart />
          <BottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
