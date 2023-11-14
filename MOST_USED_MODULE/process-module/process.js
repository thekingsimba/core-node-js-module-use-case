// Listen to process event 

// process.argv: Accesses command-line arguments
console.log('Arguments:', process.argv);

// process.env: Accesses environment variables
console.log('Environment:', process.env);

// process.nextTick(): Defers the execution of a function until the next pass around the event loop
process.nextTick(() => {
  console.log('Next tick executed');
});

// process.stdout: Writes to the standard output
process.stdout.write('Standard output\n');

// process.stderr: Writes to the standard error
process.stderr.write('Standard error\n');

// process.stdin: Reads from standard input
process.stdin.on('data', (data) => {
  console.log(`Input received: ${data}`);
});

// process.on(): Registers event handlers
process.on('exit', (code) => {
  console.log(`Exiting with code: ${code}`);
});

// process.cwd(): Returns the current working directory
console.log('Current working directory:', process.cwd());

// process.exit(): Exits the current process
// process.exit(0);

// process.memoryUsage(): Returns memory usage information
console.log('Memory usage:', process.memoryUsage());

// process.pid: Returns the process ID
console.log('Process ID:', process.pid);

// process.platform: Returns the platform
console.log('Platform:', process.platform);

// process.title: Gets or sets the process title
console.log('Current process title:', process.title);

// process.uptime(): Returns the uptime of the process
console.log('Process uptime:', process.uptime());

// process.version: Returns the Node.js version
console.log('Node.js version:', process.version);
