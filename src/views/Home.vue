<script lang="ts" setup>
import { useRouter } from 'vue-router'
const route = useRouter()
</script>

<template>
  <main
    class="flex justify-center items-center h-[100vh] bg-violet-300 bg-[url(../assets/images/dashes.png)]"
  >
    <div class="flex flex-col justify-center items-center">
      <img src="../assets/images/gloves.png" alt="" />
      <h1 class="mt-4 geologica font-extrabold text-3xl text-violet-100 text-stroke">
        Rock, Paper, Scissors Game
      </h1>
      <h2 class="geologica font-bold text-lg text-violet-100">
        Play with your friend for more fun
      </h2>
      <button
        class="geologica bg-violet-100 text-2xl font-bold text-violet-350 rounded-full py-2 px-8 border hover:bg-violet-350 hover:border-violet-100 hover:text-violet-100"
        @click="route.push('/link')"
      >
        Play
      </button>
    </div>
  </main>
</template>
