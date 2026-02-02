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
      initial={{
        display: isHomePage ? "hidden" : "block",
        opacity: isHomePage ? 1 : 1,
      }}
      animate={{
        display: !isHomePage ? "hidden" : "block",
        opacity: !isHomePage ? 1 : 0,
      }}
      className={`bg-transparent ${isHomePage && "absolute inset-0"} ${currentBgColor} `}
    >
      <Header />
    </motion.div>
  );
}

export default HeaderContainer;
