<template>
  <div class="app">
    <a href="#main-content" class="skip-to-content">Skip to main content</a>
    <page-header />
    <transition name="overlay">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <div v-if="navOpen" class="overlay" role="presentation" aria-hidden="true" @click="navOpen = false"></div>
    </transition>
    <transition name="nav">
      <div v-if="navOpen" class="nav-wrapper" :aria-hidden="!navOpen">
        <main-navigation />
      </div>
    </transition>
    <nuxt-route-announcer />
    <main id="main-content">
      <div class="max-w">
        <nuxt-page />
      </div>
    </main>
  </div>
</template>

<script setup>
const siteName = 'Ferdinand Niemann – Full-Stack Developer Lübeck'
const siteDescription = 'Ferdinand Niemann is a senior full-stack developer based in Lübeck, Germany, specializing in modern web apps, Nuxt, TypeScript and cloud-native solutions.'
const siteUrl = 'https://ferdi.digital'
const siteImage = 'https://ferdi.digital/images/profile.jpg'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'canonical', href: siteUrl },
  ],
})

// Global OpenGraph / Twitter defaults – pages override title/description
useSeoMeta({
  title: siteName,
  description: siteDescription,
  ogTitle: siteName,
  ogDescription: siteDescription,
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: siteImage,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogSiteName: siteName,
  ogLocale: 'en_DE',
  twitterCard: 'summary_large_image',
  twitterTitle: siteName,
  twitterDescription: siteDescription,
  twitterImage: siteImage,
  author: 'Ferdinand Niemann',
  themeColor: '#25283d',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            name: 'Ferdinand Niemann – Developer Portfolio',
            url: siteUrl,
            description: siteDescription,
            inLanguage: 'en',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteUrl}/?s={search_term_string}`,
              },
              'query-input': 'required name=search_term_string',
            },
          },
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: 'Ferdinand Niemann',
            givenName: 'Ferdinand',
            familyName: 'Niemann',
            url: siteUrl,
            sameAs: [
              'https://www.linkedin.com/in/moinferdi',
              'https://github.com/moinferdi',
            ],
            jobTitle: 'Senior Full-Stack Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Remind GmbH',
              url: 'https://remind.de',
            },
            email: 'mailto:moin@ferdi.digital',
            image: siteImage,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Lübeck',
              addressRegion: 'Schleswig-Holstein',
              addressCountry: 'DE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '53.8655',
              longitude: '10.6866',
            },
            telephone: '+49 173 683 4611',
            description: 'Senior full-stack developer from Lübeck (Germany) with 5+ years of professional experience in enterprise-level web applications, specializing in Nuxt, Vue, TypeScript, Node.js and cloud-native architectures.',
            knowsAbout: [
              'Web Development',
              'Full-Stack Development',
              'Nuxt.js',
              'Vue.js',
              'TypeScript',
              'Node.js',
              'TailwindCSS',
              'DevOps',
              'Docker',
              'CI/CD',
            ],
          },
        ],
      }),
    },
  ],
})

const navOpen = useState('nav')
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  overflow-y: auto;
}

.overlay {
  background-color: var(--clr-primary);

  opacity: .75;

  position: fixed;
  inset: 0;
  z-index: 2;
}

.nav-wrapper {
  position: fixed;
  inset: 0;
  margin-left: auto;
  z-index: 3;

  @media screen and (min-width: 1260px) {
    width: 50%;
  }
}

.nav-enter-active,
.nav-leave-active {
  transition: transform 200ms ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .nav-enter-active,
  .nav-leave-active {
    transition: none;
  }
}

.nav-enter-from,
.nav-leave-to {
  transform: translateX(100%);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 200ms;
}

@media (prefers-reduced-motion: reduce) {
  .overlay-enter-active,
  .overlay-leave-active {
    transition: none;
  }
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>