const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const client = dgram.createSocket('udp4');

// Sending and receiving UDP datagrams
server.on('message', (msg, rinfo) => {
  console.log(`Received message: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.bind(41234);

client.send('Hello, UDP!', 41234, 'localhost', (err) => {
  if (err) {
    console.error(err);
  }
  client.close();
});
