const dns = require('dns');

// making a lookup on a certain address 
dns.lookup('www.example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

// 2. dns.lookupService()
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname: ', hostname);
  console.log('Service: ', service);
});

// 3. dns.resolve()
dns.resolve('example.com', 'MX', (err, records) => {
  console.log('MX Records: ', records);
});

// 4. dns.resolve4()
dns.resolve4('example.com', (err, addresses) => {
  console.log('IPv4 Addresses: ', addresses);
});

// 5. dns.resolve6()
dns.resolve6('example.com', (err, addresses) => {
  console.log('IPv6 Addresses: ', addresses);
});

// 6. dns.resolveCname()
dns.resolveCname('example.com', (err, addresses) => {
  console.log('CNAME Records: ', addresses);
});

// 7. dns.resolveMx()
dns.resolveMx('example.com', (err, addresses) => {
  console.log('MX Records: ', addresses);
});

// 8. dns.resolveNs()
dns.resolveNs('example.com', (err, addresses) => {
  console.log('NS Records: ', addresses);
});

// 9. dns.resolvePtr()
dns.resolvePtr('8.8.8.8', (err, addresses) => {
  console.log('PTR Records: ', addresses);
});

// 10. dns.resolveSoa()
dns.resolveSoa('example.com', (err, address) => {
  console.log('SOA Record: ', address);
});

// 11. dns.resolveSrv()
dns.resolveSrv('_http._tcp.example.com', (err, addresses) => {
  console.log('SRV Records: ', addresses);
});

// 12. dns.resolveTxt()
dns.resolveTxt('example.com', (err, addresses) => {
  console.log('TXT Records: ', addresses);
});

// 13. dns.reverse()
dns.reverse('8.8.8.8', (err, hostnames) => {
  console.log('Hostnames: ', hostnames);
});

// Properties

// 1. dns.getServers()
console.log('Configured DNS servers: ', dns.getServers());

// 2. dns.setServers()
const customDnsServers = ['8.8.8.8', '8.8.4.4'];
dns.setServers(customDnsServers);
console.log('New DNS servers set.');

