const http = require('http');

// make an external request with http
const requestOptions = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'GET',
};

const externalRequest = http.request(requestOptions, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

externalRequest.end();

server.listen(8080);

//============================================

// 1. http.createServer([options][, requestListener])
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});
server.listen(8080);

// 2. server.listen([port[, host[, backlog]]][, callback])
server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});

// 3. http.get(options[, callback])
http.get('http://www.example.com', (res) => {
  console.log('Got response: ' + res.statusCode);
});

// 5. server.close([callback])
server.close(() => {
  console.log('Server is now closed');
});

// 6. request.abort()
// This method is generally used when you want to cancel an ongoing HTTP request.

// 7. response.writeHead(statusCode[, statusMessage][, headers])
res.writeHead(200, { 'Content-Type': 'text/plain' });

// 8. response.write(chunk[, encoding][, callback])
res.write('Hello World!');

// 9. response.end([data][, encoding][, callback])
res.end();

// 10. response.statusCode
console.log(`Status code: ${res.statusCode}`);

// 11. response.statusMessage
console.log(`Status message: ${res.statusMessage}`);
