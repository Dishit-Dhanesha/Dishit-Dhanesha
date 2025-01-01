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
        class="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 transition dark:hover:bg-white lg:h-20 lg:rounded-2xl lg:p-4"
      >
        <UTooltip :text="i.name">
          <NuxtImg
            :src="i.image"
            :alt="i.name"
            width="8"
            height="8"
            loading="lazy"
            class="h-8 w-8 lg:h-10 lg:w-10"
          />
        </UTooltip>
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
        class="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 transition dark:hover:bg-white lg:h-20 lg:rounded-2xl lg:p-4"
      >
        <UTooltip :text="i.name">
          <NuxtImg
            :src="i.image"
            :alt="i.name"
            width="8"
            height="8"
            class="h-8 w-8 lg:h-10 lg:w-10"
          />
        </UTooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
    image: "/img/NuxtJS.svg",
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
  {
    name: "Docker",
    image: "/img/Docker.svg",
  },
]);

const platforms = toRef([
  {
    name: "HubSpot",
    image: "/img/hubspot.png",
  },
  {
    name: "Sanity",
    image: "/img/sanity.svg",
  },
  {
    name: "Google Cloud",
    image: "/img/google-cloud-1.svg",
  },
  {
    name: "Azure",
    image: "/img/Azure.svg",
  },
  {
    name: "Firebase",
    image: "/img/Firebase.svg",
  },
  {
    name: "Alexa",
    image: "/img/alexa.png",
  },
  {
    name: "Stripe",
    image: "/img/stripe.svg",
  },
  {
    name: "Github",
    image: "/img/GitHub.svg",
  },
  {
    name: "Linux",
    image: "/img/Linux.svg",
  },
  {
    name: "Kubernetes",
    image: "/img/Kubernetes.svg",
  },
]);
</script>