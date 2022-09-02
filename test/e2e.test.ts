import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('nuxt zero-js', async () => {
  await setup({
    server: true,
    rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
  })
  it('removes all JS hints and scripts', async () => {
    const html = await $fetch('/')
    expect(html.replace(/\.[^.]+\.css/g, '.css').replace(/ data-v-[^>]*/g, ''))
      .toMatchInlineSnapshot(`
      "<!DOCTYPE html>
      <html data-head-attrs=\\"\\">
      <head><title></title><meta charset=\\"utf-8\\"><meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\"><meta name=\\"head:count\\" content=\\"2\\"><link rel=\\"preload\\" as=\\"style\\" href=\\"/_nuxt/entry.css\\"><link rel=\\"stylesheet\\" href=\\"/_nuxt/entry.css\\"></head>
      <body data-head-attrs=\\"\\"><div id=\\"__nuxt\\"><div>This page needs no JavaScript (of course!)!</div></div></body>
      </html>"
    `)
  })
})
