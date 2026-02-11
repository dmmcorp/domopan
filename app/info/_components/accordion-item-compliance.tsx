import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionItemComplience({
  title,
  obj,
}: {
  title: string;
  obj: {
    paragraph1: string;
    paragraph2: string;
  };
}) {
  return (
    <AccordionItem value={title} className="w-full my-5 md:my-10 border-none">
      <AccordionTrigger className="border border-black/60 px-3 md:px-10">
        <h1 className="text-lg sm:text-3xl font-semibold">{title}</h1>
      </AccordionTrigger>

      <AccordionContent className="border border-black/60 mt-2 md:mt-5 py-5 md:py-10 px-3 md:px-10">
        <p className="mb-10 text-sm md:text-xl lg:text-2xl leading-loose">
          {obj.paragraph1}
        </p>
        <p className="mb-10 text-sm md:text-xl lg:text-2xl leading-loose">
          {obj.paragraph2}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}
