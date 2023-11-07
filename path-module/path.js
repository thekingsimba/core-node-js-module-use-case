const path = require('path');

// Joining path segments together
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log(fullPath);

//Resolving a sequence of paths into an absolute path
const absolutePath = path.resolve('folder', 'file.txt');
console.log(absolutePath);

// Returns the last portion of a path, similar to the basename of a filesystem path.
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));

// Platform-specific path delimiter, ; or :.
console.log(path.delimiter);

// Returns the directory name of a path.
console.log(path.dirname('/foo/bar/baz/asdf/quux'));

// Returns the extension of the path.
console.log(path.extname('index.html'));

// Returns a path string from an object, the opposite of path.parse.
console.log(path.format({ dir: 'C:\\path\\dir', base: 'file.txt' }));

// Determines whether the path is an absolute path.
console.log(path.isAbsolute('/foo/bar'));

// Joins path segments together, resolving the paths if needed.
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

// Normalizes the given path, resolving '..' and '.' segments.
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));

// Returns an object from a path string, the opposite of path.format.
console.log(path.parse('/home/user/dir/file.txt'));

// Object providing methods specific to POSIX.
console.log(path.posix);

// Resolves the relative path from 'from' to 'to'.
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

// Resolves an absolute path.
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

// Platform-specific path segment separator.
console.log(path.sep);

// Returns the namespace-prefixed version of the path.
console.log(path.toNamespacedPath('C:\\temp'));

// Object providing methods specific to Windows.
console.log(path.win32);
