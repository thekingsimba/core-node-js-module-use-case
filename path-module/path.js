const path = require('path');

// Joining path segments together
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log(fullPath);

//Resolving a sequence of paths into an absolute path
const absolutePath = path.resolve('folder', 'file.txt');
console.log(absolutePath);
