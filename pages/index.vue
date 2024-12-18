

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