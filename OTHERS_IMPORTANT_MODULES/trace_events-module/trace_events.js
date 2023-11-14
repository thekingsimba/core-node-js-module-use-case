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

// =========================================================

// Tracing
// Create a new trace session with default options
const session = trace_events.createSession();

// Get an array of the enabled tracing categories
const enabledCategories = trace_events.getEnabledCategories();

// Session
const provider = {
  onTraceData() {
    // Handle trace data
  },
};

// Add a trace event listener to the session
session.addTraceListener(provider);

// Listen for the 'start' event on the trace session
session.on('start', () => {
  console.log('Trace session started');
});

// Start the trace session
session.start();

// Stop the trace session
session.stop();

// Constants
// List the available tracing categories
const tracingCategories = trace_events.Constants.categories;

// Array of enabled tracing category sections
const enabledCategorySections = trace_events.Constants.enabledCategorySections;

// TraceEvent
// Create a trace event object
const traceEvent = new trace_events.TraceEvent({
  name: 'EventName',
  cat: 'Category',
  args: {
    argument1: 'value1',
    argument2: 'value2',
  },
  ph: 'B',
});

// Output the trace event metadata
console.log(traceEvent.metadata);
