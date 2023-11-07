const punycode = require('punycode');

// encode and decode address
const domain = 'mañana.com';
const ascii = punycode.encode(domain);
const unicode = punycode.decode(ascii);

console.log(ascii); // 'xn--maana-pta.com'
console.log(unicode); // 'mañana.com'


// Role: Decodes a Punycode string to a Unicode string.
const decodedString = punycode.decode('xn--4gbrim');
console.log(decodedString); // Outputs: اختبار

// Role: Encodes a Unicode string to a Punycode string.
const encodedString = punycode.encode('اختبار');
console.log(encodedString); // Outputs: xn--4gbrim

// Role: Converts a Unicode domain name to ASCII.
const asciiDomain = punycode.toASCII('example.إختبار');
console.log(asciiDomain); // Outputs: example.xn--4gbrim

// Role: Converts an ASCII-compatible Punycode string to Unicode.
const unicodeDomain = punycode.toUnicode('example.xn--4gbrim');
console.log(unicodeDomain); // Outputs: example.إختبار

// Role: An object that provides utility functions for working with UCS-2 character encoding.
console.log(punycode.ucs2); // Outputs: { decode: [Function: ucs2decode], encode: [Function: ucs2encode] }

// Role: A string indicating the version of the Punycode module.
console.log(punycode.version); // Outputs: 2.1.1

