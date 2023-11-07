const tty = require('tty');
const fs = require('fs');


// Interacting with terminal I/O
if (tty.isatty(1)) {
  console.log('stdout is a terminal');
} else {
  console.log('stdout is not a terminal');
}

// The 'tty' module in Node.js provides an interface for working with terminal devices.

// Objects
// 1. tty.ReadStream
const readStream = new tty.ReadStream(fs.openSync('/dev/tty', 'rs'));

// 2. tty.WriteStream
const writeStream = new tty.WriteStream(fs.openSync('/dev/tty', 'ws'));

// Methods
// 1. tty.isatty(fd)
const fileDescriptor = fs.openSync('/dev/tty', 'r');
console.log(tty.isatty(fileDescriptor)); // Check if the file descriptor refers to a TTY

// 2. tty.ReadStream.prototype.isRaw
console.log(readStream.isRaw); // Check if the read stream is in raw mode

// 3. tty.ReadStream.prototype.setRawMode(mode)
readStream.setRawMode(true); // Set the read stream to raw mode

// Properties
// 1. tty.ReadStream.prototype.isTTY
console.log(readStream.isTTY); // Check if the read stream is a TTY

// 2. tty.WriteStream.prototype.columns
console.log(writeStream.columns); // Get the number of columns in the current TTY

// 3. tty.WriteStream.prototype.rows
console.log(writeStream.rows); // Get the number of rows in the current TTY
