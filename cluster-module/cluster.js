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
