var age = 33;

function localFunction() {
    var name = 'Nick';
    console.log(name);
    age = 0;
}


localFunction();
console.log('age = ' + age);