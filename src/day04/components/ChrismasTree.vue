<template>
  <ChrismasTree v-if="depth != 0" :depth="depth - 1" />
  <div class="flex justify-center">
    <svg viewBox="0 0 20 20" class="h-20 fill-green-700">
      <path d="M0 20 H20 V0 z" />
    </svg>
    <svg v-for="i in depth" viewBox="0 0 20 20" class="h-20 fill-green-700">
      <rect width="20" height="20" />
    </svg>
    <svg viewBox="0 0 20 20" class="h-20 fill-green-700">
      <path d="M0 0 v20 h20 0 z" />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  depth: number;
}>();
</script>
