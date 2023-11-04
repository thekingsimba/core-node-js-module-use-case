// Listen to process event 

process.on('exit', (code) => {
  console.log(`Process exited with code: ${code}`);
});

console.log(`This process is pid ${process.pid}`);
