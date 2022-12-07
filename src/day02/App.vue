<template>
  <main class="mx-auto max-w-xl p-40">
    <div class="flex flex-col gap-4">
      <span class="self-start rounded bg-red-800 p-4 text-white">{{
        setup
      }}</span>
      <span
        v-if="isDeliveryVisable"
        class="self-end rounded bg-green-800 p-4 text-white"
        >{{ delivery }}</span
      >
      <menu class="mt-4">
        <button
          v-if="!isDeliveryVisable"
          @click="showDelivery"
          class="rounded border bg-emerald-500 p-2 text-white"
        >
          Tell me!
        </button>
        <button
          v-else
          @click="fetchJoke"
          class="rounded border bg-emerald-500 p-2 text-white"
        >
          Another one!
        </button>
      </menu>
    </div>
  </main>
</template>

<script setup lang="ts">
const setup = ref("");
const delivery = ref("");
const isDeliveryVisable = ref(false);

const fetchJoke = () => {
  fetch("https://v2.jokeapi.dev/joke/christmas")
    .then((res) => res.json())
    .then((data) => {
      setup.value = data.setup;
      delivery.value = data.delivery;
      isDeliveryVisable.value = false;
    });
};

const showDelivery = () => {
  isDeliveryVisable.value = true;
};

fetchJoke();
</script>
