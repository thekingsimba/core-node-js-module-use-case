
// The v8 module in Node.js provides access to the V8 engine's various functionalities.
const v8 = require('v8');

// Exposing APIs related to the V8 JavaScript engine

const serialized = v8.serialize({ key: 'value' });
const deserialized = v8.deserialize(serialized);

console.log(deserialized.key); // Output: value
//=======================================================


// v8.cachedDataVersionTag: A read-only property that returns the V8 version of the serialized code cache.
const cachedDataVersionTag = v8.cachedDataVersionTag;
console.log("Cached data version tag:", cachedDataVersionTag);

// v8.getHeapStatistics(): A method that returns an object with detailed heap statistics.
const heapStatistics = v8.getHeapStatistics();
console.log("Heap statistics:", heapStatistics);

// v8.getHeapSpaceStatistics(): A method that returns an array of objects containing space-specific heap statistics.
const heapSpaceStatistics = v8.getHeapSpaceStatistics();
console.log("Heap space statistics:", heapSpaceStatistics);

// v8.getHeapCodeStatistics(): A method that returns an object with statistics about the V8 heap memory used for compiling and executing code.
const heapCodeStatistics = v8.getHeapCodeStatistics();
console.log("Heap code statistics:", heapCodeStatistics);

// v8.getHeapSnapshot(): A method that returns a snapshot object of the current V8 heap.
const heapSnapshot = v8.getHeapSnapshot();
console.log("Heap snapshot:", heapSnapshot);

// v8.setFlagsFromString(flags): A method that allows setting V8 command-line flags programmatically from a string.
v8.setFlagsFromString('--max_old_space_size=4096');
console.log("V8 flags set successfully.");

// v8.serialize(value): A method that serializes a JavaScript value into a buffer.
const serializedData = v8.serialize({ message: 'Hello' });
console.log("Serialized data:", serializedData);

// v8.deserialize(buffer): A method that deserializes a JavaScript value from a buffer.
const deserializedData = v8.deserialize(serializedData);
console.log("Deserialized data:", deserializedData);
