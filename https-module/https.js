const https = require('https');
const fs = require('fs');

// Creating an HTTPS server
const options = {
  key: fs.readFileSync('private-key.pem'),  // file containing the private key 
  cert: fs.readFileSync('public-cert.pem'),  // file containing the public key 
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, HTTPS!\n');
});

server.listen(443);
