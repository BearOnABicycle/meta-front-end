class Animal { //base class for all animal objects
  constructor(color = 'yellow', energy = 100, sound = null) {
    this.color = color;
    this.energy = energy;
    this.sound = sound;
  }
  isActive() { //method that reduces energy level of "this" object
    if(this.energy > 0) {
      this.energy -= 20;
      console.log('Energy is decreasing, currently at:', this.energy)
    }else{
      this.sleep();
      }
  }
    sleep() {//method that increases energy of "this"
      this.energy += 20;
      console.log('Energy is increasing, currently at:', this.energy);
  }
    getColor() {//console logs color of "this"
      console.log(this.color);
  }  
  makeSound(){
    console.log(this.sound)
  }

}

class Cat extends Animal {
  constructor (sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy){
    super(color, energy, sound);
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
    this.sound = sound;
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
}

class HouseCat extends Cat {
  constructor(houseCatSound = 'meow', sound, canJumpHigh, canClimbTrees, color, energy){
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option){
    if (option){
      super.makeSound();
    }
  console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(tigerSound = 'Roar!', sound, canJumpHigh, canClimbTrees, color, energy){
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if (option){
      super.makeSound();
    }
      console.log(this.tigerSound);
    }
  }

class Parrot extends Bird {
  constructor(canTalk = true, sound, canFly, color, energy){
    super(sound, canFly, color, energy)
    this.canTalk = canTalk; 
  }
  makeSound(option){
    if (option){
      super.makeSound()
    }
    if (this.cantalk){
      console.log("I'm a talking parrot!")
    }
  }
}

var peaches = new Cat
peaches.makeSound();

var fiji = new Parrot(false)
var polly = new Parrot(true)

fiji.makeSound()
polly.makeSound(true)

polly.color
polly.energy
polly.isActive()

var penguin = new Bird("Shriek", false, "black and white", 200)
penguin

penguin.sound
penguin.canFly
penguin.color
penguin.energy
penguin.isActive();

var leo = new HouseCat()

leo.makeSound(false)
leo.makeSound(true)

var cuddles = new Tiger();
cuddles.makeSound(false)
cuddles.makeSound(true)

