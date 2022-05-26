---
sidebar_label: With a CDN
sidebar_position: 2
---

# Getting Started with a CDN

## Installation

When you need to develop client-side without the node package manager, you can use it directly in the `<script>` tag.

```html
<script src="https://cdn.jsdelivr.net/npm/@ony3000/base64-converter/dist/converter.js"></script>
```

## How to use

When used directly in the `<script>` tag, a global variable called `converter` is defined, and there are two base64 conversion functions as properties of `converter`.

```html
<script>
console.log(converter.base64Encode('Hello world!')); // 'SGVsbG8gd29ybGQh'
console.log(converter.base64Decode('SGVsbG8gd29ybGQh')); // 'Hello world!'
</script>
```
