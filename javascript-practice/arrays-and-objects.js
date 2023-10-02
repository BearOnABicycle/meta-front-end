//Demonstrate use of objects and arrrays as well as push() and pop() 
//Create and empt array assigned to the vaiable "clothes"
var clothes = [];

//Add five of your favorite clothes using push()
clothes.push("hat", "jacket", "jeans", "t-shirt", "boots");
console.log(clothes);

//Remove the fifth clothing item using pop()
clothes.pop();
console.log(clothes);

//Add a new peice of clothing using push()
clothes.push("sneakers");
console.log(clothes);

//console log to show only the third item in clothes
console.log(clothes[2]);

//create an object assigned to variable favCar
var favCar = {};

//using the dot method add color and boolein convertable properties to favCar
favCar.color ="blue";
favCar.convertable = false;

console.log(favCar);
