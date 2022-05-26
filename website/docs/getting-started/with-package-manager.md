---
sidebar_label: With Package Manager
sidebar_position: 1
---

# Getting Started with Package Manager

## Installation

The base64-converter package lives in [npm](https://www.npmjs.com/package/@ony3000/base64-converter). To install the latest version, run the following command:

```bash
npm install @ony3000/base64-converter
```

Or if you're using [yarn](https://classic.yarnpkg.com/en/):

```bash
yarn add @ony3000/base64-converter
```

## How to use

Wherever you want to use base64 conversion, you can import the necessary functions and use them.

```javascript
import { base64Encode, base64Decode } from '@ony3000/base64-converter';

console.log(base64Encode('Hello world!')); // 'SGVsbG8gd29ybGQh'
console.log(base64Decode('SGVsbG8gd29ybGQh')); // 'Hello world!'
```
