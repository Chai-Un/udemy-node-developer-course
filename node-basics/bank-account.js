/**
 * Created by MazeFX on 21-9-2016.
 */

var account = {
    balance: 0
};

function deposit (account, amount) {
    account.balance += amount;
}

function withdraw (account, amount) {
    account.balance -= amount;
}

function getBalance (account) {
    return account.balance;
}

console.log('Your balance is now: ' + account.balance);

deposit(account, 100);
console.log('Your balance is now: ' + account.balance);

withdraw(account, 20);
console.log('Your balance is now: ' + account.balance);

console.log('Getting balance using function, balance = ' + getBalance(account));