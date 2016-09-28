console.log('Starting password manager');

var storage = require('node-persist');
storage.initSync();

//create
//   --name
//   --username
//   --password

// get
//   --name


// account.name Facebook
// account.username User12!
// account.password Password123! 

function createAccount(account) {
	var accounts = storage.getItemSync('accounts');

	// if accounts is undefined (use typeof)
	// 		set accounts = []
	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	// push on new account
	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	// return account
	return account;
}

function getAccount(accountName) {
	// var accounts use getitemSync(accounts)
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	if (typeof accounts !== 'undefined') {
		for (var i=0; i < accounts.length; i++) {
			if (accounts[i].name === accountName) {
				matchedAccount = accounts[i];
			}
		}
	}
	return matchedAccount;

	// iterate over array, return matching account, else undefined
}

// createAccount({
// 	name: 'Facebook',
// 	username: 'User12!',
// 	password: 'Password123!'
// })

console.log(getAccount('Facebook'));