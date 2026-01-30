"use client";
import Image from "next/image";
import ENGLISHD from "@/public/assets/images/letter-d.svg";
import ENGLISHO from "@/public/assets/images/letter-o.svg";
import ENGLISHM from "@/public/assets/images/letter-m.svg";
import ENGLISHP from "@/public/assets/images/letter-p.svg";
import ENGLISHA from "@/public/assets/images/letter-a.svg";
import ENGLISHN from "@/public/assets/images/letter-n.svg";
import Navigation from "./navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useRouteBackground } from "@/hooks/useRouteBackground";

const domopanLetters = [
  {
    label: "ENGLISHD",
    image: ENGLISHD,
  },
  {
    label: "ENGLISHO",
    image: ENGLISHO,
  },
  {
    label: "ENGLISHM",
    image: ENGLISHM,
  },
  {
    label: "ENGLISHO2",
    image: ENGLISHO,
  },
  {
    label: "ENGLISHP",
    image: ENGLISHP,
  },
  {
    label: "ENGLISHA",
    image: ENGLISHA,
  },
  {
    label: "ENGLISHN",
    image: ENGLISHN,
  },
];

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const currentBgColor = useRouteBackground();

  const isHomePage = pathname === "/";

  const handleMouseEnter = () => {
    if (isHomePage) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const handleMouseExit = () => {
    setOpen(false);
  };

  return (
    <div className="relative">
      <div
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseExit()}
        className={`${currentBgColor} w-full relative h-fit py-6 z-50`}
      >
        <div className="relative flex flex-row justify-between items-center px-5 lg:px-10 z-50 ">
          {domopanLetters.map((letter) => (
            <div key={letter.label} className="size-10">
              <Image
                src={letter.image}
                alt={letter.label}
                className="object-contain size-full"
              />
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            onHoverStart={() => handleMouseEnter()}
            onHoverEnd={() => handleMouseExit()}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            exit={{ opacity: 0.3, y: -200 }}
            className={cn(
              currentBgColor,
              `absolute top-full left-0 w-full h-fit flex items-end border-b-black border-b-2 shadow-md py-8 z-10`,
            )}
          >
            <Navigation />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DomopanLogo() {
  return (
    <div className="w-full h-fit py-6">
      <div className="flex flex-row justify-between items-center px-10">
        {domopanLetters.map((letter) => (
          <div key={letter.label} className="size-10">
            <Image
              src={letter.image}
              alt={letter.label}
              className="object-contain size-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
