<template>
  <main class="grid h-screen place-content-center">
    <div class="flex max-w-md flex-col gap-4">
      <h1 class="text-4xl">{{ t("happyHolidays") }}</h1>
      <i18n-t keypath="christmasIsComing" tag="p" scope="global" class="text-slate-800">
        <template #date>
          {{ d(christmasDate, "long") }}
        </template>
        <template #time>
          <span class="underline">
            {{ t("day", { count: daysUntilChristmas }) }}
          </span>
        </template>
      </i18n-t>
      <select v-model="locale">
        <option
          v-for="availableLocale in availableLocales"
          :key="availableLocale"
          :value="availableLocale"
        >
          {{ t("language", {}, { locale: availableLocale }) }}
        </option>
      </select>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, availableLocales, locale, d } = useI18n();

const christmasDate = new Date("2022/12/25");
const daysUntilChristmas = Math.ceil(
  (christmasDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
);
</script>
