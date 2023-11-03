const { exec } = require('child_process');

//Executing a child process (e.g., running a shell command)
exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log('Standard Output:', stdout);
  console.error('Standard Error:', stderr);
});
