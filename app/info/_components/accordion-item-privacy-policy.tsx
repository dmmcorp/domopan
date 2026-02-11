import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Legals } from "@/content/company";
import { Separator } from "@/components/ui/separator";

export default function AccordionItemPrivacyPolicy({ arr }: { arr: Legals }) {
  return (
    <AccordionItem value="legal" className="w-full my-5 md:my-10 border-none">
      <AccordionTrigger className="border border-black/60 px-3 md:px-10">
        <h1 className="text-lg sm:text-3xl font-semibold">Privacy Policy</h1>
      </AccordionTrigger>
      <AccordionContent className="border border-black/60 mt-2 md:mt-5 py-5 md:py-10 px-3 md:px-10">
        {arr.map((item) => (
          <div key={item.heading} className="">
            <h1 className="text-lg md:text-3xl lg:text-3xl my-5 md:my-10 font-semibold">
              {item.heading}
            </h1>
            <p className="mb-10 text-sm md:text-xl lg:text-2xl leading-loose">
              {item.paragraph1}
            </p>
            {item.list && (
              <ul className="mb-10 list-disc pl-5 text-sm md:text-xl lg:text-2xl space-y-5">
                {item.list.map((listItem) => (
                  <li key={listItem}>{listItem}</li>
                ))}
              </ul>
            )}
            <p className=" text-sm md:text-xl lg:text-2xl leading-loose">
              {item.paragraph2}
            </p>
            <Separator className="my-20 text-black/60 bg-black" />
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
