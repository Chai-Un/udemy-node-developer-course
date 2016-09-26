// createAdder(baseNumber)
function createAdder(baseNumber) {
	function adder (numberToAdd) {
		return baseNumber + numberToAdd;
	}
	return adder;
}


var addTen = createAdder(10);
var addTwo = createAdder(2);
console.log(addTen(2));
console.log(addTen(0));
console.log(addTwo(3));

function greetMaker (name) {
	function greet () {
		console.log('Hello ' + name + '!');
	}
	return greet;
}

var greetAndrew = greetMaker('Nick');
var greetWorld = greetMaker('World');

greetAndrew();
greetWorld();