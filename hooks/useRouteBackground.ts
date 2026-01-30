"use client";

import { usePathname } from "next/navigation";

const bgByRoute: Record<string, string> = {
  "/": "bg-(--warm-stone)",
  "/services": "bg-(--frosted-sky)",
  "/info": "bg-(--soft-pistachio)",
  "/projects": "bg-black",
};

export const useRouteBackground = () => {
  const pathname = usePathname();
  return bgByRoute[pathname] ?? "";
};
