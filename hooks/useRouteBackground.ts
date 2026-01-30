"use client";

import { usePathname } from "next/navigation";

const bgByRoute: Record<string, string> = {
  "/": "bg-[--warm-stone]",
  "/services": "bg-[--soft-sand]",
  "/info": "bg-[--light-clay]",
  "/projects": "bg-[--cool-gray]",
};

export const useRouteBackground = () => {
  const pathname = usePathname();
  return bgByRoute[pathname] ?? "";
};
