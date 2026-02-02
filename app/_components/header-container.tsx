"use client";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useRouteBackground } from "@/hooks/useRouteBackground";

function HeaderContainer() {
  const currentBgColor = useRouteBackground();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <motion.div
      className={`bg-transparent  ${isHomePage && "absolute inset-0 hidden"} ${currentBgColor} `}
    >
      <Header />
    </motion.div>
  );
}

export default HeaderContainer;
