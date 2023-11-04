const net = require('net');

// creating a new net server
const server = net.createServer((socket) => {
  socket.end('Hello Node.js Server!\n');
});

server.on('error', (err) => {
  throw err;
});

server.listen(8124, () => {
  console.log('Server bound');
});
