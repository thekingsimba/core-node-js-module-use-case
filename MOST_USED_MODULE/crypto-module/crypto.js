const crypto = require('crypto');

//Generating a cryptographic hash (SHA-256)
const dataToHash = 'Hello, World!';
const hash_SHA = crypto.createHash('sha256').update(dataToHash).digest('hex');

console.log('SHA-256 Hash:', hash_SHA);

//=====================

// crypto.constants
// A collection of constant values that can be used as the algorithm parameter of crypto.createCipher() and crypto.createDecipher(). 
console.log(crypto.constants.RSA_PKCS1_PADDING);

// crypto.createCipheriv
// Creates and returns a Cipher object using the provided algorithm, key, and initialization vector (iv) for encryption.
const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from('myVerySecretKey'), Buffer.from('myInitializationVector'));

// crypto.createDecipheriv
// Creates and returns a Decipher object using the provided algorithm, key, and initialization vector (iv) for decryption.
const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from('myVerySecretKey'), Buffer.from('myInitializationVector'));

// crypto.createDiffieHellman
// Creates a DiffieHellman key exchange object with the specified prime length and generator.
const diffieHellman = crypto.createDiffieHellman(2048, '2');

// crypto.createECDH
// Creates an object for Elliptic Curve Diffie-Hellman (ECDH) key exchange using the specified curve name.
const ecdh = crypto.createECDH('secp256k1');

// crypto.createHash
// Creates and returns a Hash object that can be used to generate hash digests.
const hash = crypto.createHash('sha256');
hash.update('data');
console.log(hash.digest('hex'));

// crypto.createHmac
// Creates and returns an Hmac object that can be used to generate Hash-based Message Authentication Code (HMAC) digests.
const hmac = crypto.createHmac('sha256', 'mySecretKey');
hmac.update('data');
console.log(hmac.digest('hex'));

// crypto.createPrivateKey
// Creates a private key object.
const privateKey = crypto.createPrivateKey({ key: 'myPrivateKey' });

// crypto.createPublicKey
// Creates a public key object.
const publicKey = crypto.createPublicKey({ key: 'myPublicKey' });

// crypto.createSign
// Creates and returns a Sign object that can be used to generate signatures.
const sign = crypto.createSign('RSA-SHA256');
sign.update('some data to sign');
const signature = sign.sign(privateKey, 'hex');
console.log(signature);

// crypto.createVerify
// Creates and returns a Verify object that can be used to verify digital signatures.
const verify = crypto.createVerify('RSA-SHA256');
verify.update('some data to sign');
const verified = verify.verify(publicKey, signature, 'hex');
console.log(verified);

// crypto.generateKeyPair
// Generates a new asymmetric key pair and returns the public and private keys.
crypto.generateKeyPair('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
}, (err, publicKey, privateKey) => {
  // ...
});

// crypto.getDiffieHellman
// Returns a predefined DiffieHellman key exchange object based on the specified group name.
const predefinedDiffieHellman = crypto.getDiffieHellman('modp15');

// crypto.pbkdf2
// Derives a cryptographic key from the given password, salt, and number of iterations, using a specified digest algorithm.
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  // ...
});

// crypto.randomBytes
// Generates cryptographically strong pseudo-random data.
crypto.randomBytes(32, (err, buffer) => {
  // ...
});

// crypto.randomFillSync
// Fills the provided buffer with cryptographically strong pseudo-random data synchronously.
const buffer = Buffer.alloc(16);
crypto.randomFillSync(buffer);

// crypto.scrypt
// Derives a key from the given password, salt, and other parameters using the scrypt key derivation function.
crypto.scrypt('password', 'salt', 64, (err, derivedKey) => {
  // ...
});

// crypto.timingSafeEqual
// Compares two buffers in constant time to prevent timing attacks.
const a = Buffer.from('a');
const b = Buffer.from('b');
console.log(crypto.timingSafeEqual(a, b));
