# Nuxt Zero JS

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> Remove all client-side JS from your [Nuxt 3](https://v3.nuxtjs.org) app

- [✨ &nbsp;Changelog](https://github.com/danielroe/nuxt-zero-js/blob/main/CHANGELOG.md)
- [▶️ &nbsp;Online playground](https://stackblitz.com/github/danielroe/nuxt-zero-js/tree/main/playground)

## Features

**⚠️ `nuxt-zero-js` is under active development. ⚠️**

- ✨ Completely removes preload/prefetch hints for JS bundle
- 🚀 Removes `<script>` tag for payload and JS bundle
- 🙏 Leaves your own head tags intact

Follow [this issue](https://github.com/nuxt/framework/issues/7156) for more information, and do comment if you'd like to see this feature in Nuxt itself.

## Usage

```js
export default defineNuxtConfig({
  modules: ['nuxt-zero-js'],
  //
  // By default the module is disabled in development for better
  // DX but you can force it to be enabled if you would like.
  //
  // zeroJs: {
  //   disabled: false,
  // },
```

That's it!

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Stub module with `pnpm dev:prepare`
- Run `pnpm dev` to start [playground](./playground) in development mode

## License

Made with ❤️

Published under the [MIT License](./LICENCE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-zero-js?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-zero-js
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-zero-js?style=flat-square
[npm-downloads-href]: https://npm.chart.dev/nuxt-zero-js
[github-actions-src]: https://img.shields.io/github/workflow/status/danielroe/nuxt-zero-js/ci/main?style=flat-square
[github-actions-href]: https://github.com/danielroe/nuxt-zero-js/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/danielroe/nuxt-zero-js/main?style=flat-square
[codecov-href]: https://codecov.io/gh/danielroe/nuxt-zero-js
