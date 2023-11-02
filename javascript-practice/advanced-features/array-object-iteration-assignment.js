// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (var dairys of dairy) {
        console.log(dairys)
    }
}

logDairy()

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
function birdCan() {
    for (var properties of bird.keys())
        console.log(properties)
}

// Task 3


