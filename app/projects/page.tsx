import { CompanyFooter } from "@/components/company-footer";
import { Projects } from "@/content/projects";
import { parnasoSmallMedium } from "@/lib/font";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <div className="bg-(--warm-stone) min-h-screen flex flex-col py-32 px-10 z-50 w-full">
      <div
        className={`text-2xl md:text-3xl lg:text-6xl font-semibold mb-24 ${parnasoSmallMedium.className}`}
      >
        We specialize in{" "}
        <span className="underline cursor-pointer">contracting</span>, <br />
        <span className="underline cursor-pointer">manufacturing</span>,{" "}
        <span className="underline cursor-pointer">trading</span>,{" "}
        <span className="underline cursor-pointer">landscaping</span>,<br />
        and{" "}
        <span className="underline cursor-pointer">
          fabric shade engineering
        </span>
        ,
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-20">
        {Projects.map((project, i) => (
          <div key={i}>
            <div className="relative w-full aspect-video overflow-hidden pointer-events-none">
              <Image
                src={project.image}
                alt={`${project.name} image`}
                className="object-cover"
                priority={false}
              />
            </div>
            <h1 className="mb-6 mt-4 text-lg lg:text-3xl">{project.name}</h1>
          </div>
        ))}
      </div>

      <CompanyFooter classValue="mt-72" />
    </div>
  );
};

export default ProjectsPage;
