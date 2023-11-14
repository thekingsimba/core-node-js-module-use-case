const BufferObject = require('buffer');

// Objects:============================================================================
// 1. Buffer: The primary object representing a fixed-size chunk of memory.

// Methods:============================================================================
// 1. Buffer.alloc(size[, fill[, encoding]]):
// Creates a new Buffer of the specified size.
const buf1 = Buffer.alloc(5, 'a', 'utf8');
console.log("Buffer.alloc(size[, fill[, encoding]])", buf1);

// 2. Buffer.allocUnsafe(size):
// Creates a new Buffer of the specified size, but the contents are uninitialized and can contain sensitive data.
const buf2 = Buffer.allocUnsafe(10);
console.log(" 2. Buffer.allocUnsafe(size) ",buf2);

// 3. Buffer.allocUnsafeSlow(size):
// Similar to Buffer.allocUnsafe, but intentionally slower to ensure that the memory is initialized.
const buf3 = Buffer.allocUnsafeSlow(10);
console.log(" 3. Buffer.allocUnsafeSlow(size)",buf3);

// 4. Buffer.byteLength(string[, encoding]):
// Gives the actual byte length of a string.
const str = 'Hello World!';
console.log("4. Buffer.byteLength", Buffer.byteLength(str, 'utf8'));

// 5. Buffer.compare(buf1, buf2):
// Compares two buffers and returns a number indicating whether one comes before, after, or is the same as the other.
const buf4 = Buffer.from('aBC');
const buf5 = Buffer.from('abc');
console.log("5. Buffer.compare", Buffer.compare(buf4, buf5));

// 6. Buffer.concat(list[, totalLength]):
// Concatenates an array of Buffer objects.
const buf6 = Buffer.from('Hello ');
const buf7 = Buffer.from('World!');
const buf8 = Buffer.concat([buf6, buf7]);
console.log(buf8.toString());

// 7. Buffer.from(array):
// Creates a new Buffer containing the provided array of bytes.
const buf9 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf9.toString());

// 8. Buffer.from(string[, encoding]):
// Creates a new Buffer containing the provided string.
const buf10 = Buffer.from('Node.js', 'utf8');
console.log(buf10);

// 9. Buffer.isBuffer(obj):
// Checks if an object is a Buffer.
const buf11 = Buffer.from('buffer');
console.log(Buffer.isBuffer(buf11));

// 10. Buffer.isEncoding(encoding):
// Checks if the given encoding is a valid encoding.
const encoding = 'utf8';
console.log(Buffer.isEncoding(encoding));

// Property:============================================================================================================
// 1. Buffer.poolSize: The size of the Buffer pool used for pooling memory for fast allocation of new Buffer instances.
// 
console.log(Buffer.poolSize);
