# base64-converter
A library that allows bidirectional conversion of strings and base64.

**Note:** Actually, this would be a bit more useful in traditional web development. If you're developing in a [Node.js](https://nodejs.org) environment, it's no different than implementing it yourself.

## Installation
### CDN
```html
<script src="https://unpkg.com/@ony3000/base64-converter@1.0.0/dist/converter.js"></script>
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
