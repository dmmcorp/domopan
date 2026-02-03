"use client";
import { parnasoSmallRegular } from "@/lib/font";
import { companyInfo } from "@/content/company";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface CompanyFooterProps {
  classValue?: string;
  currentPath: string;
}

export const CompanyFooter = ({
  classValue,
  currentPath,
}: CompanyFooterProps) => {
  // Container variants for staggered animation
  const projectsPath = currentPath.includes("/projects/");
  const textColor = projectsPath ? "text-(--warm-stone)" : "text-foreground";

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
  return (
    <motion.div
      initial="hidden"
      variants={containerVariants}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="px-5 lg:px-10 container mx-auto"
    >
      <motion.div
        variants={itemVariants}
        className={cn(
          `${parnasoSmallRegular.className} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-y-5 md:space-y-10`,
          classValue,
        )}
      >
        <div className={`flex flex-col gap-2 ${textColor}`}>
          <h1 className="uppercase font-semibold">Address</h1>
          <div className="-space-y-1 ">
            <p className="text-[19px]">{companyInfo.address.line1}</p>
            <p className="text-[19px]">{companyInfo.address.line2}</p>
            <p className="text-[19px]">{companyInfo.address.line3}</p>
            <p className="text-[19px]">{companyInfo.address.line4}</p>
          </div>
        </div>
        <div className={`space-y-4 ${textColor}`}>
          <div className="space-y-1">
            <h1 className="uppercase font-semibold">Phone</h1>
            <p className="text-[19px] ">{companyInfo.phone}</p>
          </div>
          <div className="space-y-1">
            <h1 className="uppercase font-semibold">Email</h1>
            <p className="text-[19px] ">{companyInfo.email}</p>
          </div>
        </div>
        <div className={`flex flex-col space-y-1 text-[19px] ${textColor}`}>
          <Link
            href="/projects"
            className={`${projectsPath && "hover:text-white"} hover:text-black/50`}
          >
            Projects
          </Link>
          <Link
            href="/services"
            className={`${projectsPath && "hover:text-white"} hover:text-black/50`}
          >
            Services
          </Link>
          <Link
            href="/info"
            className={`${projectsPath && "hover:text-white"} hover:text-black/50`}
          >
            Info
          </Link>

          <p className="mt-4">Copyright Domopan 2024</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
