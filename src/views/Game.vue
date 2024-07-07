<script setup>
import { store } from '@/store/store'
import { io } from 'socket.io-client'
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

let socket = io(store.state.backendLink)
let route = useRoute()
let router = useRouter()
let isPlayedClient = ref(false)
let isPlayed = ref(false)

let isWin = ref('')
let playerScore = ref({
  palyer1: {
    score: 0,
    hand: {}
  },
  palyer2: {
    score: 0,
    hand: {}
  }
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
  isPlayedClient.value = true
  socket.emit('play', {
    player: socket.id,
    hand,
    room: route.params.id
  })
}
// Check winners
socket.on('send-winner', (data) => {
  isPlayed.value = true
  isPlayedClient.value = false
  data.map((el) => {
    if (el.player == socket.id) {
      playerScore.value.palyer1.hand = hands.value.filter((ele) => ele.id == el.hand)[0]
      if (el.winner == 'winner') {
        isWin.value = 'You win!'
        playerScore.value.palyer1.score++
      } else if (el.winner == 'draw') {
        isWin.value = 'You draws!'
        playerScore.value.palyer1.score++
        playerScore.value.palyer2.score++
      } else {
        isWin.value = 'You lose!'
        playerScore.value.palyer2.score++
      }
    } else {
      playerScore.value.palyer2.hand = hands.value.filter((ele) => ele.id == el.hand)[0]
    }
  })
})
socket.on('user-disconnected', () => {
  Swal.fire({
    text: 'Your friend disconnected!',
    icon: 'warning'
  })
  setTimeout(() => {
    router.push('/')
  }, 2000)
})
</script>

<template>
  <main class="bg-violet-450 h-[100vh] p-4 flex flex-col justify-center space-y-40">
    <div class="flex justify-center items-center">
      <div class="text-center">
        <img
          src="../assets/images/usr1.jpg"
          alt=""
          class="w-24 h-24 rounded-full border-2 border-violet-350"
        />
        <p class="geologica text-violet-100">You</p>
      </div>
      <div class="mx-6 text-center flex flex-col justify-center">
        <p class="mt-4 geologica font-extrabold text-3xl text-violet-100 text-stroke">
          {{ playerScore.palyer1.score }} : {{ playerScore.palyer2.score }}
        </p>
        <p class="mt-4 geologica font-extrabold text-xl text-violet-100 text-stroke">{{ isWin }}</p>
      </div>
      <div class="text-center">
        <img
          src="../assets/images/usr2.jpg"
          alt=""
          class="w-24 h-w-24 rounded-full border-2 border-violet-350"
        />
        <p class="geologica text-violet-100">Temantes</p>
      </div>
    </div>
    <div class="flex justify-center my-16" v-show="isPlayed">
      <img :src="playerScore.palyer1.hand.img" alt="" />
      <p class="mt-4 geologica font-extrabold text-3xl text-violet-100 text-stroke px-6">VS</p>
      <img :src="playerScore.palyer2.hand.img" alt="" />
    </div>
    <div class="flex justify-center space-x-6 hands">
      <button
        @click="play(hand.id)"
        class="cursor-pointer ease-out"
        v-for="hand in hands"
        :disabled="isPlayedClient"
      >
        <img :src="hand.img" alt="" class="w-14 h-14" />
      </button>
    </div>
  </main>
</template>
