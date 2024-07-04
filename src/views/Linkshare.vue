<script lang="ts" setup></script>

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
        value="https:://www.zakaria.com"
        disabled
        class="bg-violet-250 text-violet-100 font-bold outline-none text-center my-4 p-2 rounded-full"
      />
      <button
        class="geologica bg-violet-100 text-2xl font-bold text-violet-350 rounded-full py-2 px-8 border hover:bg-violet-350 hover:border-violet-100 hover:text-violet-100"
      >
        Copy
      </button>
    </div>
  </main>
</template>
