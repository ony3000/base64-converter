import { base64Encode, base64Decode } from '../dist/converter';

const plainText = 'Hello world!';
const base64Text = 'SGVsbG8gd29ybGQh';

describe('Simple tests with named modules imported in the esm way.', () => {
  test('Encoding', () => {
    expect(base64Encode(plainText)).toBe(base64Text);
  });

  test('Decoding', () => {
    expect(base64Decode(base64Text)).toBe(plainText);
  });
});
