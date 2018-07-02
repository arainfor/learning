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

let number = {value:10};

function increase(anthing) {
    anthing++
}
increase(number);
console.log(Object.keys(number) + " " + number.value);