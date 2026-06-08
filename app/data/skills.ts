export interface SkillCategory {
  title: string;
  stack?: string[];
  categories?: SkillCategory[];
}

export const skillCategoryTitles = [
  "Frontend",
  "Backend",
  "Databases",
  "AI Tools & Agents",
  "Testing",
  "DevOps & CI / CD",
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    categories: [
      { title: "Frameworks & Platforms", stack: ["Nuxt", "Vue", "Next.js", "React", "React Native", "Astro"] },
      { title: "Languages & Markup", stack: ["TypeScript", "JavaScript", "HTML"] },
      { title: "Styling", stack: ["TailwindCSS", "SCSS", "CSS"] },
    ],
  },
  {
    title: "Backend",
    categories: [
      { title: "Runtimes & Languages", stack: ["Node.js", "Bun", "PHP"] },
      { title: "Frameworks", stack: ["Express", "Symfony", "Laravel"] },
      { title: "CMS & BaaS", stack: ["TYPO3", "Directus", "Firebase", "Pimcore"] },
    ],
  },
  { title: "Databases", stack: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "AI Tools & Agents", stack: ["Pi", "Codex", "Claude Code", "OpenCode", "OpenRouter", "n8n", "GitHub Copilot Agent"] },
  { title: "Testing", stack: ["Jest", "Cypress"] },
  { title: "DevOps & CI / CD", stack: ["Docker", "Git", "GitHub", "SSH", "Linux"] },
];
