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
