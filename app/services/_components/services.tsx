"use client";

import { ServiceDropdown } from "./service-dropdown";
import { servicesData } from "@/content/services";
import { parnasoSmallMedium } from "@/lib/font";
import { CompanyFooter } from "@/components/company-footer";
import { motion } from "framer-motion";

// Container variants for staggered animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // 0.25s between each ServiceDropdown
      delayChildren: 0.3, // 1s delay before first child animates
    },
  },
};

// Each ServiceDropdown item animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

function Services() {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row w-full grow">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="lg:w-[20%]"
        >
          <motion.h1
            variants={itemVariants}
            className={`text-xl lg:text-3xl ${parnasoSmallMedium.className}`}
          >
            Services
          </motion.h1>
        </motion.div>

        <motion.div
          className="lg:w-[80%] space-y-7 mt-7 lg:mt-0 mb-36"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ServiceDropdown service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
