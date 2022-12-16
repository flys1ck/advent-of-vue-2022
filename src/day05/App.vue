<template>
  <div class="grid h-screen place-content-center">
    <div>
      <div class="w-full max-w-2xl rounded bg-red-400 p-4 text-white">
        <div
          class="flex flex-col rounded border-2 p-4 md:flex-row md:items-center md:gap-8"
        >
          <img :src="santa" alt="" class="w-40" />
          <div>
            <h1 class="font-serif text-4xl">Happy Holidays!</h1>
            <div class="mt-4 rounded bg-white p-2 text-black">TO: {{ to }}</div>
            <div class="mt-2 rounded bg-white p-2 text-black">
              FROM: {{ from }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <label for="to">To:</label>
    <input id="to" type="text" v-model="to" />
    <label for="from">From:</label>
    <input id="from" type="text" v-model="from" />
  </div>
</template>

<script setup lang="ts">
import santa from "./assets/santa.svg";

const to = ref("");
const from = ref("");
</script>
