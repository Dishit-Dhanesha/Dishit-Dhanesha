<template>
  <div class="mt-10 lg:mt-14">
    <div class="flex flex-wrap items-center justify-between gap-6">
      <h3 class="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
        Article and Publications
      </h3>

      <div class="flex items-center gap-2">
        <button
          class="blog-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
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
          class="blog-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
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
      <div class="swiper blog-carousel">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="">
              <div class="relative">
                <NuxtLink
                  to="/article"
                  class="group block aspect-6/4 overflow-hidden rounded-lg"
                >
                  <img
                    src="~/assets/img/blog-img-1.jpg"
                    alt=""
                    class="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                  />
                </NuxtLink>

                <!-- Tags -->
                <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <NuxtLink
                    to="#"
                    class="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                  >
                    Development
                  </NuxtLink>
                </div>
              </div>
              <div class="mt-6">
                <h2 class="text-xl font-medium xl:text-2xl">
                  <NuxtLink
                    to="/article"
                    class="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                  >
                    Want To Upgrade Your Brain? Stop Doing These 7 Things
                  </NuxtLink>
                </h2>

                <ul class="mt-4 flex flex-wrap items-center gap-2">
                  <li
                    class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                  >
                    15 min read
                  </li>
                  <li
                    class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                  >
                    Nov 6, 2023
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="">
              <div class="relative">
                <NuxtLink
                  to="/article"
                  class="group block aspect-6/4 overflow-hidden rounded-lg"
                >
                  <img
                    src="~/assets/img/blog-img-2.jpg"
                    alt=""
                    class="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                  />
                </NuxtLink>

                <!-- Tags -->
                <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <NuxtLink
                    to="#"
                    class="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                  >
                    Development
                  </NuxtLink>
                </div>
              </div>
              <div class="mt-6">
                <h2 class="text-xl font-medium xl:text-2xl">
                  <NuxtLink
                    to="/article"
                    class="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                  >
                    Want To Upgrade Your Brain? Stop Doing These 7 Things
                  </NuxtLink>
                </h2>

                <ul class="mt-4 flex flex-wrap items-center gap-2">
                  <li
                    class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                  >
                    15 min read
                  </li>
                  <li
                    class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                  >
                    Nov 6, 2023
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="">
              <div class="relative">
                <NuxtLink
                  to="/article"
                  class="group block aspect-6/4 overflow-hidden rounded-lg"
                >
                  <img
                    src="~/assets/img/blog-img-3.jpg"
                    alt=""
                    class="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                  />
                </NuxtLink>

                <!-- Tags -->
                <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <NuxtLink
                    to="#"
                    class="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                  >
                    Development
                  </NuxtLink>
                </div>
              </div>
              <div class="mt-6">
                <h2 class="text-xl font-medium xl:text-2xl">
                  <NuxtLink
                    to="/article"
                    class="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                  >
                    Want To Upgrade Your Brain? Stop Doing These 7 Things
                  </NuxtLink>
                </h2>

                <ul class="mt-4 flex flex-wrap items-center gap-2">
                  <li
                    class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                  >
                    15 min read
                  </li>
                  <li
                    class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                  >
                    Nov 6, 2023
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>