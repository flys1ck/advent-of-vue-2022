<template>
  <div>
    <TallRedGift class="w-32" v-if="name === 'tall-red-gift'" />
    <SmallRedGift class="w-32" v-else-if="name === 'small-red-gift'" />
    <BlueGift class="w-32" v-else-if="name === 'blue-gift'" />
  </div>
</template>

<script setup lang="ts">
import TallRedGift from "../assets/tall-red-gift.svg?component";
import BlueGift from "../assets/blue-gift.svg?component";
import SmallRedGift from "../assets/small-red-gift.svg?component";

type Present = "tall-red-gift" | "small-red-gift" | "blue-gift";

defineProps<{
  name: Present;
}>();
</script>
