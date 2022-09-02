# Nuxt Font Metrics

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> Font metric override implementation for [Nuxt 3](https://v3.nuxtjs.org)

- [✨ &nbsp;Changelog](https://github.com/danielroe/nuxt-zero-js/blob/main/CHANGELOG.md)
- [▶️ &nbsp;Online playground](https://stackblitz.com/github/danielroe/nuxt-zero-js/tree/main/playground)

## Features

**⚠️ `nuxt-zero-js` is under active development. ⚠️**

- 💪 Reduces CLS by using local font fallbacks with crafted font metrics.
- ✨ Generates font metrics and overrides automatically.
- ⚡️ Pure CSS, zero runtime overhead.

On the playground project, enabling/disabling this module makes the following differences rendering `/`, with no customisation required:

|             | Before | After   |
| ----------- | ------ | ------- |
| CLS         | `0.34` | `0.013` |
| Performance | `88`   | `98`    |

## What's next

For best performance, you will need to inline _all_ your CSS, not just the font-face override rules (which this module does automatically), or there will still be a layout shift when the stylesheet loads (which is why the number above is not zero).

[This PR](https://github.com/nuxt/framework/pull/7160) aims to bring that ability to Nuxt itself.

## Usage

```js
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-zero-js'],
})
```

That's it!

## How it works

Nuxt will scan your `@font-face` rules and generate fallback rules with the correct metrics. For example:

```css
@font-face {
  font-family: 'Roboto';
  font-display: swap;
  src: url('/fonts/Roboto.woff2') format('woff2'), url('/fonts/Roboto.woff') format('woff');
  font-weight: 700;
}
/* This will be generated. */
@font-face {
  font-family: 'Roboto override';
  src: local('BlinkMacSystemFont'), local('Segoe UI'), local('Roboto'), local('Helvetica Neue'),
    local('Arial'), local('Noto Sans');
  ascent-override: 92.7734375%;
  descent-override: 24.4140625%;
  line-gap-override: 0%;
}
```

Then, whenever you use `font-family: 'Roboto'`, Nuxt will add the override to the font-family:

```css
:root {
  font-family: 'Roboto';
  /* This becomes */
  font-family: 'Roboto', 'Roboto override';
}
```

## Using outside of Nuxt

The core of this module will work outside of Nuxt.

```js
import { FontMetricsTransformPlugin } from 'nuxt-zero-js/transform'

const options = {
  fallbacks: ['BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans'],
  // You may need to resolve assets like `/fonts/Roboto.woff2` to a particular directory
  resolvePath: (id) => 'file:///path/to/public/dir' + id,
}

// Vite
export default {
  plugins: [FontMetricsTransformPlugin.vite(options)]
}

// Next.js
export default {
  webpack(config) {
    config.plugins = config.plugins || []
    config.plugins.push(FontMetricsTransformPlugin.webpack(options))
    return config
  },
}
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Stub module with `pnpm dev:prepare`
- Run `pnpm dev` to start [playground](./playground) in development mode

## Credits

This would not have been possible without:

- amazing tooling and generated metrics from [capsizecss](https://seek-oss.github.io/capsize/)
- suggestion and algorithm from [Katie Hempenius](https://katiehempenius.com/) & [Kara Erickson](https://github.com/kara) on the Google Aurora team

## License

Made with ❤️

Published under the [MIT License](./LICENCE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-zero-js?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-zero-js
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-zero-js?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-zero-js
[github-actions-src]: https://img.shields.io/github/workflow/status/danielroe/nuxt-zero-js/ci/main?style=flat-square
[github-actions-href]: https://github.com/danielroe/nuxt-zero-js/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/danielroe/nuxt-zero-js/main?style=flat-square
[codecov-href]: https://codecov.io/gh/danielroe/nuxt-zero-js
