"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouteBackground } from "@/hooks/useRouteBackground";

// Import your letter images
import ENGLISHD from "@/public/assets/images/letter-d.svg";
import ENGLISHO from "@/public/assets/images/letter-o.svg";
import ENGLISHM from "@/public/assets/images/letter-m.svg";
import ENGLISHP from "@/public/assets/images/letter-p.svg";
import ENGLISHA from "@/public/assets/images/letter-a.svg";
import ENGLISHN from "@/public/assets/images/letter-n.svg";
import MaskedLetter from "./masked-letter";

const domopanLetters = [
  { label: "D", image: ENGLISHD },
  { label: "O", image: ENGLISHO },
  { label: "M", image: ENGLISHM },
  { label: "O2", image: ENGLISHO },
  { label: "P", image: ENGLISHP },
  { label: "A", image: ENGLISHA },
  { label: "N", image: ENGLISHN },
];

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentBgColor = useRouteBackground(); // dynamic bg color
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const isHomePage = pathname === "/";

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isHomePage) return setOpen(false);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setOpen(true), 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setOpen(false);
  };

  return (
    <div
      className="relative z-50 bg-transparent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${currentBgColor} w-full relative h-fit py-6 z-40`}>
        {/* Header Logo */}
        {isHomePage ? (
          <div className="relative flex flex-row justify-between items-center px-5 lg:px-10">
            {domopanLetters.map((letter) => (
              <MaskedLetter
                key={letter.label}
                imageSrc={letter.image.src}
                currentPath={pathname}
              />
            ))}
          </div>
        ) : (
          <Link
            href="/"
            className="relative flex flex-row justify-between items-center px-5 lg:px-10"
          >
            {domopanLetters.map((letter) => (
              <MaskedLetter
                key={letter.label}
                imageSrc={letter.image.src}
                currentPath={pathname}
              />
            ))}
          </Link>
        )}
      </div>

      {/* Navigation dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ type: "spring", duration: 0.6 }}
            className={cn(
              currentBgColor,
              "absolute top-full left-0 w-full h-fit flex items-end border-b-black border-b-2 shadow-md py-8 z-10",
            )}
          >
            <Navigation />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
