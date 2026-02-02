"use client";

import { motion } from "framer-motion";
import { Project } from "@/content/projects";
import ProjectImageDialog from "./project-image-dialog";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="px-10 space-y-3 lg:space-y-8">
      {project.gallery?.map((image, i) => {
        if (i % 4 === 3) return null;

        if (i % 4 === 2)
          return (
            <div key={`row-${i}`} className="flex flex-row gap-3 lg:gap-5">
              {[project.gallery[i], project.gallery[i + 1]].map(
                (img, idx) =>
                  img && (
                    <motion.div
                      key={idx}
                      className="relative w-full aspect-video overflow-hidden cursor-pointer"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeUp}
                    >
                      <ProjectImageDialog
                        src={img}
                        alt={`${project.name} image`}
                      />
                    </motion.div>
                  ),
              )}
            </div>
          );

        return (
          <motion.div
            key={i}
            className="relative w-full aspect-video overflow-hidden cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <ProjectImageDialog src={image} alt={`${project.name} image`} />
          </motion.div>
        );
      })}
    </div>
  );
}
