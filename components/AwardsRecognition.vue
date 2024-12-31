<template>
  <div class="mt-10 lg:mt-14">
    <h3 class="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
      Awards and Recognitions
    </h3>

    <div v-for="(i, index) in awards" :key="index" class="mt-8 space-y-4">
      <div
        class="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10"
      >
        <div
          class="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6"
        >
          <div
            class="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-dark dark:group-hover:bg-white"
          >
            <NuxtImg
              :src="i.image"
              loading="lazy"
              :alt="i.name"
              class="h-6 w-6 shrink-0"
            />
          </div>
          <div class="">
            <h5
              class="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight"
            >
              {{ i.name }}
            </h5>
            <p class="text-muted">{{ i.year }}</p>
          </div>
        </div>

        <div class="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            class="h-5 w-5 shrink-0"
          >
            <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
            <path
              d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889"
            />
          </svg>
          <h5 class="font-medium leading-tight text-dark dark:text-light">
            Participant
          </h5>
        </div>

        <!-- <div class="text-right">
          <NuxtLink
            to="#"
            class="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary"
          >
            <span>View Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 15"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-3.5 w-3.5 shrink-0"
            >
              <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
            </svg>
          </NuxtLink>
        </div> -->
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const awards = toRef([
  {
    name: "Javascript Algorithms and Data Structures - freeCodeCamp",
    link: "Hhhhh",
    year: "2018",
    image: "/img/freecodecamp.png",
  },
  {
    name: "AWS Educate - Getting Started with Cloud 101",
    link: "Hhhhh",
    year: "2022",
    image: "/img/AWS.svg",
  },
  {
    name: "AWS Educate - Getting Started with Cloud Ops",
    link: "Hhhhh",
    year: "2022",
    image: "/img/AWS.svg",
  },
  {
    name: "AWS Educate - Getting Started with Serverless",
    link: "Hhhhh",
    year: "2022",
    image: "/img/AWS.svg",
  },
]);
</script>