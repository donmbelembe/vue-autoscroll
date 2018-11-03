# vue-autoscroll 

> A vue directive to scroll anywhere on a container (horizontally or vertically), [See the playground](https://donmbelembe.github.io/vue-autoscroll/)

## Example

> This will scroll horizotally and vertically to middle

```html
<div id="parent" v-autoscroll="'center'">
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
Vue.use(Autoscroll)
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

```
v-autoscroll:arg="'value'"
```

1. `v-autoscroll` is the directive.
2. You may pass `noscroll` as an `argument` (this will set *overflow: hidden* to the element and will hide scroll bars)
> #### Usage : `v-autoscroll:noscroll="'top left'"`
### Values
1. Directional positions : `'top'`, `'right'`, `'bottom'`, `'left'`, `'center'`
3. Fixed positions : `'top left'`, `'top right'`, `'bottom left'`, `'bottom right'`, `'top center'`, `'left center'`, `'right center'`, `'bottom center'`
4. Specific position: `{ x: x-value, y: y-value, type: type}`. The `type` is either `absolute` (for [scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)) or `relative` (for [scrollBy](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy)). (This feature available from v1.2)

> You can see all the behaviours on the [playground](https://donmbelembe.github.io/vue-autoscroll/)


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
+ [Don](https://twitter.com/don_jon243)


## License

[MIT](http://opensource.org/licenses/MIT)

## TODO

+ Animate scrolling
+ Scroll to a targeted child element
