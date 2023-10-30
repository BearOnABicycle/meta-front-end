// destructuring an array
const vehicles = ['mustang', 'f-150', 'expedition']

// Old Way
const car = vehicles[0]
const truck = vehicles[1]
const suv = vehicles[2]

// New Way
const [car2, truck2, suv2] = vehicles

const [car3, , suv3] = vehicles

// The order they are declared is import
console.log(car, car2, car3, truck, truck2, suv, suv2, suv3)

// Destructing when a function returns an array
function calculate(a, b) {
  const add = a + b
  const subtract = a - b
  const multiply = a * b
  const divide = a / b

  return [add, subtract, multiply, divide]
}

const [add, subtract, multiply, divide] = calculate(4, 7)
console.log(add)

// destructoring an object
 
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA',
}

}

// old way
function myVehicle(veh) {
  const message = 'My ' + veh.type + ' is a ' + veh.brand + ' ' + veh.model + '.';
  return message
}

console.log(myVehicle(vehicleOne))

// New Way

function myVehicleTwo({type, color, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + model + '.';
  return message
}

console.log(myVehicleTwo(vehicleOne))

// You can even destructure deeply nested objects
myVehicleThree(vehicleOne)

function myVehicleThree({ model, registration: { state }}) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
  return message
}

console.log(myVehicleThree(vehicleOne))


