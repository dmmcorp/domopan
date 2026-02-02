import type { Metadata } from "next";
import "./globals.css";
import { parnasoSmallRegular } from "@/lib/font";
import HeaderContainer from "./_components/header-container";
import FooterContainer from "./_components/footer-container";

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
        className={`${parnasoSmallRegular.className} bg-(--warm-stone) relative antialiased `}
      >
        <HeaderContainer />
        <main>{children}</main>

        <FooterContainer />
      </body>
    </html>
  );
}
