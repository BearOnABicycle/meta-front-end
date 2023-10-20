//Create and object named car and add properties "color, mileage" and the methods "turnTheKey and lightOn"
var car = {
  convertable: false
};

car.color = "red";
car.mileage = 98765;

car.turnTheKey = function(){
  console.log("The engine is now running")
}

car.lightsOn = function(){
  console.log("The ligths are now on")
}

//test the car object and it's methods
console.log(car);
car.turnTheKey();
car.lightsOn();
