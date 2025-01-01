<template>
  <div :class="['h-full light', isDark ? 'dark' : '']">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts" >
defineOgImageComponent("NuxtSeo", {
  colorMode: "dark",
});
const { colorPreference } = useGlobalState();
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
const isDark = computed(() => {
  if (colorPreference.value == "dark") {
    return true;
  } else {
    return false;
  }
});
</script>
