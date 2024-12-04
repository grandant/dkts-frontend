// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],

  modules: [
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    // "@vee-validate/nuxt",
    "@nuxtjs/seo",
    "@nuxt/image",
    "@nuxtjs/device",
    // "@formkit/auto-animate/nuxt",
  ],

  build: {
    extractCSS: true,
  },

  runtimeConfig: {
    apiKey: "",
    public: {
      apiBase: process.env.API_BASE,
      backendBase: process.env.BACKEND_BASE,
    },
  },

  app: {
    head: {
      titleTemplate: "%s",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  image: {
    cloudflare: {
      // baseURL: "http://127.0.0.1:8001/images",
      baseURL: "https://images.grand-ant.com/images",
    },
    domains: ["127.0.0.1:8001", "cdn.grand-ant.com", "images.grand-ant.com"],
  },

  ogImage: {
    enabled: false,
  },

  linkChecker: {
    enabled: false,
  },

  i18n: {
    strategy: "prefix",
    baseUrl: "https://dktshumen.com",
    defaultLocale: "bg",
    locales: [
      {
        code: "bg",
        iso: "bg-BG",
      },
      {
        code: "en",
        iso: "en-GB",
      },
    ],
    experimental: {
      localeDetector: "./utils/localeDetector.ts",
    },
  },
});
