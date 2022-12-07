<template>
  <main class="flex h-screen w-screen items-center justify-center bg-green-50">
    <div class="flex flex-col items-center gap-12">
      <h1 class="font-serif text-7xl font-bold text-red-700">
        <img
          src="https://previews.123rf.com/images/yupiramos/yupiramos1803/yupiramos180311478/96990248-cute-santa-claus-comic-character-vector-illustration-design.jpg"
          class="h-20 mix-blend-multiply"
        />
        Christmas Countdown
      </h1>
      <dl class="flex gap-8">
        <CountdownSegment label="Months" :value="getDateDiff.months" />
        <CountdownSegment label="Days" :value="getDateDiff.days" />
        <CountdownSegment label="Hours" :value="getDateDiff.hours" />
        <CountdownSegment label="Minutes" :value="getDateDiff.minutes" />
        <CountdownSegment label="Seconds" :value="getDateDiff.seconds" />
      </dl>
    </div>
  </main>
</template>

<script setup lang="ts">
import CountdownSegment from "./components/CountdownSegment.vue";

const now = ref(new Date());
const CHRISTMAS = new Date(2022, 11, 24);

setInterval(() => {
  now.value = new Date();
}, 1000);

const getDateDiff = computed(() => {
  const christmasTimestamp = CHRISTMAS.getTime();
  const nowTimestamp = now.value.getTime();

  const diffTimestamp = christmasTimestamp - nowTimestamp;
  const diffDate = new Date(diffTimestamp);

  return {
    months: diffDate.getUTCMonth() + (diffDate.getUTCFullYear() - 1970) * 12,
    days: diffDate.getDate(),
    hours: diffDate.getUTCHours(),
    minutes: diffDate.getUTCMinutes(),
    seconds: diffDate.getUTCSeconds(),
  };
});
</script>
