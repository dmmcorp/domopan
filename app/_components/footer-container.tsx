"use client";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

function FooterContainer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return null;

  return (
    <div>
      <Footer />
    </div>
  );
}

export default FooterContainer;
