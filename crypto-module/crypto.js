const crypto = require('crypto');

//Generating a cryptographic hash (SHA-256)
const dataToHash = 'Hello, World!';
const hash = crypto.createHash('sha256').update(dataToHash).digest('hex');

console.log('SHA-256 Hash:', hash);
