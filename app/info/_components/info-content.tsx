"use client";

import { container, item } from "@/components/constants/animation-variants";
import { parnasoSmallMedium, parnasoSmallRegular } from "@/lib/font";
import { motion } from "framer-motion";

interface InfoContentProps {
  title: string;
  content: string;
}

export const InfoContent = ({ title, content }: InfoContentProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col lg:flex-row w-full grow"
    >
      <motion.div variants={item} className="lg:w-[20%]">
        <h1 className={`text-2xl lg:text-3xl ${parnasoSmallRegular.className}`}>
          {title}
        </h1>
      </motion.div>

      <motion.div
        variants={item}
        className={`lg:w-[80%] space-y-7 mt-7 lg:mt-0 mb-18 lg:mb-36 text-2xl md:text-3xl lg:text-5xl ${parnasoSmallMedium.className} font-medium`}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};
