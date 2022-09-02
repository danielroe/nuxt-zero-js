import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'
import { join } from 'pathe'

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
  setup (options, nuxt) {
    if (options.disabled) return

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.hook('nitro:config', config => {
      config.plugins = config.plugins || []
      config.plugins.push(join(runtimeDir, 'nitro-plugin'))
      config.externals = config.externals || {}
      config.externals.inline = config.externals.inline || []
      config.externals.inline.push(runtimeDir)
    })
  },
})
