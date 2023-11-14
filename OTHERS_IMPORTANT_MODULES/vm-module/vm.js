const vm = require('vm');

//Running JavaScript code within a sandboxed context 
// 1. vm.createContext([sandbox])
const context = vm.createContext({ 
  animal: 'cat', 
  count: 2 
});

// 2. vm.isContext(sandbox)
const isContext = vm.isContext(context);
console.log('Is context:', isContext);

// 3. vm.runInContext(code, context, [options])
const scriptInContext = 'count += 1; var newAnimal = animal + "s"; newAnimal;';
const resultContext = vm.runInContext(scriptInContext, context);
console.log('Result in context:', resultContext);

// 4. vm.runInNewContext(code, [sandbox], [options])
const scriptInNewContext = 'var fruit = "apple"; count *= 2; fruit;';
const resultNewContext = vm.runInNewContext(scriptInNewContext, { count: 5 });
console.log('Result in new context:', resultNewContext);

// 5. vm.runInThisContext(code, [options])
const scriptInThisContext = 'var color = "red"; count -= 2; color;';
const resultThisContext = vm.runInThisContext(scriptInThisContext);
console.log('Result in this context:', resultThisContext);

// 6. vm.compileFunction(code, params, [options])
const compiledFunction = vm.compileFunction('x * 2', ['x']);
const resultFunction = compiledFunction(4);
console.log('Result of compiled function:', resultFunction);
