<template>
  <main class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
    <!-- Intro -->
    <ProfileCardComponent />
    <!-- about -->
    <div
      class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10"
    >
      <div
        class="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10"
      >
        <div class="">
          <h2
            class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
          >
            Hi, <span class="text-primary">Dishit Dhanesha</span> Here👋
          </h2>
          <p
            class="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl"
          >
            A Passionate
            <span class="font-semibold text-dark dark:text-white">
              Full Stack Developer
            </span>
            🖥️ &
            <span class="font-semibold text-dark dark:text-white">
              Product Designer
            </span>
            having
            <span class="font-semibold text-dark dark:text-white">
              12 years
            </span>
            of Experiences over 24+ Country Worldwide.
          </p>
        </div>
        <div
          class="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg"
        >
          <span class="relative flex h-2 w-2 shrink-0">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-primary"
            ></span>
          </span>
          <span>Available For Hire</span>
        </div>
      </div>

      <div class="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
        <div class="flex flex-wrap items-start gap-6 lg:gap-10">
          <div class="">
            <h2
              class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
            >
              <span>40</span>+
            </h2>
            <p class="mt-2 text-muted">Year of Experience</p>
          </div>
          <div class="">
            <h2
              class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
            >
              <span>86</span>+
            </h2>
            <p class="mt-2 text-muted">Project Completed</p>
          </div>
          <div class="">
            <h2
              class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
            >
              <span>72</span>+
            </h2>
            <p class="mt-2 text-muted">Happy Client</p>
          </div>
        </div>

        <div
          class="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10"
        >
          <img
            src="~/assets/img/circle-text.svg"
            alt=""
            class="absolute inset-0 h-full w-full animate-spin-slow dark:hidden"
          />
          <img
            src="~/assets/img/circle-text-light.svg"
            alt=""
            class="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block"
          />
          <div
            class="grid h-full w-full place-content-center rounded-full bg-primary text-light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-10 w-10"
            >
              <path d="M20 5v30m-5-5 5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Brands -->
      <BrandsComponent />

      <!-- Reviews -->
      <div class="mt-10 lg:mt-14">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <h3
            class="text-2xl font-medium text-dark dark:text-light lg:text-3xl"
          >
            Trusted By 1200+ Clients
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
              <div class="swiper-slide">
                <div
                  class="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2"
                >
                  <div
                    class="flex flex-wrap items-center justify-between gap-4"
                  >
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
                      to="#"
                      class="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black"
                    >
                      <span>framer.com</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 15"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-3.5 w-3.5 shrink-0"
                      >
                        <path
                          d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
                        />
                      </svg>
                    </NuxtLink>
                  </div>

                  <blockquote class="mt-6 flex-1 text-lg">
                    "We've been using BentoFolio for over a year now, and I must
                    say, it's been a game-changer for us. The user interface is
                    intuitive and the feature.
                  </blockquote>

                  <p class="mt-8 font-medium">
                    Oliver Clain -
                    <span class="font-normal text-muted">
                      Product Designer
                    </span>
                  </p>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  class="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2"
                >
                  <div
                    class="flex flex-wrap items-center justify-between gap-4"
                  >
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
                      to="#"
                      class="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black"
                    >
                      <span>framer.com</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 15"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-3.5 w-3.5 shrink-0"
                      >
                        <path
                          d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
                        />
                      </svg>
                    </NuxtLink>
                  </div>

                  <blockquote class="mt-6 flex-1 text-lg">
                    "We've been using BentoFolio for over a year now, and I must
                    say, it's been a game-changer for us. The user interface is
                    intuitive and the feature.
                  </blockquote>

                  <p class="mt-8 font-medium">
                    Oliver Clain -
                    <span class="font-normal text-muted">
                      Product Designer
                    </span>
                  </p>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  class="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2"
                >
                  <div
                    class="flex flex-wrap items-center justify-between gap-4"
                  >
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
                      to="#"
                      class="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black"
                    >
                      <span>framer.com</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 15"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-3.5 w-3.5 shrink-0"
                      >
                        <path
                          d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
                        />
                      </svg>
                    </NuxtLink>
                  </div>

                  <blockquote class="mt-6 flex-1 text-lg">
                    "We've been using BentoFolio for over a year now, and I must
                    say, it's been a game-changer for us. The user interface is
                    intuitive and the feature.
                  </blockquote>

                  <p class="mt-8 font-medium">
                    Oliver Clain -
                    <span class="font-normal text-muted">
                      Product Designer
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Awards -->
      <AwardsRecognition />

      <!-- Blog -->
      <div class="mt-10 lg:mt-14">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <h3
            class="text-2xl font-medium text-dark dark:text-light lg:text-3xl"
          >
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

      <!-- Contact -->
      <div class="mt-10 lg:mt-14">
        <div
          class="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2"
        >
          <div
            class="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]"
          >
            <NuxtLink
              to="/contact"
              class="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
            >
              Let's 👋 Work Together
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
            >
              Let's 👋 Work Together
            </NuxtLink>
          </div>
          <div
            class="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]"
          >
            <NuxtLink
              to="/contact"
              class="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
            >
              Let's 👋 Work Together
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
            >
              Let's 👋 Work Together
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>