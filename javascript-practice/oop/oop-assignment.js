class Person {
  constructor(name = "Tom", age = 20, energy = 100){
    this.name = name
    this.age = age
    this.energy = energy
  }
  sleep(){
    energy += 100
    console.log("Energy has increased from sleeping, current energy is ", this.energy)
  }
  doSomethingFun(){
    this.energy -= 10
    console.log("Energy has decreased from doing something fun, current energy is ", this.energy)    
  }
}

class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10){
    super(name, age, energy)
    this.xp = xp
    this.hourlyWage = hourlyWage
  }
  gotoWork(){
    this.xp += 10
    console.log('XP has increased from working, current XP is: ', this.xp)
  }
}

const intern = new Worker('Bob', 21, 110)

intern.gotoWork()

console.log(intern)

var manager = new Worker("Alice", 30, 120, 100, 30)

manager.doSomethingFun()

console.log(manager)
