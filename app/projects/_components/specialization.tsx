"use client";
import { parnasoSmallMedium } from "@/lib/font";
import { useProjectsStore } from "@/store/useProjectStore";
import { motion } from "framer-motion";

function Specialization() {
  const words = [
    "contracting",
    "manufacturing",
    "trading",
    "landscaping",
    "fabric shade engineering",
  ];

  const { activeWords, toggleWord } = useProjectsStore();

  const isAnySelected = activeWords.length > 0;

  return (
    <div
      className={`text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium mb-24 w-full md:w-3/4 ${parnasoSmallMedium.className}`}
    >
      We specialize in{" "}
      {words.map((word, i) => {
        const isSelected = activeWords.includes(word);

        return (
          <motion.span
            key={word}
            className={`inline-block underline cursor-pointer mr-1 transition-colors duration-200 ${
              // If no selection, all black, otherwise dim unselected
              !isAnySelected
                ? "text-black"
                : isSelected
                  ? "text-black "
                  : "text-[#4a4b47]/40"
            }`}
            onClick={() => toggleWord(word)}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {word}
            {i < words.length - 1 ? "," : ""}
          </motion.span>
        );
      })}
      .
    </div>
  );
}

export default Specialization;
