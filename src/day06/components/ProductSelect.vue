<template>
  <select @change="onSelectChange(($event.target as HTMLSelectElement).value)">
    <option v-for="product in products" :key="product.id" :value="product.id">
      {{ product.title }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
}

defineProps<{
  products: Product[];
  modelValue: number | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const onSelectChange = (selectedId: string) => {
  emit("update:modelValue", parseInt(selectedId));
};
</script>
