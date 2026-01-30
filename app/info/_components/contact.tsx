"use client";

import { container, item } from "@/components/constants/animation-variants";
import { companyInfo } from "@/content/company";
import { parnasoSmallRegular } from "@/lib/font";
import { motion } from "framer-motion";

function Contact() {
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
          Contact
        </h1>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={item}
        className="lg:w-[80%] mt-7 lg:mt-0 mb-36 space-y-12"
      >
        {/* Address */}
        <motion.div
          variants={item}
          className={`${parnasoSmallRegular.className} space-y-1`}
        >
          <h1>ADDRESS</h1>
          <div className="text-2xl md:text-3xl lg:text-5xl">
            <p>{companyInfo.address.line1}</p>
            <p>{companyInfo.address.line2}</p>
            <p>{companyInfo.address.line3}</p>
            <p>{companyInfo.address.line4}</p>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={item}
          className={`${parnasoSmallRegular.className} space-y-1`}
        >
          <h1>PHONE</h1>
          <div className="text-2xl md:text-3xl lg:text-5xl">
            {companyInfo.phone}
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={item}
          className={`${parnasoSmallRegular.className} space-y-1`}
        >
          <h1>EMAIL</h1>
          <div className="text-2xl md:text-3xl lg:text-5xl">
            {companyInfo.email}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
