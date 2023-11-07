// Example for module.exports
// Exports an object as the public interface of the module
module.exports = { 
  greet: function() {
    console.log('Hello!');
  }
};

// Example for module.id
// Returns the identifier for the current module
console.log(module.id);

// Example for module.filename
// Returns the fully resolved filename to the current module
console.log(module.filename);

// Example for module.loaded
// Indicates whether the module is fully loaded
console.log(module.loaded);

// Example for module.children
// Represents an array of the module objects required by this module
console.log(module.children);

// Example for module.paths
// Displays an array of the search paths for the module
console.log(module.paths);

// Example for module.require()
// Requires a module in a way that bypasses the require cache
const myModule = module.require('./myModule');

// Example for module.createRequireFromPath()
// Creates a custom require function that resolves modules relative to the provided path
const customRequire = module.createRequireFromPath('/path/to/your/module');

// Example for module.createRequire()
// Creates a custom require function that resolves modules relative to the current module
const customRequireCurrent = module.createRequire(__filename);

// Example for module.createNamespace()
// Creates a new module namespace object
const myNamespace = module.createNamespace();

