const repl = require('repl');

// Creating a Read-Eval-Print Loop (REPL) environment
const myRepl = repl.start({
  prompt: 'Node.js> ',
  eval: (cmd, context, filename, callback) => {
    try {
      const result = eval(cmd);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  },
});
