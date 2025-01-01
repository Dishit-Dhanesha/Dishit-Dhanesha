

<template>
  <div>
    <main class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      <ProfileCardComponent />

      <div class="grid grid-cols-1 gap-4 lg:gap-6">
        <!-- Work Experience -->
        <HomeWorkExperienceComponent />

        <!-- Expertise -->
        <HomeExpertAreaComponent />
      </div>

      <!-- Projects -->
      <HomeRecentProjects />

      <!-- Services -->
      <HomeServicesOfferedComponent />

      <!-- Contact -->
      <HomeLetsTalkComponent />
    </main>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Expert Full Stack Developer for Custom Web & App Solutions",
  description:
    "Expert Full Stack Developer offering custom web, mobile and cloud solutions. Let's create something amazing! Contact me today!",
  twitterTitle: "Expert Full Stack Developer for Custom Web & App Solutions",
  twitterDescription:
    "Expert Full Stack Developer offering custom web, mobile and cloud solutions. Let's create something amazing! Contact me today!",
  twitterCard: "summary",
});

defineOgImageComponent("NuxtSeo", {
  screenshot: true,
});
</script>