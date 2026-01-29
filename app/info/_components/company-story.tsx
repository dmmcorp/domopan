"use client";

import { Button } from "@/components/ui/button";
import { companyStory } from "@/content/company";
import { parnasoSmallMedium, parnasoSmallRegular } from "@/lib/font";
import Image from "next/image";
import { useState } from "react";

export const CompanyStory = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="space-y-5">
      <div
        className={`text-2xl md:text-3xl lg:text-5xl ${parnasoSmallMedium.className}`}
      >
        {companyStory.heading}
        <Button
          variant="ghost"
          className="text-xl md:text-2xl lg:text-4xl hover:bg-none text-muted-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Less -" : "More +"}
        </Button>
      </div>
      {open && (
        <>
          <div
            className={`space-y-5 text-lg lg:text-2xl ${parnasoSmallRegular.className}`}
          >
            {companyStory.moreStory}
          </div>
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={companyStory.image}
              alt="company story image"
              className="object-cover"
              priority={false}
            />
          </div>
        </>
      )}
    </div>
  );
};
