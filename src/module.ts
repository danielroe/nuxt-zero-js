import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  disabled: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    configKey: 'zeroJs',
    name: 'nuxt-zero-js',
  },
  defaults: nuxt => ({
    disabled: nuxt.options.dev,
  }),
  setup (_options, nuxt) {
    if (options.disabled) return

    nuxt.options.nitro.plugins = nuxt.options.nitro.plugins || []
    nuxt.options.nitro.plugins.push(
      fileURLToPath(new URL('./runtime/nitro-plugin', import.meta.url))
    )
  },
})
