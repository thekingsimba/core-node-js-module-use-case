const util = require('util');
const fs = require('fs');


// turn callback to promise using util.promisify
const readFilePromise = util.promisify(fs.readFile);

async function readAsync() {
  try {
    const data = await readFilePromise('file.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

readAsync();
