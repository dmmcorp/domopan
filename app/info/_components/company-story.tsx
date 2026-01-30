"use client";

import { container, item } from "@/components/constants/animation-variants";
import { Button } from "@/components/ui/button";
import { companyStory } from "@/content/company";
import { parnasoSmallMedium, parnasoSmallRegular } from "@/lib/font";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const CompanyStory = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.div
      className="flex flex-col lg:flex-row w-full"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Title */}
      <motion.div variants={item} className="lg:w-[20%]">
        <h1 className={`text-2xl lg:text-3xl ${parnasoSmallRegular.className}`}>
          Our Story
        </h1>
      </motion.div>

      {/* Content */}
      <div className="lg:w-[80%] mt-7 lg:mt-0 mb-36">
        <div className="space-y-5">
          {/* Heading + Toggle Button */}
          <motion.div
            variants={item}
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
          </motion.div>

          {/* Toggleable Content */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="moreContent"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden space-y-5"
              >
                {/* Story Text */}
                <div
                  className={`space-y-5 text-lg lg:text-2xl ${parnasoSmallRegular.className}`}
                >
                  {companyStory.moreStory}
                </div>

                {/* Story Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={companyStory.image}
                    alt="company story image"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
