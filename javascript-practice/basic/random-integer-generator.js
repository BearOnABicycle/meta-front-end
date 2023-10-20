//create a random integer using Math.random and Math.ceil
//
//generate a random decimal between 0 and 0.99 then multiply by ten to get an integer between 0 and 9.99
var randomInt = Math.random() * 10;

//round randomInt to the nearest integer
console.log(Math.ceil(randomInt))
