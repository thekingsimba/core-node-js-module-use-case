const { StringDecoder } = require('string_decoder');

// Decoding buffers into strings

const decoder = new StringDecoder('utf8');

const buffer1 = Buffer.from('Hello, ');
const buffer2 = Buffer.from('World!');

console.log(decoder.write(buffer1)); // Output: Hello, 
console.log(decoder.write(buffer2)); // Output: World!



const buffer = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

// Decode a buffer into a string
const part1 = decoder.write(buffer);
console.log('Decoded string part 1:', part1);

// Decode the remaining buffer and mark the end of the data
const end = decoder.end(Buffer.from([0x77, 0x6f, 0x72, 0x6c, 0x64]));
console.log('Decoded string after marking end:', end);
