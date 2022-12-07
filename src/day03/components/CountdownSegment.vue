<template>
  <div>
    <div class="overflow-hidden">
      <Transition
        mode="out-in"
        enter-active-class="transition-transform duration-100"
        enter-from-class="-translate-y-full"
        enter-to-class="translate-y-0"
        leave-active-class="transition-transform duration-100"
        leave-from-class="translate-y-0"
        leave-to-class="translate-y-full"
      >
        <dd class="text-right text-6xl" :key="value">
          {{ value }}
        </dd>
      </Transition>
    </div>
    <dt class="text-sm uppercase tracking-wider text-gray-600">{{ label }}</dt>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: number;
}>();
</script>
