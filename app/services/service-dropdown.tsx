"use client";

import { Button } from "@/components/ui/button";
import { parnasoSmallRegular } from "@/lib/font";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ServiceType = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  image: StaticImageData;
};

interface ServiceDropdownProps {
  service: ServiceType;
}

export const ServiceDropdown = ({ service }: ServiceDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { image, paragraph1, paragraph2, title } = service;

  return (
    <div key={title}>
      <div className="flex flex-row items-center justify-between mb-2">
        <h1
          className={`text-2xl md:text-3xl lg:text-5xl ${parnasoSmallRegular.className}`}
        >
          {title}
        </h1>
        <Button
          variant="ghost"
          className="text-xl md:text-2xl lg:text-4xl hover:bg-none"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "-" : "+"}
        </Button>
      </div>
      {open && (
        <div
          className={`space-y-5 text-lg lg:text-2xl ${parnasoSmallRegular.className}`}
        >
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>

          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      )}
      {title === "Fabric Shade Engineering" ? (
        ""
      ) : (
        <div className="border-b border-black border lg:my-2" />
      )}
    </div>
  );
};
