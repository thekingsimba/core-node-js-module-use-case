const inspector = require('inspector');

// 1. inspector.Session
// Creating a new debugging session
const session = new inspector.Session();

// 2. inspector.open(port, host, waitForDebugger)
// Opens the inspector on the specified port and host
inspector.open(9229, '127.0.0.1', true);

// 3. inspector.close()
// Closes the inspector
inspector.close();

// 4. inspector.url()
// Returns the WebSocket URL to connect to the inspector
const url = inspector.url();

// 5. inspector.Console
// Using the console to send messages
const consoleInstance = new inspector.Console();

// 6. inspector.consoleMessage(message)
// Sending a console message to the debugger
consoleInstance.log('This is a console message');

// 7. inspector.HeapProfiler
// Enabling heap profiling during the debugging session
const heapProfiler = new inspector.HeapProfiler();

// 8. inspector.heapProfiler.start()
// Starting heap profiling
heapProfiler.start();

// 9. inspector.heapProfiler.stop()
// Stopping heap profiling
heapProfiler.stop();

// 10. inspector.Profiler
// Enabling CPU profiling during the debugging session
const profiler = new inspector.Profiler();

// 11. inspector.profiler.start()
// Starting CPU profiling
profiler.start();

// 12. inspector.profiler.stop()
// Stopping CPU profiling
profiler.stop();
