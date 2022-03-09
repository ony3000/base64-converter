<script src="https://cdn.jsdelivr.net/npm/@ony3000/base64-converter@1.1.1/dist/converter.js"></script>
<script>
  console.log('%cFeel free to try sample codes here 😃', (function () {
    var styles = [
      'padding: 12px 24px',
      'border-radius: 5px',
      'color: #fff',
      'background-color: #159957',
      'background-image: linear-gradient(120deg, #155799, #159957)',
    ];
    return styles.join(';');
  })());
</script>

[![npm (scoped)](https://img.shields.io/npm/v/@ony3000/base64-converter)](https://www.npmjs.com/package/@ony3000/base64-converter)
[![GitHub license](https://img.shields.io/github/license/ony3000/base64-converter)](https://github.com/ony3000/base64-converter/blob/master/LICENSE)
[![package hits](https://data.jsdelivr.com/v1/package/npm/@ony3000/base64-converter/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@ony3000/base64-converter)

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
