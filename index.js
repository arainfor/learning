let objectType = {number:10};
let valueNumber = 10;

function increaseByReference(anything) {
    anything.value++
}

function increaseByValue(anything) {
    anything++
}

console.log(Object.name + ":" + Object.keys(objectType) + " " + objectType.number);
increaseByReference(objectType);
console.log("Increased by Reference " + Object.keys(objectType) + " " + objectType.number);

console.log("valueNumber" + ":" + valueNumber);
increaseByValue(valueNumber);
console.log("Increased by Value " + Object.keys(valueNumber) + " " + valueNumber);
