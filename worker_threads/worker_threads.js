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
