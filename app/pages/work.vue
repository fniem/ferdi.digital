<template>
  <section-wrapper id="work" title="Websites and apps I created">
    <p class="intro">
      Let me introduce you to a small selection of my recent (private) works and projects. I am always up for new
      challenges and
      ideas. So if you need a helping hand as a developer for your app or website, feel free to <nuxt-link
        to="/contact">get in touch with me</nuxt-link>.
    </p>
    <div v-for="(project, index) in projectsData" :key="project.title" class="project-wrapper"
      :class="{ 'last-el': index === projectsData.length - 1 }">
      <div class="project-wrapper__screenshots" :class="{ 'is-mobile': project.isMobile }">
        <div class="img-frame">
          <div class="phone-dynamic-island"></div>
          <Transition :name="`slide-${project.slideDirection}`" mode="out-in">
            <nuxt-img :key="`${index}-${project.imgIndex}-${project.isMobile}`"
              :src="project.isMobile ? project.mobile[project.imgIndex] : project.desktop[project.imgIndex]"
              format="webp" />
          </Transition>
          <div class="phone-home-indicator"></div>
        </div>
        <div class="img-controls">
          <button class="img-control toggle-view" @click="toggleMobile(index)"
            :title="project.isMobile ? 'Switch to desktop view' : 'Switch to mobile view'">
            <icon :name="project.isMobile ? 'ri:computer-line' : 'ri:smartphone-line'" />
          </button>
          <button class="img-control right" @click="getElement(index)">
            <icon name="ri:arrow-right-s-line" />
          </button>
          <button class="img-control left" @click="getElement(index, 'previous')">
            <icon name="ri:arrow-left-s-line" />
          </button>
        </div>
      </div>
      <div class="project-wrapper__info">
        <header>
          <h4>{{ project.title }}</h4>
          <a :href="project.link" target="__blank">{{ project.link }}</a> <span> | </span> <a
            :href="project.github">GitHub</a>
        </header>
        <p>{{ project.description }}</p>
        <div class="project-wrapper__info-tools">
          <small>Tech stack used:</small>
          <p class="tools-wrapper">
            <span v-for="tool in project.tools" :key="tool" class="tool">{{ tool }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="cta-wrapper">
      <link-cta to="/skills" label="Check out my tech stack" />
    </div>
  </section-wrapper>
</template>

<script setup lang="ts">
const projectsData = ref([
  {
    desktop: [
      '/images/projects/tagesmutter-ratzeburg/desktop/tagesmutter-ratzeburg-1.png',
      '/images/projects/tagesmutter-ratzeburg/desktop/tagesmutter-ratzeburg-2.png',
      '/images/projects/tagesmutter-ratzeburg/desktop/tagesmutter-ratzeburg-3.png',
    ],
    mobile: [
      '/images/projects/tagesmutter-ratzeburg/mobile/tagesmutter-ratzeburg-1.webp',
      '/images/projects/tagesmutter-ratzeburg/mobile/tagesmutter-ratzeburg-2.webp',
      '/images/projects/tagesmutter-ratzeburg/mobile/tagesmutter-ratzeburg-3.webp',
    ],
    imgIndex: 0,
    isMobile: false,
    slideDirection: 'next',
    title: 'Tagesmutter Ratzeburg (2025)',
    link: 'https://tagesmutter-ratzeburg.de',
    github: 'https://github.com/fniem/tagesmutter-ratzeburg.de',
    description: "Playful, colorful but modern website for a daycare center. Created with Nuxt 4 and with focus on SEO to better place this site against competition.",
    tools: ["Figma", "Nuxt 4", "TailwindCSS", "TypeScript", "GitHub", "GitHub Actions", "Ubuntu"]
  },
  {
    desktop: [
      '/images/projects/ludwigs-tanzwelt/desktop/ludwigs-tanzwelt-1.webp',
      '/images/projects/ludwigs-tanzwelt/desktop/ludwigs-tanzwelt-2.webp',
    ],
    mobile: [
      '/images/projects/ludwigs-tanzwelt/mobile/ludwigs-tanzwelt-1.webp',
      '/images/projects/ludwigs-tanzwelt/mobile/ludwigs-tanzwelt-2.webp',
    ],
    imgIndex: 0,
    isMobile: false,
    slideDirection: 'next',
    title: 'Ludwigs Tanzwelt (2024)',
    link: 'https://ludwigs-tanzwelt.de',
    github: 'https://github.com/fniem/ludwigs-tanzwelt.de',
    description: "An SEO optimized website for a dancing school based in Lübeck. Created with Nuxt 3 as a frontend and Directus as a headless CMS for contents.",
    tools: ["Figma", "Nuxt 3", "Directus", "Docker", "TailwindCSS", "TypeScript", "GitHub", "GitHub Actions", "Ubuntu"]
  },
  {
    desktop: [
      '/images/projects/nora-warschewski/desktop/nora-warschewski-1.webp',
      '/images/projects/nora-warschewski/desktop/nora-warschewski-2.webp',
    ],
    mobile: [
      '/images/projects/nora-warschewski/mobile/nora-warschewski-1.webp',
      '/images/projects/nora-warschewski/mobile/nora-warschewski-2.webp',
    ],
    imgIndex: 0,
    isMobile: false,
    slideDirection: 'next',
    title: 'Nora Warschewski (2022)',
    link: 'https://fniem.github.io/nora-warschewski',
    github: 'https://github.com/fniem/nora-warschewski',
    description: "A simple static website with clear structures and a dynamic grid layout for a designer friend, based on a Figma design created by her.",
    tools: ["Figma", "HTML", "Vanilla CSS", "JavaScript", "GitHub"]
  }
])

function getElement(index: number, direction = "next") {
  const project = projectsData.value[index]
  if (!project) return

  project.slideDirection = direction

  const images = project.isMobile ? project.mobile : project.desktop
  const lastIndex = images.length - 1

  if (direction !== 'next') {
    project.imgIndex = project.imgIndex === 0 ? lastIndex : project.imgIndex - 1
  } else {
    project.imgIndex = project.imgIndex === lastIndex ? 0 : project.imgIndex + 1
  }
}

function toggleMobile(index: number) {
  const project = projectsData.value[index]
  if (!project) return

  project.isMobile = !project.isMobile

  const newImages = project.isMobile ? project.mobile : project.desktop
  if (project.imgIndex >= newImages.length) {
    project.imgIndex = 0
  }
}
</script>

<style>
#work {
  .project-wrapper {
    display: grid;
    gap: 1rem;
    padding-block: 4rem;
    border-bottom: 1px solid var(--clr-blue-800);

    &.last-el {
      border-bottom: none;

      @media screen and (min-width:768px) {
        padding-bottom: 0;
      }
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      padding-block: 8rem;
    }
  }


  .project-wrapper__screenshots {
    aspect-ratio: 4 / 3;
    display: flex;
    justify-content: center;
    position: relative;

    .img-frame {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: max-width 0.4s ease, border-radius 0.4s ease,
        border-color 0.4s ease, padding 0.4s ease, background-color 0.4s ease;
      max-width: 100%;
      border-radius: 0;
      border: 2px solid transparent;

      img {
        flex: 1;
        min-height: 0;
        width: 100%;
        object-fit: contain;
      }

      .phone-dynamic-island {
        width: 80px;
        height: 0;
        opacity: 0;
        border-radius: 999px;
        background-color: var(--clr-primary);
        flex-shrink: 0;
        transition: height 0.4s ease, opacity 0.4s ease, margin-bottom 0.4s ease;
      }

      .phone-home-indicator {
        width: 80px;
        height: 0;
        opacity: 0;
        border-radius: 999px;
        background-color: var(--clr-accent);
        flex-shrink: 0;
        transition: height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease;
      }
    }

    &.is-mobile .img-frame {
      max-width: 260px;
      border-radius: 2rem;
      border-color: var(--clr-accent);
      padding: 0.75rem 0.25rem;
      background-color: white;

      img {
        border-radius: .25rem;
        object-fit: cover;
        object-position: top center;
      }

      .phone-dynamic-island {
        height: 22px;
        opacity: 1;
        margin-bottom: 0.5rem;
      }

      .phone-home-indicator {
        height: 4px;
        opacity: 1;
        margin-top: 0.5rem;
      }
    }

    .img-controls {
      display: flex;
      flex-direction: column;
      gap: .5rem;

      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      .img-control {
        background-color: var(--clr-accent);
        font-size: var(--size-txt-m);

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: white;
        }
      }
    }
  }

  .project-wrapper__info {
    header {
      margin-top: 2rem;

      h4 {
        color: var(--clr-accent);
        font-size: var(--size-txt-m);
      }

      a {
        color: white;

        &:hover {
          text-decoration: none;
        }
      }
    }

    .project-wrapper__info-tools {
      margin-top: 3rem;

      .tools-wrapper {
        margin-block: 0;

        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .tool {
          background-color: var(--clr-secondary);
          color: var(--clr-white);

          display: inline-block;
          padding: .25em .75em;
        }
      }
    }
  }
}

.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.slide-next-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-next-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-prev-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-prev-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
