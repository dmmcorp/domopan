"use client";
import React from "react";
import { motion } from "framer-motion";
import { container, item } from "@/components/constants/animation-variants";
import { parnasoSmallRegular } from "@/lib/font";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionItemPrivacyPolicy from "./accordion-item-privacy-policy";
import {
  businessConductContent,
  environmentContent,
  governanceContent,
  legalContent,
} from "@/content/company";
import AccordionItemComplience from "./accordion-item-compliance";

export default function LegalCompliance() {
  return (
    <div>
      <motion.div variants={item} className="">
        <h1
          className={`text-2xl lg:text-3xl  ${parnasoSmallRegular.className}`}
        >
          Legal & Compliance
        </h1>

        <Accordion
          type="multiple"
          defaultValue={["legal"]}
          className="max-w-full "
        >
          <AccordionItemPrivacyPolicy arr={legalContent} />
          <AccordionItemComplience
            title={"Governance"}
            obj={governanceContent}
          />
          <AccordionItemComplience
            title={"Business Conduct"}
            obj={businessConductContent}
          />
          <AccordionItemComplience
            title={"Environment"}
            obj={environmentContent}
          />
        </Accordion>
      </motion.div>
    </div>
  );
}
