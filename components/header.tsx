import Image from "next/image";
import React from "react";
import ENGLISHD from "@/public/assets/images/D.svg";
function Header() {
  const domopanLetters = [
    {
      label: "ENGLISHD",
      image: ENGLISHD,
    },
    {
      label: "ENGLISHO",
      image: ENGLISHD,
    },
    {
      label: "ENGLISHM",
      image: ENGLISHD,
    },
    {
      label: "ENGLISHO2",
      image: ENGLISHD,
    },
    {
      label: "ENGLISHP",
      image: ENGLISHD,
    },
    {
      label: "ENGLISHA",
      image: ENGLISHD,
    },
    {
      label: "ENGLISHN",
      image: ENGLISHD,
    },
  ];
  return (
    <div className="bg-(--warm-stone)">
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
    </div>
  );
}

export default Header;
