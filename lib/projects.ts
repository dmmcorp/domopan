import { PROJECTS } from "@/content/projects";

// TODO: use this utility helper for projects at the clean up phase
export function getAllProjects() {
    return PROJECTS;
}

export function getProjectBySlug(slug: string) {
    return PROJECTS.find((p) => p.slug === slug);
}