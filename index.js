let objectNumber = {value:10};
let valueNumber = 10;

function increaseByReference(anything) {
    anything.value++
}

function increaseByValue(anything) {
    anything++
}

console.log(objectNumber);
increaseByReference(objectNumber);
console.log("Increased by Reference " + Object.keys(objectNumber) + " " + objectNumber.value);

console.log(valueNumber);
increaseByValue(valueNumber);
console.log("Increased by Value " + Object.keys(valueNumber) + " " + valueNumber);
