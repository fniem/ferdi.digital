<template>
  <div>
    <section-hero id="home" />
    <section-quick-facts />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ferdinand Niemann – Senior Full-Stack Developer in Lübeck',
})

useSeoMeta({
  title: 'Ferdinand Niemann – Senior Full-Stack Developer in Lübeck',
  description: 'Senior full-stack developer from Lübeck (Schleswig-Holstein). 5+ years of experience building enterprise web apps with Nuxt, Vue, TypeScript and Node.js. Available for freelance projects.',
  ogTitle: 'Ferdinand Niemann – Senior Full-Stack Developer in Lübeck',
  ogDescription: 'Senior full-stack developer from Lübeck (Schleswig-Holstein). 5+ years of experience building enterprise web apps with Nuxt, Vue, TypeScript and Node.js.',
  ogType: 'profile',
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://ferdi.digital',
              },
            ],
          },
          {
            '@type': 'ProfilePage',
            mainEntity: { '@id': 'https://ferdi.digital/#person' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Who is Ferdinand Niemann?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ferdinand Niemann is a senior full-stack developer based in Lübeck, Schleswig-Holstein, Germany, with 5+ years of professional experience in building enterprise-level web applications.',
                },
              },
              {
                '@type': 'Question',
                name: 'What technologies does Ferdinand Niemann work with?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ferdinand specializes in Nuxt, Vue, TypeScript, Node.js, PostgreSQL, Docker, and modern CI/CD pipelines for full-stack web development.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is Ferdinand Niemann available for freelance projects?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Ferdinand is available for freelance web development projects, app development, and technical consulting. You can reach him via the contact form at ferdi.digital/contact.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where is Ferdinand Niemann located?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ferdinand Niemann is located in Lübeck, Schleswig-Holstein, in northern Germany, and works with clients throughout Germany including Hamburg and the surrounding regions.',
                },
              },
            ],
          },
        ],
      }),
    },
  ],
})
</script>

<style scoped>
div {
  --margin-block: 8rem;

  @media screen and (min-width: 768px) {
    --margin-block: 16rem;
  }
}
</style>