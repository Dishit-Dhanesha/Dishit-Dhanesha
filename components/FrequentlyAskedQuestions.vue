<template>
  <div class="mt-10 lg:mt-14">
    <h3 class="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
      Frequently Asked Questions
    </h3>

    <div
      v-for="(i, index) in faq"
      :key="index"
      class="hs-accordion-group mt-8 space-y-4"
    >
      <div
        class="hs-accordion rounded-lg border border-transparent bg-light transition hs-accordion-active:border-light hs-accordion-active:bg-white dark:border-transparent dark:bg-dark-2 dark:hs-accordion-active:border-dark-2 dark:hs-accordion-active:bg-black"
      >
        <button
          class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-5 text-start text-lg font-medium text-dark transition hover:text-muted disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary dark:text-light/70 dark:hover:text-light dark:focus:outline-none dark:hs-accordion-active:text-primary xl:text-2xl"
          @click="() => toggleAccordian(index)"
        >
          <span>{{ i.question }}</span>
          <span
            class="grid h-8 w-8 shrink-0 place-content-center rounded bg-white text-primary hs-accordion-active:bg-light dark:bg-black dark:hs-accordion-active:bg-dark-2"
          >
            <svg
              v-show="!isAccordianOpen.includes(index)"
              class="block h-3.5 w-3.5 hs-accordion-active:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>

            <svg
              :class="[
                { hidden: !isAccordianOpen.includes(index) },
                'h-3.5',
                'w-3.5',
                'hs-accordion-active:block',
              ]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </span>
        </button>
        <!-- hidden -->
        <Transition>
          <div
            v-if="isAccordianOpen.includes(index)"
            class="hs-accordion-content open w-full overflow-hidden transition duration-300"
          >
            <div class="px-6 pb-5">
              <p class="text-base xl:text-lg">
                {{ i.answer }}
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isAccordianOpen = toRef([]);
const toggleAccordian = (idx: any) => {
  if (isAccordianOpen.value.includes(idx)) {
    let index = isAccordianOpen.value.indexOf(idx);
    isAccordianOpen.value.splice(index, 1);
  } else {
    isAccordianOpen.value.push(idx);
  }
};

const faq = toRef([
  {
    question: "What services do you offer?",
    answer:
      "I specialize in web development, App Development including front-end and back-end development, performance optimization and deployment, I also specialize in providing custom cloud solutions and services specifically in AWS and other cloud technologies",
  },
  {
    question: "How can I contact you for a project?",
    answer:
      "You can reach me through the contact form on my website or email me directly at developers.royale@gmail.com",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I work with a variety of technologies, including HTML, CSS, JavaScript, Vue.js, Nuxt.js, and Node.js, React.js, AWS etc",
  },
  {
    question: "Do you have any client testimonials?",
    answer:
      "Yes, you can find client testimonials on my portfolio page, showcasing feedback from satisfied clients.",
  },
]);
</script>

<style scoped>
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>