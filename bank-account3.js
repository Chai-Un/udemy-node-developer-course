/**
 * Created by MazeFX on 21-9-2016.
 */

var accounts = [];


function createAccount (account) {
    accounts.push(account);
    return account;
}

function getAccount (username) {
    var matchedAccount;
    // change to for or while loop
    // 
    for (var i=0; i < accounts.length; i++) {
        if (accounts[i].username === username) {
            matchedAccount = accounts[i];
        }
    };
    return matchedAccount;
}

// only accept integer values
function deposit (account, amount) {
    if (typeof amount == 'number') {
        account.balance += amount;        
    } else {
        console.log('deposit failed, amount is not a number')
    }
}

// only accept integer values
function withdraw (account, amount) {
    if (typeof amount === 'number') {
        account.balance -= amount;
    } else {
        console.log('withdraw failed, amount is not a number')
    }
}

function getBalance (account) {
    return account.balance;
}

createAccount({
    balance: 12,
    username: 'Nick'
});

console.log(getAccount('Nick'));

// function create balanceGetter(account)
function createBalanceGetter(account) {
    return function () {
        return account.balance;
    }
}

var nick = getAccount('Nick')

deposit(nick, 120);
withdraw(nick, 'not a number');

var nick2 = getAccount('Nick');
var getNick2Balance = createBalanceGetter(nick2);

console.log(getNick2Balance());