import ProjectsList from "./_components/projects-list";
import Specialization from "./_components/specialization";

const ProjectsPage = () => {
  return (
    <div className="bg-(--warm-stone) min-h-screen flex flex-col py-16 pb-64 px-10 z-50 w-full">
      <Specialization />
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;
