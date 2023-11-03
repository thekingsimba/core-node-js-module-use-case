const { StringDecoder } = require('string_decoder');

// Decoding buffers into strings

const decoder = new StringDecoder('utf8');

const buffer1 = Buffer.from('Hello, ');
const buffer2 = Buffer.from('World!');

console.log(decoder.write(buffer1)); // Output: Hello, 
console.log(decoder.write(buffer2)); // Output: World!
