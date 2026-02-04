"use client";

import { Badge } from "@/components/ui/badge";
import { Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProjectInfoProps {
  project: Project;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.div
      className="px-5 sm:px-10 mt-8 mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // animate when 30% in view
    >
      {/* Project Name */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl mb-2"
        variants={fadeUp}
      >
        {project.name}
      </motion.h1>

      {/* Tags */}
      <motion.div
        className="space-x-2 flex flex-wrap"
        variants={staggerContainer}
      >
        {project.tags.map((tag, i) => (
          <motion.div key={i} variants={fadeUp}>
            <Badge
              className={cn(
                "rounded-sm text-black uppercase font-semibold border-2",
                tag.className,
                tag.label === "Commercial" && "text-white",
              )}
            >
              {tag.label}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      {/* Info Section */}
      <motion.div
        className="flex flex-col lg:flex-row w-full mt-6"
        variants={staggerContainer}
      >
        {/* LEFT INFO */}
        <motion.div
          className="space-y-6 lg:w-[30%]"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <h1 className="text-sm">CLIENT</h1>
            <p className="text-xl">{project.client}</p>
          </motion.div>

          {project.category && (
            <motion.div variants={fadeUp}>
              <h1 className="text-sm">CATEGORY</h1>
              <p className="text-xl">{project.category}</p>
            </motion.div>
          )}

          <motion.div variants={fadeUp}>
            <h1 className="text-sm">CONSULTANT</h1>
            <p className="text-xl">{project.consultant}</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1 className="text-sm">BUILT-UP AREA</h1>
            <p className="text-xl">{project.builtUpArea}</p>
          </motion.div>
        </motion.div>

        {/* RIGHT DESCRIPTION */}
        <motion.div
          className="mt-6 lg:mt-0 lg:w-[70%] text-xl space-y-4"
          variants={staggerContainer}
        >
          {project.description && (
            <motion.p variants={fadeUp}>{project.description}</motion.p>
          )}

          {project.list && project.list?.length > 0 && (
            <motion.ul className="space-y-1" variants={staggerContainer}>
              {project.list.map((item: string, i: number) => (
                <motion.li key={`${project.slug}-item-${i}`} variants={fadeUp}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}

          {project.supportingDescription && (
            <motion.p variants={fadeUp}>
              {project.supportingDescription}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
