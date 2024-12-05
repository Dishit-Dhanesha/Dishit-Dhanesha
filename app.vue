<template>
  <div :class="['h-full light', isDark ? 'dark' : '']">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts" >
const { colorPreference } = useGlobalState();

const isDark = computed(() => {
  if (colorPreference.value == "dark") {
    return true;
  } else {
    return false;
  }
});
</script>
