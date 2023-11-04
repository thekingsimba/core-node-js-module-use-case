const dns = require('dns');
// making a lookup on a certain address 
dns.lookup('www.example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
