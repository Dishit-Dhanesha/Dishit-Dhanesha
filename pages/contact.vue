

<template>
  <main class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 z-10">
    <!-- Intro -->
    <div class="mx-auto gap-4">
      <ProfileCardComponent class="lg:sticky top-20 shadow-md" />
    </div>
    <!-- Contact -->
    <div
      class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10"
    >
      <div class="">
        <h1
          class="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight"
        >
          Let's 👋 <span class="text-primary">Work</span> Together
        </h1>
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

<script lang="ts" setup>
import CTAButtons from "~/components/CTAButtons.vue";
useSeoMeta({
  title: "Get in Touch with a Full Stack Developer and Cloud Export",
  description:
    "Reach out to Dishit Dhanesha, a professional Full Stack Developer specializing in JavaScript, Vue.js, Node.js, and AWS. Contact for innovative web mobile and cloud development solutions.",
  twitterTitle: "Get in Touch with a Full Stack Developer and Cloud Export",
  twitterDescription:
    "Reach out to Dishit Dhanesha, a professional Full Stack Developer specializing in JavaScript, Vue.js, Node.js, and AWS. Contact for innovative web mobile and cloud development solutions.",
  twitterCard: "summary",
});
defineOgImageComponent("NuxtSeo", {
  screenshot: true,
});
</script>