import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      backendLink: 'https://rps-game-backend-3ykn.vercel.app/',
      frontLink: 'https://rpsgame-gules.vercel.app/'
    }
  }
})
