const fs = require('fs');

// read file async
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// write file sync
fs.writeFileSync('file.txt', 'Hello, World!', 'utf8');