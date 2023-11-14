const util = require('util');
const fs = require('fs');


// turn callback to promise using util.promisify
const readFilePromise = util.promisify(fs.readFile);

async function readAsync() {
  try {
    const data = await readFilePromise('file.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

readAsync();
// =============================================================


// util.inspect() - Inspect JavaScript objects
const obj = { a: 1, b: 2 };
console.log(util.inspect(obj)); // Outputs: { a: 1, b: 2 }

// util.format() - Format a string
const name = 'John';
const message = util.format('Hello, %s', name);
console.log(message); // Outputs: Hello, John

// util.promisify() - Convert a function with a callback to a function that returns a promise
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(1000).then(() => {
  console.log('Resolved after 1 second');
});

// util.callbackify() - Convert a function that returns a promise to a function with a callback
const promiseFunction = util.promisify(fs.readFile);
const readFileWithCallback = util.callbackify(promiseFunction);

// util.inherits() - Set up the prototype chain between two constructor functions
// Deprecated in modern JavaScript

// util.inspect.custom - Define custom inspection functions for objects
const customObj = {
  [util.inspect.custom]() {
    return 'Custom Object';
  },
};
console.log(util.inspect(customObj)); // Outputs: 'Custom Object'

// util.types.isProxy() - Check if an object is a proxy object
const proxyObj = new Proxy({}, {});
console.log(util.types.isProxy(proxyObj)); // Outputs: true

// util.types.isDate() - Check if an object is a Date object
const dateObj = new Date();
console.log(util.types.isDate(dateObj)); // Outputs: true

// util.types.isError() - Check if an object is an error object
const errorObj = new Error('Sample error');
console.log(util.types.isError(errorObj)); // Outputs: true
