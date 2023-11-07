const querystring = require('querystring');

// The querystring.escape() method is used to escape special characters in a string, making it safe for embedding in a URL.
const escapedString = querystring.escape('param=hello world');
console.log(escapedString);

// The querystring.parse() method is used to parse a URL query string into a collection of key-value pairs.
//Parsing and formatting URL query strings
const queryString = 'name=John&age=30';
const parsedQuery = querystring.parse(queryString);

console.log('Name:', parsedQuery.name);
console.log('Age:', parsedQuery.age);

// The querystring.stringify() method converts an object into a URL query string format.
const obj = { foo: 'bar', baz: ['qux', 'quux'], corge: '' };
const stringifiedObj = querystring.stringify(obj);
console.log(stringifiedObj);

// The querystring.unescape() method is used to unescape special characters in a URL-encoded string.
const unescapedString = querystring.unescape('param%3Dhello%20world');
console.log(unescapedString);
