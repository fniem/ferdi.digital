<template>
  <section-wrapper id="skills">
    <h1 class="page-title">My technology stack and development skills</h1>
    <p class="intro">
      As a full-stack developer with 5+ years of professional experience in Lübeck and northern Germany, I have built
      deep expertise across the entire web development lifecycle. From responsive frontends with Nuxt and Vue to
      scalable Node.js backends and Docker-based CI/CD pipelines — I quickly adapt to new technologies and deliver
      production-ready solutions that teams can rely on.
    </p>
    <div class="filter-bar" role="group" aria-label="Filter skills by category">
      <div class="filter-scroll">
        <button :class="{ active: showAllActive }" @click="showAll" :aria-pressed="showAllActive ? 'true' : 'false'"
          aria-label="Show all skill categories">
          Show all
        </button>
        <button v-for="cat in skillCategoryTitles" :key="cat"
          :class="{ active: activeFilters.includes(cat) && !showAllActive }" @click="toggleFilter(cat)"
          :aria-pressed="(activeFilters.includes(cat) && !showAllActive) ? 'true' : 'false'"
          :aria-label="`Filter by ${cat}`">
          {{ cat }}
        </button>
      </div>
    </div>
    <div class="categories-wrapper">
      <div v-for="category in filteredSkills" :key="category.title" class="skill-category">
        <h2>{{ category.title }}</h2>
        <template v-if="category?.categories">
          <div v-for="childCategory in category?.categories" :key="childCategory.title" class="category-wrapper">
            <h3>{{ childCategory.title }}</h3>
            <div class="skills-wrapper">
              <span v-for="skill in childCategory.stack" :key="skill" class="skill">{{ skill }}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="skills-wrapper">
            <span v-for="skill in category.stack" :key="skill" class="skill">{{ skill }}</span>
          </div>
        </template>
      </div>
    </div>
  </section-wrapper>
</template>

<script setup lang="ts">
import { skillCategoryTitles, skills } from "~/data/skills";

useHead({
  title: 'Skills & Tech Stack – Ferdinand Niemann Full-Stack Developer',
})

useSeoMeta({
  title: 'Skills & Tech Stack – Ferdinand Niemann Full-Stack Developer',
  description: 'Full-stack developer tech stack: Nuxt, Vue, React, TypeScript, Node.js, PostgreSQL, Docker, CI/CD and more. Based in Lübeck, Germany with 5+ years of experience.',
  ogTitle: 'Skills & Tech Stack – Ferdinand Niemann Full-Stack Developer',
  ogDescription: 'Full-stack developer tech stack: Nuxt, Vue, React, TypeScript, Node.js, PostgreSQL, Docker, CI/CD and more.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ferdi.digital' },
              { '@type': 'ListItem', position: 2, name: 'Skills', item: 'https://ferdi.digital/skills' },
            ],
          },
          {
            '@type': 'ItemList',
            name: 'Technology Stack',
            itemListElement: skills.map((cat, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'DefinedTerm',
                name: cat.title,
                description: cat.stack?.join(', ') || cat.categories?.flatMap(c => c.stack).join(', ') || '',
              },
            })),
          },
        ],
      }),
    },
  ],
})

const { activeFilters, showAllActive, filteredSkills, showAll, toggleFilter } = useSkillFilter();
</script>

<style>
#skills {
  h2 {
    font-size: var(--size-txt-m);
    color: var(--clr-accent);
  }

  .filter-bar {
    background-color: var(--clr-primary);
    margin-top: 3rem;
    padding-block: 1rem;
    position: sticky;
    top: 0;

    @media screen and (min-width: 768px) {
      margin-top: 5rem;
      position: static;
    }

    .filter-scroll {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;

      @media screen and (max-width: 767px) {
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 0.5rem;
        margin-inline: calc(-1 * var(--padding-container));
        padding: 0 var(--padding-container);
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        background: linear-gradient(to right, var(--clr-primary) 20%, transparent 100%) left / var(--padding-container) 100% no-repeat,
        linear-gradient(to left, var(--clr-primary) 20%, transparent 100%) right / var(--padding-container) 100% no-repeat;
        background-attachment: local,
        local;
      }
    }

    button {
      font-family: inherit;
      font-size: var(--size-regular);
      color: var(--clr-primary);
      background-color: var(--clr-accent);
      border: 2px solid var(--clr-accent);
      padding: var(--padding-btn-m);
      opacity: 1;
      transition: opacity 0.2s ease;
      white-space: nowrap;

      @media screen and (min-width: 768px) {
        font-size: 1.25rem;
      }

      &:not(.active) {
        background-color: transparent;
        color: var(--clr-accent);
        opacity: 0.5;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .categories-wrapper {
    margin-top: 4rem;

    @media screen and (min-width: 768px) {
      margin-top: 8rem;
    }

    .skill-category+.skill-category {
      margin-top: 4rem;
    }

    h3 {
      margin-block: 2rem 0;
    }

    .skills-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      .skill {
        font-size: var(--size-txt-m);
        background-color: var(--clr-blue-500);
        padding: var(--padding-btn-m);
      }
    }
  }
}
</style>
