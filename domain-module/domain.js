const domain = require('domain');

//IMPORTANT : This module is depreciate and is just replaced by a simple use of try catch

const server = require('http').createServer();

server.on('error', (err) => {
  console.error('Server error', err);
});

// create a domain and listen to event 

const d = domain.create();

d.on('error', (err) => {
  console.error('Domain error', err);
});

d.run(() => {
  // Do your operations here
  server.emit('error', new Error('Something went wrong.'));
});


//======================================================================

// 2. domain.run(fn): Runs the provided function within the domain.
myDomain.run(() => {
  // Code to be executed within the domain
});

// 3. domain.add(emitter): Explicitly adds an event emitter to the domain.
const myEmitter = new MyEmitter();
myDomain.add(myEmitter);

// 4. domain.remove(emitter): Removes an event emitter from the domain.
myDomain.remove(myEmitter);

// 5. domain.bind(callback): Returns a function that runs the provided callback function in the domain.
const boundFunction = myDomain.bind(() => {
  // Code to be executed within the domain
});

// 6. domain.intercept(callback): Returns a function that runs the provided callback function in the domain, forwarding errors to the domain's error handler.
const interceptedFunction = myDomain.intercept(() => {
  // Code to be executed within the domain
});

// 7. domain.enter(): Enters the domain, establishing it as the active domain for all subsequent asynchronous operations.
myDomain.enter();

// 8. domain.exit(): Exits the domain, disassociating it as the active domain.
myDomain.exit();

// 9. domain.dispose(): Disposes of the domain, removing it from the domain hierarchy.
myDomain.dispose();
