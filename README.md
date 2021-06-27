# base64-converter
[![npm (scoped)](https://img.shields.io/npm/v/@ony3000/base64-converter)](https://www.npmjs.com/package/@ony3000/base64-converter)
[![GitHub license](https://img.shields.io/github/license/ony3000/base64-converter)](https://github.com/ony3000/base64-converter/blob/master/LICENSE)
[![package hits](https://data.jsdelivr.com/v1/package/npm/@ony3000/base64-converter/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@ony3000/base64-converter)<br>
A library that allows bidirectional conversion of strings and base64. Available in both browser and [Node.js](https://nodejs.org).

**Note:** Actually, this would be a bit more useful in traditional web development. If you're developing in a Node.js environment, it's no different than implementing it yourself.

**Note 2:** What I recently discovered is that you can do base64 conversion using [`btoa()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa) and [`atob()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob) in the browser. If you're not using Node.js on your server, this may be sufficient. :joy:

## Installation
### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@ony3000/base64-converter@1.1.1/dist/converter.js"></script>
```

### NPM
```sh
npm install @ony3000/base64-converter
```

### Yarn
```sh
yarn add @ony3000/base64-converter
```

## Usage
### with CDN
```html
<script>
console.log(converter.base64Encode('Hello world!')); // 'SGVsbG8gd29ybGQh'
console.log(converter.base64Decode('SGVsbG8gd29ybGQh')); // 'Hello world!'
</script>
```

### without CDN
```javascript
// You can import it in one of the following ways:
/* 1 */ const { base64Encode, base64Decode } = require('@ony3000/base64-converter');
/* 2 */ import { base64Encode, base64Decode } from '@ony3000/base64-converter';

console.log(base64Encode('Hello world!')); // 'SGVsbG8gd29ybGQh'
console.log(base64Decode('SGVsbG8gd29ybGQh')); // 'Hello world!'
```

## Browser compatibility
* Internet Explorer 9+
* Most modern browsers except Internet Explorer
