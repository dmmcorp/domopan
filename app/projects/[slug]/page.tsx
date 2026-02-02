import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import ProjectHero from "./_components/project-hero";
import ProjectInfo from "./_components/project-info";
import ProjectGallery from "./_components/project-gallery";
interface ProjectSlugPageProps {
  params: {
    slug: string;
  };
}

const ProjectSlugPage = async ({ params }: ProjectSlugPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen flex flex-col z-50 w-full text-[#c4c1b2] pb-64">
      {/* Hero Image */}
      <ProjectHero image={project.image} name={project.name} />

      {/* Project Info */}
      <ProjectInfo project={project} />

      {/* Gallery */}
      <ProjectGallery project={project} />
    </div>
  );
};

export default ProjectSlugPage;
