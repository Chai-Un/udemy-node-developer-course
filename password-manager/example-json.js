var person = {
	name: 'Nick',
	age: 33
};
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLENGE AREA');

var animal = '{"name": "Balou"}';

// convert to js object
var animalObject = JSON.parse(animal);

// add age prop
animalObject.age = 7;

// convert back to JSON
var animalJSON = JSON.stringify(animalObject);

// log out.
console.log(animalJSON);
console.log(typeof animalJSON);