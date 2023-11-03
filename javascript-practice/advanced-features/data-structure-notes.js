/*Data structures are ways that you can store information in a program.
 Javascript has several data structues available. These are Variables, Objects, Arrays, Maps, and Sets.*/

//Variable exampels
a = 1
var b = 2 // Outdated since 2015, can be updated and re-declared, is global or function scope
let c = 3 // Only used if const can not be used, is block scoped, can not be re-declared, can be reassigned, not initialized when hoisted
const d = 4 // Can not be reassigned, is block scoped, not initialized when hoisted. Const Object properties can be updated. 
console.log(`These are variables ${a} ${b} ${c} ${d}`)

//Arrays
//Are lists of data stored together, indexed starting at [0]
//Loops are commonly used it iterate over arrays
let array = ['a', 'b', 'c', 'd']
console.log(array)

//Objects
//Uniterable, unordered, collection of key-va:lue pairs, used in OOP programming
const object = {
  name: 'name',
  age: 'age',
  gender: 'gender'
}
console.log(object)
//!refference advanced-features/array-object-iteration-assaignment for examples of working with objects!

//Maps
//Iterable and consisits of key-value pairs, any value can be used as a key



//Sets
//Each item must be unique, adding a non unique item will result in the code not being run
