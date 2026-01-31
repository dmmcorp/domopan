"use client";

import { Badge } from "@/components/ui/badge";
import { ProjectFilter, PROJECTFILTERS, PROJECTS } from "@/content/projects";
import { parnasoSmallMedium } from "@/lib/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const ProjectsFilter = () => {
  const [data, setData] = useState<number>(PROJECTFILTERS.length - 1);

  const activeFilters = PROJECTFILTERS.slice(0, data + 1);

  const filteredProjects = PROJECTS.filter((project) =>
    project.tags.some((tag) =>
      activeFilters.includes(tag.label.toLowerCase() as any)
    )
  );

  console.log(data);

  return (
    <div
      className={`text-2xl md:text-3xl lg:text-6xl font-normal mb-24 ${parnasoSmallMedium.className}`}
    >
      We specialize in{" "}
      {PROJECTFILTERS.map((service, i) => {
        const isLast = i === PROJECTFILTERS.length - 1;

        return (
          <span key={service}>
            {isLast && "and "}
            <span
              className="underline cursor-pointer"
              onClick={() => setData(i)}
            >
              {service}
            </span>
            {!isLast && ", "}
            {service === "contracting" && <br />}
            {service === "landscaping" && <br />}
            {service === "fabric shade engineering" && "."}
          </span>
        );
      })}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 lg:mt-20 gap-20">
        {filteredProjects.map((project, i) => (
          <div key={i}>
            <div className="relative w-full aspect-video overflow-hidden pointer-events-none">
              <Image
                src={project.image}
                alt={`${project.name} image`}
                className="object-cover"
                priority={false}
              />
            </div>

            <div className="lg:-space-y-8">
              <h1 className="mt-4 text-lg lg:text-3xl">{project.name}</h1>
              <div className="space-x-2">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    className={cn(
                      "rounded-sm text-black uppercase font-semibold border-2",
                      tag.className
                    )}
                  >
                    {tag.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
