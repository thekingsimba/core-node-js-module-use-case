const vm = require('vm');

//Running JavaScript code within a sandboxed context 
const context = {
  x: 10,
};

vm.createContext(context);

const result = vm.runInContext('x += 5; x', context);

console.log('Result:', result);
