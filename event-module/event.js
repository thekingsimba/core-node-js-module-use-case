const EventEmitter = require('events');


// create custom event emitter
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', () => {
  console.log('Custom event triggered');
});

myEmitter.emit('customEvent');
