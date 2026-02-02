"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();

  const ROUTES = [
    { path: "/", value: "home" },
    { path: "/projects", value: "projects" },
    { path: "/services", value: "services" },
    { path: "/info", value: "info" },
  ];

  return (
    <main className="w-full flex flex-col lg:flex-row justify-between px-10 py-3 gap-10">
      <p className={cn("nav-description font-bold")}>
        Domopan provides turnkey design-build solutions for residentials,
        commercial, and industrial developments
      </p>

      <nav className="flex justify-center lg:justify-end">
        {ROUTES.filter((r) => r.path !== "/").map((route, index, arr) => {
          const isLast = index === arr.length - 1;
          const isSecondToLast = index === arr.length - 2;

          return (
            <span key={route.path} className="flex">
              <Link
                href={route.path}
                className={cn(
                  "nav-links hover:text-[#4a4b47]",

                  pathname === route.path ? "text-black" : "text-[#4a4b47]/40",
                  pathname === "/" && "text-black",
                )}
              >
                {route.value.charAt(0).toUpperCase() + route.value.slice(1)}
              </Link>

              {!isLast && (
                <span className="nav-links mx-1 text-[#4a4b47]">
                  {isSecondToLast ? "&" : ","}
                </span>
              )}
            </span>
          );
        })}
      </nav>
    </main>
  );
}

export default Navigation;
