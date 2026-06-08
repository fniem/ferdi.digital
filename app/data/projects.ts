export interface Project {
  desktop: string[];
  mobile: string[];
  imgIndex: number;
  isMobile: boolean;
  slideDirection: "next" | "prev";
  title: string;
  link: string;
  github: string;
  description: string;
  tools: string[];
}

export const projectsData: Project[] = [
  {
    desktop: [
      "/images/projects/tagesmutter-ratzeburg/desktop/tagesmutter-ratzeburg-1.png",
      "/images/projects/tagesmutter-ratzeburg/desktop/tagesmutter-ratzeburg-2.png",
      "/images/projects/tagesmutter-ratzeburg/desktop/tagesmutter-ratzeburg-3.png",
    ],
    mobile: [
      "/images/projects/tagesmutter-ratzeburg/mobile/tagesmutter-ratzeburg-1.webp",
      "/images/projects/tagesmutter-ratzeburg/mobile/tagesmutter-ratzeburg-2.webp",
      "/images/projects/tagesmutter-ratzeburg/mobile/tagesmutter-ratzeburg-3.webp",
    ],
    imgIndex: 0,
    isMobile: false,
    slideDirection: "next",
    title: "Tagesmutter Ratzeburg (2025)",
    link: "https://tagesmutter-ratzeburg.de",
    github: "https://github.com/moinferdi/tagesmutter-ratzeburg.de",
    description:
      "Playful, colorful but modern website for a daycare center. Created with Nuxt 4 and with focus on SEO to better place this site against competition.",
    tools: ["Figma", "Nuxt 4", "TailwindCSS", "TypeScript", "GitHub", "GitHub Actions", "Ubuntu"],
  },
  {
    desktop: [
      "/images/projects/ludwigs-tanzwelt/desktop/ludwigs-tanzwelt-1.webp",
      "/images/projects/ludwigs-tanzwelt/desktop/ludwigs-tanzwelt-2.webp",
    ],
    mobile: [
      "/images/projects/ludwigs-tanzwelt/mobile/ludwigs-tanzwelt-1.webp",
      "/images/projects/ludwigs-tanzwelt/mobile/ludwigs-tanzwelt-2.webp",
    ],
    imgIndex: 0,
    isMobile: false,
    slideDirection: "next",
    title: "Ludwigs Tanzwelt (2024)",
    link: "https://ludwigs-tanzwelt.de",
    github: "https://github.com/moinferdi/ludwigs-tanzwelt.de",
    description:
      "An SEO optimized website for a dancing school based in Lübeck. Created with Nuxt 3 as a frontend and Directus as a headless CMS for contents.",
    tools: ["Figma", "Nuxt 3", "Directus", "Docker", "TailwindCSS", "TypeScript", "GitHub", "GitHub Actions", "Ubuntu"],
  },
  {
    desktop: [
      "/images/projects/nora-warschewski/desktop/nora-warschewski-1.webp",
      "/images/projects/nora-warschewski/desktop/nora-warschewski-2.webp",
    ],
    mobile: [
      "/images/projects/nora-warschewski/mobile/nora-warschewski-1.webp",
      "/images/projects/nora-warschewski/mobile/nora-warschewski-2.webp",
    ],
    imgIndex: 0,
    isMobile: false,
    slideDirection: "next",
    title: "Nora Warschewski (2022)",
    link: "https://moinferdi.github.io/nora-warschewski",
    github: "https://github.com/moinferdi/nora-warschewski",
    description:
      "A simple static website with clear structures and a dynamic grid layout for a designer friend, based on a Figma design created by her.",
    tools: ["Figma", "HTML", "Vanilla CSS", "JavaScript", "GitHub"],
  },
];
