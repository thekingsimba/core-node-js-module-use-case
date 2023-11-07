

const readline = require('readline');

// Example using the readline module in Node.js

const readline = require('readline');

// Methods

// readline.createInterface(options)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readline.clearLine(stream, dir)
readline.clearLine(process.stdout, 0);

// readline.clearScreenDown(stream)
readline.clearScreenDown(process.stdout);

// readline.cursorTo(stream, x, y)
readline.cursorTo(process.stdout, 0, 0);

// readline.moveCursor(stream, dx, dy)
readline.moveCursor(process.stdout, -1, -1);

// readline.emitKeypressEvents(stream, interface)
readline.emitKeypressEvents(process.stdin, rl);

// Properties

// rl.output
rl.output.write('Output text\n');

// rl.input
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
});

// rl.history
console.log('History:', rl.history);

// rl.line
rl.setPrompt('Enter input: ');
rl.prompt();
rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  rl.close();
});

// rl.cursor
console.log('Current cursor position:', rl.cursor);

// rl.clearLine
rl.clearLine();
