<template>
  <div class="mt-10 lg:mt-14">
    <div class="flex flex-wrap items-center justify-between gap-6">
      <h3 class="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
        300+ hours of support provided
      </h3>

      <div class="flex items-center gap-2">
        <button
          class="review-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            class="h-5 w-5 shrink-0"
          >
            <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5" />
          </svg>
        </button>
        <button
          class="review-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            class="h-5 w-5 shrink-0"
          >
            <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5" />
          </svg>
        </button>
      </div>
    </div>
    <div class="mt-8">
      <div class="swiper review-carousel">
        <div class="swiper-wrapper">
          <div v-for="(i, index) in reviews" :key="index" class="swiper-slide">
            <div
              class="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2"
            >
              <div class="flex flex-wrap items-center justify-between gap-4">
                <!-- stars -->
                <div class="flex flex-wrap items-center gap-1">
                  <img
                    src="~/assets/img/star-full.svg"
                    alt=""
                    class="h-4 w-4 shrink-0"
                  />
                  <img
                    src="~/assets/img/star-full.svg"
                    alt=""
                    class="h-4 w-4 shrink-0"
                  />
                  <img
                    src="~/assets/img/star-full.svg"
                    alt=""
                    class="h-4 w-4 shrink-0"
                  />
                  <img
                    src="~/assets/img/star-full.svg"
                    alt=""
                    class="h-4 w-4 shrink-0"
                  />
                  <img
                    src="~/assets/img/star-full.svg"
                    alt=""
                    class="h-4 w-4 shrink-0"
                  />
                </div>

                <NuxtLink
                  :to="i.link"
                  target="_blank"
                  class="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black"
                >
                  <span>Testimonials</span>
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
              </div>

              <blockquote class="mt-6 flex-1 text-lg">
                {{ i.review }}
              </blockquote>

              <p class="mt-8 font-medium">
                {{ i.name }}
              </p>

              <p class="font-normal text-muted">
                {{ i.designation }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup  lang="ts">
const reviews = toRef([
  {
    review:
      "Impressive portfolio! Clean design, diverse projects, and excellent user experience. Highly recommend for web development needs.",
    name: "John Smith",
    link: "https://fiverr.com/cloud_hub",
    designation: "CTO - Client",
  },
  {
    review:
      "Modern and professional portfolio. Showcases strong problem-solving skills and high-quality solutions. Great example of a developer's work.",
    name: "Emily Johnson",
    link: "https://fiverr.com/cloud_hub",
    designation: "Product Designer - Client",
  },
]);
</script>
