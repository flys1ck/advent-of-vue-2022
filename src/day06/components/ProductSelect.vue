<template>
  <select @change="onSelectChange(($event.target as HTMLSelectElement).value)">
    <option v-for="product in products" :key="product.id" :value="product.id">
      {{ product.title }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { Product } from "../service/products";

const props = defineProps<{
  products: Product[];
  modelValue: Product;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", product: Product): void;
}>();

const onSelectChange = (selectedProductId: string) => {
  const product = props.products.find((product) => product.id === parseInt(selectedProductId));
  if (!product) return;

  emit("update:modelValue", product);
};
</script>
