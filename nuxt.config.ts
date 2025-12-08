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
  ],

  css: ["@/assets/styles/main.css"],

  fonts: {
    families: [{ name: "Victor Mono", provider: "bunny" }],
  },

  nodemailer: {
    from: "",
    host: "",
    port: 0,
    secure: true,
    auth: {
      user: "",
      pass: "",
    },
  },
});
