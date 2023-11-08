//You can join arraus and objects using the rest operator
// You can use the spread operator to add ne members to arrays, convert a string to an array, copy an array or object into 
// a separate object

//joining arrays:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitAndBerries = [...fruits, ...berries]

console.log(fruitAndBerries)

//joining objects:
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}

console.log(flyingCar)

//Spread oporator to add members to arrays:
let veggies = ['onions', 'carrot']
veggies = [...veggies, 'corn', 'collards']

console.log(veggies)

//Convert a string to an array, oject and spread string using spread
const greeting = 'Hello!'
const arrayOfCharacters = [...greeting]
const objectOfCharacters = {...greeting}

console.log(arrayOfCharacters)
console.log(objectOfCharacters)
console.log(greeting)

//Copy an object or array into a separate one
const car1 = {
  speed: 200,
  color: 'blue'
}
const car2 = {...car1,
  transmission: 'standard'
}

console.log(car1, car2)

//
