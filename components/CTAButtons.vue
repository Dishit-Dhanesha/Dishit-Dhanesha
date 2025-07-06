<template>
  <div class="mt-6 flex flex-col gap-2 lg:flex-col md:flex-row">
    <NuxtLink
      :to="'tel:+917600656442'"
      class="h-14 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        class="h-6 w-6"
      >
        <path
          d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6"
        />
      </svg>
      <span>Book A Call</span>
    </NuxtLink>
    <button
      type="button"
      @click="() => openToast('Email Copied')"
      data-clipboard-text="shams.sujon.01@gmail.com"
      aria-label="copy email"
      data-clipboard-action="copy"
      data-clipboard-success-text="Copied to clipboard"
      class="h-14 js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark hover:text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        class="h-6 w-6"
      >
        <path
          d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z"
        />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </svg>
      <span>Copy Email</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const toast = useToast();
const openToast = (title: String) => {
  navigator.clipboard.writeText("dishitrvdhanesha@gmail.com");
  toast.add({
    title: title as string,
    icon: "i-heroicons-check-circle",
    color: "primary",
  });
};
</script>
