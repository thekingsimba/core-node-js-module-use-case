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
 
//======================================

// Methods
// 2. socket.bind(options[, callback])
// Binds the socket to the specified port and address. This method is used to make the socket start listening for datagram messages.
socket.bind(41234, () => {
  console.log('Socket is listening');
});

// 3. socket.close([callback])
// Closes the underlying socket. Any callback function passed as an argument will be executed once the socket is fully closed.
socket.close(() => {
  console.log('Socket is closed');
});

// 4. socket.connect(port[, address][, callback])
// Connects the socket to the specified port and address. Once connected, the socket can send data to the specified address using socket.send() without specifying the destination address and port.
socket.connect(41234, 'localhost', () => {
  console.log('Socket is connected');
});

// 5. socket.disconnect()
// Disconnects a socket, allowing it to be closed and reused.
socket.disconnect();

// 6. socket.send(msg, offset, length, port, address[, callback])
// Sends a UDP message to the specified port and address. This method is used to send data on the socket to the specified remote address.
const message = Buffer.from('Message from dgram socket');
socket.send(message, 0, message.length, 41234, 'localhost', (err) => {
  if (err) throw err;
  console.log('Message sent');
});

// 7. socket.setBroadcast(flag)
// Sets or clears the SO_BROADCAST socket option.
socket.setBroadcast(true);

// 8. socket.setMulticastInterface(multicastInterface)
// Sets the interface that the socket will use for outgoing multicast packets.
socket.setMulticastInterface('192.168.1.5');

// 9. socket.setMulticastLoopback(flag)
// Sets or clears the IP_MULTICAST_LOOP socket option.
socket.setMulticastLoopback(true);

// 10. socket.setMulticastTTL(ttl)
// Sets or clears the IP_MULTICAST_LOOP socket option.
socket.setMulticastTTL(128);

// 11. socket.setTTL(ttl)
// Sets the IP Time To Live (TTL) value for outgoing multicast packets.
socket.setTTL(64);

// Increase the reference count of the socket
socket.ref();

// 12. socket.unref()
// Decreases the reference count of the socket. If the reference count becomes zero, the socket will be fully closed.
socket.unref();

// Properties
// 1. socket.address()
// Returns the bound address and port of the socket as an object with address and port properties.
console.log(socket.address());

// 2. socket.remoteAddress
// The remote address for the socket.
console.log(socket.remoteAddress);

// 3. socket.remoteFamily
// The remote family for the socket.
console.log(socket.remoteFamily);

// 4. socket.remotePort
// The remote port for the socket.
console.log(socket.remotePort);
