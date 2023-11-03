const zlib = require('zlib');
const fs = require('fs');

//Compressing and decompressing data
const input = fs.createReadStream('file.txt'); // starter file 
const compressed = fs.createWriteStream('file.txt.gz'); // destination file 

const gzip = zlib.createGzip(); // create compressor

input.pipe(gzip).pipe(compressed); 
