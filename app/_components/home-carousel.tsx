"use client";

import {
  AlthurayaTowerMainImage,
  AlwajbaMainImage,
  DohaMainImage,
  LakhwiyaStadiumMainImage,
  ShazaMainImage,
  UmsalalMainImage,
} from "@/components/constants/projects-image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const HomeCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel
      className="w-full p-4 sm:p-6 md:p-8 lg:p-10"
      opts={{ loop: false }}
      setApi={setApi}
    >
      <CarouselContent>
        {[
          ShazaMainImage,
          AlthurayaTowerMainImage,
          AlwajbaMainImage,
          DohaMainImage,
          LakhwiyaStadiumMainImage,
          UmsalalMainImage,
        ].map((src, i) => (
          <CarouselItem key={i} className="basis-full">
            <div className="relative w-full h-[65vh] overflow-hidden">
              <Image
                src={src}
                alt={`Carousel image ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Button
        onClick={() => api?.scrollPrev()}
        className="absolute left-10 md:left-24 top-1/2 -translate-y-1/2 bg-transparent p-0 shadow-none hover:bg-transparent"
      >
        <span className="hidden md:flex items-center gap-3 text-black ">
          <span className="text-3xl md:text-7xl ">⭠</span>
        </span>
        <span className="md:hidden flex items-center gap-3 text-black ">
          <ChevronLeft className="text-2xl size-6" />
        </span>
      </Button>
      <Button
        onClick={() => api?.scrollNext()}
        className="absolute right-10 md:right-24 top-1/2 -translate-y-1/2 bg-transparent p-0 shadow-none hover:bg-transparent "
      >
        <span className="hidden md:flex items-center gap-3 text-black ">
          <span className="text-3xl md:text-7xl">⭢</span>
        </span>
        <span className="md:hidden flex items-center gap-3 text-black ">
          <ChevronRight className="text-2xl size-6" />
        </span>
      </Button>
    </Carousel>
  );
};
