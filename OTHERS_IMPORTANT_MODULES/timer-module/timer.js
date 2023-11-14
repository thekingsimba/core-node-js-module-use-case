// setTimeout: Executes the callback function after the specified delay
const timeout = setTimeout(() => {
  console.log('This message will be displayed after 2000 milliseconds.');
}, 2000);

// clearTimeout: Clears the timeout set by setTimeout
clearTimeout(timeout);

// setInterval: Invokes the callback function repeatedly with a fixed time delay
let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log(`This message will be displayed every 1000 milliseconds. Count: ${counter}`);
  if (counter === 5) {
    clearInterval(interval); // Clear the interval after it has executed 5 times
  }
}, 1000);
