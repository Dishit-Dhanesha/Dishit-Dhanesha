<template>
  <div
    class="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark"
  >
    <h3
      class="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light"
    >
      Work Experience
    </h3>

    <div
      class="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0"
    >
      <div
        class="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]"
      >
        <div v-for="(i, index) in timeline" :key="index">
          <div class="gap-1 md:gap-10">
            <p
              class="w-50 mt-1 text-sm font-medium text-muted dark:text-light/70"
            >
              {{ i.year }}
            </p>
            <div class="flex items-center gap-3">
              <div
                class="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2"
              >
                <NuxtImg
                  :src="i.img"
                  loading="lazy"
                  :alt="i.location"
                  width="5"
                  height="5"
                  class="h-5 w-5"
                />
              </div>
              <div class="">
                <h6
                  class="text-base font-semibold text-dark dark:text-light/70"
                >
                  {{ i.location }}
                </h6>
                <p class="text-sm text-muted">{{ i.designation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const timeline = toRef([
  {
    year: "08/2016 - 05/  2020",
    img: "/img/Marwadi.svg",
    location: "Marwadi Education Foundation",
    designation: "B.E. Computer engineering",
  },
  {
    year: "09/2019 - 04/2020",
    img: "/img/sanskar.svg",
    location: "Sansker Technolab Pvt Ltd, Ahmedabad",
    designation: "Jr Project Manager",
  },
  {
    year: "05/2020 - 06/2020",
    img: "/img/GraphiteLogo.png",
    location: "Graphite Communication, Rajkot",
    designation: "Jr Project Manager",
  },
  {
    year: "03/2021 - 09/2023",
    img: "/img/rev.png",
    location: "Reveation Labs Pvt Ltd",
    designation: "Software Engineer",
  },
  {
    year: "09/2023 - PRESENT",
    img: "/img/c3.png",
    location: "C3controls Ltd ",
    designation: "Software Engineer",
  },
]);
</script>