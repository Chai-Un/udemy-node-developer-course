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
    accounts.forEach(function (account) {
        if (account.username === username) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

function deposit (account, amount) {
    account.balance += amount;
}

function withdraw (account, amount) {
    account.balance -= amount;
}

function getBalance (account) {
    return account.balance;
}

createAccount({
    balance: 12,
    username: 'Nick'
});

console.log(getAccount('Nick'));