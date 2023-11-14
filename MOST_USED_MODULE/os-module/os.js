const os = require('os');

// Getting information about the operating system

// 1. os.EOL
console.log('End of line marker:', JSON.stringify(os.EOL));

// 2. os.arch()
console.log('Architecture:', os.arch());

// 3. os.constants
console.log('OS constants:', os.constants);

// 4. os.cpus()
console.log('CPU Information:', os.cpus());

// 5. os.endianness()
console.log('Endianness:', os.endianness());

// 6. os.freemem()
console.log('Free memory:', os.freemem(), 'bytes');

// 7. os.homedir()
console.log('Home directory:', os.homedir());

// 8. os.hostname()
console.log('Hostname:', os.hostname());

// 9. os.loadavg()
console.log('Load averages:', os.loadavg());

// 10. os.networkInterfaces()
console.log('Network Interfaces:', os.networkInterfaces());

// 11. os.platform()
console.log('Platform:', os.platform());

// 12. os.release()
console.log('Release:', os.release());

// 13. os.tmpdir()
console.log('Temporary directory:', os.tmpdir());

// 14. os.totalmem()
console.log('Total memory:', os.totalmem(), 'bytes');

// 15. os.type()
console.log('Operating system type:', os.type());

// 16. os.uptime()
console.log('System uptime:', os.uptime(), 'seconds');

// 17. os.userInfo([options])
console.log('User information:', os.userInfo());
