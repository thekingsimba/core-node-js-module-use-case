const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// Creating multiple child processes
// create new cluster regarding CPU length
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, Cluster!');
  }).listen(8000);
}



// Methods use case 

// 1. cluster.fork([env])
// Creates a new worker process.
if (cluster.isMaster) {
  // Fork the process
  const worker = cluster.fork();
  worker.on('message', (msg) => {
    console.log(`Message from worker: ${msg}`);
  });
}

// 2. cluster.disconnect([callback])
// Disconnects the cluster, once no more connections exist.
cluster.disconnect(() => {
  console.log('Cluster disconnected');
});

// 3. cluster.setupMaster([settings])
// Setup the settings for the cluster's master process.
cluster.setupMaster({
  exec: 'worker.js',
});

// 4. cluster.isMaster
// Boolean property that indicates whether the current process is the master process.
if (cluster.isMaster) {
  // Your code here
}

// 5. cluster.isWorker
// Boolean property that indicates whether the current process is a worker process.
if (cluster.isWorker) {
  // Your code here
}

// Properties
// 1. cluster.settings
// An object containing the settings for the cluster's master process.
console.log(cluster.settings);

// 2. cluster.schedulingPolicy
// Property that specifies the scheduling policy of the cluster.
console.log(cluster.schedulingPolicy);

// 3. worker.id
// A unique identifier for the worker.
const workerId = cluster.worker.id;
console.log(`Worker ID: ${workerId}`);

// 4. worker.process
// A reference to the worker's underlying process.
const workerProcess = cluster.worker.process;
console.log(workerProcess);

// 5. worker.suicide
// A boolean indicating whether the worker committed suicide.
if (cluster.worker.suicide) {
  console.log('Worker committed suicide');
}

// 6. worker.send(message, [sendHandle])
// Send a message to a specific worker.
const worker = cluster.fork();
worker.send('Hello, worker!');
