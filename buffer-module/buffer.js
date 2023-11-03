const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from(' World');

// Buffer concat
const resultBuffer = Buffer.concat([buffer1, buffer2]);

console.log(resultBuffer.toString());
