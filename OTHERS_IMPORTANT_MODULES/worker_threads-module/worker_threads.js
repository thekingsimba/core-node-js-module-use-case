const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// worker data exchange process
if (isMainThread) {

  const worker = new Worker(__filename, { workerData: 'This is the worker data' });

  worker.on('message', (msg) => {
    console.log(`Worker response: ${msg}`);
  });

  worker.on('error', (err) => {
    console.error(`Worker error: ${err}`);
  });

  worker.on('exit', (code) => {
    if (code !== 0)
      console.error(new Error(`Worker stopped with exit code ${code}`));
  });

} else {

  parentPort.postMessage(workerData);
  
}

// =================================================================

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// Creating a new Worker thread
const worker2 = new Worker('./worker.js', { workerData: { initialData: 123 } });

// Checking if the current context is the main thread
console.log(`Is main thread: ${isMainThread}`);

// Accessing the reference to the MessagePort for communication with the parent thread
if (!isMainThread) {
  parentPort.postMessage('Message from Worker thread');
}

// Terminating the Worker thread
if (!isMainThread) {
  worker2.terminate();
}

// Sending a message to the parent thread
if (!isMainThread) {
  parentPort.postMessage('Message from Worker thread');
}

// Listening for messages from the Worker thread
if (!isMainThread) {
  parentPort.on('message', (message) => {
    console.log('Message received from parent:', message);
  });
}

// Listening for errors in the Worker thread
if (!isMainThread) {
  worker2.on('error', (err) => {
    console.error('Error in Worker thread:', err);
  });
}

// Listening for the termination of the Worker thread
if (!isMainThread) {
  worker2.on('exit', (code) => {
    console.log(`Worker thread exited with code ${code}`);
  });
}
