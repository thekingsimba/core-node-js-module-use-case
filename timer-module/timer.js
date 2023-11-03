const timeout = setTimeout(() => {  // create timer
  console.log('Timer expired');
}, 2000);

clearTimeout(timeout); // Cancel the timer
