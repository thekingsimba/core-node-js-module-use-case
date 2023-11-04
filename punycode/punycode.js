const punycode = require('punycode');

// encode and decode address
const domain = 'mañana.com';
const ascii = punycode.encode(domain);
const unicode = punycode.decode(ascii);

console.log(ascii); // 'xn--maana-pta.com'
console.log(unicode); // 'mañana.com'
