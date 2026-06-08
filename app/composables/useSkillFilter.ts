import type { SkillCategory } from "~/data/skills";
import { skillCategoryTitles, skills } from "~/data/skills";

export function useSkillFilter() {
  const activeFilters = ref<string[]>([...skillCategoryTitles]);
  const showAllActive = computed(() => activeFilters.value.length === skillCategoryTitles.length);

  const filteredSkills = computed<SkillCategory[]>(() =>
    skills.filter((s) => activeFilters.value.includes(s.title)),
  );

  function showAll() {
    activeFilters.value = [...skillCategoryTitles];
  }

  function toggleFilter(cat: string) {
    if (showAllActive.value) {
      activeFilters.value = [cat];
    } else if (activeFilters.value.includes(cat)) {
      activeFilters.value =
        activeFilters.value.length === 1
          ? [...skillCategoryTitles]
          : activeFilters.value.filter((c) => c !== cat);
    } else {
      activeFilters.value = [...activeFilters.value, cat];
    }
  }

  return { activeFilters, showAllActive, filteredSkills, showAll, toggleFilter };
}
