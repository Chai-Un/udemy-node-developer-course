console.log('Starting password manager');

var crypto = require('crypto-js');
var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Create a password account', function(yargs) {
		yargs.option({
			name: {
				demand: true,
				alias: 'n',
				description: 'Name of the account goes here',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Account username goes here',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Account password goes here',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Provide the master password.',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'Get a password account', function(yargs) {
		yargs.option({
			name: {
				demand: true,
				alias: 'n',
				description: 'Name of the account goes here',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Provide the master password.',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

function getAccounts(masterPassword) {
	var encryptedAccount = storage.getItemSync('accounts');
	var accounts = [];

	if (typeof encryptedAccount !== 'undefined') {
		var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
	return accounts;
};

function saveAccounts(accounts, masterPassword) {
	var encryptedAccounts = crypto.AES.encrypt(
		JSON.stringify(accounts), masterPassword);

	storage.setItemSync('accounts', encryptedAccounts.toString());

	return accounts;
};

function createAccount(account, masterPassword) {
	var accounts = getAccounts(masterPassword);

	// push on new account
	accounts.push(account);
	saveAccounts(accounts, masterPassword);

	// return account
	return account;
}

function getAccount(accountName, masterPassword) {
	// var accounts use getitemSync(accounts)
	var accounts = getAccounts(masterPassword);
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

// add try catch for error

if (command === 'create') {
	try {
		createAccount({
			name: argv.name,
			username: argv.username,
			password: argv.password
		}, argv.masterPassword);
		console.log('Account ' + argv.name + ' created!');
	} catch (e) {
		console.log('Unable to create new account due to following error:');
		console.log(e.message);
	}
	
} else if (command === 'get') {
	try {
		var account = getAccount(argv.name, argv.masterPassword);
		if (typeof account !== 'undefined') {
			console.log(account);
		} else {
			console.log('No account with name: ' + argv.name + ' found!');
		}
	} catch (e) {
		console.log('Unable to get the account due to following error:');
		console.log(e.message);
	}	
}
