"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
          "/shaza/shaza_kempinski_main.jpg",
          "/althuraya/al_thuraya_tower.jpg",
          "/dohacollege/doha_college.jpg",
        ].map((src, i) => (
          <CarouselItem key={i} className="basis-full">
            <div className="relative w-full aspect-21/9 overflow-hidden">
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
        className="absolute left-24 top-1/2 -translate-y-1/2 bg-transparent p-0 shadow-none hover:bg-transparent"
      >
        <span className="flex items-center gap-3 text-black">
          <span className="text-7xl">⭠</span>
        </span>
      </Button>
      <Button
        onClick={() => api?.scrollNext()}
        className="absolute right-24 top-1/2 -translate-y-1/2 bg-transparent p-0 shadow-none hover:bg-transparent "
      >
        <span className="flex items-center gap-3 text-black">
          <span className="text-7xl">⭢</span>
        </span>
      </Button>
    </Carousel>
  );
};
