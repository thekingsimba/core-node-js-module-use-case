const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem'),
};

// create server
const server = tls.createServer(options, (cleartextStream) => {
  cleartextStream.write('Hello, TLS/SSL!\n');
  cleartextStream.pipe(cleartextStream);
});

server.listen(443);
