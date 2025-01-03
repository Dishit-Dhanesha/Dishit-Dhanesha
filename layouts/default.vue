<template>
  <body
    class="relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light"
  >
    <div
      class="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6"
    >
      <AppHeader class="sticky top-0 shadow-md z-50" />
      <transition-fade :duration="200">
        <slot />
      </transition-fade>
      <UNotifications class="w-50 text-dark" />
      <AppFooter />
      <div class="shapes">
        <div
          class="fixed -left-1/2 -top-1/2 -z-5 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3"
        >
          <NuxtImg
            src="/img/gradient-1.webp"
            height="1088"
            width="1088"
            format="webp"
            alt="Gradient"
          />
        </div>

        <div
          class="fixed -right-[50%] top-[10%] -z-5 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]"
        >
          <NuxtImg
            height="1088"
            width="1088"
            src="/img/gradient-2.webp"
            format="webp"
            alt="Gradient"
          />
        </div>
      </div>
    </div>
  </body>
</template>