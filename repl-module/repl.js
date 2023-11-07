const repl = require('repl');

// Objects

// 1. repl.REPLServer

// Creating a Read-Eval-Print Loop (REPL) environment
const myRepl = repl.start({
  prompt: 'Node.js REPL> ',
  eval: (cmd, context, filename, callback) => {
    try {
      const result = eval(cmd);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
});



// Methods

// 1. repl.start(options)
// Starts a Read-Eval-Print Loop (REPL) instance with the provided options.
// In this example, it sets the prompt for the REPL.
replServer.context.message = 'Hello, world!';

// Properties

// 1. repl.writer
// A function that controls how output is formatted in the REPL.
replServer.writer = output => {
  return output.toUpperCase();
};

// 2. repl.eval
// A function that handles the evaluation of each input in the REPL.
replServer.eval = (cmd, context, filename, callback) => {
  let result;
  try {
    result = eval(cmd);
  } catch (err) {
    if (err) return callback(err);
  }
  return callback(null, result);
};

// 3. repl.input
// The readable stream from which the REPL reads input.
// In this example, it listens for 'data' events on the input stream.
replServer.input.on('data', data => {
  console.log(`Input received: ${data}`);
});

// 4. repl.output
// The writable stream to which the REPL writes output.
// In this example, it writes a message to the output stream.
replServer.output.write('Welcome to the Node.js REPL!\n');

// 5. repl.context
// The context object that stores the variables and functions declared in the REPL.
// In this example, we're accessing the 'message' variable declared earlier.
replServer.context.message; // Outputs: 'Hello, world!'
