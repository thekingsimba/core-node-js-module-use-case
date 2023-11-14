const zlib = require('zlib');
const fs = require('fs');

//Compressing and decompressing data
const input1 = fs.createReadStream('file.txt'); // starter file 
const compressed1 = fs.createWriteStream('file.txt.gz'); // destination file 

const gzip1 = zlib.createGzip(); // create compressor

input1.pipe(gzip1).pipe(compressed1); 

// ==============================
const zlib = require('zlib');
const fs = require('fs');

// Role of zlib.constants
console.log(zlib.constants);

// Role of zlib.createBrotliCompress
const brotliCompress = zlib.createBrotliCompress();

// Role of zlib.createBrotliDecompress
const brotliDecompress = zlib.createBrotliDecompress();

// Role of zlib.createDeflate
const deflate = zlib.createDeflate();

// Role of zlib.createDeflateRaw
const deflateRaw = zlib.createDeflateRaw();

// Role of zlib.createGzip
const gzip = zlib.createGzip();

// Role of zlib.createGunzip
const gunzip = zlib.createGunzip();

// Role of zlib.createInflate
const inflate = zlib.createInflate();

// Role of zlib.createInflateRaw
const inflateRaw = zlib.createInflateRaw();

// Role of zlib.createUnzip
const unzip = zlib.createUnzip();

// Role of zlib.deflate
const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('input.txt.gz');
input.pipe(zlib.createDeflate()).pipe(output);

// Role of zlib.deflateSync
const buffer = Buffer.from('hello world');
const compressed = zlib.deflateSync(buffer);

// Role of zlib.gzip
const inputGzip = fs.createReadStream('input.txt');
const outputGzip = fs.createWriteStream('input.txt.gz');
inputGzip.pipe(zlib.createGzip()).pipe(outputGzip);

// Role of zlib.gzipSync
const bufferGzip = Buffer.from('hello world');
const compressedGzip = zlib.gzipSync(bufferGzip);

// Role of zlib.inflate
const inputInflate = fs.createReadStream('input.txt.gz');
const outputInflate = fs.createWriteStream('input.txt');
inputInflate.pipe(zlib.createInflate()).pipe(outputInflate);

// Role of zlib.inflateSync
const bufferInflate = fs.readFileSync('input.txt.gz');
const decompressed = zlib.inflateSync(bufferInflate);

// Role of zlib.unzip
const inputUnzip = fs.createReadStream('input.txt.gz');
const outputUnzip = fs.createWriteStream('input.txt');
inputUnzip.pipe(zlib.createUnzip()).pipe(outputUnzip);

// Role of zlib.unzipSync
const bufferUnzip = fs.readFileSync('input.txt.gz');
const decompressedUnzip = zlib.unzipSync(bufferUnzip);

