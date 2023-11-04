const { createTracing } = require('trace_events');
const { writeFileSync } = require('fs');

const traceFile = 'trace.json';

// create file tracer
const tracing = createTracing({
  categories: ['node.async_hooks', 'node.gc'],
  traceFile,
});
tracing.enable();


writeFileSync('test.txt', 'Hello Node.js!', 'utf8');
