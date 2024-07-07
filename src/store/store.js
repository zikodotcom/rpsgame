import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      backendLink: 'http://192.168.1.103:3000/',
      frontLink: 'http://192.168.1.103:5173'
    }
  }
})
