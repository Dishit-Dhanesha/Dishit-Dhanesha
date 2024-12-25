<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
    <h3 class="text-2xl font-semibold dark:text-light">My Expert Area</h3>

    <div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
      <div v-for="(i, index) in technologies" :key="index" class="text-center">
        <div
          class="grid place-content-center rounded-lg bg-light transition dark:hover:bg-white p-3 dark:bg-dark-2"
        >
          <UTooltip :text="i.name">
            <NuxtImg :src="i.image" :alt="i.name" class="h-8 w-8" />
          </UTooltip>
        </div>
        <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
          {{ i.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const technologies = toRef([
  {
    name: "JavaScript",
    image: "/img/JavaScript.svg",
  },
  {
    name: "Typescript",
    image: "/img/TypeScript.svg",
  },
  {
    name: "Node.js",
    image: "/img/Node.js.svg",
  },
  {
    name: "Vue.js",
    image: "/img/Vue.js.svg",
  },
  {
    name: "Nuxt.js",
    image: "/img/Nuxt JS.svg",
  },
  {
    name: "React.js",
    image: "/img/React.svg",
  },
  {
    name: "Next.js",
    image: "/img/Next.js.svg",
  },
  {
    name: "AWS",
    image: "/img/AWS.svg",
  },
  {
    name: "Python",
    image: "/img/Python.svg",
  },
]);
</script>