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
  
//objects arrays are iterable

const colors = ['red', 'orange', 'yellow']

for (var color of colors) {
  console.log(color)
}

  
