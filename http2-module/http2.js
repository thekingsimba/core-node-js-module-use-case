const http2 = require('http2');

// Creating an HTTP/2 server and sending response
const server = http2.createSecureServer({
  key: 'private-key.pem', // file containing the private key 
  cert: 'public-cert.pem', // file containing the public key 
});

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/plain',
    ':status': 200,
  });
  stream.end('Hello, HTTP/2!\n');
});

server.listen(8443);
