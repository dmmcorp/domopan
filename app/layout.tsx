import type { Metadata } from "next";
import "./globals.css";
import { parnasoSmallRegular } from "@/lib/font";
import HeaderContainer from "./_components/header-container";
import FooterContainer from "./_components/footer-container";
import ReactLenisContext from "@/components/react-lenis-provider";

export const metadata: Metadata = {
  title: "Domopan",
  description:
    "Domopan provides turnkey design-build solutions for residentials, commercial, and industrial developments",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dyky0sal0/image/upload/v1770085574/favicon_dihgcc.png",
        width: 1200,
        height: 630,
      },
    ],
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
        className={`${parnasoSmallRegular.className} bg-(--warm-stone) relative antialiased `}
      >
        <ReactLenisContext>
          <HeaderContainer />
          <main>{children}</main>

          <FooterContainer />
        </ReactLenisContext>
      </body>
    </html>
  );
}
