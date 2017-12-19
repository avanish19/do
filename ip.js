const internalIp = require('internal-ip');
const MacAddress = require('get-mac-address');
 var ip;
internalIp.v6().then(ip => {
    console.log(ip);
    //=> 'fe80::1'
});
 
internalIp.v4().then(ip => {
    console.log(ip);
    //=> '10.0.0.79'
});
 
console.log(internalIp.v6.sync())
//=> 'fe80::1'
 
console.log(internalIp.v4.sync())
//=> '10.0.0.79'
console.log(MacAddress);