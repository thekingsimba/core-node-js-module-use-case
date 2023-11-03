const tty = require('tty');

// Interacting with terminal I/O
if (tty.isatty(1)) {
  console.log('stdout is a terminal');
} else {
  console.log('stdout is not a terminal');
}
