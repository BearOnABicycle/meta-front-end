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
console.log(Object.keys(car2))

// object.keys will return the keys of an object
const car3 = {
  speed: 300,
  color: 'yellow'
}
console.log(Object.values(car3))

// Object.entries will return an array of both keys and values (an array of arrays)
const car4 = {
  speed: 200,
  color: 'magenta'
}
console.log(Object.entries(car4))

// With these built in methods you can loop over and objects keys and values

var clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn'
}

for(const key of Object.keys(clothingItem)) {
  console.log(key, ':', clothingItem[key])
}



 function testBracketDynamicAccess() {
  var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed"
  }else{
    dynamicKey = "color"
  }
  
  var drone = {
    speed: 15, 
    color: 'orange'
  }

  console.log(drone[dynamicKey])
}

testBracketDynamicAccess()
