const fs = require('fs');

// write file sync
fs.writeFileSync('file.txt', 'Hello, World!', 'utf8');

// Objects:
// ====================================
// 1. fs.constants: Provides access to file system-related constants.
console.log(fs.constants);

// Methods:

// 2. fs.access: Checks if the user has the necessary permissions to access the file or directory.
fs.access('example.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist');
  } else {
    console.log('File exists');
  }
});

// 3. fs.readFile: Reads data from the file specified by the path.
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 4. fs.writeFile: Writes data to a file, replacing the file if it already exists.
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('Data written to file');
});

// 5. fs.appendFile: Appends data to a file, creating the file if it does not exist.
fs.appendFile('example.txt', ' This is an appended text.', (err) => {
  if (err) throw err;
  console.log('Data appended to file');
});

// 6. fs.unlink: Removes the file specified by the path.
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});

// 7. fs.rename: Renames or moves a file or directory.
fs.rename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('File renamed');
});

// 8. fs.mkdir: Creates a new directory.
fs.mkdir('newDirectory', (err) => {
  if (err) throw err;
  console.log('Directory created');
});

// 9. fs.rmdir: Removes a directory.
fs.rmdir('newDirectory', (err) => {
  if (err) throw err;
  console.log('Directory removed');
});

// 10. fs.readdir: Reads the contents of a directory.
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(files);
});

// 11. fs.stat: Returns information about the specified file or directory.
fs.stat('example.txt', (err, stats) => {
  if (err) throw err;
  console.log(stats);
});

// 12. fs.watch: Watches for changes to a specific file or directory.
fs.watch('example.txt', (eventType, filename) => {
  console.log(`Event type is: ${eventType}`);
  if (filename) {
    console.log(`Filename provided: ${filename}`);
  } else {
    console.log('Filename not provided');
  }
});

// Properties:

// 13. fs.promises: Exposes all the `fs` module's functions as Promise-based versions.
fs.promises.readFile('example.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// 14. fs.constants: Provides access to commonly used constants for file system operations.
console.log(fs.constants);

// 15. fs.createReadStream: Creates a readable stream to read the contents of the specified file.
const readableStream = fs.createReadStream('example.txt', 'utf8');
readableStream.on('data', (chunk) => {
  console.log(chunk);
});

// 16. fs.createWriteStream: Creates a writable stream to write data to the specified file.
const writableStream = fs.createWriteStream('example.txt');
writableStream.write('Stream data to be written.');

