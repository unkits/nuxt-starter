<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="test">
    <h1>{{ $t('site.common.theme.title') }}: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">{{ $t('site.common.theme.option[0]') }}</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
  <div class="test">
    <h1>{{ $t('site.common.locale.title') }}: {{ locale }}</h1>
    {{ $t('site.common.locale.switch') }}<NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{
    locale.name
  }}</NuxtLink>
  </div>
</template>

<style>
.test {
  --at-apply: mx-auto w-full h-full text-center mt-200;
}
</style>
