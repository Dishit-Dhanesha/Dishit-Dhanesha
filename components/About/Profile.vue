<template>
  <div>
    <div class="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-12">
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
            Quant enthusiast
          </span>
          having
          <span class="font-semibold text-dark dark:text-white">
            5+ years
          </span>
          of Experiences with multiple technologies.
        </p>
        <!-- ////////// New /////// -->
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
            <span>5</span>+
          </h2>
          <p class="mt-2 text-muted">Years of Experience</p>
        </div>
        <div class="">
          <h2
            class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
          >
            <span>20</span>+
          </h2>
          <p class="mt-2 text-muted">Projects Completed</p>
        </div>
        <div class="">
          <h2
            class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
          >
            <span>45</span>+
          </h2>
          <p class="mt-2 text-muted">Happy Client</p>
        </div>
        <!-- <div class="">
          <h2
            class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
          >
            <span>300</span>+
          </h2>
          <p class="mt-2 text-muted">Hours of Support</p>
        </div> -->
      </div>

      <div
        class="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10"
      >
        <NuxtImg
          src="~/assets/img/circle-text.svg"
          alt="Circle Text"
          loading="lazy"
          class="absolute inset-0 h-full w-full animate-spin-slow dark:hidden"
        />
        <NuxtImg
          src="~/assets/img/circle-text-light.svg"
          alt="Circle Text"
          loading="lazy"
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
  </div>
</template>