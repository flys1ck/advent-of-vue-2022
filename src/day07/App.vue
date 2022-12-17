<template>
  <main class="grid h-screen place-content-center">
    <ChristmasTree :presents="presentsUnderTree" @dragover.prevent @drop="onDrop" />
    <div class="mt-32 flex items-end justify-center gap-4">
      <ChristmasPresent
        v-for="present in presents"
        :name="present"
        draggable="true"
        @dragstart="onDragStart($event, present)"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
type Present = "tall-red-gift" | "small-red-gift" | "blue-gift";

const presents = ref<Present[]>(["tall-red-gift", "small-red-gift", "blue-gift"]);
const presentsUnderTree = ref<Present[]>([]);

const onDragStart = (e: DragEvent, present: Present) => {
  if (!e.dataTransfer) return;

  e.dataTransfer.setData("text/plain", present);
  e.dataTransfer.effectAllowed = "move";
};

const onDrop = (e: DragEvent) => {
  if (!e.dataTransfer) return;

  const droppedPresent = e.dataTransfer.getData("text/plain") as Present;
  const presentIndex = presents.value.findIndex((present) => present === droppedPresent);
  presents.value.splice(presentIndex, 1);
  presentsUnderTree.value.push(droppedPresent);
};
</script>
