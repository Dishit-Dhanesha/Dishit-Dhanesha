

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
  title:
    "Expert Full Stack Developer for Custom Web & App Solutions | Dishit Dhanesha",
  description:
    "Expert Full Stack Developer offering custom web, mobile and cloud solutions. Let's create something amazing! Contact me today!",
});
</script>