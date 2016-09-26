console.log('Starting password manager');

var storage = require('node-persist');
storage.initSync();

// storage.setItemSync('account', [{
// 	username: 'nick',
// 	balance: '0'
// }]);
var account = storage.getItemSync('account');
console.log(account);

// account.push({
// 	username: 'Stefanie',
// 	balance: 10000
// })

// console.log(account);

// storage.setItemSync('account', account);
