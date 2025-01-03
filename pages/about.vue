<template>
  <main class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
    <!-- Intro -->
    <div class="mx-auto top-4 gap-4">
      <ProfileCardComponent class="lg:sticky top-[80px] shadow-md" />
    </div>
    <!-- about -->
    <div
      class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10"
    >
      <AboutProfile />

      <!-- Brands -->
      <BrandsComponent />

      <!-- Reviews -->
      <AboutTestimonial />

      <!-- Awards -->
      <AwardsRecognition />

      <!-- Blog -->
      <!-- <AboutBlog /> -->

      <!-- Contact -->
      <LetsWorkTogeather />
    </div>
  </main>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: "Explore My Experience as a Full Stack Developer",
  description:
    "Discover Dishit Dhanesha's journey as a Full Stack Developer, specializing in JavaScript, React, Node.js, and AWS. Explore innovative web and mobile app projects showcasing cutting-edge technologies and professional expertise.",
  twitterTitle: "Explore My Experience as a Full Stack Developer",
  twitterDescription:
    "Discover Dishit Dhanesha's journey as a Full Stack Developer, specializing in JavaScript, React, Node.js, and AWS. Explore innovative web and mobile app projects showcasing cutting-edge technologies and professional expertise.",
  twitterCard: "summary",
});
defineOgImageComponent("NuxtSeo", {
  screenshot: true,
});
</script>