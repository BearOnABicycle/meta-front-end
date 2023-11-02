// Template literals are and alternative way to work with strings they are surrounded by backsticks (``)
// ex: `Hello World`
//
// template strings are different for several reasons
//    1)they allow interpolation

let greet = "Hello"
let place = "world"
console.log(`${greet} ${place} !`)// Display both variables using template literals

//    2)template leterals can span multiple lines

console.log(`Hello
World
!`)

//    3)Template literals allow for expression evaluation

console.log(`${1 + 1 + 1 + 1} stars!`)

let noMultiLine = "No muti-line strings in ES5"
console.log("Did you know? " + noMultiLine)

let multiLine = `
  Using ES6
  backsticks, 
  multi-line 
  strings are 
  allowed.
`
console.log(multiLine)


