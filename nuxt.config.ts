// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-nodemailer",
    "@nuxtjs/sitemap",
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  runtimeConfig: {
    public: {
      sitemap: {
        hostname: "https://ferdi.digital",
        gzip: true,
        defaults: {
          changefreq: 'monthly',
          priority: 0.5,
        },
        routes: [
          { url: '/', changefreq: 'weekly', priority: 1.0 },
          { url: '/work', changefreq: 'monthly', priority: 0.9 },
          { url: '/skills', changefreq: 'monthly', priority: 0.8 },
          { url: '/contact', changefreq: 'monthly', priority: 0.7 },
          { url: '/legal', changefreq: 'yearly', priority: 0.3 },
          { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
        ],
      },
    },
  },

  css: ["@/assets/styles/main.css"],

  fonts: {
    families: [{ name: "Victor Mono", provider: "bunny" }],
  },

  nodemailer: {
    from: "",
    host: "",
    port: 0,
    secure: false,
    auth: {
      user: "",
      pass: "",
    },
  },
});
