<template>
  <div class="project-card" :class="{ 'last-el': isLast }">
    <div class="project-card__screenshots" :class="{ 'is-mobile': project.isMobile }">
      <div class="img-frame">
        <div class="phone-dynamic-island"></div>
        <Transition :name="`slide-${project.slideDirection}`" mode="out-in">
          <nuxt-img
            :key="`${project.title}-${project.imgIndex}-${project.isMobile}`"
            :src="project.isMobile ? project.mobile[project.imgIndex] : project.desktop[project.imgIndex]"
            format="webp"
          />
        </Transition>
        <div class="phone-home-indicator"></div>
      </div>
      <div class="img-controls">
        <button
          class="img-control toggle-view"
          @click="$emit('toggleMobile')"
          :title="project.isMobile ? 'Switch to desktop view' : 'Switch to mobile view'"
        >
          <icon :name="project.isMobile ? 'ri:computer-line' : 'ri:smartphone-line'" />
        </button>
        <button class="img-control right" @click="$emit('next')">
          <icon name="ri:arrow-right-s-line" />
        </button>
        <button class="img-control left" @click="$emit('prev')">
          <icon name="ri:arrow-left-s-line" />
        </button>
      </div>
    </div>
    <div class="project-card__info">
      <header>
        <h4>{{ project.title }}</h4>
        <a :href="project.link" target="__blank">{{ project.link }}</a>
        <span> | </span>
        <a :href="project.github">GitHub</a>
      </header>
      <p>{{ project.description }}</p>
      <div class="project-card__info-tools">
        <small>Tech stack used:</small>
        <p class="tools-wrapper">
          <span v-for="tool in project.tools" :key="tool" class="tool">{{ tool }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/data/projects";

defineProps<{
  project: Project;
  isLast: boolean;
}>();

defineEmits<{
  toggleMobile: [];
  next: [];
  prev: [];
}>();
</script>

<style scoped>
.project-card {
  display: grid;
  gap: 1rem;
  padding-block: 4rem;
  border-bottom: 1px solid var(--clr-blue-800);
}

.project-card.last-el {
  border-bottom: none;
}

@media screen and (min-width: 768px) {
  .project-card {
    grid-template-columns: 1fr 1fr;
    padding-block: 8rem;
  }
  .project-card.last-el {
    padding-bottom: 0;
  }
}

.project-card__screenshots {
  aspect-ratio: 4 / 3;
  display: flex;
  justify-content: center;
  position: relative;
}

@media screen and (max-width: 767px) {
  .project-card__screenshots.is-mobile {
    aspect-ratio: 9 / 16;
  }
}

.project-card__screenshots .img-frame {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: max-width 0.4s ease, border-radius 0.4s ease, border-color 0.4s ease, padding 0.4s ease, background-color 0.4s ease;
  max-width: 100%;
  border-radius: 0;
  border: 2px solid transparent;
}

.project-card__screenshots .img-frame img {
  flex: 1;
  min-height: 0;
  width: 100%;
  object-fit: contain;
}

.project-card__screenshots .img-frame .phone-dynamic-island {
  width: 80px;
  height: 0;
  opacity: 0;
  border-radius: 999px;
  background-color: var(--clr-primary);
  flex-shrink: 0;
  transition: height 0.4s ease, opacity 0.4s ease, margin-bottom 0.4s ease;
}

.project-card__screenshots .img-frame .phone-home-indicator {
  width: 80px;
  height: 0;
  opacity: 0;
  border-radius: 999px;
  background-color: var(--clr-accent);
  flex-shrink: 0;
  transition: height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease;
}

.project-card__screenshots.is-mobile .img-frame {
  max-width: 260px;
  border-radius: 2rem;
  border-color: var(--clr-accent);
  padding: 0.75rem 0.25rem;
  background-color: white;
}

.project-card__screenshots.is-mobile .img-frame img {
  border-radius: 0.25rem;
  object-fit: cover;
  object-position: top center;
}

.project-card__screenshots.is-mobile .img-frame .phone-dynamic-island {
  height: 22px;
  opacity: 1;
  margin-bottom: 0.5rem;
}

.project-card__screenshots.is-mobile .img-frame .phone-home-indicator {
  height: 4px;
  opacity: 1;
  margin-top: 0.5rem;
}

.img-controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.img-controls .img-control {
  background-color: var(--clr-accent);
  font-size: var(--size-txt-m);
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-controls .img-control:hover {
  background-color: white;
}

.project-card__info header {
  margin-top: 2rem;
}

.project-card__info header h4 {
  color: var(--clr-accent);
  font-size: var(--size-txt-m);
}

.project-card__info header a {
  color: white;
}

.project-card__info header a:hover {
  text-decoration: none;
}

.project-card__info-tools {
  margin-top: 3rem;
}

.project-card__info-tools .tools-wrapper {
  margin-block: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tool {
  background-color: var(--clr-secondary);
  color: var(--clr-white);
  display: inline-block;
  padding: 0.25em 0.75em;
}
</style>
