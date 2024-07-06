<script setup>
import { io } from 'socket.io-client'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

let socket = io('http://localhost:3000/')
let route = useRoute()
let isPlayed = ref(false)
let scores = ref({
  palyer1: 0,
  player2: 0
})
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
onMounted(() => {
  socket.emit('join-room', route.params.id)
})
// Play function
const play = (hand) => {
  console.log(socket.id)
  socket.emit('play', {
    player: socket.id,
    hand,
    room: route.params.id
  })
}
// Check winners
socket.on('send-winner', (data) => {
  isPlayed.value = true
  data.map((el) => {
    if (el.player == socket.id) {
      if (el.winner) {
        scores.value.palyer1++
      } else {
        console.log(scores.value.player2)
        scores.value.player2++
      }
    }
  })
})
</script>

<template>
  <main class="bg-violet-450 h-[100vh] p-4 flex flex-col justify-center space-y-40">
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
        <p class="mt-4 geologica font-extrabold text-3xl text-violet-100 text-stroke">
          {{ scores.palyer1 }} : {{ scores.player2 }}
        </p>
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
    <div class="flex justify-center my-16" v-show="isPlayed">
      <img src="../assets/images/hand1.png" alt="" />
      <p class="mt-4 geologica font-extrabold text-3xl text-violet-100 text-stroke px-6">VS</p>
      <img src="../assets/images/hand2.png" alt="" />
    </div>
    <div class="flex justify-center space-x-6 hands">
      <img
        v-for="hand in hands"
        :src="hand.img"
        alt=""
        class="w-14 h-14 cursor-pointer ease-out"
        @click="play(hand.id)"
      />
    </div>
  </main>
</template>
