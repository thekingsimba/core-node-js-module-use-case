const fs = require('fs');


// Method
// 12. fs.createReadStream
// Create a readable stream to read the contents of a file
const readStream = fs.createReadStream('largeFile.txt', 'utf8');

// Handle data events when data is read from the file
readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data: ${chunk}`);
});

// Handle the end event when the entire file has been read
readStream.on('end', () => {
  console.log('Finished reading the file');
});

// Handle any errors that may occur during the read operation
readStream.on('error', (err) => {
  console.error(`Error reading the file: ${err}`);
});

// ===============================================================

// Objects
// 1. fs.constants
// Constants for file access modes and error codes
console.log(fs.constants);

// Methods
// 2. fs.access
fs.access('example.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist');
  } else {
    console.log('File exists');
  }
});

// 3. fs.readFile
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 4. fs.writeFile
fs.writeFile('example.txt', 'Hello, this is an example!', 'utf8', (err) => {
  if (err) throw err;
  console.log('Data written to file');
});

// 5. fs.rename
fs.rename('example.txt', 'newExample.txt', (err) => {
  if (err) throw err;
  console.log('File renamed');
});

// 6. fs.unlink
fs.unlink('newExample.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});

// 7. fs.readdir
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log('Files in directory:', files);
});

// Properties
// 8. fs.constants.F_OK
console.log('F_OK constant:', fs.constants.F_OK);

// 9. fs.constants.R_OK
console.log('R_OK constant:', fs.constants.R_OK);

// 10. fs.constants.W_OK
console.log('W_OK constant:', fs.constants.W_OK);

// 11. fs.constants.X_OK
console.log('X_OK constant:', fs.constants.X_OK);

