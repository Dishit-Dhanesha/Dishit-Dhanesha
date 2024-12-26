<script setup lang="ts">
import CTAButtons from "~/components/CTAButtons.vue";
</script>

<template>
  <main class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
    <!-- Intro -->
    <ProfileCardComponent />

    <!-- Contact -->
    <div
      class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10"
    >
      <div class="">
        <h2
          class="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight"
        >
          Let's 👋 <span class="text-primary">Work</span> Together
        </h2>
        <p class="mt-4 text-lg text-muted dark:text-light/70">
          I'm here to help if you're searching for a product designer to bring
          your idea to life or a design partner to help take your business to
          the next level.
        </p>
        <!-- CTA buttons -->
        <CTAButtons />
      </div>
      <!-- Form  -->
      <ContactFormComponent />
      <!-- Map -->
      <div class="mt-10 aspect-video overflow-hidden rounded-lg lg:mt-14">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ahmedabad+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="h-full w-full object-cover"
        ></iframe>
      </div>

      <!-- FAQ -->
      <FrequentlyAskedQuestions />
    </div>
  </main>
</template>