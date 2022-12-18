<template>
  <div class="grid h-screen place-content-center">
    <div class="max-w-md">
      <img :src="treeUrl" />
    </div>
    <div class="flex items-end gap-4">
      <component v-for="present in presents" :key="present.id" :is="present.importName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import treeUrl from "./assets/tree.svg?url";
import presents from "./data/presents";
</script>
