const { exec, execFile, spawn, fork } = require('child_process');

// Objects
const child_process = require('child_process');
const ChildProcess = require('child_process').ChildProcess;
// The child_process module in Node.js allows you to spawn child processes and execute commands in a subshell. 

// Methods


// 1. exec()
// Launches a command in a shell and buffers the output.
exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});


// 2. execFile()
// Similar to exec() but it does not spawn a shell.
execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    console.error(`execFile error: ${error}`);
    return;
  }
  console.log(`Node version: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// 3. spawn()
// Launches a new process with the given command.
const ls = spawn('ls', ['-l']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

// 4. fork()
// A special case of the spawn() method specifically for spawning Node.js processes.
const child = fork('child.js');
child.on('message', (message) => {
  console.log('Message from child:', message);
});
child.send({ hello: 'world' });

// Properties

// 1. stdin
// A writable stream to the child process's stdin.
const { stdin } = require('child_process').spawn('wc');
process.stdin.pipe(stdin);

// 2. stdout
// A readable stream containing the output of the child process's stdout.
const { stdout } = require('child_process').spawn('ls');
stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// 3. stderr
// A readable stream containing the output of the child process's stderr.
const { stderr } = require('child_process').spawn('ls', ['non_existent_file']);
stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// 4. stdio
// An array representing the child process's stdio configuration.
const { stdio } = require('child_process').spawn('ls');
console.log(stdio);

