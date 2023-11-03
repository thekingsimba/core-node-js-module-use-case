const querystring = require('querystring');


//Parsing and formatting URL query strings
const queryString = 'name=John&age=30';

const parsedQuery = querystring.parse(queryString);

console.log('Name:', parsedQuery.name);
console.log('Age:', parsedQuery.age);
