# vue-autoscroll (UNDER DEVELOPMENT)

[![npm](https://img.shields.io/npm/v/{{ name }}.svg)](https://www.npmjs.com/package/{{ name }}) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A vue directive to scroll anywhere on a container (horizontally or vertically)

## Installation

### Via npm

```bash
npm install --save vue-autoscroll
```

1. Use globally
```js
import Vue from 'vue'
import Autoscroll from 'vue-autoscroll'

// this will install v-autoscroll directive and can be used on any component or tag
Vue.use({{ Autoscroll }})
```

2. Use locally on a component
```js

import { autoscroll } from 'vue-autoscroll'

export default {
  directives: {
    // this will install v-autoscroll directive and can be used only on the current component or tag
    autoscroll
  }
}
```

### Download manually

1. Get the latest release [here](https://github.com/donmbelembe/vue-autoscroll/releases), uncompress the file then include the */vue-autoscroll/dist/autoscroll.min.js* on your project

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>vue Autoscroll</title>
</head>
<body>
  <div id="app">
    <div v-autoscroll="middle" style="width:250px; height:250px;">
      <div style="width:500px; height:500px; font-size:25px;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cupiditate voluptas amet recusandae nulla quas!
      </div>
    </div>
  </div>
  <script src="./path/to/vue/dist/vue.js"></script>

  <!-- This will install v-autoscroll directive by degault-->
  <script src="/path/to/vue-autoscroll/dist/autoscroll.js"></script>
  <script>
      new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue.js!'
        }
      })
  </script>
</body>
</html>
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
