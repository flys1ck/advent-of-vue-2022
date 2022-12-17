<template>
  <div class="m-auto flex h-screen w-screen max-w-lg flex-col justify-center gap-4">
    <template v-if="products">
      <ProductSelect v-model.number="firstProductId" :products="products" />
      <ProductSelect v-model.number="secondProductId" :products="products" />
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
interface Product {
  id: number;
  title: string;
  price: number;
}

const products = ref<Product[]>([]);
const firstProductId = ref<number | null>(null);
const secondProductId = ref<number | null>(null);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    if (!res.products) return;
    products.value = res.products;
    firstProductId.value = res.products[0].id;
    secondProductId.value = res.products[0].id;
  });

const firstProduct = computed(() => {
  return products.value.find((product) => product.id === firstProductId.value);
});

const secondProduct = computed(() => {
  return products.value.find((product) => product.id === secondProductId.value);
});
</script>
