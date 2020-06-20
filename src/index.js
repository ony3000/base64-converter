export function base64Encode(input) {
  return Buffer.from(input, 'utf8').toString('base64');
}

export function base64Decode(input) {
  return Buffer.from(input, 'base64').toString('utf8');
}
