import Image from "next/image";
import ENGLISHD from "@/public/assets/images/letter-d.svg";
import ENGLISHO from "@/public/assets/images/letter-o.svg";
import ENGLISHM from "@/public/assets/images/letter-m.svg";
import ENGLISHP from "@/public/assets/images/letter-p.svg";
import ENGLISHA from "@/public/assets/images/letter-a.svg";
import ENGLISHN from "@/public/assets/images/letter-n.svg";

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
