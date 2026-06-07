<template>
  <section-wrapper id="skills" title="My technology stack and development skills">
    <p class="intro">
      My entire career as a developer has been shaped not only by strong motivation and determination, but also by an
      insatiable curiosity for knowledge. Deepening my practical skills and remaining open to new ideas is essential to
      me. I quickly familiarize myself with new frameworks, technologies, and workflows using methods I have refined
      over time for me, so that I can be a reliable and valuable team member others can always depend on.
    </p>
    <div class="filter-bar">
      <p class="filter-hint">Filter by category: Click any to narrow down what's shown, or use <strong>Show all</strong> to see everything at once.</p>
      <div class="filter-scroll">
        <button :class="{ active: showAllActive }" @click="showAll">
          Show all
        </button>
        <button v-for="cat in categoryTitles" :key="cat"
          :class="{ active: activeFilters.includes(cat) && !showAllActive }" @click="toggleFilter(cat)">
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
useHead({
  title: 'My Skills & Tech Stack - Ferdinand Niemann',
  meta: [
    {
      name: 'description',
      content: 'Discover the diverse skill set and tech stack of Ferdinand Niemann, a full-stack developer specializing in modern web applications and innovative app solutions.'
    }
  ]
})

const categoryTitles = [
  "Frontend",
  "Backend",
  "Databases",
  "AI Tools & Agents",
  "Testing",
  "DevOps & CI / CD"
];

const activeFilters = ref<string[]>([...categoryTitles]);

const showAllActive = computed(() => activeFilters.value.length === categoryTitles.length);

function showAll() {
  activeFilters.value = [...categoryTitles];
}

function toggleFilter(cat: string) {
  if (showAllActive.value) {
    activeFilters.value = [cat];
  } else if (activeFilters.value.includes(cat)) {
    activeFilters.value = activeFilters.value.filter(c => c !== cat);
  } else {
    activeFilters.value = [...activeFilters.value, cat];
  }
}

const filteredSkills = computed(() =>
  skills.filter(s => activeFilters.value.includes(s.title))
);

const skills = [
  {
    title: "Frontend",
    categories: [
      {
        title: "Frameworks & Platforms",
        stack: ["Nuxt", "Vue", "Next.js", "React", "React Native", "Astro"]
      },
      {
        title: "Languages & Markup",
        stack: ["TypeScript", "JavaScript", "HTML"]
      },
      {
        title: "Styling",
        stack: ["TailwindCSS", "SCSS", "CSS"]
      }
    ]
  },

  {
    title: "Backend",
    categories: [
      {
        title: "Runtimes & Languages",
        stack: ["Node.js", "Bun", "PHP"]
      },
      {
        title: "Frameworks",
        stack: ["Express", "Symfony", "Laravel"]
      },
      {
        title: "CMS & BaaS",
        stack: ["TYPO3", "Directus", "Firebase", "Pimcore"]
      }
    ]
  },

  {
    title: "Databases",
    stack: ["PostgreSQL", "MongoDB", "MySQL"]
  },

  {
    title: "AI Tools & Agents",
    stack: ["Pi", "Codex", "Claude Code", "OpenCode", "OpenRouter", "n8n", "GitHub Copilot Agent"]
  },

  {
    title: "Testing",
    stack: ["Jest", "Cypress"]
  },

  {
    title: "DevOps & CI / CD",
    stack: ["Docker", "Git", "GitHub", "SSH", "Linux"]
  }
];
</script>

<style>
#skills {
  h4 {
    font-size: var(--size-txt-m);
    color: var(--clr-accent);
  }

  .filter-bar {
    margin-top: 3rem;

    @media screen and (min-width: 768px) {
      margin-top: 5rem;
    }

    .filter-hint {
      margin-block: 0 0.5rem;
      padding-inline: var(--padding-container);
      font-size: var(--size-txt-sm);
      color: var(--clr-blue-400);

      @media screen and (min-width: 768px) {
        padding-inline: 0;
      }
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

        background:
          linear-gradient(to right, var(--clr-primary) 20%, transparent 100%) left / var(--padding-container) 100% no-repeat,
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

    .skill-category+.skill-category {
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

        padding: var(--padding-btn-m)
      }
    }
  }
}
</style>