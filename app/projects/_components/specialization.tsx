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
      className={`text-xl md:text-3xl lg:text-4xl xl:text-5xl  mb-10 lg:mb-24 w-full md:w-3/4  font-semibold ${parnasoSmallMedium.className}`}
    >
      We specialize in{" "}
      {words.map((word, i) => {
        const isSelected = activeWords.includes(word);

        return (
          <div key={word} className="contents">
            <motion.span
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
            {word === "contracting" && <br />}
          </div>
        );
      })}
      .
    </div>
  );
}

export default Specialization;
