// https://nuxt.com/docs/api/configuration/nuxt-config
import { transformerDirectives } from "unocss";

export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxtjs/color-mode", "@unocss/nuxt"],
  i18n: {
    locales: [
      { code: "zh", iso: "zh", name: "简体中文", file: "zh-CN.json" },
      { code: "en", iso: "en", name: "English", file: "en-US.json" },
    ],
    langDir: "locales/",
    defaultLocale: "zh",
    lazy: true,
    vueI18n: {
      legacy: false,
      locale: "zh",
      fallbackLocale: "zh",
    },
  },
  unocss: {
    // presets
    uno: true, // `@unocss/preset-uno`
    attributify: true, // `@unocss/preset-attributify`,
    // core options
    transformers: [transformerDirectives()],
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    // fallback: "dark",
    storageKey: "theme",
  },
});
