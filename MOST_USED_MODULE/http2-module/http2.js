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

// =======================================================

// Method: createSecureServer([options][, onRequestHandler])
// Explanation: Creates an HTTP/2 server that is also compatible with HTTPS.
const server2 = http2.createSecureServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Hello, HTTP/2!</h1>');
});

// Method: connect(authority[, options][, listener])
// Explanation: Initiates an HTTP/2 connection to the specified authority.
const clientSession = http2.connect('https://example.com', (err) => {
  if (err) {
    console.error('Error: ', err);
  }
});

// Property: constants
// Explanation: An object containing various constants related to the HTTP/2 protocol.
const http2Constants = http2.constants;

// Property: getDefaultSettings()
// Explanation: Returns the default settings for a newly created HTTP/2 server or client.
const defaultSettings = http2.getDefaultSettings();

// Property: getPackedSettings(settings)
// Explanation: Returns a Buffer with the packed representation of the settings object.
const packedSettings = http2.getPackedSettings({ enablePush: true, initialWindowSize: 100 });

// Property: isSession(obj)
// Explanation: Returns true if the provided object is an instance of an HTTP/2 session.
const session = new http2.ClientHttp2Session();
const checkIfSession = http2.isSession(session);

// Property: getDefaultSessionOptions()
// Explanation: Returns the default options for a newly created HTTP/2 session.
const defaultSessionOptions = http2.getDefaultSessionOptions();
