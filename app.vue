<script lang="ts" setup>
const { locale, t } = useI18n();
useHead({
  title: t("site.title.index"),
  titleTemplate: "%s - Nuxt",
  meta: [
    { name: "title", content: t("site.meta.title") },
    { name: "keywords", content: t("site.meta.keywords") },
    { name: "description", content: t("site.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:title", content: t("site.meta.og.title") },
    { property: "og:description", content: t("site.meta.og.description") },
    { property: "og:image", content: "~/assets/share.png" },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "300" },
    { property: "og:image:height", content: "300" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "~/assets/favicon.ico" }],
});
</script>

<template>
  <Html :lang="locale">
    <NuxtPage />
  </Html>
</template>

<style>
:root {
  font-size: 4px;
}
:root.dark {
  background: #222;
  color: white;
}
</style>
