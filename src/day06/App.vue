<template>
  <div class="m-auto flex h-screen w-screen max-w-lg flex-col justify-center gap-4">
    <template v-if="products">
      <ProductSelect v-model="firstProduct" :products="products" />
      <ProductSelect v-model="secondProduct" :products="products" />
    </template>
    <p v-if="firstProduct && secondProduct">
      For a
      <span class="font-medium">{{ firstProduct.title }} ({{ firstProduct.price }}€)</span>
      you can also get ~{{ (firstProduct.price / secondProduct.price).toFixed(2) }}x
      <span class="font-medium">{{ secondProduct.title }} ({{ secondProduct.price }}€)</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "./service/products";
import { getProducts } from "./service/products";

const products = ref<Product[]>([]);
const firstProduct = ref<Product | null>(null);
const secondProduct = ref<Product | null>(null);

getProducts().then((productsArray) => {
  products.value = productsArray;

  if (!productsArray) return;
  firstProduct.value = productsArray[0];
  secondProduct.value = productsArray[0];
});
</script>
