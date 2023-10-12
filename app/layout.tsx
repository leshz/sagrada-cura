import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const monse = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sagradacura.com | Sanación Natural",
  description: "Sanacion Natural y Espiritual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monse.className}>{children}</body>
    </html>
  );
}
