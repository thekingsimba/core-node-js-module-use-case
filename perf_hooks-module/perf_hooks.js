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
