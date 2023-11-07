const net = require('net');

// ========================================================

// Objects

// 1. net.Server example
const server = net.createServer((socket) => {
  socket.end('Hello client!\n');
});

server.on('error', (err) => {
  throw err;
});

server.listen(8124, () => {
  console.log('Server bound');
});

// 2. net.Socket example
const client = net.createConnection({ port: 8124 }, () => {
  console.log('Client connected');
  client.write('Hello server!');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

// Methods

// 1. net.connect example
const connection = net.connect({ port: 8124 }, () => {
  console.log('Client connected to server!');
});
connection.on('data', (data) => {
  console.log(data.toString());
  connection.end();
});

// 2. net.createConnection example
const anotherConnection = net.createConnection({ port: 8124 }, () => {
  console.log('Another client connected to server!');
});
anotherConnection.on('data', (data) => {
  console.log(data.toString());
  anotherConnection.end();
});

// 3. net.createServer example
const newServer = net.createServer((socket) => {
  socket.end('Hello from new server!\n');
});
newServer.listen(9000, () => {
  console.log('New server bound');
});

// Properties

// 1. net.Server.maxConnections example
console.log('Maximum connections allowed:', net.Server.maxConnections);

// 2. net.Server.connections example
console.log('Current connections:', server.connections);

