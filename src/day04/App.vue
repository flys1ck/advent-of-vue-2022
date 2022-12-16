<template>
  <div class="grid h-screen place-content-center">
    <ChrismasTree :depth="4" />
    <div class="h-16 w-12 place-self-center bg-amber-900"></div>
  </div>
</template>

<script setup lang="ts">
import ChrismasTree from "./components/ChrismasTree.vue";
</script>
