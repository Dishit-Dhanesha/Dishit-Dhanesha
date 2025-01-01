<template>
  <div :class="['h-full ', isDark ? 'dark' : 'light']">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts" >
const { colorPreference } = useGlobalState();
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "'image/x-icon'",
      href: "./favicon.ico",
    },
  ],
});
const isDark = computed(() => {
  if (colorPreference.value == "dark") {
    return true;
  } else {
    return false;
  }
});
</script>
