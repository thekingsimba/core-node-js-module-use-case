const inspector = require('inspector');

//opening an interceptor on a certain address 
inspector.open(9229, '0.0.0.0', true);
