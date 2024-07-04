<script setup>
import { ref } from 'vue'

const hands = ref([
  {
    id: 1,
    img: '/src/assets/images/hand3.png'
  },
  {
    id: 2,
    img: '/src/assets/images/hand1.png'
  },
  {
    id: 3,
    img: '/src/assets/images/hand2.png'
  }
])
</script>

<template>
  <main class="bg-violet-300 h-[100vh] p-4">
    <div class="flex justify-center items-center">
      <div class="text-center">
        <img
          src="../assets/images/usr1.jpg"
          alt=""
          class="w-16 h-16 rounded-full border-2 border-violet-350"
        />
        <p class="geologica text-violet-100">You</p>
      </div>
      <div class="mx-6 text-center flex flex-col justify-center">
        <p class="mt-4 geologica font-extrabold text-3xl text-violet-100 text-stroke">3 : 3</p>
        <p class="mt-4 geologica font-extrabold text-xl text-violet-100 text-stroke">You win</p>
      </div>
      <div class="text-center">
        <img
          src="../assets/images/usr2.jpeg"
          alt=""
          class="w-16 h-16 rounded-full border-2 border-violet-350"
        />
        <p class="geologica text-violet-100">Zakaria</p>
      </div>
    </div>
    <div class="flex justify-center my-16">
      <img src="../assets/images/hand1.png" alt="" />
      <p class="mt-4 geologica font-extrabold text-3xl text-violet-100 text-stroke px-6">VS</p>
      <img src="../assets/images/hand2.png" alt="" />
    </div>
    <div class="flex justify-center space-x-6 hands">
      <img v-for="hand in hands" :src="hand.img" alt="" class="w-14 h-14 cursor-pointer ease-out" />
    </div>
  </main>
</template>
