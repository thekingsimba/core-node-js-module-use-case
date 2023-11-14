const EventEmitter = require('events');


// create custom event emitter
const myEmitter = new EventEmitter();

// listen to event
myEmitter.on('customEvent', () => {
  console.log('Custom event triggered');
});

myEmitter.emit('customEvent');

// on(eventName, listener): Adds a listener function for the specified event.
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

// once(eventName, listener): Adds a one-time listener function for the specified event.
myEmitter.once('onceEvent', () => {
  console.log('This will only be logged once.');
});
myEmitter.emit('onceEvent');
myEmitter.emit('onceEvent'); // This won't be logged.

// removeListener(eventName, listener): Removes the specified listener from the event.
const myListener = () => {
  console.log('Listener will be removed.');
};
myEmitter.on('removeListenerEvent', myListener);
myEmitter.removeListener('removeListenerEvent', myListener);
myEmitter.emit('removeListenerEvent'); // The listener won't be triggered.

// setMaxListeners(n): Sets the maximum number of listeners that can be assigned to an event.
myEmitter.setMaxListeners(2);

// getMaxListeners(): Returns the maximum number of listeners that can be assigned to an event.
console.log(myEmitter.getMaxListeners()); // Output: 2

// listeners(eventName): Returns an array of listeners for the specified event.
const listenerArray = myEmitter.listeners('event');
console.log(listenerArray); // Output: [ [Function] ]

// emit(eventName, [...args]): Emits the specified event, executing each of the listeners.
myEmitter.on('argEvent', (arg) => {
  console.log(`Argument received: ${arg}`);
});
myEmitter.emit('argEvent', 'Sample Argument');

