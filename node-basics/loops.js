var i = 0;
var countLimit = 8;

while (i < countLimit) {
    console.log('while: ' + i);
    i++;
}

for (i=0; i < countLimit; i++) {
    console.log('for: ' + i);
}

function countDownWhile (startingPoint, stoppingPoint) {
    while (startingPoint >= stoppingPoint) {
        console.log('countDownWhile: ' + startingPoint)
        startingPoint--;
    }
}

function countDownFor (startingPoint, stoppingPoint) {
    for (; startingPoint >= stoppingPoint; startingPoint--) {
        console.log('countDownFor: ' + startingPoint);
    }
}

countDownWhile(10, 0);
countDownFor(10, 0);