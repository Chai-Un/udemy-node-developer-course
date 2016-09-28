console.log('Starting password manager');

var storage = require('node-persist');
storage.initSync();

//create
//   --name
//   --username
//   --password

// get
//   --name

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

	// iterate over array, return matching account, else undefined
	if (typeof accounts !== 'undefined') {
		for (var i=0; i < accounts.length; i++) {
			if (accounts[i].name === accountName) {
				matchedAccount = accounts[i];
			}
		}
	}
	return matchedAccount;
}
