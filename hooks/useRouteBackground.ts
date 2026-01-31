"use client";

import { usePathname } from "next/navigation";

const bgByRoute: Record<string, string> = {
  "/": "bg-(--warm-stone)",
  "/services": "bg-(--frosted-sky)",
  "/info": "bg-(--soft-pistachio)",
  "/projects": "bg-(--warm-stone)",
};

export const useRouteBackground = () => {
  const pathname = usePathname();

  // Exact match first
  if (pathname === "/projects") return bgByRoute["/projects"];

  // Any subroute of /projects
  if (pathname.startsWith("/projects/")) return "bg-black";

  // Default for other routes
  return bgByRoute[pathname] ?? "";
};
