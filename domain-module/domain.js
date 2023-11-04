const domain = require('domain');
const server = require('http').createServer();

server.on('error', (err) => {
  console.error('Server error', err);
});

// create a domain and emit event 

const d = domain.create();

d.on('error', (err) => {
  console.error('Domain error', err);
});

d.run(() => {
  // Do your operations here
  server.emit('error', new Error('Something went wrong.'));
});
