import { CompanyFooter } from "@/components/company-footer";
import { ProjectsFilter } from "./projects-filter";

const ProjectsPage = () => {
  return (
    <div className="bg-(--warm-stone) min-h-screen flex flex-col py-32 px-10 z-50 w-full">
      <ProjectsFilter />

      <CompanyFooter classValue="mt-72" />
    </div>
  );
};

export default ProjectsPage;
