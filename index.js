// Constructior Function
function Circle(raidius) {
    this.raidius = raidius;
    this.draw = function() {
        console.log("draw " + raidius);
    }
}

const another = new Circle(1);
another.draw();
console.log("radius " + another.raidius);

let objectNumber = {value:10};
let valueNumber = 10;

function increaseByReference(anthing) {
    anthing.value++
}

function increaseByValue(anthing) {
    anthing++
}
console.log(objectNumber);
increaseByReference(objectNumber);
console.log("Increased by Reference " + Object.keys(objectNumber) + " " + objectNumber.value);

console.log(valueNumber);
console.log(Object.name);
increaseByValue(valueNumber);
console.log("Increased by Value " + Object.keys(valueNumber) + " " + valueNumber);