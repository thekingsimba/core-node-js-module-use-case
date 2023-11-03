const url = require('url');

//Parsing and formatting URLs
const urlString = 'https://www.example.com/path?query=example';

const parsedUrl = new URL(urlString);

console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.pathname);
console.log('Query:', parsedUrl.searchParams.get('query'));
