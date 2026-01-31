import { Badge } from "@/components/ui/badge";
import { getProjectBySlug } from "@/lib/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectSlugPageProps {
  params: {
    slug: string;
  };
}

const ProjectSlugPage = async ({ params }: ProjectSlugPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-(--normal-black) min-h-screen flex flex-col z-50 w-full text-[#c4c1b2]">
      <div className="relative w-full aspect-video overflow-hidden pointer-events-none">
        <Image
          src={project.image}
          alt={`${project.name} image`}
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="px-10 mt-8 mb-16">
        <h1 className="text-4xl lg:text-5xl mb-2">{project.name}</h1>

        <div className="space-x-2">
          {project.tags.map((tag, i) => (
            <Badge
              key={i}
              className={cn(
                "rounded-sm text-black uppercase font-semibold border-2",
                tag.className,
                tag.label === "Commercial" && "text-white"
              )}
            >
              {tag.label}
            </Badge>
          ))}
        </div>

        {/* PROJECT INFO */}
        <div className="flex flex-col lg:flex-row w-full">
          <div className="space-y-6 lg:w-[30%]">
            <div className="mt-18">
              <h1 className="text-sm">CLIENT</h1>
              <p className="text-xl">{project.client}</p>
            </div>

            <div>
              <h1 className="text-sm">CONSULTANT</h1>
              <p className="text-xl">{project.consultant}</p>
            </div>

            <div>
              <h1 className="text-sm">BUILT-UP AREA</h1>
              <p className="text-xl">{project.builtUpArea}</p>
            </div>
          </div>

          <div className="mt-6 lg:mt-18 lg:w-[70%] text-xl">
            {project.description}
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="px-10 space-y-3 lg:space-y-8">
        {project.gallery?.map((image, i) => {
          if (i % 4 === 3) return null;

          if (i % 4 === 2)
            return (
              <div key={`row-${i}`} className="flex flex-row gap-3 lg:gap-5">
                {[project.gallery[i], project.gallery[i + 1]].map(
                  (img, idx) =>
                    img && (
                      <div
                        key={idx}
                        className="relative w-full aspect-video overflow-hidden pointer-events-none"
                      >
                        <Image
                          src={img}
                          alt={`${project.name} image`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )
                )}
              </div>
            );

          return (
            <div
              className="relative w-full aspect-video overflow-hidden pointer-events-none"
              key={i}
            >
              <Image
                src={image}
                alt={`${project.name} image`}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSlugPage;
