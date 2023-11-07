
// The performance object is used to measure performance between two points in the code.
const { PerformanceObserver, performance } = require('perf_hooks');

// observe the performance
const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries()[0].duration);
  observer.disconnect();
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('A');
doSomeLongRunningProcess();
performance.mark('B');
performance.measure('A to B', 'A', 'B');

// =============================================================


// Example of using performance.now() to measure the time taken for a specific operation.
const start = performance.now();
for (let i = 0; i < 10000; i++) {
  // Some heavy operation
}
const end = performance.now();
console.log(`The operation took ${end - start} milliseconds.`);

// Creating a PerformanceObserver instance to observe specific performance events.

const obs1 = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});
obs1.observe({ entryTypes: ['measure'], buffered: true });

// The PerformanceEntry object represents a single performance measurement entry.

const obs2 = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`Name: ${entry.name}, Type: ${entry.entryType}, Duration: ${entry.duration}`);
  });
});
obs2.observe({ entryTypes: ['measure'], buffered: true });

// Using the performance.now() method to measure the time taken for a specific operation.


const start2 = performance.now();
for (let i = 0; i < 10000; i++) {
  // Some heavy operation
}
const end2 = performance.now();
console.log(`The operation took ${end2 - start2} milliseconds.`);
