<template>
  <section-wrapper id="work" title="Websites and apps I created">
    <h1 class="sr-only">My Work & Projects – Full-Stack Developer Portfolio from Lübeck</h1>
    <p class="intro">
      Here is a selection of my recent private projects. As a full-stack developer based in Lübeck, I build custom websites and web applications — from design to deployment. If you are looking for a developer in Schleswig-Holstein or the Hamburg area for your next website or app project, feel free to <nuxt-link
        to="/contact">get in touch</nuxt-link>.
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

useHead({
  title: 'My Work & Projects – Ferdinand Niemann Full-Stack Developer',
})

useSeoMeta({
  title: 'My Work & Projects – Ferdinand Niemann Full-Stack Developer',
  description: 'Explore the portfolio of Ferdinand Niemann, a full-stack developer from Lübeck. Nuxt, Vue, TypeScript websites and web apps with automated CI/CD and Docker deployments.',
  ogTitle: 'My Work & Projects – Ferdinand Niemann Full-Stack Developer',
  ogDescription: 'Explore the portfolio of Ferdinand Niemann, a full-stack developer from Lübeck. Modern web apps built with Nuxt, Vue and TypeScript.',
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
              { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://ferdi.digital/work' },
            ],
          },
          {
            '@type': 'ItemList',
            itemListElement: projects.value.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'CreativeWork',
                name: p.title,
                description: p.description,
                url: p.link,
                image: `https://ferdi.digital${p.desktop[0]}`,
                author: { '@id': 'https://ferdi.digital/#person' },
              },
            })),
          },
        ],
      }),
    },
  ],
})
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
