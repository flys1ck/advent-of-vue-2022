<!-- You shouldn't need to update this file -->
<template>
  <div class="relative flex justify-center">
    <Tree class="w-64" />
    <div class="-gap-8 presents absolute -bottom-8 flex items-end">
      <ChristmasPresent v-for="present in presents" :key="present" :name="present" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tree from "../assets/tree.svg?component";

type Present = "tall-red-gift" | "small-red-gift" | "blue-gift";

defineProps<{
  presents: Present[];
}>();
</script>
