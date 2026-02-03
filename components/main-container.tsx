"use client";
import { useRouteBackground } from "@/hooks/useRouteBackground";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
interface MaincontainerProps {
  children: ReactNode;
}

function MainContainer({ children }: MaincontainerProps) {
  const currentBg = useRouteBackground();
  return (
    <main className={cn(currentBg, "w-full")}>
      <div className="">{children}</div>
    </main>
  );
}

export default MainContainer;
