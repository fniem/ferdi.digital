<template>
  <section-wrapper id="skills" title="My technology stack and development skills">
    <p class="intro">
      My entire career as a developer has been shaped not only by strong motivation and determination, but also by an
      insatiable curiosity for knowledge. Deepening my practical skills and remaining open to new ideas is essential to
      me. I quickly familiarize myself with new frameworks, technologies, and workflows using methods I have refined
      over time for me, so that I can be a reliable and valuable team member others can always depend on.
    </p>
    <div class="filter-bar" role="group" aria-label="Filter skills by category">
      <div class="filter-scroll">
        <button :class="{ active: showAllActive }" @click="showAll"
          :aria-pressed="showAllActive ? 'true' : 'false'" aria-label="Show all skill categories">
          Show all
        </button>
        <button
          v-for="cat in skillCategoryTitles"
          :key="cat"
          :class="{ active: activeFilters.includes(cat) && !showAllActive }"
          @click="toggleFilter(cat)"
          :aria-pressed="(activeFilters.includes(cat) && !showAllActive) ? 'true' : 'false'"
          :aria-label="`Filter by ${cat}`"
        >
          {{ cat }}
        </button>
      </div>
    </div>
    <div class="categories-wrapper">
      <div v-for="category in filteredSkills" :key="category.title" class="skill-category">
        <h4>{{ category.title }}</h4>
        <template v-if="category?.categories">
          <div v-for="childCategory in category?.categories" :key="childCategory.title" class="category-wrapper">
            <h5>{{ childCategory.title }}</h5>
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
import { skillCategoryTitles } from "~/data/skills";

useHead({
  title: 'My Skills & Tech Stack - Ferdinand Niemann',
  meta: [
    {
      name: 'description',
      content: 'Discover the diverse skill set and tech stack of Ferdinand Niemann, a full-stack developer specializing in modern web applications and innovative app solutions.'
    }
  ]
})

const { activeFilters, showAllActive, filteredSkills, showAll, toggleFilter } = useSkillFilter();
</script>

<style>
#skills {
  h4 {
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
        background-attachment: local, local;
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

    .skill-category + .skill-category {
      margin-top: 4rem;
    }

    h5 {
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
