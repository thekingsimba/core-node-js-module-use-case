//Parsing and formatting URLs
const urlString = 'https://www.example.com/path?query=example';

const parsedUrl = new URL(urlString);

console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.pathname);
console.log('Query:', parsedUrl.searchParams.get('query'));
 // ==============================================================

 
 const { URL, URLSearchParams, format, resolve, parse, resolveObject, domainToASCII, domainToUnicode, fileURLToPath, pathToFileURL } = require('url');

// URL Object
const myURL = new URL('https://www.example.com:8080/foo');
console.log('URL Object:', myURL);

// Serialize a URL object to a URL string
const formattedURL = format(myURL);
console.log('Formatted URL:', formattedURL);

// Resolves a target URL relative to a base URL
const resolvedURL = resolve('https://www.example.com', '/foo/bar');
console.log('Resolved URL:', resolvedURL);

// Parses a URL string and returns a URL object
const parsedURL = parse('https://www.example.com:8080/foo/bar?test=123', true);
console.log('Parsed URL:', parsedURL);

// Resolves a target URL object relative to a base URL object
const base = new URL('https://www.example.com');
const target = new URL('/foo', base);
const resolvedURLObject = resolveObject(base, target);
console.log('Resolved URL Object:', resolvedURLObject);

// Converts a Unicode domain name to ASCII
const asciiDomain = domainToASCII('español.com');
console.log('ASCII Domain:', asciiDomain);

// Converts an ASCII domain name to Unicode
const unicodeDomain = domainToUnicode('xn--espaol-zwa.com');
console.log('Unicode Domain:', unicodeDomain);

// Converts a file URL to a file path
const filePath = fileURLToPath('file:///Users/user/file.txt');
console.log('File Path:', filePath);

// Converts a file path to a file URL
const fileURL = pathToFileURL('/Users/user/file.txt');
console.log('File URL:', fileURL);

// URLSearchParams Object
const params = new URLSearchParams('query=value');
params.append('query', 'value2');
console.log('Appended Params:', params.toString());

// Deletes the specified search parameter
params.delete('query');
console.log('Deleted Params:', params.toString());

// Returns the first value associated with the given search parameter
const firstValue = params.get('query');
console.log('First Value:', firstValue);

// Returns all the values associated with a given search parameter
const allValues = params.getAll('query');
console.log('All Values:', allValues);

// Checks if a certain search parameter exists
const hasParam = params.has('query');
console.log('Has Param:', hasParam);

// Sets the value associated with a given search parameter
params.set('newParam', 'value3');
console.log('Set Params:', params.toString());
