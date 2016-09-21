var isValid = false;

function toggleBoolean(booleanVar) {
    if (typeof booleanVar === 'boolean') {
       return !booleanVar;
    } else {
        console.log('Warning, not a boolean!');
    }
}

var newBoolean = toggleBoolean('Nick');
console.log(newBoolean)