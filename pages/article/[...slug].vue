<template>
  <main class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 z-10">
    <!-- Intro -->
    <div class="mx-auto gap-4">
      <ProfileCardComponent class="lg:sticky top-20 shadow-md" />
    </div>
    <!-- Blog -->
    <div
      class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10"
    >
      <div
        v-html="markdown"
        class="prose max-w-none w-full dark:prose-invert"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useMarkdownFromUrl } from "~/composables/useMarkdown";
const url = `https://raw.githubusercontent.com/Dishit-Dhanesha/AWS-AI-PROJECTS/refs/heads/main/Detecting%20Anomalies%20in%20Real-Time%20with%20AWS%20ML%20%26%20Data%20Streams.md`;
const markdown = await useMarkdownFromUrl(url);
</script>
