import type { NitroAppPlugin } from 'nitropack'
import { useRuntimeConfig } from '#imports'

const JS_HINT_RE = /<[^>]+(\.m?js"|as="script")[^>]*>/g

export default <NitroAppPlugin> function (nitroApp) {
  const $config = useRuntimeConfig()
  const ASSET_RE = new RegExp(`<script[^>]*src="${$config.app.buildAssetsDir}[^>]+><\\/script>`)

  nitroApp.hooks.hook('render:html', htmlContext => {
    htmlContext.bodyAppend = htmlContext.bodyAppend.filter(
      b => !b.includes('window.__NUXT__') && !ASSET_RE.test(b)
    )
    const i = htmlContext.head.findIndex(i => i.includes('<link rel="modulepreload" as="script"'))
    if (i !== -1) {
      htmlContext.head[i] = htmlContext.head[i].replace(JS_HINT_RE, '')
    }
  })
}
