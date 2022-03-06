const converter = require('../dist/converter');

const plainText = 'Hello world!';
const base64Text = 'SGVsbG8gd29ybGQh';

describe('Simple tests with default module imported in the commonjs way.', () => {
  test('Encoding', () => {
    expect(converter.base64Encode(plainText)).toBe(base64Text);
  });

  test('Decoding', () => {
    expect(converter.base64Decode(base64Text)).toBe(plainText);
  });
});
