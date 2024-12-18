<script setup lang="ts">
import AwardsRecognition from "~/components/AwardsRecognition.vue";
import ServicesComponent from "~/components/Services/servicesComponent.vue";
</script>

<template>
  <main class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
    <!-- Intro -->
    <ProfileCardComponent />

    <!-- Services -->
    <div
      class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10"
    >
      <ServicesComponent />

      <!-- Brands -->
      <BrandsComponent />

      <!-- Reviews -->
      <AboutTestimonial />

      <!-- Awards -->
      <AwardsRecognition />
      <!-- FAQ -->
      <FrequentlyAskedQuestions />
      <!-- Contact -->
      <LetsWorkTogeather />
    </div>
  </main>
</template>