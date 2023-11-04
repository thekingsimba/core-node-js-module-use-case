const async_hooks = require('async_hooks');

// Callback functions
const initCallback = (asyncId, type, triggerAsyncId, resource) => {
  console.log(`Init: asyncId - ${asyncId}, type - ${type}, triggerAsyncId - ${triggerAsyncId}`);
};

const beforeCallback = asyncId => {
  console.log(`Before: asyncId - ${asyncId}`);
};

const afterCallback = asyncId => {
  console.log(`After: asyncId - ${asyncId}`);
};

const destroyCallback = asyncId => {
  console.log(`Destroy: asyncId - ${asyncId}`);
};

// Create and enable a new async hook
const asyncHook = async_hooks.createHook({
  init: initCallback,
  before: beforeCallback,
  after: afterCallback,
  destroy: destroyCallback,
});

asyncHook.enable();  // this will activate the async_hooks observer

// =================================================================================

// when the observer is created, it gives access to some of his built-in methods 
// Methods
const executionId = async_hooks.executionAsyncId();
const triggerId = async_hooks.triggerAsyncId();
console.log(`Execution Async Id: ${executionId}`);
console.log(`Trigger Async Id: ${triggerId}`);

// Properties
const asyncHookConstants = async_hooks.constants;
console.log(`Async Hook Constants: ${JSON.stringify(asyncHookConstants)}`);

// ===============================================================================
// Now it can handle any Callback function and show when the callback will, init before after and destroy 
// Function containing setTimeout callback
const executeSetTimeout = () => {
  setTimeout(() => {
    console.log('Inside setTimeout callback');
  }, 1000);
};

executeSetTimeout();

// ================================================================================
// we can also call the different event directly from AsyncResource instance
// Demonstrate the creation and destruction of an asynchronous resource
const asyncResource = new async_hooks.AsyncResource('myAsyncHook');
asyncResource.emitBefore();
asyncResource.emitAfter();
asyncResource.emitDestroy();




// Disable the async hook
asyncHook.disable();
