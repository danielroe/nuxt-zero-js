import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-zero-js'],
  zeroJs: {
    // Enable module in dev mode
    disabled: false,
  }
})
