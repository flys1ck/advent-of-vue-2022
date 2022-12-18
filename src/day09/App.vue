<template>
  <div class="grid h-screen place-content-center">
    <div class="max-w-md">
      <img :src="treeUrl" />
    </div>
    <div class="flex items-end gap-4">
      <component v-for="present in computedPresents" :key="present.id" :is="present.importName" />
    </div>
    <button class="mt-24 rounded border bg-slate-400 p-2" @click="isSortActive = !isSortActive">
      Toggle Sort {{ isSortActive }}
    </button>
  </div>
</template>

<script setup lang="ts">
import treeUrl from "./assets/tree.svg?url";
import presents from "./data/presents";

const isSortActive = ref(false);
const computedPresents = computed(() => (isSortActive.value ? getSortedPresents() : presents));

const getSortedPresents = () => {
  return [...presents].sort(
    (presentA, presentB) =>
      presentA.dimensions.height * presentA.dimensions.width -
      presentB.dimensions.height * presentB.dimensions.width
  );
};
</script>
