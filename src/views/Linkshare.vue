<script setup>
import { ref, onMounted } from 'vue'
import { io } from 'socket.io-client'
import { useRouter } from 'vue-router'
import { store } from '@/store/store'

const route = useRouter()
const randomId = ref(0)
const link = ref('')
let socket = io(store.state.backendLink)

onMounted(() => {
  randomId.value = new Date().getTime() // Create random id
  link.value = `${store.state.frontLink}/game/${randomId.value}` // Set link on the v-model
})
// Copy event
const copyClipobard = () => {
  console.log(store.state.frontLink)
  navigator.clipboard.writeText(`${store.state.frontLink}/game/${randomId.value}`)
}
// Check if someone join to the room
socket.on('room-join-success', (room) => {
  if (room == randomId.value) {
    route.push(`/game/${randomId.value}`)
  }
})
</script>

<template>
  <main
    class="flex justify-center items-center h-[100vh] bg-violet-300 bg-[url(../assets/images/dashes.png)]"
  >
    <div class="flex flex-col justify-center items-center">
      <img src="../assets/images/gloves.png" alt="" />
      <h2 class="geologica font-bold text-lg text-violet-100 mt-2">
        Share link with your friends and wait him to join
      </h2>
      <input
        type="text"
        v-model="link"
        disabled
        class="bg-violet-250 w-auto text-violet-100 font-bold outline-none text-center my-4 p-2 rounded-full"
      />
      <button
        class="geologica bg-violet-100 text-2xl font-bold text-violet-350 rounded-full py-2 px-8 border hover:bg-violet-350 hover:border-violet-100 hover:text-violet-100"
        @click="copyClipobard"
      >
        Copy
      </button>
    </div>
  </main>
</template>
