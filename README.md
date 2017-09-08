# vue-autoscroll

> A vue directive to scroll anywhere on a container (horizontally or vertically)

## Example

> This will scroll horizotally and vertically to middle

```html
<div id="parent" v-autoscroll="center">
  <div id="child"></div>
</div>
```

## Installation

### Via npm

```bash
npm install --save vue-autoscroll
```

### Download manually

1. Get the latest release [here](https://github.com/donmbelembe/vue-autoscroll/releases), uncompress the file then include the `/vue-autoscroll/dist/autoscroll.min.js` on your project

2. Use the [CDN](https://unpkg.com/vue-autoscroll): https://unpkg.com/vue-autoscroll


## Usage

### Bundler (Webpack, Rollup)

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

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-autoscroll/dist/vue-autoscroll.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-autoscroll"></script>
```

## API Reference

### v-autoscroll:arg="value"

If *arg* it set to `noscroll`, it will apply *overflow:hidden* on the element. we use it to hide scrollbars (*it's optional*)

*arg* can be : 'top', 'right', 'bottom', 'left', 'center', 'top left', 'top right', 'bottom left', 'bottom right', 'top center', 'left center', 'right center', 'bottom center'

> You can view the behaviours on the [playground]()


## Development

### Compile dev

This while compile non minified js on the dist folder

```bash
npm run dev
```

### Compile prod

This will compile the minified js on the dist folder

```bash
npm run prod
```

### Compile dev and watch for change
```bash
npm run watch
```

### Build

Release both normal and minified js of to the `dist` folder:

```bash
npm run build
```

## Contributors
+


## License

[MIT](http://opensource.org/licenses/MIT)
