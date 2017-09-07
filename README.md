# vue-autoscroll (UNDER DEVELOPMENT)

[![npm](https://img.shields.io/npm/v/{{ name }}.svg)](https://www.npmjs.com/package/{{ name }}) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A vue directive to scroll anywhere on a container (horizontally or vertically)

## Installation

### Via npm

```bash
npm install --save vue-autoscroll
```

1. Globally
```js
import Vue from 'vue'
import Autoscroll from 'vue-autoscroll'

// this will install v-autoscroll directive and can be used on any component or tag
Vue.use({{ Autoscroll }})
```

2. Locally on a component
```js

import { autoscroll } from 'vue-autoscroll'

export default {
  directives: {
    // this will install v-autoscroll directive and can be used only on the current component or tag
    autoscroll
  }
}
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import {{ library }} from '{{ name }}'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import '{{ name }}/dist/{{ name }}.css'

Vue.use({{ library }})
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="{{ name }}/dist/{{ name }}.css"></link>
<script src="{{ name }}/dist/{{ name }}.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/{{ name }}/dist/{{ name }}.css"></link>
<script src="https://unpkg.com/{{ name }}"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)
