<template>
  <main class="flex h-screen flex-col items-center justify-center">
    <div class="grid grid-cols-3 gap-3">
      <button
        v-for="(field, i) in board"
        :key="i"
        class="h-24 w-24 border border-gray-400 bg-gray-100 disabled:border-0"
        @click="checkField(i)"
        :disabled="field != '' || isGameOver"
      >
        {{ field }}
      </button>
    </div>
    <button
      v-if="isGameOver"
      class="mt-12 rounded bg-blue-400 px-2 py-2"
      @click="resetBoard"
    >
      Play again
    </button>
  </main>
</template>

<script setup lang="ts">
type Field = "" | "O" | "X";

const board = ref<Field[]>(new Array(9).fill(""));
const turn = ref(0);

const checkField = async (fieldIndex: number) => {
  board.value[fieldIndex] = turn.value % 2 == 0 ? "O" : "X";
  ++turn.value;
};

const resetBoard = () => (board.value = new Array(9).fill(""));

const isGameOver = computed(() => {
  const winningIndiceCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningIndiceCombo) {
    if (
      board.value[combo[0]] !== "" &&
      board.value[combo[0]] === board.value[combo[1]] &&
      board.value[combo[0]] === board.value[combo[2]]
    )
      return true;
  }
  return false;
});
</script>
