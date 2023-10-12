import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Fav from "../public/favicon.ico";

const raleway = Raleway({ subsets: ["latin"], weight: ["200", "400"] });

export const metadata: Metadata = {
  title: "sagradacura.com | Sanación Natural",
  description: "Sanacion Natural y Espiritual",
  icons: [{ rel: "icon", url: Fav.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
