// For of loops can not work on an object dirrectly because objects are not iterable. 
// example of for of loop not itterating over an object:

// const car = {
//   speed: 100,
//   color: 'blue'
// }
//
// for (prop of car) {
//   console.log(prop)
// }
//
// Output: Uncaught TypeError: car is not iterable
  
// Arrays can be iterated

const colors = ['red', 'orange', 'yellow']

for (var color of colors) {
  console.log(color)
}

// There are built in methods that allow us to iterate arrays within objects
//
// Object.keys will receive an object as an array of it's parameters
const car2 = {
  speed: 200,
  color: 'red'
}
console.log (Object.keys(car2))

// Object.values will receive an array of an objects values
const car3 = {
  speed: 300,
  color: 'yellow'
}
console.log(Object.values(car3))


