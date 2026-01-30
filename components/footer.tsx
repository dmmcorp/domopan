"use client";
import { useRouteBackground } from "@/hooks/useRouteBackground";
import ARABIC1 from "@/public/assets/images/arabic-1.svg";
import ARABIC2 from "@/public/assets/images/arabic-2.svg";
import ARABIC3 from "@/public/assets/images/arabic-3.svg";
import ARABIC4 from "@/public/assets/images/arabic-4.svg";
import ARABIC5 from "@/public/assets/images/arabic-5.svg";
import ARABIC6 from "@/public/assets/images/arabic-6.svg";
import ARABIC7 from "@/public/assets/images/arabic-7.svg";
import Image from "next/image";
import { CompanyFooter } from "./company-footer";
import { usePathname } from "next/navigation";

const domopanLetters = [
  {
    label: "ARABIC1",
    image: ARABIC1,
  },
  {
    label: "ARABIC2",
    image: ARABIC2,
  },
  {
    label: "ARABIC3",
    image: ARABIC3,
  },
  {
    label: "ARABIC4",
    image: ARABIC4,
  },
  {
    label: "ARABIC5",
    image: ARABIC5,
  },
  {
    label: "ARABIC6",
    image: ARABIC6,
  },
  {
    label: "ARABIC7",
    image: ARABIC7,
  },
];

function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const currentBgColor = useRouteBackground();

  return (
    <div className={`${currentBgColor} `}>
      {!isHomePage && <CompanyFooter />}
      <DomopanLogoArabic />
    </div>
  );
}

export function DomopanLogoArabic() {
  return (
    <div className={`w-full h-fit py-6 bg-transparent"`}>
      <div className="flex flex-row justify-between items-center  px-5 lg:px-10">
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

export default Footer;
