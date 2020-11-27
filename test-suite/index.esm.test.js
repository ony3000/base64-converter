import converter, { base64Encode, base64Decode } from '../src/index';

const plainText = 'Hello world!';
const base64Text = 'SGVsbG8gd29ybGQh';

test('Simple encoding #1', () => {
  expect(converter.base64Encode(plainText)).toBe(base64Text);
});

test('Simple encoding #2', () => {
  expect(base64Encode(plainText)).toBe(base64Text);
});

test('Simple decoding #1', () => {
  expect(converter.base64Decode(base64Text)).toBe(plainText);
});

test('Simple decoding #2', () => {
  expect(base64Decode(base64Text)).toBe(plainText);
});
