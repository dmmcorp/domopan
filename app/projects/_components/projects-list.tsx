"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useProjectsStore } from "@/store/useProjectStore";
import { PROJECTS } from "@/content/projects";
import { useRouter } from "next/navigation";

function ProjectsList() {
  const { activeWords } = useProjectsStore();
  const router = useRouter();

  // Filter projects if any word is selected
  const filteredProjects =
    activeWords.length > 0
      ? PROJECTS.filter((project) =>
          project.tags.some((tag) =>
            activeWords.includes(tag.label.toLowerCase())
          )
        )
      : PROJECTS;

  // Card animation
  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.3 } },
  };

  const handleProjectClick = (projectName: string) => {
    router.push(`/projects/${projectName}`);
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-20">
        {filteredProjects.map((project) => (
          <motion.button
            key={project.name}
            className="cursor-pointer"
            variants={card}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout // this enables smooth reordering transitions
            onClick={() => handleProjectClick(project.slug)}
          >
            {/* Project image */}
            <div className="relative w-full aspect-video overflow-hidden rounded-xs shadow-lg">
              <Image
                src={project.image}
                alt={`${project.name} image`}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                priority={false}
                fill
              />
            </div>

            {/* Project name */}
            <h1 className="mt-4 text-lg lg:text-2xl font-medium text-left">
              {project.name}
            </h1>

            {/* Project tags */}
            <div className="space-x-2 mt-2 flex flex-wrap">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  className={cn(
                    "rounded-sm text-black uppercase border-2",
                    tag.className
                  )}
                >
                  {tag.label}
                </Badge>
              ))}
            </div>
          </motion.button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectsList;
