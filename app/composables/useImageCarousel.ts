import type { Project } from "~/data/projects";
import { projectsData as initialProjects } from "~/data/projects";

export function useImageCarousel() {
  const projects = ref<Project[]>(
    initialProjects.map((p) => ({ ...p })),
  );

  function nextImage(index: number, direction: "next" | "prev" = "next") {
    const project = projects.value[index];
    if (!project) return;

    project.slideDirection = direction;
    const images = project.isMobile ? project.mobile : project.desktop;
    const lastIndex = images.length - 1;

    if (direction !== "next") {
      project.imgIndex = project.imgIndex === 0 ? lastIndex : project.imgIndex - 1;
    } else {
      project.imgIndex = project.imgIndex === lastIndex ? 0 : project.imgIndex + 1;
    }
  }

  function toggleMobile(index: number) {
    const project = projects.value[index];
    if (!project) return;

    project.isMobile = !project.isMobile;
    const newImages = project.isMobile ? project.mobile : project.desktop;
    if (project.imgIndex >= newImages.length) {
      project.imgIndex = 0;
    }
  }

  return { projects, nextImage, toggleMobile };
}
