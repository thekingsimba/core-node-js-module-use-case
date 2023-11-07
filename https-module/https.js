const https = require('https');
const fs = require('fs');

// Creating an HTTPS server


const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, HTTPS!\n');
});

server.listen(443);
// =========================================================

const https = require('https');

// https.Server
// Creating a simple HTTPS server that responds with 'Hello World!' for any request
const server2 = https.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});
server2.listen(8000);

// https.createServer()
// Creating an HTTPS server with custom options

const options = {
  key: fs.readFileSync('private-key.pem'),  // file containing the private key 
  cert: fs.readFileSync('public-cert.pem'),  // file containing the public key 
};

const serverWithOptions = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Custom HTTPS Server with Options!\n');
});
serverWithOptions.listen(8443);

// https.get()
// Making an HTTPS GET request to a URL and printing the response
const optionsGet = {
  hostname: 'www.example.com',
  port: 443,
  path: '/',
  method: 'GET'
};
const req = https.get(optionsGet, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
req.on('error', (e) => {
  console.error(e);
});

// https.globalAgent
// Changing the maxSockets property of the global agent for HTTPS requests
https.globalAgent.maxSockets = 10;

// https.STATUS_CODES
// Accessing the status message for a specific HTTP status code
console.log(https.STATUS_CODES[404]); // Output: 'Not Found'
