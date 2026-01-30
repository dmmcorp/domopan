import type { Metadata } from "next";
import "./globals.css";
import { parnasoSmallRegular } from "@/lib/font";

export const metadata: Metadata = {
  title: "Domopan",
  description:
    "Domopan provides turnkey design-build solutions for residentials, commercial, and industrial developments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${parnasoSmallRegular.className} relative antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
