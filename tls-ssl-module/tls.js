const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem'),
};

// 1. tls.Server
const server = tls.createServer(options, (cleartextStream) => {
  cleartextStream.write('Hello, TLS/SSL!\n');
  cleartextStream.pipe(cleartextStream);
});

server.listen(443);
// ================================

// Required module

// 2. tls.createServer(options, [secureConnectionListener])
const serverWithOptions = tls.createServer({ /* options */ }, (stream) => {
  // handle secure connections
});

// 3. tls.connect(options, [secureConnectionListener])
const client = tls.connect({ /* options */ }, () => {
  // handle secure connections
});

// 4. tls.DEFAULT_ECDH_CURVE
const defaultCurve = tls.DEFAULT_ECDH_CURVE;

// 5. tls.DEFAULT_MAX_VERSION
const defaultMaxVersion = tls.DEFAULT_MAX_VERSION;

// 6. tls.DEFAULT_MIN_VERSION
const defaultMinVersion = tls.DEFAULT_MIN_VERSION;

// 7. tls.getCiphers()
const supportedCiphers = tls.getCiphers();

// 8. tls.checkServerIdentity(hostname, cert)
const isServerIdentityValid = tls.checkServerIdentity('hostname', 'cert');

// 9. tls.convertNPNProtocols(protocols)
const npnBuffer = tls.convertNPNProtocols(['protocol1', 'protocol2']);

// 10. tls.createSecureContext(options)
const secureContext = tls.createSecureContext({ /* options */ });

// 11. tls.createSecurePair([credentials], [isServer])
const securePair = tls.createSecurePair();

// 12. tls.createSecureServer([options], [secureConnectionListener])
const secureServer = tls.createSecureServer({ /* options */ }, (stream) => {
  // handle secure connections
});

// 13. tls.createSecureSocket([options], [initListener])
const secureSocket = tls.createSecureSocket({ /* options */ }, () => {
  // handle secure connections
});

// 14. tls.rootCertificates
const rootCerts = tls.rootCertificates;

// 15. tls.SSL_OP_ALL
const sslOpAll = tls.SSL_OP_ALL;

// 16. tls.SSL_OP_NO_TICKET
const sslOpNoTicket = tls.SSL_OP_NO_TICKET;

// Example usage ends

// The code examples demonstrate various use cases for each object, method, and property in the "tls" module of Node.js.
