"use client";
import { parnasoSmallMedium, parnasoSmallRegular } from "@/lib/font";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceType = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  image: string;
};

interface ServiceDropdownProps {
  service: ServiceType;
}

export const ServiceDropdown = ({ service }: ServiceDropdownProps) => {
  const [open, setOpen] = useState(false);
  const { image, paragraph1, paragraph2, title } = service;

  return (
    <div key={title}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex flex-row items-center justify-between mb-2 w-full cursor-pointer"
      >
        <h1
          className={`text-2xl md:text-3xl lg:text-5xl font-semibold ${parnasoSmallMedium.className}`}
        >
          {title}
        </h1>

        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="text-xl md:text-2xl lg:text-4xl hover:bg-none">+</div>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.25 },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              exit={{ y: 12 }}
              transition={{ duration: 0.3 }}
              className={`space-y-5 text-sm mdLtext-lg lg:text-2xl leading-relaxed ${parnasoSmallRegular.className}`}
            >
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>

              <motion.div
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full aspect-video overflow-hidden"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {title === "Fabric Shade Engineering" ? (
        ""
      ) : (
        <div className="border-b border-black lg:my-2" />
      )}
    </div>
  );
};
