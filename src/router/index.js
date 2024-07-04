import Home from '@/views/Home.vue'
import Linkshare from '@/views/Linkshare.vue'
import Game from '@/views/Game.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/link',
      name: 'linkshare',
      component: Linkshare
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game
    }
  ]
})

export default router
