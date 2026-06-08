<template>
  <section-wrapper id="work" title="Websites and apps I created">
    <p class="intro">
      Let me introduce you to a small selection of my recent (private) works and projects. I am always up for new
      challenges and
      ideas. So if you need a helping hand as a developer for your app or website, feel free to <nuxt-link
        to="/contact">get in touch with me</nuxt-link>.
    </p>
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.title"
      :project="project"
      :is-last="index === projects.length - 1"
      @toggle-mobile="toggleMobile(index)"
      @next="nextImage(index)"
      @prev="nextImage(index, 'prev')"
    />
    <div class="cta-wrapper">
      <link-cta to="/skills" label="Check out my tech stack" />
    </div>
  </section-wrapper>
</template>

<script setup lang="ts">
const { projects, nextImage, toggleMobile } = useImageCarousel();
</script>

<style>
#work .slide-next-enter-active,
#work .slide-next-leave-active,
#work .slide-prev-enter-active,
#work .slide-prev-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

@media (prefers-reduced-motion: reduce) {
  #work .slide-next-enter-active,
  #work .slide-next-leave-active,
  #work .slide-prev-enter-active,
  #work .slide-prev-leave-active {
    transition: none;
  }
}

#work .slide-next-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

#work .slide-next-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

#work .slide-prev-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

#work .slide-prev-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
