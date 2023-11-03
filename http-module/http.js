const http = require('http');


// create server and send response
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});


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