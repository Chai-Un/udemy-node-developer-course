var name = 'Nick';

name = undefined;

console.log(name);

function doesNothing (age) {
    console.log(age);
}

console.log(doesNothing());

if (typeof x === 'undefined') {
    console.log('X is undefined');
}

function greetUser (name) {
    if (typeof name === 'undefined') {
        console.log('Hello world!');
    } else {
        console.log('Hello ' + name + '!');
    }
}

greetUser('Andrew');
greetUser();