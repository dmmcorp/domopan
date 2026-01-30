import { parnasoSmallMedium } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navigation() {
  return (
    <main className="w-full flex flex-col lg:flex-row justify-between px-10 py-3 gap-10">
      <p className={cn(parnasoSmallMedium.className, "nav-description")}>
        Domopan provides turnkey design-build solutions for residentials,
        commercial, and industrial developments
      </p>

      <nav className="flex justify-center lg:justify-end">
        <Link href={"/projects"} className="nav-links hover:text-[#4a4b47]">
          Projects
        </Link>
        <span className="nav-links mr-1">, </span>
        <Link href={"/services"} className="nav-links hover:text-[#4a4b47]">
          Services
        </Link>
        <span className="nav-links mx-1 ">&</span>
        <Link href={"/info"} className="nav-links hover:text-[#4a4b47]">
          Info
        </Link>
      </nav>
    </main>
  );
}

export default Navigation;
