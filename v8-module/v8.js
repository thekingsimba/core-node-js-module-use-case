const v8 = require('v8');
// Exposing APIs related to the V8 JavaScript engine

const serialized = v8.serialize({ key: 'value' });
const deserialized = v8.deserialize(serialized);

console.log(deserialized.key); // Output: value
