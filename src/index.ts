import { Buffer } from 'buffer';

type ConvertingFunction = (input: string) => string;

const base64Encode: ConvertingFunction = function (input) {
  return Buffer.from(input, 'utf8').toString('base64');
};

const base64Decode: ConvertingFunction = function (input) {
  return Buffer.from(input, 'base64').toString('utf8');
};

export = {
  base64Encode,
  base64Decode,
};
