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
          <div class="flex flex-col gap-1 md:flex-row md:gap-10">
            <p
              class="w-50 mt-1 text-sm font-medium text-muted dark:text-light/70"
            >
              2018 - 2021
            </p>
            <div class="flex items-center gap-3">
              <div
                class="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2"
              >
                <img src="~/assets/img/adobe.svg" alt="" class="h-5 w-5" />
              </div>
              <div class="">
                <h6
                  class="text-base font-semibold text-dark dark:text-light/70"
                >
                  Adobe
                </h6>
                <p class="text-sm text-muted">Senior UI UX Designer</p>
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
    year: "2016 - 2020",
    img: "",
    location: "",
    designation: "Bachelor of ",
  },
  {
    year: "09/2019 - 04/2020",
    img: "",
    location: "Sansker Technolab Pvt Ltd, Ahmedabad",
    designation: "Jr Project Manager",
  },
  {
    year: "05/2020 - 06/2020",
    img: "",
    location: "Graphite Communication, Rajkot",
    designation: "Jr Project Manager",
  },
  {
    year: "03/2021 - PRESENT",
    img: "",
    location: "Reveation Labs Pvt Ltd",
    designation: "Software Developer",
  },
  {
    year: "03/2021 - PRESENT",
    img: "",
    location: "C3controls LTD",
    designation: "Software Developer",
  },
]);
</script>