function base64Encode(input) {
  return Buffer.from(input, 'utf8').toString('base64');
}

function base64Decode(input) {
  return Buffer.from(input, 'base64').toString('utf8');
}

module.exports = {
  base64Encode: base64Encode,
  base64Decode: base64Decode,
};
