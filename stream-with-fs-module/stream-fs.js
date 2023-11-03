const fs = require('fs');

//Creating a readable stream from a file
const readableStream = fs.createReadStream('file.txt', 'utf8');

readableStream.on('data', (chunk) => {
  console.log('Chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('Read operation finished.');
});
