<template>
  <div class="mt-10 lg:mt-14">
    <h3 class="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
      Working With multiple technologies and ✨ platforms
    </h3>
    <br />
    <h4 class="text-xl font-medium text-dark dark:text-light lg:text-xl">
      🖥️ Technologies 🖥️
    </h4>
    <div
      class="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4"
    >
      <div
        v-for="(i, index) in technologies"
        :key="index"
        class="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
      >
        <img :src="i.image" :alt="i.name" class="h-8 w-8 lg:h-10 lg:w-10" />
      </div>
    </div>
    <br />
    <h4 class="text-xl font-medium text-dark dark:text-light lg:text-xl">
      🖥️ Platforms 🖥️
    </h4>
    <div
      class="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4"
    >
      <div
        v-for="(i, index) in platforms"
        :key="index"
        class="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4"
      >
        <img :src="i.image" :alt="i.name" class="h-8 w-8 lg:h-10 lg:w-10" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const technologies = toRef([
  {
    name: "JavaScript",
    image: "/_nuxt/assets/img/JavaScript.svg",
  },
  {
    name: "Typescript",
    image: "/_nuxt/assets/img/TypeScript.svg",
  },
  {
    name: "Node.js",
    image: "/_nuxt/assets/img/Node.js.svg",
  },
  {
    name: "Vue.js",
    image: "/_nuxt/assets/img/Vue.js.svg",
  },
  {
    name: "Nuxt.js",
    image: "/_nuxt/assets/img/Nuxt JS.svg",
  },
  {
    name: "React.js",
    image: "/_nuxt/assets/img/React.svg",
  },
  {
    name: "Next.js",
    image: "/_nuxt/assets/img/Next.js.svg",
  },
  {
    name: "AWS",
    image: "/_nuxt/assets/img/AWS.svg",
  },
  {
    name: "Python",
    image: "/_nuxt/assets/img/Python.svg",
  },
  {
    name: "Docker",
    image: "/_nuxt/assets/img/Docker.svg",
  },
]);

const platforms = toRef([
  {
    name: "HubSpot",
    image: "/_nuxt/assets/img/JavaScript.svg",
  },
  {
    name: "Sanity",
    image: "/_nuxt/assets/img/sanity.svg",
  },
  {
    name: "Google Cloud",
    image: "/_nuxt/assets/img/google-cloud-1.svg",
  },
  {
    name: "Azure",
    image: "/_nuxt/assets/img/Azure.svg",
  },
  {
    name: "Firebase",
    image: "/_nuxt/assets/img/Firebase.svg",
  },
  {
    name: "Alexa",
    image: "/_nuxt/assets/img/JavaScript.svg",
  },
  {
    name: "Stripe",
    image: "/_nuxt/assets/img/stripe.svg",
  },
  {
    name: "Github",
    image: "/_nuxt/assets/img/GitHub.svg",
  },
  {
    name: "Linux",
    image: "/_nuxt/assets/img/Linux.svg",
  },
  {
    name: "Kubernetes",
    image: "/_nuxt/assets/img/Kubernetes.svg",
  },
]);
</script>